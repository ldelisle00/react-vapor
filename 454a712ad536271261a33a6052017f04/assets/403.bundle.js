(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{1498:function(n,e,r){"use strict";r.r(e),e.default="import {IReduxAction} from '../../utils/ReduxUtils';\r\n\r\nexport const FlippableAction = {\r\n    add: 'ADD_FLIPPABLE',\r\n    remove: 'REMOVE_FLIPPABLE',\r\n    changeSide: 'CHANGE_FLIPPABLE_SIDE',\r\n};\r\n\r\nexport interface IFlippablePayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IFlippableChangeSidePayload extends IFlippablePayload {\r\n    flipped: boolean;\r\n}\r\n\r\nexport const addFlippable = (id: string): IReduxAction<IFlippablePayload> => ({\r\n    type: FlippableAction.add,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const removeFlippable = (id: string): IReduxAction<IFlippablePayload> => ({\r\n    type: FlippableAction.remove,\r\n    payload: {\r\n        id,\r\n    },\r\n});\r\n\r\nexport const changeFlippableSide = (id: string, flipped: boolean): IReduxAction<IFlippableChangeSidePayload> => ({\r\n    type: FlippableAction.changeSide,\r\n    payload: {\r\n        id,\r\n        flipped,\r\n    },\r\n});\r\n"}}]);
//# sourceMappingURL=403.bundle.js.map