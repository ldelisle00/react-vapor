(window.webpackJsonp=window.webpackJsonp||[]).push([[764],{1862:function(r,e,n){"use strict";n.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {ISvgProps, Svg} from '../Svg';\r\n\r\ndescribe('Svg', () => {\r\n    let svg: ReactWrapper<ISvgProps, any>;\r\n\r\n    const BASIC_SVG: ISvgProps = {\r\n        svgName: 'clear',\r\n        className: 'icon',\r\n        svgClass: 'fill-medium-blue',\r\n    };\r\n\r\n    const INVALID_SVG_NAME: ISvgProps = {\r\n        svgName: 'some-invalid-svg-name',\r\n        className: 'icon',\r\n        svgClass: 'fill-medium-blue',\r\n    };\r\n\r\n    const DASHED_SVG_NAME: ISvgProps = {\r\n        svgName: 'source-custom',\r\n        className: 'icon',\r\n        svgClass: 'fill-medium-blue',\r\n    };\r\n\r\n    const CAMELIZED_SVG_NAME: ISvgProps = {\r\n        svgName: 'sourceCustom',\r\n        className: 'icon',\r\n        svgClass: 'fill-medium-blue',\r\n    };\r\n\r\n    it('should render without error', () => {\r\n        expect(() => shallow(<Svg {...BASIC_SVG} />)).not.toThrow();\r\n    });\r\n\r\n    describe('<Svg />', () => {\r\n        const mountWithProps = (props: ISvgProps) => {\r\n            svg = mount(<Svg {...props} />, {attachTo: document.getElementById('App')});\r\n        };\r\n\r\n        afterEach(() => {\r\n            svg.detach();\r\n        });\r\n\r\n        it('should mount and unmount/detach without error', () => {\r\n            expect(() => {\r\n                mountWithProps(BASIC_SVG);\r\n            }).not.toThrow();\r\n\r\n            expect(() => {\r\n                svg.unmount();\r\n                svg.detach();\r\n            }).not.toThrow();\r\n        });\r\n\r\n        describe('Valid svg name', () => {\r\n            let svgDomNode: SVGSVGElement;\r\n\r\n            beforeEach(() => {\r\n                mountWithProps(BASIC_SVG);\r\n                svgDomNode = svg.getDOMNode().querySelector('svg');\r\n            });\r\n\r\n            it('should render a non-empty svg tag', () => {\r\n                expect(svgDomNode).toBeDefined();\r\n                expect(svgDomNode.hasChildNodes()).toBe(true);\r\n            });\r\n\r\n            it('should render the svgClass if specified as props on the svg tag', () => {\r\n                expect(svgDomNode.classList.toString()).toBe(BASIC_SVG.svgClass);\r\n            });\r\n        });\r\n\r\n        describe('Invalid svg name', () => {\r\n            beforeEach(() => {\r\n                mountWithProps(INVALID_SVG_NAME);\r\n            });\r\n\r\n            it('should render an empty svg tag', () => {\r\n                expect(svg.find('svg').exists()).toBe(true);\r\n            });\r\n\r\n            it('should render the svgClass if specified as props on the svg tag', () => {\r\n                expect(svg.find('svg').hasClass(INVALID_SVG_NAME.svgClass)).toBe(true);\r\n            });\r\n\r\n            it('should render className prop on the container', () => {\r\n                expect(svg.hasClass(INVALID_SVG_NAME.className)).toBe(true);\r\n            });\r\n        });\r\n\r\n        describe('Dashed svg name', () => {\r\n            let svgDomNode: SVGSVGElement;\r\n\r\n            beforeEach(() => {\r\n                mountWithProps(DASHED_SVG_NAME);\r\n                svgDomNode = svg.getDOMNode().querySelector('svg');\r\n            });\r\n\r\n            it('should render an non-empty svg tag', () => {\r\n                expect(svgDomNode).toBeDefined();\r\n                expect(svgDomNode.hasChildNodes()).toBe(true);\r\n            });\r\n\r\n            it('should render the svgClass if specified as props on the svg tag', () => {\r\n                expect(svgDomNode.classList.toString()).toBe(DASHED_SVG_NAME.svgClass);\r\n            });\r\n\r\n            it('should render className prop on the container', () => {\r\n                expect(svg.hasClass(DASHED_SVG_NAME.className)).toBe(true);\r\n            });\r\n        });\r\n\r\n        describe('Camelized svg name', () => {\r\n            let svgDomNode: SVGSVGElement;\r\n\r\n            beforeEach(() => {\r\n                mountWithProps(CAMELIZED_SVG_NAME);\r\n                svgDomNode = svg.getDOMNode().querySelector('svg');\r\n            });\r\n\r\n            it('should render an non-empty svg tag', () => {\r\n                expect(svgDomNode).toBeDefined();\r\n                expect(svgDomNode.hasChildNodes()).toBe(true);\r\n            });\r\n\r\n            it('should render the svgClass if specified as props on the svg tag', () => {\r\n                expect(svgDomNode.classList.toString()).toBe(CAMELIZED_SVG_NAME.svgClass);\r\n            });\r\n\r\n            it('should render className prop on the container', () => {\r\n                expect(svg.hasClass(CAMELIZED_SVG_NAME.className)).toBe(true);\r\n            });\r\n        });\r\n\r\n        it('should render the same svg for both of its names', () => {\r\n            mountWithProps(DASHED_SVG_NAME);\r\n\r\n            const dashedSVG = svg.getDOMNode().querySelector('svg').innerHTML;\r\n\r\n            mountWithProps(CAMELIZED_SVG_NAME);\r\n\r\n            const camelizedSVG = svg.getDOMNode().querySelector('svg').innerHTML;\r\n\r\n            expect(dashedSVG).toBe(camelizedSVG);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=764.bundle.js.map