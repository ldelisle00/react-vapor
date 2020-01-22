(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1564:function(n,t,r){"use strict";r.r(t),t.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IItemBoxProps} from '../itemBox/ItemBox';\r\n\r\nexport const ListBoxActions = {\r\n    add: 'ADD_LIST_BOX',\r\n    remove: 'REMOVE_LIST_BOX',\r\n    select: 'SELECT_ITEM_LIST_BOX',\r\n    unselect: 'UNSELECT_ITEM_LIST_BOX',\r\n    reorder: 'REORDER_ITEM_LIST_BOX',\r\n    setActive: 'SET_ACTIVE_ITEM_LIST_BOX',\r\n    clear: 'CLEAR_ITEM_LIST_BOX',\r\n};\r\n\r\nexport interface IListBoxPayload {\r\n    id: string;\r\n    multi?: boolean;\r\n    value?: string;\r\n    values?: string[];\r\n    items?: IItemBoxProps[];\r\n    diff?: number;\r\n    index?: number;\r\n}\r\n\r\nexport const addListBox = (id: string, items: IItemBoxProps[], multi = false): IReduxAction<IListBoxPayload> => ({\r\n    type: ListBoxActions.add,\r\n    payload: {id, items, multi},\r\n});\r\n\r\nexport const removeListBox = (id: string): IReduxAction<IListBoxPayload> => ({\r\n    type: ListBoxActions.remove,\r\n    payload: {id},\r\n});\r\n\r\nexport const selectListBoxOption = (\r\n    id: string,\r\n    multi: boolean,\r\n    value: string,\r\n    index?: number\r\n): IReduxAction<IListBoxPayload> => ({\r\n    type: ListBoxActions.select,\r\n    payload: {id, multi, value, index},\r\n});\r\n\r\nexport const unselectListBoxOption = (id: string, value: string): IReduxAction<IListBoxPayload> => ({\r\n    type: ListBoxActions.unselect,\r\n    payload: {id, value},\r\n});\r\n\r\nexport const reorderListBoxOption = (id: string, values: string[]): IReduxAction<IListBoxPayload> => ({\r\n    type: ListBoxActions.reorder,\r\n    payload: {id, values},\r\n});\r\n\r\nexport const setActiveListBoxOption = (id: string, diff: number): IReduxAction<IListBoxPayload> => ({\r\n    type: ListBoxActions.setActive,\r\n    payload: {id, diff},\r\n});\r\n\r\nexport const clearListBoxOption = (id: string): IReduxAction<IListBoxPayload> => ({\r\n    type: ListBoxActions.clear,\r\n    payload: {id},\r\n});\r\n\r\nexport const ListBoxReduxActions = {\r\n    addListBox,\r\n    removeListBox,\r\n    selectListBoxOption,\r\n    unselectListBoxOption,\r\n    reorderListBoxOption,\r\n    setActiveListBoxOption,\r\n    clearListBoxOption,\r\n};\r\n"}}]);
//# sourceMappingURL=470.bundle.js.map