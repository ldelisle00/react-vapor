(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{1572:function(t,e,n){"use strict";n.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {AutocompleteActions} from '../autocomplete/AutocompleteActions';\r\nimport {DropReducerActions} from '../drop/redux/DropActions';\r\nimport {IListBoxPayload, ListBoxActions} from './ListBoxActions';\r\n\r\nexport interface IListBoxState {\r\n    id: string;\r\n    selected: string[];\r\n    active?: number;\r\n}\r\n\r\nexport const listBoxInitialState: IListBoxState = {id: undefined, selected: []};\r\nexport const listBoxesInitialState: IListBoxState[] = [];\r\n\r\nexport const listBoxReducer = (\r\n    state: IListBoxState = listBoxInitialState,\r\n    action: IReduxAction<IListBoxPayload>\r\n): IListBoxState => {\r\n    if (state.id !== action.payload.id && action.type !== ListBoxActions.add) {\r\n        return state;\r\n    }\r\n\r\n    const {payload} = action;\r\n    switch (action.type) {\r\n        case ListBoxActions.add:\r\n            const selected = _.chain(action.payload.items)\r\n                .where({selected: true})\r\n                .pluck('value')\r\n                .value();\r\n            let selectedIndex = _.findIndex(action.payload.items, (e) => e.selected);\r\n            selectedIndex = selectedIndex === -1 || action.payload.multi ? 0 : selectedIndex;\r\n            return {\r\n                id: action.payload.id,\r\n                selected: selected,\r\n                active: selectedIndex,\r\n            };\r\n        case ListBoxActions.select:\r\n            return {\r\n                ...state,\r\n                selected: payload.multi ? _.uniq([...state.selected, payload.value]) : [payload.value],\r\n                active: payload.multi ? null : typeof payload.index !== undefined ? payload.index : state.active,\r\n            };\r\n        case AutocompleteActions.setValue:\r\n            return {\r\n                ...state,\r\n                selected: [payload.value],\r\n            };\r\n        case ListBoxActions.unselect:\r\n            return {\r\n                ...state,\r\n                selected: _.without(state.selected, payload.value),\r\n            };\r\n        case ListBoxActions.reorder:\r\n            return {\r\n                ...state,\r\n                selected: payload.values,\r\n            };\r\n        case ListBoxActions.setActive:\r\n            let active = state.active + payload.diff;\r\n            if (_.isUndefined(state.active)) {\r\n                active = payload.diff === 1 ? 0 : -1;\r\n            }\r\n\r\n            return {...state, active};\r\n        case ListBoxActions.clear:\r\n            return {\r\n                ...state,\r\n                active: 0,\r\n                selected: [],\r\n            };\r\n        case DropReducerActions.toggle:\r\n            return {\r\n                ...state,\r\n            };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const listBoxesReducer = (\r\n    state: IListBoxState[] = listBoxesInitialState,\r\n    action: IReduxAction<IListBoxPayload>\r\n): IListBoxState[] => {\r\n    switch (action.type) {\r\n        case ListBoxActions.add:\r\n            return [...state, listBoxReducer(undefined, action)];\r\n        case ListBoxActions.remove:\r\n            return _.reject(state, (listBox: IListBoxState) => action.payload.id === listBox.id);\r\n        case ListBoxActions.clear:\r\n        case ListBoxActions.unselect:\r\n        case ListBoxActions.select:\r\n        case ListBoxActions.reorder:\r\n        case ListBoxActions.setActive:\r\n        case AutocompleteActions.setValue:\r\n        case DropReducerActions.toggle:\r\n            return state.map((listBox: IListBoxState) => listBoxReducer(listBox, action));\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=476.bundle.js.map