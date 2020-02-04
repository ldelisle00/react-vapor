(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{1670:function(e,n,t){"use strict";t.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {IInputProps} from '../../input/Input';\r\nimport {DeletableInput} from '../DeletableInput';\r\n\r\ndescribe('DeletableInput', () => {\r\n    describe('<DeletableInput />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<DeletableInput />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<DeletableInput />', () => {\r\n        let deleteInput: ReactWrapper<IInputProps, any>;\r\n\r\n        beforeEach(() => {\r\n            deleteInput = mount(<DeletableInput />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            deleteInput.detach();\r\n        });\r\n\r\n        it('should call property onBlur when delete button is clicked and prop is specified', () => {\r\n            const blurSpy = jasmine.createSpy('onBlur');\r\n            const deleteButton = deleteInput.find('.input-actions');\r\n\r\n            deleteButton.simulate('click');\r\n            expect(blurSpy).not.toHaveBeenCalled();\r\n\r\n            deleteInput.setProps({onBlur: blurSpy});\r\n            deleteInput.mount();\r\n\r\n            deleteButton.simulate('click');\r\n            expect(blurSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=564.bundle.js.map