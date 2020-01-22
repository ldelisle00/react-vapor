(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{1500:function(e,t,a){"use strict";a.r(t),t.default="import * as _ from 'underscore';\r\n\r\nimport {IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {FlippableAction, IFlippableChangeSidePayload, IFlippablePayload} from './FlippableActions';\r\n\r\nexport interface IFlippableState {\r\n    id: string;\r\n    flipped: boolean;\r\n}\r\n\r\nexport const flippableInitialState: IFlippableState = {\r\n    id: undefined,\r\n    flipped: false,\r\n};\r\n\r\nexport const flippablesInitialState: IFlippableState[] = [];\r\n\r\nexport const flippableReducer = (\r\n    state: IFlippableState = flippableInitialState,\r\n    action: IReduxAction<any>\r\n): IFlippableState => {\r\n    switch (action.type) {\r\n        case FlippableAction.add:\r\n            return addFlippable(state, action);\r\n        case FlippableAction.changeSide:\r\n            return changeSide(state, action);\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const flippablesReducer = (\r\n    state: IFlippableState[] = flippablesInitialState,\r\n    action: IReduxAction<IReduxActionsPayload>\r\n): IFlippableState[] => {\r\n    switch (action.type) {\r\n        case FlippableAction.add:\r\n            return [...state, flippableReducer(undefined, action)];\r\n        case FlippableAction.remove:\r\n            return _.reject(state, (flippable: IFlippableState) => {\r\n                return action.payload.id === flippable.id;\r\n            });\r\n        case FlippableAction.changeSide:\r\n            return state.map((flippable: IFlippableState) => flippableReducer(flippable, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nconst addFlippable = (state: IFlippableState, action: IReduxAction<IFlippablePayload>): IFlippableState => ({\r\n    id: action.payload.id,\r\n    flipped: state.flipped,\r\n});\r\n\r\nconst changeSide = (state: IFlippableState, action: IReduxAction<IFlippableChangeSidePayload>): IFlippableState => {\r\n    return state.id !== action.payload.id\r\n        ? state\r\n        : _.extend({}, state, {\r\n              flipped: action.payload.flipped,\r\n          });\r\n};\r\n"}}]);
//# sourceMappingURL=405.bundle.js.map