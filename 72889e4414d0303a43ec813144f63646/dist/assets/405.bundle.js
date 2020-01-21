(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{1502:function(e,t,l){"use strict";l.r(t),t.default="import {flatSelectInitialState, IFlatSelectState} from '../FlatSelectReducers';\r\nimport {FlatSelectSelectors} from '../FlatSelectSelectors';\r\n\r\ndescribe('FlatSelectSelectors', () => {\r\n    describe('getInput', () => {\r\n        it('should return the default flatSelect state when the flatSelect is not in the store', () => {\r\n            const FlatSelect = FlatSelectSelectors.getInput({flatSelect: []}, {id: 'nothing is selected by the user'});\r\n            expect(FlatSelect).toEqual(flatSelectInitialState);\r\n        });\r\n\r\n        it('should return the selected FlatSelect', () => {\r\n            const expectedSelectedFlatSelect: IFlatSelectState = {\r\n                id: 'the-id',\r\n                selectedOptionId: 'the-selected-option-id',\r\n            };\r\n            const selectedFlatSelect = FlatSelectSelectors.getInput(\r\n                {flatSelect: [expectedSelectedFlatSelect]},\r\n                {id: expectedSelectedFlatSelect.id}\r\n            );\r\n            expect(selectedFlatSelect).toEqual(expectedSelectedFlatSelect);\r\n        });\r\n    });\r\n\r\n    describe('getSelectedOptionId', () => {\r\n        it('should return undefined state if no other value is chosen in the state', () => {\r\n            const selectedOptionId = FlatSelectSelectors.getSelectedOptionId(\r\n                {flatSelect: []},\r\n                {id: 'nothing-is-selected-by-the-user'}\r\n            );\r\n            expect(selectedOptionId).toBeUndefined();\r\n        });\r\n\r\n        it('should return the flatSelected value from the state that the user chose', () => {\r\n            const expectedSelectedFlatSelect: IFlatSelectState = {\r\n                id: 'the-id',\r\n                selectedOptionId: 'the-selected-option-id',\r\n            };\r\n            const selectedFlatSelectOptionId = FlatSelectSelectors.getSelectedOptionId(\r\n                {flatSelect: [expectedSelectedFlatSelect]},\r\n                {id: expectedSelectedFlatSelect.id}\r\n            );\r\n            expect(expectedSelectedFlatSelect.selectedOptionId).toEqual(selectedFlatSelectOptionId);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=405.bundle.js.map