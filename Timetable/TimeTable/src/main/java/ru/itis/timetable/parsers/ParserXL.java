package ru.itis.timetable.parsers;

import com.google.api.client.util.ArrayMap;
import com.google.gdata.util.common.base.StringUtil;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.itis.timetable.model.*;
import ru.itis.timetable.repository.TimeTableRepository;

import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class ParserXL {
  @Autowired
  private   TimeTableRepository timeTableRepository;


  /**
   * @param name
   * @return
   */
  private  Sheet getSheet(String name) {

    InputStream in = null;
    XSSFWorkbook wb = null;

    try {
      in = Thread.currentThread().getContextClassLoader().getResourceAsStream(name);
      wb = new XSSFWorkbook(in);
    } catch (IOException e) {
      e.printStackTrace();
    }

    return wb.getSheetAt(0);

  }

  public  List<TimeTable> parse(String name) {
    Map<Integer, String> groups = new ArrayMap<>();
    List<TimeTable> timeTables = new ArrayList<TimeTable>();
    Sheet sheet = getSheet(name);
    Iterator<Row> it = sheet.iterator();
    Days day = null;
    Time time = null;

    for (Row row : sheet) {
      //For each row, iterate through all the columns
      Iterator<Cell> cellIterator = row.cellIterator();
      outer:
      while (cellIterator.hasNext()) {
        Cell cell = cellIterator.next();
        String string = cell.getStringCellValue();
        String codeUn = "11-";
        for (int mergeIndex = 0; mergeIndex < sheet.getNumMergedRegions(); mergeIndex++) {
          // получаем группы
          if (string.contains(codeUn) && string.length() < 7) {
            groups.put(cell.getColumnIndex(), string);
          } else {
            if (Days.withDay(cell.toString()) != null)
              day = Days.withDay(cell.toString());

            Pattern pattern = Pattern.compile("[.].*.[-].*[.]");
            Matcher matcher = pattern.matcher(cell.toString());
            Boolean flag = false;
            while (matcher.find() && cell.toString().length() < 12) {
              flag = true;
//            System.out.println(day.getDay());
//            System.out.println(cell);
              time = Time.withTime(cell.getStringCellValue().replaceAll("[-].*", ""));
            }

            if (!flag && time != null) {
              CellRangeAddress region = sheet.getMergedRegion(mergeIndex); //Region of merged cells

              int colIndex = region.getFirstColumn(); //number of columns merged
              int rowNum = region.getFirstRow();      //number of rows merged
              //check first cell of the region
              if (rowNum == cell.getRowIndex() && colIndex == cell.getColumnIndex() && !sheet.getRow(rowNum).getCell(colIndex).getStringCellValue().equals(StringUtil.EMPTY_STRING)) {
                for (int k = colIndex; k <= region.getLastColumn(); k++) {
                  Teacher teacher = getTeacher(string);
                  string = string.replaceAll("  [А-я]*.[А-Я].[А-Я].*", "");
                  if (teacher != null) {
                    ElectiveCourse electiveCourse = getElectiveCourse(teacher, string);
                    TimeTable timeTable = getTimeTable(electiveCourse, day, groups.get(k), time, teacher);
                    teacher.setTimeTable(timeTable);
                    electiveCourse.setTimeTable(timeTable);
                    timeTables.add(timeTable);
                  }
                }
                continue outer;
              }
            }


          }
        }
        //the data in merge cells is always present on the first cell. All other cells(in merged region) are considered blank
        if (cell.getCellType() != Cell.CELL_TYPE_BLANK && day != null && time != null) {
          if (Time.withTime(string) != null)
            continue;
          String groupNum = groups.get(cell.getColumnIndex());
          if (groupNum != null) {
            Teacher teacher = getTeacher(string);
            string = string.replaceAll("  [А-я]*.[А-Я].[А-Я].*", "");
            if (teacher != null) {
              ElectiveCourse electiveCourse = getElectiveCourse(teacher, string);
              TimeTable timeTable = getTimeTable(electiveCourse, day, groups.get(cell.getColumnIndex()), time, teacher);
              teacher.setTimeTable(timeTable);
              electiveCourse.setTimeTable(timeTable);
              timeTables.add(timeTable);
            }
          }
          }
        }
      }
    return timeTables;

    }


  private  ElectiveCourse getElectiveCourse(Teacher teacher, String title) {
    return ElectiveCourse.builder()
      .teacher(teacher)
      .title(title)
      .build();
  }

  private  TimeTable getTimeTable(ElectiveCourse electiveCourse, Days days, String group, Time time, Teacher teacher) {
    return TimeTable.builder()
      .course(electiveCourse)
      .day(days)
      .group(group)
      .time(time)
      .teacher(teacher)
      .build();

  }

  private  Teacher getTeacher(String string) {
    Pattern pattern = Pattern.compile("[А-я]*.[А-Я].[А-Я].");
    Matcher matcher = pattern.matcher(string);
    if (matcher.find()) {
      return Teacher.builder().fio(matcher.group()).build();
    }
    return null;
  }

  private  void saveTimeTable(List<TimeTable> timeTables) {
    timeTables.forEach(timeTable -> timeTableRepository.save(timeTable));
  }

  public  void parseAndSave(String name) {
    List<TimeTable> timeTables = parse("timetable_2019-2020 2сем.xlsx");
    saveTimeTable(timeTables);
  }
}
