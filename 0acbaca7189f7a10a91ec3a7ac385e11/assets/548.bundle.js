(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{1643:function(t,e,n){"use strict";n.r(e),e.default="import {MultilineBoxSelectors} from '../MultilineBoxSelector';\r\n\r\ndescribe('MultilineBoxSelectors', () => {\r\n    const id: string = 'Raptor';\r\n    const list: string[] = ['Cactus', 'Captus'];\r\n\r\n    describe('getIds', () => {\r\n        it('should return an empty array if the state is undefined', () => {\r\n            expect(MultilineBoxSelectors.getIds(undefined, {id})).toEqual([]);\r\n        });\r\n\r\n        it('should return an empty array if the id do not exist in the state', () => {\r\n            expect(MultilineBoxSelectors.getIds({}, {id})).toEqual([]);\r\n        });\r\n\r\n        it('should return an empty list of id if the id is in the state but the list undefined', () => {\r\n            const state = {\r\n                multilineIds: {\r\n                    [id]: {id, list: undefined} as any,\r\n                },\r\n            };\r\n            expect(MultilineBoxSelectors.getIds(state, {id})).toEqual([]);\r\n        });\r\n\r\n        it('should return the list of id if the id is in the state', () => {\r\n            const state = {\r\n                multilineIds: {\r\n                    [id]: {id, list},\r\n                },\r\n            };\r\n            expect(MultilineBoxSelectors.getIds(state, {id})).toEqual(list);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=548.bundle.js.map