(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{1501:function(t,e,n){"use strict";n.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {FlatSelectActions, IFlatSelectActionPayload} from './FlatSelectActions';\r\n\r\nexport interface IFlatSelectState {\r\n    id: string;\r\n    selectedOptionId?: string;\r\n}\r\n\r\nexport const flatSelectInitialState: IFlatSelectState = {id: undefined, selectedOptionId: undefined};\r\nexport const flatSelectsInitialState: IFlatSelectState[] = [];\r\n\r\nexport const flatSelectReducer = (\r\n    state: IFlatSelectState = flatSelectInitialState,\r\n    action: IReduxAction<IFlatSelectActionPayload>\r\n): IFlatSelectState => {\r\n    switch (action.type) {\r\n        case FlatSelectActions.select:\r\n            return {\r\n                id: state.id,\r\n                selectedOptionId: action.payload.selectedOptionId,\r\n            };\r\n        case FlatSelectActions.add:\r\n            return _.extend({}, action.payload);\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const flatSelectsReducer = (\r\n    state: IFlatSelectState[] = flatSelectsInitialState,\r\n    action: IReduxAction<IFlatSelectActionPayload>\r\n): IFlatSelectState[] => {\r\n    switch (action.type) {\r\n        case FlatSelectActions.select:\r\n            return state.map((flatSelect: IFlatSelectState) => {\r\n                return flatSelect.id === action.payload.id ? flatSelectReducer(flatSelect, action) : flatSelect;\r\n            });\r\n        case FlatSelectActions.add:\r\n            return [...state, flatSelectReducer(undefined, action)];\r\n        case FlatSelectActions.remove:\r\n            return _.reject(state, (flatSelect: IFlatSelectState) => {\r\n                return action.payload.id === flatSelect.id;\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=394.bundle.js.map