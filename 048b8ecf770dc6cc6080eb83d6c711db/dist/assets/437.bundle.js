(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{1544:function(t,e,n){"use strict";n.r(e),e.default="import {IReduxAction} from '../../../utils/ReduxUtils';\r\nimport {IAddPromptActionPayload, IPromptActionPayload, PromptActions} from '../InlinePromptActions';\r\nimport {\r\n    IPromptState,\r\n    promptInitialState,\r\n    promptReducer,\r\n    promptsInitialState,\r\n    promptsReducer,\r\n} from '../InlinePromptReducers';\r\n\r\ndescribe('InlinePrompt', () => {\r\n    describe('prompts', () => {\r\n        const genericAction: IReduxAction<IPromptActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'some-prompt',\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const promptsState: IPromptState[] = promptsReducer(undefined, genericAction);\r\n\r\n            expect(promptsState).toBe(promptsInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for one prompt', () => {\r\n            const promptState: IPromptState = promptReducer(undefined, genericAction);\r\n\r\n            expect(promptState).toBe(promptInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IPromptState[] = [promptInitialState];\r\n            const promptsState: IPromptState[] = promptsReducer(oldState, genericAction);\r\n\r\n            expect(promptsState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for one prompt', () => {\r\n            const oldState: IPromptState = promptInitialState;\r\n            const promptState: IPromptState = promptReducer(oldState, genericAction);\r\n\r\n            expect(promptState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more PromptState when the action is \"ADD_PROMPT\"', () => {\r\n            let oldState: IPromptState[] = promptsInitialState;\r\n            const action: IReduxAction<IAddPromptActionPayload> = {\r\n                type: PromptActions.add,\r\n                payload: {\r\n                    id: 'some-prompt',\r\n                    options: {userChoice: undefined, onClick: undefined},\r\n                },\r\n            };\r\n            let promptsState: IPromptState[] = promptsReducer(oldState, action);\r\n\r\n            expect(promptsState.length).toBe(oldState.length + 1);\r\n            expect(promptsState.filter((prompt) => prompt.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = promptsState;\r\n            action.payload.id = 'some-prompt2';\r\n            promptsState = promptsReducer(oldState, action);\r\n\r\n            expect(promptsState.length).toBe(oldState.length + 1);\r\n            expect(promptsState.filter((prompt) => prompt.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the PromptState with the prompt id when the action is \"REMOVE_PROMPT', () => {\r\n            let oldState: IPromptState[] = [\r\n                {\r\n                    id: 'some-prompt2',\r\n                    options: {userChoice: undefined, onClick: undefined},\r\n                },\r\n                {\r\n                    id: 'some-prompt',\r\n                    options: {userChoice: undefined, onClick: undefined},\r\n                },\r\n                {\r\n                    id: 'some-prompt3',\r\n                    options: {userChoice: undefined, onClick: undefined},\r\n                },\r\n            ];\r\n            const action: IReduxAction<IPromptActionPayload> = {\r\n                type: PromptActions.remove,\r\n                payload: {\r\n                    id: 'some-prompt',\r\n                },\r\n            };\r\n            let promptsState: IPromptState[] = promptsReducer(oldState, action);\r\n\r\n            expect(promptsState.length).toBe(oldState.length - 1);\r\n            expect(promptsState.filter((prompt) => prompt.id === action.payload.id).length).toBe(0);\r\n\r\n            oldState = promptsState;\r\n            action.payload.id = 'some-prompt2';\r\n            promptsState = promptsReducer(oldState, action);\r\n\r\n            expect(promptsState.length).toBe(oldState.length - 1);\r\n            expect(promptsState.filter((prompt) => prompt.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should return the old state when the action is \"REMOVE_PROMPT\" and the prompt id does not exist', () => {\r\n            const oldState: IPromptState[] = [\r\n                {\r\n                    id: 'some-prompt2',\r\n                    options: {userChoice: undefined, onClick: undefined},\r\n                },\r\n                {\r\n                    id: 'some-prompt',\r\n                    options: {userChoice: undefined, onClick: undefined},\r\n                },\r\n                {\r\n                    id: 'some-prompt3',\r\n                    options: {userChoice: undefined, onClick: undefined},\r\n                },\r\n            ];\r\n            const action: IReduxAction<IPromptActionPayload> = {\r\n                type: PromptActions.remove,\r\n                payload: {\r\n                    id: 'some-prompt4',\r\n                },\r\n            };\r\n            const promptsState: IPromptState[] = promptsReducer(oldState, action);\r\n\r\n            expect(promptsState.length).toBe(oldState.length);\r\n            expect(promptsState.filter((prompt) => prompt.id === action.payload.id).length).toBe(0);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=437.bundle.js.map