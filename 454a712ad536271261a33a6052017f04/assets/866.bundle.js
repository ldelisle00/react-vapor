(window.webpackJsonp=window.webpackJsonp||[]).push([[866],{1953:function(t,e,r){"use strict";r.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {ITextAreaActionPayload, TextAreaActions} from './TextAreaActions';\r\n\r\nexport interface ITextAreaState {\r\n    id: string;\r\n    value: string;\r\n    disabled: boolean;\r\n}\r\n\r\nexport const textAreaInitialState: ITextAreaState = {\r\n    id: undefined,\r\n    value: '',\r\n    disabled: false,\r\n};\r\n\r\nexport const textAreasInitialState: ITextAreaState[] = [];\r\n\r\nexport const textAreasReducer = (\r\n    state: ITextAreaState[] = textAreasInitialState,\r\n    action: IReduxAction<ITextAreaActionPayload>\r\n): ITextAreaState[] => {\r\n    switch (action.type) {\r\n        case TextAreaActions.add:\r\n            return [...state, {...action.payload} as ITextAreaState];\r\n        case TextAreaActions.remove:\r\n            return _.reject(state, (textArea: ITextAreaState) => textArea.id === action.payload.id);\r\n        case TextAreaActions.changeValue:\r\n        case TextAreaActions.setDisabled:\r\n            return state.map((textArea: ITextAreaState) =>\r\n                textArea.id === action.payload.id ? {...textArea, ...action.payload} : textArea\r\n            );\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=866.bundle.js.map