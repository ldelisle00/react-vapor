(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{1710:function(n,o,t){"use strict";t.r(o),o.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IOptionProps, Option} from '../Option';\r\n\r\ndescribe('Option picker', () => {\r\n    const OPTION_BASIC_PROPS: IOptionProps = {\r\n        option: {\r\n            label: 'Option 1',\r\n            value: () => 'optionValue',\r\n        },\r\n        isActive: false,\r\n        onClick: jasmine.createSpy('onClick'),\r\n    };\r\n\r\n    describe('<Option />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<Option {...OPTION_BASIC_PROPS} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<Option />', () => {\r\n        let option: ReactWrapper<IOptionProps, any>;\r\n\r\n        beforeEach(() => {\r\n            option = mount(<Option {...OPTION_BASIC_PROPS} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            option.detach();\r\n        });\r\n\r\n        it('should get the value as a prop', () => {\r\n            const optionProp = option.props().option;\r\n\r\n            expect(optionProp).toBeDefined();\r\n            expect(optionProp).toEqual(OPTION_BASIC_PROPS.option);\r\n        });\r\n\r\n        it('should get if it is active as a prop', () => {\r\n            const isActiveProp = option.props().isActive;\r\n\r\n            expect(isActiveProp).toBeDefined();\r\n            expect(isActiveProp).toEqual(OPTION_BASIC_PROPS.isActive);\r\n        });\r\n\r\n        it('should get what to do on click as a prop', () => {\r\n            const onClickProp = option.props().onClick;\r\n\r\n            expect(onClickProp).toBeDefined();\r\n        });\r\n\r\n        it('should display the option label', () => {\r\n            expect(option.html()).toContain(OPTION_BASIC_PROPS.option.label);\r\n        });\r\n\r\n        it('should have the active class if isActive prop is set to true', () => {\r\n            const activeOptionProps = _.extend({}, OPTION_BASIC_PROPS, {isActive: true});\r\n\r\n            expect(option.find('button').hasClass('active')).toBe(false);\r\n\r\n            option.setProps(activeOptionProps);\r\n\r\n            expect(option.find('button').hasClass('active')).toBe(true);\r\n        });\r\n\r\n        it('should call the onClick prop with the result of the option value when clicking the button', () => {\r\n            option.find('button').simulate('click');\r\n\r\n            expect(OPTION_BASIC_PROPS.onClick).toHaveBeenCalledWith(\r\n                OPTION_BASIC_PROPS.option.value(),\r\n                OPTION_BASIC_PROPS.option.label\r\n            );\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=605.bundle.js.map