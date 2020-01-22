(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1354:function(e,o,r){"use strict";r.r(o),o.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {Svg} from '../../svg/Svg';\r\nimport {CollapsibleToggle} from '../CollapsibleToggle';\r\n\r\ndescribe('CollapsibleToggle', () => {\r\n    it('should render a Svg component with the icon \"arrow-bottom-rounded\" when expanded is false', () => {\r\n        const toggle = shallow(<CollapsibleToggle expanded={false} />);\r\n\r\n        expect(toggle.find(Svg).exists()).toBe(true);\r\n        expect(toggle.find(Svg).props().svgName).toBe('arrow-bottom-rounded');\r\n    });\r\n\r\n    it('should render a Svg component with the icon \"arrow-top-rounded\" when expanded is false', () => {\r\n        const toggle = shallow(<CollapsibleToggle expanded={true} />);\r\n\r\n        expect(toggle.find(Svg).exists()).toBe(true);\r\n        expect(toggle.find(Svg).props().svgName).toBe('arrow-top-rounded');\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=257.bundle.js.map