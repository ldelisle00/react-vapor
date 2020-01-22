(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1314:function(n,o,e){"use strict";e.r(o),o.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport interface ICheckboxActionPayload {\r\n    id: string;\r\n    checked?: boolean;\r\n    disabled?: boolean;\r\n}\r\n\r\nexport const CheckboxActions = {\r\n    toggle: 'TOGGLE_CHECKBOX',\r\n    add: 'ADD_CHECKBOX',\r\n    remove: 'REMOVE_CHECKBOX',\r\n};\r\n\r\nexport const toggleCheckbox = (id: string, checked?: boolean): IReduxAction<ICheckboxActionPayload> => ({\r\n    type: CheckboxActions.toggle,\r\n    payload: {\r\n        id,\r\n        checked,\r\n    },\r\n});\r\n\r\nexport const addCheckbox = (id: string, checked: boolean): IReduxAction<ICheckboxActionPayload> => ({\r\n    type: CheckboxActions.add,\r\n    payload: {\r\n        id,\r\n        checked,\r\n    },\r\n});\r\n\r\nexport const removeCheckbox = (id: string): IReduxAction<ICheckboxActionPayload> => ({\r\n    type: CheckboxActions.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const CheckboxReduxActions = {\r\n    toggleCheckbox,\r\n    addCheckbox,\r\n    removeCheckbox,\r\n};\r\n"}}]);
//# sourceMappingURL=215.bundle.js.map