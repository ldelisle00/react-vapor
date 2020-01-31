(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{1564:function(e,n,l){"use strict";l.r(n),n.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {TooltipPlacement} from '../../utils/TooltipUtils';\r\nimport {Svg} from '../svg/Svg';\r\nimport {Tooltip} from '../tooltip/Tooltip';\r\nimport {LabeledValue} from './LabeledValue';\r\n\r\ndescribe('LabeledValue', () => {\r\n    const props = {label: 'label', value: 'value'};\r\n\r\n    it('should render without error with simple props', () => {\r\n        expect(() => {\r\n            shallow(<LabeledValue {...props} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render without error with value as jsx', () => {\r\n        expect(() => {\r\n            shallow(<LabeledValue {...props} value={<div>value</div>} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render without error with fullRow', () => {\r\n        expect(() => {\r\n            shallow(<LabeledValue {...props} fullRow />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render without error with informations', () => {\r\n        expect(() => {\r\n            shallow(<LabeledValue {...props} information=\"some info\" />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render without error with informations and specific info placement', () => {\r\n        expect(() => {\r\n            shallow(<LabeledValue {...props} information=\"some info\" informationPlacement={TooltipPlacement.Bottom} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('LabeledValue content', () => {\r\n        const testInformations = 'test informations';\r\n        let labeledValue: ShallowWrapper<any, any>;\r\n\r\n        beforeEach(() => {\r\n            labeledValue = shallow(<LabeledValue {...props} information={testInformations} />);\r\n        });\r\n\r\n        it('should render with the label inside the label section', () => {\r\n            expect(labeledValue.find('.label').html()).toContain(props.label);\r\n        });\r\n\r\n        it('should render with the value inside the value section', () => {\r\n            expect(labeledValue.find('.value').html()).toContain(props.value);\r\n        });\r\n\r\n        it('should render with the value inside the value section if value is a JSX.element', () => {\r\n            const jsxValue: JSX.Element = <div className=\"jsx-value\">value</div>;\r\n            labeledValue.setProps({value: jsxValue}).update();\r\n            expect(labeledValue.find('.value').find('.jsx-value').length).toBe(1);\r\n        });\r\n\r\n        it('should render a Tooltip with a prop title having the value of the information prop', () => {\r\n            expect(labeledValue.find(Tooltip).prop('title')).toBe(testInformations);\r\n        });\r\n\r\n        it('should render a Tooltip with a placement prop set to TooltipPlacement.Top by default', () => {\r\n            expect(labeledValue.find(Tooltip).prop('placement')).toBe(TooltipPlacement.Top);\r\n        });\r\n\r\n        it('should render a Tooltip with a placement prop having the value of informationPlacement if set', () => {\r\n            labeledValue.setProps({informationPlacement: TooltipPlacement.Bottom}).update();\r\n            expect(labeledValue.find(Tooltip).prop('placement')).toBe(TooltipPlacement.Bottom);\r\n        });\r\n\r\n        it('should render an svg inside the tooltip having the \"info-14\" name', () => {\r\n            expect(\r\n                labeledValue\r\n                    .find(Tooltip)\r\n                    .find(Svg)\r\n                    .prop('svgName')\r\n            ).toBe('info-14');\r\n        });\r\n\r\n        it('should have the padding prop set to true and the class \"padded\" by default', () => {\r\n            expect(LabeledValue.defaultProps.padding).toBe(true);\r\n            expect(labeledValue.find('.box').hasClass('padded')).toBe(true);\r\n        });\r\n\r\n        it('should not have the class \"padded\" if prop padding is set to false', () => {\r\n            labeledValue.setProps({padding: false});\r\n            expect(labeledValue.find('.box').hasClass('padded')).toBe(false);\r\n        });\r\n\r\n        it('should have the singleLine prop set to true and not have the singleLine class by default', () => {\r\n            expect(LabeledValue.defaultProps.singleLine).toBeFalsy();\r\n            expect(labeledValue.find('.label').hasClass('inline-block')).toBe(false);\r\n            expect(labeledValue.find('.value').hasClass('inline-block')).toBe(false);\r\n        });\r\n\r\n        it('should have the singleLine class if prop singleLine is set to true', () => {\r\n            labeledValue.setProps({singleLine: true});\r\n            expect(labeledValue.find('.label').hasClass('inline-block')).toBe(true);\r\n            expect(labeledValue.find('.value').hasClass('inline-block')).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=458.bundle.js.map