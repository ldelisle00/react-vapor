(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1250:function(t,e,o){"use strict";o.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {ListBoxActions} from '../listBox/ListBoxActions';\r\nimport {AutocompleteActions, IAutocompletePayload} from './AutocompleteActions';\r\n\r\nexport interface IAutocompleteState {\r\n    id: string;\r\n    open: boolean;\r\n    value: string;\r\n    active: number;\r\n}\r\n\r\nexport const autocompleteInitialState: IAutocompleteState = {id: undefined, open: false, value: '', active: undefined};\r\nexport const autocompleteCompositeInitialState: IAutocompleteState[] = [];\r\n\r\nexport const autocompleteReducer = (\r\n    state: IAutocompleteState = autocompleteInitialState,\r\n    action: IReduxAction<IAutocompletePayload>\r\n): IAutocompleteState => {\r\n    if (state.id !== action.payload.id && action.type !== AutocompleteActions.add) {\r\n        return state;\r\n    }\r\n\r\n    switch (action.type) {\r\n        case AutocompleteActions.add:\r\n            return {\r\n                ...state,\r\n                id: action.payload.id,\r\n            };\r\n        case AutocompleteActions.toggle:\r\n            const open = !_.isUndefined(action.payload.open) ? action.payload.open : !state.open;\r\n            // if open was sent in the dispatch use the value. Otherwise toggle the property\r\n            return {...state, open, active: undefined};\r\n        case AutocompleteActions.setValue:\r\n            return {...state, open: action.payload.open, value: action.payload.value};\r\n        case AutocompleteActions.setActive:\r\n            let active = state.active + action.payload.diff;\r\n            if (_.isUndefined(state.active)) {\r\n                active = action.payload.diff === 1 ? 0 : -1;\r\n            }\r\n\r\n            return {...state, open: true, active};\r\n        case ListBoxActions.select:\r\n            // when the user selects a value in the list, close the autocomplete\r\n            return {...state, open: false, value: action.payload.value};\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const autocompletesReducer = (\r\n    state: IAutocompleteState[] = autocompleteCompositeInitialState,\r\n    action: IReduxAction<IAutocompletePayload>\r\n): IAutocompleteState[] => {\r\n    switch (action.type) {\r\n        case AutocompleteActions.add:\r\n            return [...state, autocompleteReducer(undefined, action)];\r\n        case AutocompleteActions.remove:\r\n            return _.reject(state, (listBox: IAutocompleteState) => action.payload.id === listBox.id);\r\n        case ListBoxActions.select:\r\n        case AutocompleteActions.toggle:\r\n        case AutocompleteActions.setValue:\r\n        case AutocompleteActions.setActive:\r\n            return state.map((select: IAutocompleteState) => autocompleteReducer(select, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=149.bundle.js.map