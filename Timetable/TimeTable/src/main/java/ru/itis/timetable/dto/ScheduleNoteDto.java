package ru.itis.timetable.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ScheduleNoteDto {

    private Integer dayOfWeek;

    private Integer duration;

    private String dayOfMonth;

    private String month;

    private String durationUnit;

    private TimeDto times;
}
