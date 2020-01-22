(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{1726:function(n,r,e){"use strict";e.r(r),r.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {Radio} from '../Radio';\r\nimport {IRadioSelectAllProps, RadioSelect} from '../RadioSelect';\r\n\r\ndescribe('<RadioSelect />', () => {\r\n    it('should mount without errors', () => {\r\n        expect(() => {\r\n            shallow(<RadioSelect />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should unmount without errors', () => {\r\n        const wrapper = shallow(<RadioSelect />);\r\n        expect(() => {\r\n            wrapper.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('once mounted', () => {\r\n        let radioSelect: ShallowWrapper<IRadioSelectAllProps>;\r\n        let spy: jasmine.Spy;\r\n\r\n        const firstRadioValue = 'blue';\r\n        const secondRadioValue = 'red';\r\n        const radioName = 'Johnny the almighty magic chicken';\r\n\r\n        const shallowRadioSelect = (props: IRadioSelectAllProps = {}) => {\r\n            spy = jasmine.createSpy('onClick');\r\n            radioSelect = shallow(\r\n                <RadioSelect {...props}>\r\n                    <Radio id=\"radio1\" value={firstRadioValue} onClick={spy} />\r\n                    <Radio id=\"radio2\" value={secondRadioValue} name={radioName} />\r\n                </RadioSelect>\r\n            );\r\n        };\r\n\r\n        it('should call onMount on mount', () => {\r\n            const spyOnMount = jasmine.createSpy('onMount');\r\n            shallowRadioSelect({\r\n                onMount: spyOnMount,\r\n            });\r\n\r\n            expect(spyOnMount).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call onUnmount on unmount', () => {\r\n            const spyOnUnmount = jasmine.createSpy('onUnmount');\r\n            shallowRadioSelect({\r\n                onUnmount: spyOnUnmount,\r\n            });\r\n            radioSelect.unmount();\r\n\r\n            expect(spyOnUnmount).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should set disabled on child if the props disabled is set to true', () => {\r\n            shallowRadioSelect({\r\n                disabled: true,\r\n            });\r\n\r\n            expect(\r\n                radioSelect\r\n                    .find(Radio)\r\n                    .first()\r\n                    .props().disabled\r\n            ).toBe(true);\r\n        });\r\n\r\n        it('should set disabled on child if the child value is present in the disabled values list', () => {\r\n            shallowRadioSelect({\r\n                disabled: false,\r\n                disabledValues: [firstRadioValue, secondRadioValue],\r\n            });\r\n\r\n            expect(\r\n                radioSelect\r\n                    .find(Radio)\r\n                    .first()\r\n                    .props().disabled\r\n            ).toBe(true);\r\n            expect(\r\n                radioSelect\r\n                    .find(Radio)\r\n                    .last()\r\n                    .props().disabled\r\n            ).toBe(true);\r\n        });\r\n\r\n        it('should use the name from the child if defined', () => {\r\n            shallowRadioSelect();\r\n\r\n            expect(\r\n                radioSelect\r\n                    .find(Radio)\r\n                    .last()\r\n                    .props().name\r\n            ).toBe(radioName);\r\n        });\r\n\r\n        it('should use the name prop instead of the child name if its not defined', () => {\r\n            shallowRadioSelect({\r\n                name: 'leaf',\r\n            });\r\n\r\n            expect(\r\n                radioSelect\r\n                    .find(Radio)\r\n                    .first()\r\n                    .props().name\r\n            ).toBe('leaf');\r\n        });\r\n\r\n        it('should pass disabledTooltip prop to each child', () => {\r\n            const disabledTooltip = 'golf';\r\n            shallowRadioSelect({\r\n                disabledTooltip,\r\n            });\r\n\r\n            expect(\r\n                radioSelect\r\n                    .find(Radio)\r\n                    .first()\r\n                    .props().disabledTooltip\r\n            ).toBe(disabledTooltip);\r\n            expect(\r\n                radioSelect\r\n                    .find(Radio)\r\n                    .last()\r\n                    .props().disabledTooltip\r\n            ).toBe(disabledTooltip);\r\n        });\r\n\r\n        it('should set the prop checked of the children with the same value than the radio select', () => {\r\n            shallowRadioSelect({\r\n                value: firstRadioValue,\r\n            });\r\n\r\n            expect(\r\n                radioSelect\r\n                    .find(Radio)\r\n                    .first()\r\n                    .props().checked\r\n            ).toBe(true);\r\n            expect(\r\n                radioSelect\r\n                    .find(Radio)\r\n                    .last()\r\n                    .props().checked\r\n            ).toBe(false);\r\n        });\r\n\r\n        it('should call onClick on children props if defined', () => {\r\n            shallowRadioSelect();\r\n\r\n            expect(\r\n                radioSelect\r\n                    .find(Radio)\r\n                    .first()\r\n                    .props().onClick\r\n            ).toBeDefined();\r\n\r\n            radioSelect\r\n                .find(Radio)\r\n                .first()\r\n                .props()\r\n                .onClick({} as any);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call onChange prop when the child call onClick', () => {\r\n            const spyOnChange = jasmine.createSpy('onChange');\r\n            shallowRadioSelect({\r\n                onChange: spyOnChange,\r\n            });\r\n\r\n            radioSelect\r\n                .find(Radio)\r\n                .first()\r\n                .props()\r\n                .onClick({} as any);\r\n\r\n            expect(spyOnChange).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call onChangeCallback prop when the child call onClick', () => {\r\n            const spyOnChangeCallback = jasmine.createSpy('onChangeCallback');\r\n            shallowRadioSelect({\r\n                onChangeCallback: spyOnChangeCallback,\r\n            });\r\n\r\n            radioSelect\r\n                .find(Radio)\r\n                .first()\r\n                .props()\r\n                .onClick({} as any);\r\n\r\n            expect(spyOnChangeCallback).toHaveBeenCalledTimes(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=635.bundle.js.map