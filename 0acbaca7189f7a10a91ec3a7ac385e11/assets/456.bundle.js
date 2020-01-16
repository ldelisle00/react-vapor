(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{1551:function(n,e,r){"use strict";r.r(e),e.default="import {InputSelectors} from '../InputSelectors';\r\n\r\ndescribe('InputSelectors', () => {\r\n    const ownProps = {\r\n        id: 'iron man',\r\n    };\r\n\r\n    describe('getValue', () => {\r\n        it('should return undefined if the input id is not in the state', () => {\r\n            expect(\r\n                InputSelectors.getValue(\r\n                    {\r\n                        inputs: [{id: 'ham man', value: 'man', valid: true, disabled: false}],\r\n                    },\r\n                    ownProps\r\n                )\r\n            ).toBeUndefined();\r\n        });\r\n\r\n        it('should return undefined if the input value is not defined', () => {\r\n            expect(\r\n                InputSelectors.getValue(\r\n                    {\r\n                        inputs: [{id: ownProps.id, value: undefined, valid: true, disabled: false}],\r\n                    },\r\n                    ownProps\r\n                )\r\n            ).toBeUndefined();\r\n        });\r\n\r\n        it('should return the value if the input is defined in the state', () => {\r\n            const expectedValue = 'bacon';\r\n            expect(\r\n                InputSelectors.getValue(\r\n                    {\r\n                        inputs: [{id: ownProps.id, value: expectedValue, valid: true, disabled: false}],\r\n                    },\r\n                    ownProps\r\n                )\r\n            ).toBe(expectedValue);\r\n        });\r\n    });\r\n\r\n    describe('getIsValid', () => {\r\n        it('should return false if the input id is not in the state', () => {\r\n            expect(\r\n                InputSelectors.getIsValid(\r\n                    {\r\n                        inputs: [{id: 'ham man', value: 'man', valid: true, disabled: false}],\r\n                    },\r\n                    ownProps\r\n                )\r\n            ).toBe(false);\r\n        });\r\n\r\n        it('should return false if the input is not valid', () => {\r\n            expect(\r\n                InputSelectors.getIsValid(\r\n                    {\r\n                        inputs: [{id: ownProps.id, value: 'bacon', valid: false, disabled: false}],\r\n                    },\r\n                    ownProps\r\n                )\r\n            ).toBe(false);\r\n        });\r\n\r\n        it('should return true if the input is valid', () => {\r\n            expect(\r\n                InputSelectors.getIsValid(\r\n                    {\r\n                        inputs: [{id: ownProps.id, value: 'bacon', valid: true, disabled: false}],\r\n                    },\r\n                    ownProps\r\n                )\r\n            ).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=456.bundle.js.map