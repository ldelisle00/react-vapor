(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{1758:function(e,t,a){"use strict";a.r(t),t.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {IRadioSelectActionPayload, removeRadioSelect, setRadioSelect} from '../RadioSelectActions';\r\nimport {\r\n    IRadioSelectState,\r\n    radioSelectInitialState,\r\n    radioSelectsInitialState,\r\n    radioSelectsReducer,\r\n} from '../RadioSelectReducers';\r\n\r\ndescribe('RadioSelect', () => {\r\n    describe('RadioSelectReducers', () => {\r\n        const genericAction: IReduxAction<IRadioSelectActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-radioselect',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const oldState: IRadioSelectState[] = undefined;\r\n            const radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, genericAction);\r\n\r\n            expect(radioSelectsState).toBe(radioSelectsInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IRadioSelectState[] = [radioSelectInitialState];\r\n            const radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, genericAction);\r\n\r\n            expect(radioSelectsState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more IRadioSelectState when the action is \"RadioSelectAction.set\" and the id is not yet in the state', () => {\r\n            let oldState: IRadioSelectState[] = radioSelectsInitialState;\r\n            const action = setRadioSelect('idontexistinthestateyet', {value: 'anywoulddo'});\r\n            let radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, action);\r\n\r\n            expect(radioSelectsState.length).toBe(oldState.length + 1);\r\n            expect(radioSelectsState.filter((radioSelect) => radioSelect.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = radioSelectsState;\r\n            action.payload.id = 'ialsodontexistinthestateyet';\r\n            radioSelectsState = radioSelectsReducer(oldState, action);\r\n\r\n            expect(radioSelectsState.length).toBe(oldState.length + 1);\r\n            expect(radioSelectsState.filter((radioSelect) => radioSelect.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        describe('\"RadioSelectAction.set\" when id is arleady in the state', () => {\r\n            it('should return the old state with the same number of IRadioSelectStatec and update the proper IRadioSelectState', () => {\r\n                let oldState: IRadioSelectState[] = [\r\n                    {...radioSelectInitialState, id: 'somealreadyexistingradioselect'},\r\n                ];\r\n                const radioSelectId = 'testRadioSelect';\r\n                const action = setRadioSelect(radioSelectId, {value: 'anywoulddo'});\r\n                let radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, action);\r\n\r\n                expect(radioSelectsState.length).toBe(oldState.length + 1);\r\n                expect(radioSelectsState.filter((radioSelect) => radioSelect.id === action.payload.id).length).toBe(1);\r\n\r\n                oldState = radioSelectsState;\r\n                action.payload.value = 'check if the value changed';\r\n                radioSelectsState = radioSelectsReducer(oldState, action);\r\n\r\n                expect(radioSelectsState.length).toBe(oldState.length);\r\n                expect(_.findWhere(radioSelectsState, {id: action.payload.id}).value).toBe(action.payload.value);\r\n                expect(_.reject(radioSelectsState, (radio) => radio.id === action.payload.id)).toEqual(\r\n                    _.reject(oldState, (radio) => radio.id === action.payload.id)\r\n                );\r\n            });\r\n\r\n            it('should not change the value if the value in the payload is also in the disabled values in the state', () => {\r\n                let oldState: IRadioSelectState[] = [\r\n                    {...radioSelectInitialState, id: 'somealreadyexistingradioselect'},\r\n                ];\r\n                const radioSelectId = 'testRadioSelect';\r\n                const action = setRadioSelect(radioSelectId, {value: 'anywoulddo', disabledValues: ['disabledValue']});\r\n                let radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, action);\r\n\r\n                oldState = radioSelectsState;\r\n                const secondAction = {...action, payload: {...action.payload, value: 'disabledValue'}};\r\n                radioSelectsState = radioSelectsReducer(oldState, secondAction);\r\n\r\n                expect(radioSelectsState.length).toBe(oldState.length);\r\n                // check if value is still  the value of the first action\r\n                expect(_.findWhere(radioSelectsState, {id: action.payload.id}).value).toBe(action.payload.value);\r\n            });\r\n        });\r\n\r\n        it('should return the old state without the IRadioSelectState when the action is \"RadioSelectAction.remove\"', () => {\r\n            const oldState: IRadioSelectState[] = [\r\n                {\r\n                    id: 'some-radioSelect1',\r\n                    value: 'somevalue',\r\n                    disabledValues: [],\r\n                },\r\n                {\r\n                    id: 'some-radioSelect2',\r\n                    value: 'somevalue2',\r\n                    disabledValues: [],\r\n                },\r\n            ];\r\n            const action: IReduxAction<IRadioSelectActionPayload> = removeRadioSelect('some-radioSelect1');\r\n            const radioSelectsState: IRadioSelectState[] = radioSelectsReducer(oldState, action);\r\n\r\n            expect(radioSelectsState.length).toBe(oldState.length - 1);\r\n            expect(radioSelectsState.filter((radioSelect) => radioSelect.id === action.payload.id).length).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=655.bundle.js.map