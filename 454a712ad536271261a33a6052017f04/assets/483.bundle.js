(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{1577:function(n,t,r){"use strict";r.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {LoadingActions} from './LoadingActions';\r\n\r\nexport interface ILoadingState {\r\n    id: string;\r\n    isOn: boolean;\r\n}\r\n\r\nexport const loadingInitialState: ILoadingState = {\r\n    id: undefined,\r\n    isOn: false,\r\n};\r\n\r\nexport const loadingsInitialState: ILoadingState[] = [];\r\n\r\nexport const loadingReducer = (\r\n    state: ILoadingState = loadingInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): ILoadingState => {\r\n    switch (action.type) {\r\n        case LoadingActions.add:\r\n            return {\r\n                id: action.payload.ids[0],\r\n                isOn: true,\r\n            };\r\n        case LoadingActions.turnOn:\r\n            if (!_.contains(action.payload.ids, state.id)) {\r\n                return state;\r\n            }\r\n\r\n            return {\r\n                id: state.id,\r\n                isOn: true,\r\n            };\r\n        case LoadingActions.turnOff:\r\n            if (!_.contains(action.payload.ids, state.id)) {\r\n                return state;\r\n            }\r\n\r\n            return {\r\n                id: state.id,\r\n                isOn: false,\r\n            };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const loadingsReducer = (\r\n    state: ILoadingState[] = loadingsInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): ILoadingState[] => {\r\n    switch (action.type) {\r\n        case LoadingActions.add:\r\n            return [...state, loadingReducer(undefined, action)];\r\n        case LoadingActions.remove:\r\n            return _.reject(state, (loading: ILoadingState) => {\r\n                return loading.id === action.payload.ids[0];\r\n            });\r\n        case LoadingActions.turnOn:\r\n        case LoadingActions.turnOff:\r\n            return state.map((loading: ILoadingState) => loadingReducer(loading, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=483.bundle.js.map