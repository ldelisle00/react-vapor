(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{1723:function(e,t,n){"use strict";n.r(t),t.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {addPopover, removePopover, setPopoverIsOpen} from '../PopoverActions';\r\nimport {popoversInitialState, popoversReducer, PopoverState} from '../PopoverReducers';\r\n\r\ndescribe('Reducers', () => {\r\n    describe('PopoversReducers', () => {\r\n        const unrelatedAction: IReduxAction<any> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {id: ''},\r\n        };\r\n\r\n        it('should return the default state if the action is not related and the state is undefined ', () => {\r\n            expect(popoversReducer(undefined, unrelatedAction)).toEqual(popoversInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is unrelated to popover s', () => {\r\n            const oldState: PopoverState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    isOpen: false,\r\n                },\r\n            ];\r\n            const newState: PopoverState[] = popoversReducer(oldState, unrelatedAction);\r\n\r\n            expect(oldState).toEqual(newState);\r\n        });\r\n\r\n        it('should return the old state when the action is unrelated for one ', () => {\r\n            const oldState: PopoverState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    isOpen: false,\r\n                },\r\n            ];\r\n            const newState: PopoverState[] = popoversReducer(oldState, unrelatedAction);\r\n\r\n            expect(oldState).toEqual(newState);\r\n        });\r\n\r\n        it('should return the old state with one more Popover when the action is PopoverActions.add', () => {\r\n            const oldState: PopoverState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    isOpen: false,\r\n                },\r\n            ];\r\n            const action = addPopover('new-popover', true);\r\n            const newState = popoversReducer(oldState, action);\r\n\r\n            expect(newState.length).toBe(oldState.length + 1);\r\n            expect(newState.filter((popover) => popover.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state with one less Popover when the action is PopoverActions.remove', () => {\r\n            const oldState: PopoverState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    isOpen: false,\r\n                },\r\n            ];\r\n            const action = removePopover(oldState[0].id);\r\n            const newState = popoversReducer(oldState, action);\r\n\r\n            expect(newState.length).toBe(oldState.length - 1);\r\n            expect(newState.filter((popover) => popover.id === oldState[0].id).length).toBe(0);\r\n        });\r\n\r\n        it('should modify the isOpen state for the Popover having the same id as in the action payload', () => {\r\n            const oldState: PopoverState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    isOpen: false,\r\n                },\r\n            ];\r\n            const setExpandedToTrueAction = setPopoverIsOpen(oldState[0].id, true);\r\n            const newState = popoversReducer(oldState, setExpandedToTrueAction);\r\n\r\n            expect(newState[0].isOpen).toBe(true);\r\n\r\n            const setExpandedToFalseAction = setPopoverIsOpen(oldState[0].id, false);\r\n            const secondNewState = popoversReducer(oldState, setExpandedToFalseAction);\r\n\r\n            expect(secondNewState[0].isOpen).toBe(false);\r\n        });\r\n\r\n        it('should not modify the isOpen state for the Popover having a different id as in the action payload', () => {\r\n            const oldState: PopoverState[] = [\r\n                {\r\n                    id: 'some-',\r\n                    isOpen: undefined,\r\n                },\r\n            ];\r\n            const setExpandedToTrueAction = setPopoverIsOpen('a different id', true);\r\n            const newState = popoversReducer(oldState, setExpandedToTrueAction);\r\n\r\n            expect(newState[0].isOpen).toBeUndefined();\r\n            expect(oldState).toEqual(oldState);\r\n\r\n            const setExpandedToFalseAction = setPopoverIsOpen('a different id', false);\r\n            const secondNewState = popoversReducer(oldState, setExpandedToFalseAction);\r\n\r\n            expect(secondNewState[0].isOpen).toBeUndefined();\r\n            expect(oldState).toEqual(oldState);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=629.bundle.js.map