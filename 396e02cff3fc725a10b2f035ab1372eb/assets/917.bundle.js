(window.webpackJsonp=window.webpackJsonp||[]).push([[917],{2014:function(r,n,e){"use strict";e.r(n),n.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {OverlayTrigger} from 'react-bootstrap';\r\nimport * as ReactDOM from 'react-dom';\r\nimport * as _ from 'underscore';\r\nimport {ITooltipProps, Tooltip} from '../Tooltip';\r\n\r\ndescribe('Tooltip', () => {\r\n    let tooltipWrapper: ShallowWrapper<ITooltipProps>;\r\n    const TOOLTIP_PROPS: ITooltipProps = {\r\n        title: 'My test tooltip!',\r\n    };\r\n\r\n    describe('<Tooltip />', () => {\r\n        it('should render without error', () => {\r\n            expect(() => shallow(<Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>)).not.toThrow();\r\n        });\r\n\r\n        it('should mount and unmount/detach without error', () => {\r\n            expect(() => {\r\n                tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>);\r\n                tooltipWrapper.unmount();\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<Tooltip />', () => {\r\n        beforeEach(() => {\r\n            tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>);\r\n        });\r\n\r\n        it('should display the className passed as a prop', () => {\r\n            const newProps: ITooltipProps = _.extend({}, TOOLTIP_PROPS, {className: 'some-class'});\r\n\r\n            tooltipWrapper.setProps(newProps);\r\n\r\n            expect(tooltipWrapper.html()).toContain(newProps.className);\r\n        });\r\n\r\n        it('should display an <OverlayTrigger/>', () => {\r\n            expect(tooltipWrapper.find(OverlayTrigger).length).toBe(1);\r\n        });\r\n\r\n        it('should pass a <BootstrapTooltip/> to the <OverlayTrigger/>', () => {\r\n            expect(tooltipWrapper.find(OverlayTrigger).props().overlay).toBeDefined();\r\n        });\r\n\r\n        it('should display a footer section if one is passed as a prop', () => {\r\n            const newProps: ITooltipProps = _.extend({}, TOOLTIP_PROPS, {footer: 'footer section'});\r\n\r\n            expect(tooltipWrapper.find(OverlayTrigger).props().overlay.props.children[1]).toBeNull();\r\n\r\n            tooltipWrapper.setProps(newProps);\r\n\r\n            expect(tooltipWrapper.find(OverlayTrigger).props().overlay.props.children[1].props.className).toBe(\r\n                'tooltip-footer'\r\n            );\r\n        });\r\n\r\n        it('should not display the tooltip if the title is empty', () => {\r\n            const newProps: ITooltipProps = _.extend({}, {title: ''});\r\n\r\n            expect(tooltipWrapper.find(OverlayTrigger).props().overlay.props.children[1]).toBeNull();\r\n\r\n            tooltipWrapper.setProps(newProps);\r\n\r\n            expect(tooltipWrapper.find(OverlayTrigger).length).toBe(0);\r\n        });\r\n    });\r\n\r\n    describe('<Tooltip />', () => {\r\n        it('should render with a span wrapper if noSpanWrapper prop is not passed', () => {\r\n            const content = <li>test</li>;\r\n            tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>{content}</Tooltip>);\r\n\r\n            expect(\r\n                tooltipWrapper\r\n                    .find('li')\r\n                    .parent()\r\n                    .type()\r\n            ).toBe('span');\r\n        });\r\n\r\n        it('should not render with a span wrapper if noSpanWrapper prop is passed', () => {\r\n            const content = <li>test</li>;\r\n            tooltipWrapper = shallow(\r\n                <Tooltip noSpanWrapper {...TOOLTIP_PROPS}>\r\n                    {content}\r\n                </Tooltip>\r\n            );\r\n\r\n            expect(\r\n                tooltipWrapper\r\n                    .find('li')\r\n                    .parent()\r\n                    .type()\r\n            ).not.toBe('span');\r\n        });\r\n    });\r\n\r\n    describe('behaviour on unmount', () => {\r\n        let el: HTMLElement;\r\n        let customRef: React.RefObject<any>;\r\n\r\n        let findDOMNodeSpy: jasmine.Spy;\r\n        let containsSpy: jasmine.Spy;\r\n        let appendChildSpy: jasmine.Spy;\r\n\r\n        beforeEach(() => {\r\n            el = document.createElement('div');\r\n            customRef = React.createRef();\r\n\r\n            spyOn(React, 'createRef').and.returnValue(customRef);\r\n            findDOMNodeSpy = spyOn(ReactDOM, 'findDOMNode').and.returnValue(el);\r\n            containsSpy = spyOn(document.body, 'contains').and.returnValue(false);\r\n            appendChildSpy = spyOn(document.body, 'appendChild');\r\n\r\n            tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hello</Tooltip>);\r\n            (customRef as any).current = el;\r\n        });\r\n\r\n        it('should re-add the tooltip element on unmount if its not in the DOM', () => {\r\n            tooltipWrapper.unmount();\r\n\r\n            expect(appendChildSpy).toHaveBeenCalledWith(el);\r\n        });\r\n\r\n        it('should not re-add the tooltip element on unmount if the DOM already contain the node', () => {\r\n            containsSpy.and.returnValue(true);\r\n\r\n            tooltipWrapper.unmount();\r\n\r\n            expect(appendChildSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should not re-add the tooltip element on unmount if the html node does not exists', () => {\r\n            findDOMNodeSpy.and.returnValue(null);\r\n\r\n            tooltipWrapper.unmount();\r\n\r\n            expect(appendChildSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should not re-add the tooltip element on unmount if the ref has no current view', () => {\r\n            (customRef as any).current = undefined;\r\n\r\n            tooltipWrapper.unmount();\r\n\r\n            expect(appendChildSpy).not.toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=917.bundle.js.map