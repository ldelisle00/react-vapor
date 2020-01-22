(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1320:function(e,r,o){"use strict";o.r(r),r.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {ICheckboxState} from './CheckboxReducers';\r\nimport {GroupableCheckboxActions, IGroupableCheckboxActionPayload} from './GroupableCheckboxActions';\r\nimport {\r\n    addChildCheckbox,\r\n    addParentCheckbox,\r\n    disabledAllCheckbox,\r\n    disabledChildCheckbox,\r\n    disabledParentCheckbox,\r\n    removeChildCheckbox,\r\n    removeParentCheckbox,\r\n    toggleChildCheckbox,\r\n    toggleParentCheckbox,\r\n} from './GroupableCheckboxReducersUtils';\r\n\r\nexport interface IGroupableCheckboxesState {\r\n    total: number;\r\n    nbChecked: number;\r\n    parentId?: string;\r\n    parent?: ICheckboxState;\r\n    checkboxes: ICheckboxState[];\r\n}\r\n\r\nexport const groupableCheckboxInitialState: IGroupableCheckboxesState = {total: 0, nbChecked: 0, checkboxes: []};\r\nexport const groupableCheckboxesInitialState: IGroupableCheckboxesState[] = [];\r\n\r\nexport const groupableCheckboxReducer = (\r\n    state: IGroupableCheckboxesState = groupableCheckboxInitialState,\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n): IGroupableCheckboxesState => {\r\n    switch (action.type) {\r\n        case GroupableCheckboxActions.addGroup:\r\n            return action.payload.isParent ? addParentCheckbox(state, action) : addChildCheckbox(state, action);\r\n\r\n        case GroupableCheckboxActions.toggleGroup:\r\n            if (state.parentId === action.payload.id || state.parentId === action.payload.parentId) {\r\n                return action.payload.isParent\r\n                    ? toggleParentCheckbox(state, action)\r\n                    : toggleChildCheckbox(state, action);\r\n            }\r\n        case GroupableCheckboxActions.disabledGroup:\r\n            if (state.parentId === action.payload.id || state.parentId === action.payload.parentId) {\r\n                return action.payload.isParent\r\n                    ? disabledParentCheckbox(state, action)\r\n                    : disabledChildCheckbox(state, action);\r\n            }\r\n        case GroupableCheckboxActions.disabledAllGroup:\r\n            if (state.parentId === action.payload.id || state.parentId === action.payload.parentId) {\r\n                return disabledAllCheckbox(state, action);\r\n            }\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const groupableCheckboxesReducer = (\r\n    state: IGroupableCheckboxesState[] = groupableCheckboxesInitialState,\r\n    action: IReduxAction<IGroupableCheckboxActionPayload>\r\n): IGroupableCheckboxesState[] => {\r\n    switch (action.type) {\r\n        case GroupableCheckboxActions.addGroup:\r\n            if (\r\n                _.some(\r\n                    state,\r\n                    (groupableCheckboxes: IGroupableCheckboxesState) =>\r\n                        groupableCheckboxes.parentId === (action.payload.parentId || action.payload.id)\r\n                )\r\n            ) {\r\n                return _.map(state, (groupableCheckboxes: IGroupableCheckboxesState) =>\r\n                    groupableCheckboxes.parentId === (action.payload.parentId || action.payload.id)\r\n                        ? _.extend({}, groupableCheckboxes, groupableCheckboxReducer(groupableCheckboxes, action))\r\n                        : groupableCheckboxes\r\n                );\r\n            }\r\n\r\n            return [...state, groupableCheckboxReducer(undefined, action)];\r\n        case GroupableCheckboxActions.removeGroup:\r\n            if (action.payload.isParent) {\r\n                return removeParentCheckbox(state, action);\r\n            }\r\n\r\n            return _.map(state, (groupableCheckboxes: IGroupableCheckboxesState) =>\r\n                groupableCheckboxes.parentId === (action.payload.parentId || action.payload.id)\r\n                    ? _.extend({}, groupableCheckboxes, removeChildCheckbox(groupableCheckboxes, action))\r\n                    : groupableCheckboxes\r\n            );\r\n        case GroupableCheckboxActions.toggleGroup:\r\n        case GroupableCheckboxActions.disabledGroup:\r\n        case GroupableCheckboxActions.disabledAllGroup:\r\n            return state.map((groupableCheckboxes: IGroupableCheckboxesState) =>\r\n                groupableCheckboxReducer(groupableCheckboxes, action)\r\n            );\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=221.bundle.js.map