(window.webpackJsonp=window.webpackJsonp||[]).push([[831],{1930:function(t,e,r){"use strict";r.r(e),e.default="import * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {DatePickerSelectors} from '../../datePicker/DatePickerSelectors';\r\nimport {IFilterState} from '../../filterBox/FilterBoxReducers';\r\nimport {FlatSelectSelectors} from '../../flatSelect/FlatSelectSelectors';\r\nimport {IListBoxState} from '../../listBox/ListBoxReducers';\r\nimport {PaginationUtils} from '../../pagination/PaginationUtils';\r\nimport {ITableWithSortState} from '../reducers/TableWithSortReducers';\r\n\r\nexport interface ITableHOCPredicateValue {\r\n    id: string;\r\n    value: string;\r\n}\r\n\r\nexport interface ITableHOCCompositeState {\r\n    sortKey?: string;\r\n    sortAscending?: boolean;\r\n    perPage?: number;\r\n    pageNb?: number;\r\n    filter?: string;\r\n    predicates?: ITableHOCPredicateValue[];\r\n    dateLimits?: [Date, Date?];\r\n}\r\n\r\nconst PREDICATE_SEPARATOR = '--';\r\n\r\nconst getCompositeState = (id: string, state: IReactVaporState): ITableHOCCompositeState => {\r\n    const tableSort: ITableWithSortState = _.find(\r\n        state.tableHOCHeader,\r\n        (v: ITableWithSortState) => v.tableId === id && _.isBoolean(v.isAsc)\r\n    );\r\n\r\n    const perPage =\r\n        parseInt(\r\n            FlatSelectSelectors.getSelectedOptionId(state, {\r\n                id: PaginationUtils.getPaginationPerPageId(id),\r\n            }),\r\n            10\r\n        ) || undefined;\r\n\r\n    const filter: IFilterState = _.findWhere(state.filters, {id});\r\n    const predicates = getTablePredicates(id, state);\r\n\r\n    return {\r\n        // predicates\r\n        predicates,\r\n\r\n        // sort\r\n        sortKey: tableSort && tableSort.id,\r\n        sortAscending: (tableSort && tableSort.isAsc) || null,\r\n\r\n        // pagination\r\n        perPage,\r\n        pageNb: _.findWhere(state.paginationComposite, {id: getPaginationId(id)})?.pageNb,\r\n\r\n        // filter\r\n        filter: filter && filter.filterText,\r\n\r\n        // date\r\n        dateLimits: DatePickerSelectors.getDatePickerLimits(state, {id}),\r\n    };\r\n};\r\n\r\n/** e.g. tableId--componentId => tableId */\r\nconst getTableIdFromPredicateId = (predicateId: string) => predicateId.split(PREDICATE_SEPARATOR)[0];\r\n\r\n/** e.g. tableId--componentId => componentId */\r\nconst getComponentIdFromPredicateId = (predicateId: string) => predicateId.split(PREDICATE_SEPARATOR)[1];\r\n\r\nconst getPredicateId = (tableId: string, componentId: string) => `${tableId}${PREDICATE_SEPARATOR}${componentId}`;\r\n\r\nconst getPredicateIds = (tableId: string, state: IReactVaporState): string[] =>\r\n    _.chain(state.listBoxes)\r\n        .filter(filterTablePredicate.bind(null, tableId))\r\n        .pluck('id')\r\n        .map(getComponentIdFromPredicateId)\r\n        .value();\r\n\r\nconst getPaginationId = (tableId: string) => `pagination-${tableId}`;\r\n\r\nconst getTablePredicates = (tableId: string, state: IReactVaporState): ITableHOCPredicateValue[] => {\r\n    return _.chain(state.listBoxes)\r\n        .filter(filterTablePredicate.bind(null, tableId))\r\n        .filter((list: IListBoxState) => list.selected && list.selected[0] !== '')\r\n        .map((list: IListBoxState) => ({id: getComponentIdFromPredicateId(list.id), value: list.selected[0]}))\r\n        .value();\r\n};\r\n\r\nconst getDatePickerId = (tableId: string) => `${tableId}-date-range`;\r\n\r\nexport const TableHOCUtils = {\r\n    getCompositeState,\r\n    getPredicateId,\r\n    getPredicateIds,\r\n    getPaginationId,\r\n    getTableIdFromPredicateId,\r\n    getDatePickerId,\r\n};\r\n\r\nfunction filterTablePredicate(tableId: string, {id}: IListBoxState): boolean {\r\n    return new RegExp(`^${tableId}(.+)`).test(id);\r\n}\r\n"}}]);
//# sourceMappingURL=831.bundle.js.map