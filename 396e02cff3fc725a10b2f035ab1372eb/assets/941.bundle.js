(window.webpackJsonp=window.webpackJsonp||[]).push([[941],{2038:function(e,r,n){"use strict";n.r(r),r.default="import {deepClone} from './CloneUtils';\r\n\r\ndescribe('CloneUtils', () => {\r\n    describe('deepClone', () => {\r\n        it('should deep clone an array and its element', () => {\r\n            const object1 = {property: 1};\r\n            const object2 = {property: 2};\r\n            const array = [object1, object2];\r\n\r\n            const deepClonedArray = deepClone(array);\r\n            deepClonedArray[0].property = 3;\r\n\r\n            expect(object1.property).toEqual(1);\r\n        });\r\n\r\n        it('should deep clone an object and all of its fields', () => {\r\n            const object = {\r\n                property1: 1,\r\n                property2: 2,\r\n            };\r\n\r\n            const deepClonedObject = deepClone(object);\r\n            deepClonedObject.property1 = 3;\r\n\r\n            expect(object.property1).toEqual(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=941.bundle.js.map