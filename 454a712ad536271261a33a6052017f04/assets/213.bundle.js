(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1312:function(r,n,o){"use strict";o.r(n),n.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {YGrid} from '../YGrid';\r\n\r\ndescribe('<YGrid />', () => {\r\n    it('should not throw', () => {\r\n        expect(() => {\r\n            shallow(<YGrid />);\r\n            shallow(<YGrid padding={10} />);\r\n            shallow(<YGrid padding={30} color=\"red\" />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render a line', () => {\r\n        const component = shallow(<YGrid />);\r\n        expect(component.find('line').exists()).toBe(true);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=213.bundle.js.map