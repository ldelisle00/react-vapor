(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1384:function(n,r,t){"use strict";t.r(r),r.default="import * as moment from 'moment';\r\nimport {DATES_SEPARATOR} from '../../../utils/DateUtils';\r\nimport {CalendarSelectionRuleType, ICalendarSelectionRule} from '../../calendar/Calendar';\r\nimport {DatePickerColors} from '../DatePicker';\r\nimport {IDatesSelectionBox} from '../DatePickerBox';\r\nimport {DatePickerDateRange} from '../DatePickerConstants';\r\n\r\nexport const SELECTION_BOXES: IDatesSelectionBox[] = [\r\n    {\r\n        title: 'Date range',\r\n        quickOptions: [\r\n            {\r\n                label: 'Last 10 seconds',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(10, 'seconds')\r\n                        .toDate()\r\n                        .toString() +\r\n                    DATES_SEPARATOR +\r\n                    new Date().toString(),\r\n            },\r\n            {\r\n                label: 'Last minute',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(1, 'minute')\r\n                        .toDate()\r\n                        .toString() +\r\n                    DATES_SEPARATOR +\r\n                    new Date().toString(),\r\n            },\r\n            {\r\n                label: 'Last 5 minutes',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(5, 'minutes')\r\n                        .toDate()\r\n                        .toString() +\r\n                    DATES_SEPARATOR +\r\n                    new Date().toString(),\r\n            },\r\n            {\r\n                label: 'Last 30 minutes',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(30, 'minutes')\r\n                        .toDate()\r\n                        .toString() +\r\n                    DATES_SEPARATOR +\r\n                    new Date().toString(),\r\n            },\r\n            {\r\n                label: 'Last hour',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(1, 'hour')\r\n                        .toDate()\r\n                        .toString() +\r\n                    DATES_SEPARATOR +\r\n                    new Date().toString(),\r\n            },\r\n            {\r\n                label: 'Last day',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(1, 'day')\r\n                        .toDate()\r\n                        .toString() +\r\n                    DATES_SEPARATOR +\r\n                    new Date().toString(),\r\n            },\r\n        ],\r\n        isRange: true,\r\n        withTime: true,\r\n        hasSetToNowButton: true,\r\n        color: DatePickerColors.blue,\r\n    },\r\n];\r\n\r\nconst defaultQuickOptions = [\r\n    {\r\n        label: 'Last day',\r\n        value: () =>\r\n            moment()\r\n                .subtract(1, 'day')\r\n                .toDate()\r\n                .toString() +\r\n            DATES_SEPARATOR +\r\n            new Date().toString(),\r\n    },\r\n    {\r\n        label: 'Last week',\r\n        value: () =>\r\n            moment()\r\n                .subtract(1, 'week')\r\n                .toDate()\r\n                .toString() +\r\n            DATES_SEPARATOR +\r\n            new Date().toString(),\r\n    },\r\n    {\r\n        label: 'Last month',\r\n        value: () =>\r\n            moment()\r\n                .subtract(1, 'month')\r\n                .toDate()\r\n                .toString() +\r\n            DATES_SEPARATOR +\r\n            new Date().toString(),\r\n    },\r\n    {\r\n        label: 'Last year',\r\n        value: () =>\r\n            moment()\r\n                .subtract(1, 'year')\r\n                .toDate()\r\n                .toString() +\r\n            DATES_SEPARATOR +\r\n            new Date().toString(),\r\n    },\r\n];\r\n\r\nexport const SELECTION_BOXES_LONG: IDatesSelectionBox[] = [\r\n    {\r\n        title: 'Date range',\r\n        quickOptions: defaultQuickOptions,\r\n        isRange: true,\r\n        withTime: true,\r\n        hasSetToNowButton: true,\r\n        color: DatePickerColors.blue,\r\n    },\r\n];\r\n\r\nexport const SELECTION_BOXES_LONG_WITHOUT_TIME: IDatesSelectionBox[] = [\r\n    {\r\n        title: 'Date range',\r\n        quickOptions: defaultQuickOptions,\r\n        isRange: true,\r\n        withTime: false,\r\n        hasSetToNowButton: true,\r\n        color: DatePickerColors.blue,\r\n    },\r\n];\r\n\r\nexport const SELECTION_BOXES_WITHOUT_TIME_AND_NOW: IDatesSelectionBox[] = [\r\n    {\r\n        title: 'Date range',\r\n        quickOptions: defaultQuickOptions,\r\n        isRange: true,\r\n        withTime: false,\r\n        hasSetToNowButton: false,\r\n        color: DatePickerColors.blue,\r\n    },\r\n];\r\n\r\nexport const FOUR_SELECTION_BOXES: IDatesSelectionBox[] = [\r\n    {\r\n        title: 'Date range',\r\n        quickOptions: [\r\n            {\r\n                label: 'Last 5 minutes',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(5, 'minutes')\r\n                        .toDate()\r\n                        .toString() +\r\n                    DATES_SEPARATOR +\r\n                    new Date().toString(),\r\n            },\r\n            {\r\n                label: 'Last 30 minutes',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(30, 'minutes')\r\n                        .toDate()\r\n                        .toString() +\r\n                    DATES_SEPARATOR +\r\n                    new Date().toString(),\r\n            },\r\n            {\r\n                label: 'Last hour',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(1, 'hour')\r\n                        .toDate()\r\n                        .toString() +\r\n                    DATES_SEPARATOR +\r\n                    new Date().toString(),\r\n            },\r\n            {\r\n                label: 'Last day',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(1, 'day')\r\n                        .toDate()\r\n                        .toString() +\r\n                    DATES_SEPARATOR +\r\n                    new Date().toString(),\r\n            },\r\n        ],\r\n        isRange: true,\r\n        withTime: true,\r\n        hasSetToNowButton: true,\r\n        color: DatePickerColors.blue,\r\n    },\r\n];\r\n\r\nexport const CALENDAR_SELECTION_RULES: ICalendarSelectionRule[] = [\r\n    {\r\n        test: (date: Date) =>\r\n            date >=\r\n            moment()\r\n                .startOf('day')\r\n                .toDate(), // You cannot select a date in the past\r\n        isFor: CalendarSelectionRuleType.all,\r\n    },\r\n    {\r\n        test: (date: Date) => date.getDay() !== 6, // You cannot start your selection on a Saturday\r\n        isFor: CalendarSelectionRuleType.lower,\r\n    },\r\n    {\r\n        test: (date: Date) => date.getDay() !== 0, // You cannot end your selection on a Sunday\r\n        isFor: CalendarSelectionRuleType.upper,\r\n    },\r\n    {\r\n        test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') >= 0, // The end of your selection cannot be before the start of your selection\r\n        isFor: CalendarSelectionRuleType.range,\r\n    },\r\n    {\r\n        test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') <= 7, // You cannot select more than 7 days at a time\r\n        isFor: CalendarSelectionRuleType.range,\r\n    },\r\n];\r\n\r\nexport const SELECTION_BOX: IDatesSelectionBox[] = [\r\n    {\r\n        title: 'Select date',\r\n        quickOptions: [\r\n            {\r\n                label: 'A year ago',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(1, 'year')\r\n                        .toDate()\r\n                        .toString(),\r\n            },\r\n            {\r\n                label: 'A month ago',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(1, 'month')\r\n                        .toDate()\r\n                        .toString(),\r\n            },\r\n            {\r\n                label: 'A week ago',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(1, 'week')\r\n                        .toDate()\r\n                        .toString(),\r\n            },\r\n            {\r\n                label: 'Yesterday',\r\n                value: () =>\r\n                    moment()\r\n                        .subtract(1, 'day')\r\n                        .toDate()\r\n                        .toString(),\r\n            },\r\n        ],\r\n        isRange: false,\r\n        withTime: false,\r\n        hasSetToNowButton: true,\r\n        color: DatePickerColors.blue,\r\n    },\r\n];\r\n\r\nexport const CALENDAR_SELECTION_RULES_SINGLE_DATE: ICalendarSelectionRule[] = [\r\n    {\r\n        test: (date: Date) => date.getFullYear() > 1700 || date.getFullYear() < 4000, // You cannot select a date before year 1700 and over 4000\r\n        isFor: CalendarSelectionRuleType.all,\r\n    },\r\n];\r\n\r\nexport const DATE_RANGE_EXAMPLE: DatePickerDateRange = [\r\n    moment().toDate(),\r\n    moment()\r\n        .add(3, 'day')\r\n        .toDate(),\r\n];\r\n"}}]);
//# sourceMappingURL=289.bundle.js.map