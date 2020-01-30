(window.webpackJsonp=window.webpackJsonp||[]).push([[921],{2018:function(a,n,t){"use strict";t.r(n),n.default="import * as _ from 'underscore';\nimport {ValidationActions, ValidationActionsTypes} from './ValidationActions';\nimport {ValidationsState, ValidationState} from './ValidationState';\n\ntype ValidationActions =\n    | ReturnType<typeof ValidationActions.setError>\n    | ReturnType<typeof ValidationActions.setWarning>\n    | ReturnType<typeof ValidationActions.setDirty>;\n\nexport const validationReducer = (state: ValidationsState = {}, action: ValidationActions): ValidationsState => {\n    switch (action.type) {\n        case ValidationActionsTypes.updateError:\n        case ValidationActionsTypes.updateWarning:\n        case ValidationActionsTypes.updateDirty:\n            return {\n                ...state,\n                [action.payload.id]: oneValidationReducer(state[action.payload.id], action),\n            };\n        default:\n            return state;\n    }\n};\n\nconst oneValidationReducer = (\n    state: ValidationState = {error: [], isDirty: [], warning: []},\n    action: ValidationActions\n): ValidationState => {\n    switch (action.type) {\n        case ValidationActionsTypes.updateError:\n            return {\n                ...state,\n                error: [\n                    ...state.error.filter((error) => error.validationType !== action.payload.validationType),\n                    {validationType: action.payload.validationType, value: action.payload.value as string},\n                ],\n            };\n        case ValidationActionsTypes.updateWarning:\n            return {\n                ...state,\n                warning: [\n                    ...state.warning.filter((warning) => warning.validationType !== action.payload.validationType),\n                    {validationType: action.payload.validationType, value: action.payload.value as string},\n                ],\n            };\n        case ValidationActionsTypes.updateDirty:\n            return {\n                ...state,\n                isDirty: [\n                    ...state.isDirty.filter((dirty) => dirty.validationType !== action.payload.validationType),\n                    {validationType: action.payload.validationType, value: action.payload.value as boolean},\n                ],\n            };\n        default:\n            return state;\n    }\n};\n"}}]);
//# sourceMappingURL=921.bundle.js.map