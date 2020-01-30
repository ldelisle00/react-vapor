(window.webpackJsonp=window.webpackJsonp||[]).push([[937],{2034:function(t,e,n){"use strict";n.r(e),e.default="import {WithDirtySelectors} from '../withDirtySelectors';\r\n\r\ndescribe('WithDirtySelectors', () => {\r\n    describe('getIsDirty selector', () => {\r\n        const componentId = 'componentId';\r\n\r\n        it('should return true if the component id is in the state', () => {\r\n            expect(WithDirtySelectors.getIsDirty({dirtyComponents: [componentId]}, {id: componentId})).toBe(true);\r\n        });\r\n\r\n        it('should return false if the component id is not in the state', () => {\r\n            expect(WithDirtySelectors.getIsDirty({dirtyComponents: []}, {id: componentId})).toBe(false);\r\n            expect(WithDirtySelectors.getIsDirty({}, {id: componentId})).toBe(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=937.bundle.js.map