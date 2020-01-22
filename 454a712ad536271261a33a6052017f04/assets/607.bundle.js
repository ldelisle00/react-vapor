(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1700:function(n,t,e){"use strict";e.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {OptionsCycleActions} from './OptionsCycleActions';\r\n\r\nexport interface IOptionsCycleState {\r\n    id: string;\r\n    currentOption: number;\r\n}\r\n\r\nexport const optionsCycleInitialState: IOptionsCycleState = {id: undefined, currentOption: undefined};\r\nexport const optionsCyclesInitialState: IOptionsCycleState[] = [];\r\n\r\nexport const optionsCycleReducer = (\r\n    state: IOptionsCycleState = optionsCycleInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IOptionsCycleState => {\r\n    switch (action.type) {\r\n        case OptionsCycleActions.change:\r\n            if (state.id !== action.payload.id) {\r\n                return state;\r\n            }\r\n\r\n            return {\r\n                id: state.id,\r\n                currentOption: action.payload.currentOption,\r\n            };\r\n        case OptionsCycleActions.add:\r\n            return {\r\n                id: action.payload.id,\r\n                currentOption: action.payload.currentOption,\r\n            };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const optionsCyclesReducer = (\r\n    state: IOptionsCycleState[] = optionsCyclesInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IOptionsCycleState[] => {\r\n    switch (action.type) {\r\n        case OptionsCycleActions.change:\r\n            return state.map((optionsCycle: IOptionsCycleState) => optionsCycleReducer(optionsCycle, action));\r\n        case OptionsCycleActions.add:\r\n            return [...state, optionsCycleReducer(undefined, action)];\r\n        case OptionsCycleActions.remove:\r\n            return _.reject(state, (optionsCycle: IOptionsCycleState) => {\r\n                return action.payload.id === optionsCycle.id;\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=607.bundle.js.map