(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1323:function(r,n,t){"use strict";t.r(n),n.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {XGrid} from '../XGrid';\r\nimport {XYChartContextMock} from './XYChartContextMock';\r\n\r\ndescribe('<XGrid />', () => {\r\n    it('should not throw with the default context', () => {\r\n        expect(() => {\r\n            shallow(<XGrid />);\r\n            shallow(<XGrid padding={10} />);\r\n            shallow(<XGrid padding={30} color=\"red\" />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should not throw with a custom context', () => {\r\n        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);\r\n\r\n        expect(() => {\r\n            shallow(<XGrid />);\r\n            shallow(<XGrid padding={10} />);\r\n            shallow(<XGrid padding={30} color=\"red\" />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render a line', () => {\r\n        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);\r\n\r\n        const component = shallow(<XGrid />);\r\n        expect(component.find('line').exists()).toBe(true);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=212.bundle.js.map