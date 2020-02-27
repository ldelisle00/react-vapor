(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{1518:function(e,n,t){"use strict";t.r(n),n.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {addFlippable, changeFlippableSide, IFlippablePayload, removeFlippable} from '../FlippableActions';\r\nimport {\r\n    flippableInitialState,\r\n    flippableReducer,\r\n    flippablesInitialState,\r\n    flippablesReducer,\r\n    IFlippableState,\r\n} from '../FlippableReducers';\r\n\r\ndescribe('Flippable', () => {\r\n    const FLIPPED_FLIPPABLE: IFlippableState = {\r\n        id: 'flippy-the-flippable',\r\n        flipped: true,\r\n    };\r\n\r\n    const ANOTHER_FLIPPED_FLIPPABLE: IFlippableState = {\r\n        id: 'flippo-the-floppable',\r\n        flipped: true,\r\n    };\r\n\r\n    const UNFLIPPED_FLIPPABLE: IFlippableState = {\r\n        id: 'flippy-the-unflippable',\r\n        flipped: false,\r\n    };\r\n\r\n    const ANOTHER_UNFLIPPED_FLIPPABLE: IFlippableState = {\r\n        id: 'flippo-the-unfloppable',\r\n        flipped: false,\r\n    };\r\n\r\n    const SOME_FLIPPABLES: IFlippableState[] = [\r\n        FLIPPED_FLIPPABLE,\r\n        UNFLIPPED_FLIPPABLE,\r\n        ANOTHER_FLIPPED_FLIPPABLE,\r\n        ANOTHER_UNFLIPPED_FLIPPABLE,\r\n    ];\r\n\r\n    const GENERIC_ACTION: IReduxAction<IFlippablePayload> = {\r\n        type: 'DO_SOMETHING',\r\n        payload: {\r\n            id: UNFLIPPED_FLIPPABLE.id,\r\n        },\r\n    };\r\n\r\n    describe('flippablesReducer', () => {\r\n        const filterById = (actionId: string) => {\r\n            return (flippable: IFlippableState) => flippable.id === actionId;\r\n        };\r\n\r\n        it('should return the default state if the action is undefined and the state is undefined', () => {\r\n            const flippablesState: IFlippableState[] = flippablesReducer(undefined, GENERIC_ACTION);\r\n\r\n            expect(flippablesState).toBe(flippablesInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, GENERIC_ACTION);\r\n\r\n            expect(newFlippables).toBe(SOME_FLIPPABLES);\r\n        });\r\n\r\n        it('should return the old state with one more IFlippableState when the action is addFlippable', () => {\r\n            const action = addFlippable('new-flippable');\r\n            const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);\r\n\r\n            expect(newFlippables.length).toBe(SOME_FLIPPABLES.length + 1);\r\n            expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(1);\r\n            expect(newFlippables.filter(filterById(action.payload.id))[0].id).toBe(action.payload.id);\r\n        });\r\n\r\n        it('should return the old state with the specified flippable removed when the action is removeFlippable', () => {\r\n            const action = removeFlippable(FLIPPED_FLIPPABLE.id);\r\n            const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);\r\n\r\n            expect(newFlippables.length).toBe(SOME_FLIPPABLES.length - 1);\r\n            expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(0);\r\n        });\r\n\r\n        it(\r\n            'should return the old state with when the action is removeFlippable and the flipable id ' +\r\n                `doesn't exist in the state`,\r\n            () => {\r\n                const action = removeFlippable('some-random-flippable');\r\n                const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);\r\n\r\n                expect(newFlippables.length).toBe(SOME_FLIPPABLES.length);\r\n                expect(newFlippables.filter(filterById(action.payload.id)).length).toBe(0);\r\n            }\r\n        );\r\n\r\n        it(\r\n            'should set the flipped state prop to true when the action is changeFlippableSide, the flippable id ' +\r\n                'match the action payload id and flipped payload is set to true',\r\n            () => {\r\n                const action = changeFlippableSide(UNFLIPPED_FLIPPABLE.id, true);\r\n                const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);\r\n\r\n                expect(newFlippables.length).toBe(SOME_FLIPPABLES.length);\r\n                expect(newFlippables.filter(filterById(action.payload.id))[0].flipped).toBe(true);\r\n                expect(newFlippables.filter(filterById(ANOTHER_UNFLIPPED_FLIPPABLE.id))[0].flipped).toBe(false);\r\n            }\r\n        );\r\n\r\n        it(\r\n            'should set the flipped state to false when the action is changeFlippableSide, the flippable id ' +\r\n                'match the action payload id and flipped payload is set to false',\r\n            () => {\r\n                const action = changeFlippableSide(FLIPPED_FLIPPABLE.id, false);\r\n                const newFlippables: IFlippableState[] = flippablesReducer(SOME_FLIPPABLES, action);\r\n\r\n                expect(newFlippables.length).toBe(SOME_FLIPPABLES.length);\r\n                expect(newFlippables.filter(filterById(action.payload.id))[0].flipped).toBe(false);\r\n                expect(newFlippables.filter(filterById(ANOTHER_FLIPPED_FLIPPABLE.id))[0].flipped).toBe(true);\r\n            }\r\n        );\r\n    });\r\n\r\n    describe('flippableReducer', () => {\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const flippableState: IFlippableState = flippableReducer(undefined, GENERIC_ACTION);\r\n\r\n            expect(flippableState).toBe(flippableInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const newFlippable: IFlippableState = flippableReducer(UNFLIPPED_FLIPPABLE, GENERIC_ACTION);\r\n\r\n            expect(newFlippable).toBe(UNFLIPPED_FLIPPABLE);\r\n        });\r\n\r\n        it('should return a new flipapble with the specified id when the action is \"ADD_FLIPPABLE\"', () => {\r\n            const action = addFlippable('new-flippable');\r\n            const newFlippable = flippableReducer(UNFLIPPED_FLIPPABLE, action);\r\n\r\n            expect(newFlippable.id).toBe(action.payload.id);\r\n            expect(newFlippable.flipped).toBe(false);\r\n        });\r\n\r\n        it('should return the old state when the action is \"CHANGE_FLIPPABLE_SIDE\" and the id does not match', () => {\r\n            const action = changeFlippableSide(ANOTHER_UNFLIPPED_FLIPPABLE.id, true);\r\n            const newFlippable = flippableReducer(UNFLIPPED_FLIPPABLE, action);\r\n\r\n            expect(newFlippable).toBe(UNFLIPPED_FLIPPABLE);\r\n        });\r\n\r\n        it(\r\n            'should return a new state with flipped set to true when the action is \"CHANGE_FLIPPABLE_SIDE\" ' +\r\n                'and flipped is set to true in the payload',\r\n            () => {\r\n                const action = changeFlippableSide(UNFLIPPED_FLIPPABLE.id, true);\r\n                const newFlippable = flippableReducer(UNFLIPPED_FLIPPABLE, action);\r\n\r\n                expect(newFlippable).not.toBe(UNFLIPPED_FLIPPABLE);\r\n                expect(newFlippable.flipped).toBe(action.payload.flipped);\r\n            }\r\n        );\r\n\r\n        it(\r\n            'should return a new state with flipped set to false when the action is \"CHANGE_FLIPPABLE_SIDE\" ' +\r\n                'and flipped is set to false in the payload',\r\n            () => {\r\n                const action = changeFlippableSide(FLIPPED_FLIPPABLE.id, false);\r\n                const newFlippable = flippableReducer(FLIPPED_FLIPPABLE, action);\r\n\r\n                expect(newFlippable).not.toBe(FLIPPED_FLIPPABLE);\r\n                expect(newFlippable.flipped).toBe(action.payload.flipped);\r\n            }\r\n        );\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=411.bundle.js.map