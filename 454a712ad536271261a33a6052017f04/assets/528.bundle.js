(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{1622:function(t,e,o){"use strict";o.r(e),e.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {IModalActionPayload, ModalAction} from '../ModalActions';\r\nimport {\r\n    IModalState,\r\n    modalInitialState,\r\n    modalReducer,\r\n    modalsInitialState,\r\n    modalsReducer,\r\n    openModalsReducer,\r\n} from '../ModalReducers';\r\n\r\ndescribe('Modal', () => {\r\n    describe('ModalReducers', () => {\r\n        const genericAction: IReduxAction<IModalActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-modal',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const modalsState: IModalState[] = modalsReducer(undefined, genericAction);\r\n\r\n            expect(modalsState).toBe(modalsInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one modal', () => {\r\n            const modalState: IModalState = modalReducer(undefined, genericAction);\r\n\r\n            expect(modalState).toBe(modalInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IModalState[] = [modalInitialState];\r\n            const modalsState: IModalState[] = modalsReducer(oldState, genericAction);\r\n\r\n            expect(modalsState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one modal', () => {\r\n            const oldState: IModalState = modalInitialState;\r\n            const modalState: IModalState = modalReducer(oldState, genericAction);\r\n\r\n            expect(modalState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more IModalState when the action is \"ModalAction.addModal\"', () => {\r\n            let oldState: IModalState[] = modalsInitialState;\r\n            const action: IReduxAction<IModalActionPayload> = {\r\n                type: ModalAction.addModal,\r\n                payload: {\r\n                    id: 'some-modal',\r\n                },\r\n            };\r\n            let modalsState: IModalState[] = modalsReducer(oldState, action);\r\n\r\n            expect(modalsState.length).toBe(oldState.length + 1);\r\n            expect(modalsState.filter((modal) => modal.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = modalsState;\r\n            action.payload.id = 'some-modal2';\r\n            modalsState = modalsReducer(oldState, action);\r\n\r\n            expect(modalsState.length).toBe(oldState.length + 1);\r\n            expect(modalsState.filter((modal) => modal.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state with one more IModalState with isOpened false when the action is \"ModalAction.addModal\" without isOpened in the payload', () => {\r\n            const action: IReduxAction<IModalActionPayload> = {\r\n                type: ModalAction.addModal,\r\n                payload: {\r\n                    id: 'some-modal',\r\n                },\r\n            };\r\n            const modalsState: IModalState[] = modalsReducer(modalsInitialState, action);\r\n\r\n            expect(modalsState[0].isOpened).toBe(false);\r\n        });\r\n\r\n        it('should return the old state with one more IModalState with isOpened true when the action is \"ModalAction.addModal\" with isOpened set to true in the payload', () => {\r\n            const action: IReduxAction<IModalActionPayload> = {\r\n                type: ModalAction.addModal,\r\n                payload: {\r\n                    id: 'some-modal',\r\n                    isOpened: true,\r\n                },\r\n            };\r\n            const modalsState: IModalState[] = modalsReducer(modalsInitialState, action);\r\n\r\n            expect(modalsState[0].isOpened).toBe(true);\r\n        });\r\n\r\n        it('should return the old state without the IModalState when the action is \"ModalAction.removeModal\"', () => {\r\n            let oldState: IModalState[] = [\r\n                {\r\n                    id: 'some-modal2',\r\n                    isOpened: false,\r\n                },\r\n                {\r\n                    id: 'some-modal1',\r\n                    isOpened: false,\r\n                },\r\n                {\r\n                    id: 'some-modal3',\r\n                    isOpened: false,\r\n                },\r\n            ];\r\n            const action: IReduxAction<IModalActionPayload> = {\r\n                type: ModalAction.removeModal,\r\n                payload: {\r\n                    id: 'some-modal1',\r\n                },\r\n            };\r\n            let modalsState: IModalState[] = modalsReducer(oldState, action);\r\n\r\n            expect(modalsState.length).toBe(oldState.length - 1);\r\n            expect(modalsState.filter((modal) => modal.id === action.payload.id).length).toBe(0);\r\n\r\n            oldState = modalsState;\r\n            action.payload.id = 'some-modal2';\r\n            modalsState = modalsReducer(oldState, action);\r\n\r\n            expect(modalsState.length).toBe(oldState.length - 1);\r\n            expect(modalsState.filter((modal) => modal.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should open a modal when the action is \"ModalAction.openModal\"', () => {\r\n            const oldState: IModalState[] = [\r\n                {\r\n                    id: 'some-modal1',\r\n                    isOpened: false,\r\n                },\r\n                {\r\n                    id: 'some-modal2',\r\n                    isOpened: false,\r\n                },\r\n                {\r\n                    id: 'some-modal3',\r\n                    isOpened: true,\r\n                },\r\n            ];\r\n\r\n            const action: IReduxAction<IModalActionPayload> = {\r\n                type: ModalAction.openModal,\r\n                payload: {\r\n                    id: 'some-modal1',\r\n                },\r\n            };\r\n            const modalsState: IModalState[] = modalsReducer(oldState, action);\r\n\r\n            expect(modalsState.length).toBe(oldState.length);\r\n            expect(modalsState.filter((modal) => modal.id === action.payload.id)[0].isOpened).toBe(true);\r\n            expect(modalsState.filter((modal) => modal.id === 'some-modal2')[0].isOpened).toBe(false);\r\n            expect(modalsState.filter((modal) => modal.id === 'some-modal3')[0].isOpened).toBe(true);\r\n        });\r\n\r\n        describe('openModalsReducer', () => {\r\n            it('should return the default state if the action is not defined and the state is undefined', () => {\r\n                const openModalsState: string[] = openModalsReducer(undefined, genericAction);\r\n\r\n                expect(openModalsState).toEqual([]);\r\n            });\r\n\r\n            it('should return the old state when the action is not defined', () => {\r\n                const oldState: string[] = ['an-id'];\r\n                const openModalsState: string[] = openModalsReducer(oldState, genericAction);\r\n\r\n                expect(openModalsState).toBe(oldState);\r\n            });\r\n\r\n            it('should return the old state with one more id when the action is \"ModalAction.openModal\"', () => {\r\n                let oldState: string[] = [];\r\n                const action: IReduxAction<IModalActionPayload> = {\r\n                    type: ModalAction.openModal,\r\n                    payload: {\r\n                        id: 'some-modal',\r\n                    },\r\n                };\r\n                let openModalsState: string[] = openModalsReducer(oldState, action);\r\n\r\n                expect(openModalsState.length).toBe(1);\r\n                expect(openModalsState[0]).toBe(action.payload.id);\r\n\r\n                oldState = openModalsState;\r\n                action.payload.id = 'some-modal2';\r\n                openModalsState = openModalsReducer(oldState, action);\r\n\r\n                expect(openModalsState.length).toBe(2);\r\n                expect(openModalsState[1]).toBe(action.payload.id);\r\n            });\r\n\r\n            it('should return the old state without all of the ids when the action is \"ModalAction.closeModals\"', () => {\r\n                const oldState: string[] = ['some-modal2', 'some-modal1', 'some-modal3'];\r\n                const action: IReduxAction<IModalActionPayload> = {\r\n                    type: ModalAction.closeModals,\r\n                    payload: {\r\n                        ids: ['some-modal1', 'some-modal2'],\r\n                    },\r\n                };\r\n                const openModalsState: string[] = openModalsReducer(oldState, action);\r\n\r\n                expect(openModalsState.length).toBe(oldState.length - action.payload.ids.length);\r\n                expect(_.contains(openModalsState, action.payload.ids[0])).toBe(false);\r\n                expect(_.contains(openModalsState, action.payload.ids[1])).toBe(false);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=528.bundle.js.map