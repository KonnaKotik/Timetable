
export default {
  promptLabels: {
    actionRemove: 'Вы уверены, что хотите удалить это событие?',
    actionExclude: 'Вы уверены, что хотите удалить в событие заметку ?',
    actionCancel: 'Вы уверены, что хотите отменить это событие?',
    actionUncancel: 'Вы уверены, что не хотите отменить это событие?',
    actionSetStart: 'Вы уверены,что хотите начать установку это событие в качестве первого?',
    actionSetEnd: 'Вы уверены, что хотите закончить установку это событие как последнее?',
    actionMove: 'Вы уверены, что хотите перенести это мероприятие?',
    actionInclude: 'Вы уверены, что хотите добавить какое-то событие?',
    move: 'Вы уверены, что хотите перенести это мероприятие?',
    toggleAllDay: 'Вы уверены, что хотите убрать у этого события данное свойство?',
    removeExistingTime: 'Вы уверены, что хотите удалить все события, происходящие в это время?'
  },
  placeholder: {
    noTitle: '(нет заголовка)'
  },
  patterns: {
    lastDay: (day) => 'Последний день месяца',
    lastDayOfMonth: (day) => 'Последний день ' + day.format('MMMM'),
    lastWeekday: (day) => 'Последний ' + day.format('dddd') + ' в ' + day.format('MMMM')
  },
  colors: [
    { text: 'Красный' },
    { text: 'Розовый' },
    { text: 'Фиолетовый' },
    { text: 'Темно-фиолетовый' },
    { text: "Индиго" },
    { text: 'Синий' },
    { text: 'Темно-синий' },
    { text: 'Светло-голубой' },
    { text: 'Голубой' },
    { text: 'Бирюзовый' },
    { text: 'Зеленый' },
    { text: 'Светло-зеленый' },
    { text: 'Лаймовый' },
    { text: 'Желтый' },
    { text: 'Янтарный' },
    { text: 'Оранжевый' },
    { text: 'Темно-оранжевый' },
    { text: 'Коричневый' },
    { text: 'Серо-голубой' },
    { text: 'Серый' },
    { text: 'Черный' }
  ],
  icons: [
    { text: 'Тревога' },
    { text: 'Звезда' },
    { text: 'Любовь' },
    { text: 'Действие' },
    { text: 'Назначение' },
    { text: 'Предупреждение' },
    { text: 'Деньги' },
    { text: 'Зарядка' },
    { text: 'Дом' },
    { text: 'Игра' },
    { text: 'Почта' },
    { text: 'Телефон' },
    { text: 'Диаграмма' },
    { text: 'Поездка' },
    { text: "Путешествие" }
  ],
  defaults: {
    dsDay: {
      formats: {
        month: 'MMM'
      }
    },
    dsCalendarApp: {
      types: [
        { label: 'День' },
        { label: 'Неделя' },
        { label: 'Месяц' },
        { label: 'Год' },
        { label: 'График' },
        { label: '4 дня' }
      ],
      formats: {
        today: 'dddd, MMMM D',
        xs: 'MMM'
      },
      labels: {
        next: (type) => type ? 'Следующий ' + type.label.toLowerCase() : 'Следующий',
        prev: (type) => type ? 'Предыдущий ' + type.label.toLowerCase() : 'Предыдущий',
        moveCancel: 'Отменить перемещение',
        moveSingleEvent: 'Переместить событие',
        moveOccurrence: 'Переместить задачу этого события',
        moveAll: 'Переместить все задачи этого события',
        moveDuplicate: 'Добавить задачу',
        promptConfirm: 'Да',
        promptCancel: 'Нет',
        today: 'СЕГОДНЯ'
      }
    },
    dsAgendaEvent: {
      formats: {
        firstLine: 'ddd',
        secondLine: 'MMM Do',
        start: 'dddd, MMMM D',
        time: 'h:mm a'
      },
      labels: {
        allDay: 'Весь день',
        options: 'Настройки',
        close: 'Закрыть',
        day: ['день', 'дня'],
        days: ['день', 'дней'],
        minute: ['минута', 'минут'],
        minutes: ['минута', 'минут'],
        hour: ['час', 'часа'],
        hours: ['часы', 'часов'],
        week: ['неделя', 'недели'],
        weeks: ['неделя', 'недели'],
        second: ['секунда', 'секунды'],
        seconds: ['секунда', 'секунды'],
        busy: 'Занят',
        free: 'Свободен'
      }
    },
    dsCalendarEventChip: {
      formats: {
        fullDay: 'ddd MMM Do YYYY',
        timed: 'ddd MMM Do YYYY'
      }
    },
    dsCalendarEventPopover: {
      formats: {
        start: 'dddd, MMMM D',
        time: 'h:mm a'
      },
      labels: {
        allDay: 'Весь день',
        options: 'Настройки',
        close: 'Закрыть',
        day: ['день', 'дня'],
        days: ['день', 'дней'],
        minute: ['минута', 'минут'],
        minutes: ['минута', 'минут'],
        hour: ['час', 'часа'],
        hours: ['часы', 'часов'],
        week: ['неделя', 'недели'],
        weeks: ['неделя', 'недели'],
        second: ['секунда', 'секунды'],
        seconds: ['секунда', 'секунды'],
        busy: 'Занят',
        free: 'Свободен'
      }
    },
    dsCalendarEventCreatePopover: {
      formats: {
        start: 'dddd, MMMM D',
        time: 'h:mm a'
      },
      labels: {
        title: 'Добавить заголовок',
        save: 'Сохранить',
        allDay: 'Весь день',
        options: 'Настройки',
        close: 'Закрыть',
        day: ['день', 'дня'],
        days: ['день', 'дней'],
        minute: ['минута', 'минут'],
        minutes: ['минута', 'минут'],
        hour: ['час', 'часа'],
        hours: ['часы', 'часов'],
        week: ['неделя', 'недели'],
        weeks: ['неделя', 'недели'],
        second: ['секунда', 'секунды'],
        seconds: ['секунда', 'секунды'],
        busy: 'Занят',
        free: 'Свободен',
        location: 'Добавить местоположение',
        description: ' Заметка к паре',
        calendar: 'Календарь',
      },
      busyOptions: [
        { text: 'Занят' },
        { text: 'Свободен' }
      ]
    },
    dsSchedule: {
      labels: {
        editCustom: 'Редактировать'
      }
    },
    dsEvent: {
      labels: {
        moreActions: 'Больше действий...',
        cancel: 'Отменить изменения события',
        save: 'Сохранить',
        title: 'Заголовок',
        exclusions: 'Эти события или промежутки времени, когда обычно происходящее событие было исключено из графика.События исключаются здесь, если вхождение события перемещено.',
        inclusions: 'Эти события или промежутки времени, когда события были добавлены вне обычно возникающего графика.События добавляются сюда, если вхождение события перемещено.',
        cancelled: 'Эти события или промежутки времени, когда события были отменены.',
        edit: 'Редактировать событие',
        add: 'Добавить событие',
        location: 'Добавить местоположение',
        description: 'Заметка к паре',
        calendar: 'Календарь',
        tabs: {
          details: 'Детали события',
          forecast: 'Прогноз',
          removed: 'Удалено',
          added: 'Добавлено',
          cancelled: 'Отменено'
        }
      },
      busyOptions: [
        { text: 'Занято' },
        { text: 'Свободно' }
      ]
    },
    dsScheduleActions: {
      labels: {
        remove: ' Удалить это событие',
        exclude: 'Удалить заметку',
        cancel: 'Отменить заметку',
        uncancel: 'Вернуть заметку',
        move: 'Переместить заметку',
        include: 'Добавить новую заметку',
        setStart: 'Поставить как первая заметка',
        setEnd: 'Поставить как последняя заметка',
        pickerOk: 'OK',
        pickerCancel: 'ОТМЕНА'
      }
    },
    dsScheduleForecast: {
      labels: {
        prefix: 'прогноз показывает предыдущий и следующий',
        suffix: 'события произошли в течение нескольких лет'
      }
    },
    dsScheduleFrequencyDay: {
      labels: {
        type: 'Дни'
      },
      options: [
        { text: "В любой день" },
        { text: 'В последующие дни...' },
        { text: 'Каждые _ дней, начиная с _' }
      ],
      types: [
        { text: "День месяца" },
        { text: 'Последний день месяца' },
        { text: "День года" }
      ]
    },
    dsScheduleFrequencyDayOfWeek: {
      weekdays: ["Воскресенье","Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      labels: {
        type: 'День недели'
      },
      options: [
        { text: "В любой день недели" },
        { text: 'В следующие дни недели...' },
        { text: 'Каждый _ будний день, начиная с _' },
        { text: 'Выходные дни' },
        { text: 'Будни' }
      ]
    },
    dsScheduleFrequencyMonth: {
      labels: {
        type: "Месяцы"
      },
      months: [
        "Январь",
        "Февраль",
        "Марш",
        "Апрель",
        "Мая",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ],
      options: [
        { text: 'Любой месяц' },
        { text: 'В последующие месяцы...' },
        { text: 'Каждые _ месяца/ев начиная с _' }
      ]
    },

    dsScheduleFrequencyWeek: {
      labels: {
        type: 'Недели'
      },
      options: [
        { text: 'Любая неделя' },
        { text: 'В последующие недели...' },
        { text: 'Каждые _ недели начиная с _' }
      ],
      types: [
        { text: 'Неделя месяца (первая неделя имеет четверг)' },
        { text: 'Недельный период месяца (начинается в первый день месяца)' },
        { text: 'Полная неделя месяца (0-я = предыдущая неделя, если таковая имеется)' },
        { text: 'На прошлой неделе продолжительность месяца (начинается на последний день месяца)' },
        { text: 'Последняя полная неделя месяца (0-я = следующая неделя, если таковая имеется)' },
        { text: 'Неделя года (первая неделя имеет четверг)' },
        { text: 'Недельный период года (начинается в первый день года)' },
        { text: 'Полная неделя года (0-я = предыдущая неделя, если таковая имеется)' },
        { text: 'Период последней недели года (начинается в последний день года)' },
        { text: 'Последняя полная неделя года (0-я = следующая неделя, если таковая имеется)' }
      ]
    },

    dsScheduleFrequencyYear: {
      labels: {
        type: 'Годы'
      },
      options: [
        { text: 'Любой год' },
        { text: 'В последующие годы...' },
        { text: 'Каждый _ год начиная с _' }
      ]
    },

    dsScheduleSpan: {
      labels: {
        startless: 'Начало',
        endless: 'Окончание'
      },
      formats: {
        start: 'MMMM Do, YYYY',
        end: 'MMMM Do, YYYY'
      }
    },

    dsScheduleTime: {
      labels: {
        remove: 'Удалить время',
        add: 'Добавить время'
      }
    },

    dsScheduleTimes: {
      labels: {
        all: 'Весь день',
        minute: 'минута',
        minutes: 'минут',
        hour: 'час',
        hours: 'часы',
        day: 'день',
        days: 'дня',
        week: 'неделя',
        weeks: 'недели',
        month: 'месяц',
        months: 'месяца',
        months2: 'месяцев',
        second: 'секунда',
        seconds: 'секунды'
      }
    },

    dsScheduleType: {
      formats: {
        date: 'LL'
      }
    },

    dsScheduleTypeCustomDialog: {
      labels: {
        save: 'Сохранить',
        cancel: 'Отмена'
      }
    },

    dsWeekDayHeader: {
      formats: {
        weekday: 'ddd'
      }
    },

    dsWeeksView: {
      weekdays: ['Вс','Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    },

    dsDaysView: {
      hours: [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
        '07:00', '08:00', '09:00', '10:00', '11:00',
        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
        '19:00', '20:00', '21:00', '22:00', '23:00'
      ]
    },

    dsDayPicker: {
      weekdays: ['Воскресение','Понедельние', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
      labels: {
        prevMonth: 'Предыдущий месяц',
        nextMonth: 'Следующий месяц'
      }
    }
  }
}
