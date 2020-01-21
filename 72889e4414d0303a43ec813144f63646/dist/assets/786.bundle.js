(window.webpackJsonp=window.webpackJsonp||[]).push([[786],{1875:function(n,t,a){"use strict";a.r(t),t.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\n\r\nexport const TableWithPaginationActionsType = {\r\n    add: 'ADD_TABLE_PAGINATION',\r\n    remove: 'REMOVE_TABLE_PAGINATION',\r\n    setCount: 'SET_COUNT_TABLE_PAGINATION',\r\n};\r\n\r\nexport interface ITableWithPaginationBasePayload {\r\n    id: string;\r\n}\r\n\r\nconst add = (id: string): IReduxAction<ITableWithPaginationBasePayload> => ({\r\n    type: TableWithPaginationActionsType.add,\r\n    payload: {id},\r\n});\r\n\r\nconst remove = (id: string): IReduxAction<ITableWithPaginationBasePayload> => ({\r\n    type: TableWithPaginationActionsType.remove,\r\n    payload: {id},\r\n});\r\n\r\nexport interface ITableWithPaginationSetCountPayload extends ITableWithPaginationBasePayload {\r\n    count: number;\r\n}\r\n\r\nconst setCount = (id: string, count: number): IReduxAction<ITableWithPaginationSetCountPayload> => ({\r\n    type: TableWithPaginationActionsType.setCount,\r\n    payload: {id, count},\r\n});\r\n\r\nexport const TableWithPaginationActions = {\r\n    add,\r\n    remove,\r\n    setCount,\r\n};\r\n"}}]);
//# sourceMappingURL=786.bundle.js.map