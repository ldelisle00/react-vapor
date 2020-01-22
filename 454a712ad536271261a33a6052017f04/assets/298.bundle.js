(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1393:function(o,t,n){"use strict";n.r(t),t.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Tooltip} from '../../tooltip/Tooltip';\r\nimport {ISetToNowProps, SET_TO_NOW_DEFAULT_TOOLTIP, SetToNowButton} from '../SetToNowButton';\r\n\r\ndescribe('Date picker', () => {\r\n    const BUTTON_BASIC_PROPS: ISetToNowProps = {\r\n        onClick: jasmine.createSpy('onClick'),\r\n    };\r\n\r\n    describe('<SetToNowButton />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<SetToNowButton {...BUTTON_BASIC_PROPS} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<SetToNowButton />', () => {\r\n        let setToNowButton: ReactWrapper<ISetToNowProps, any>;\r\n\r\n        beforeEach(() => {\r\n            setToNowButton = mount(<SetToNowButton {...BUTTON_BASIC_PROPS} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            setToNowButton.detach();\r\n        });\r\n\r\n        it('should get what to do on click as a prop', () => {\r\n            const onClickProp = setToNowButton.props().onClick;\r\n\r\n            expect(onClickProp).toBeDefined();\r\n        });\r\n\r\n        it('should display a <Svg /> component', () => {\r\n            expect(setToNowButton.find('Svg').length).toBe(1);\r\n        });\r\n\r\n        it('should display a <Tooltip /> component', () => {\r\n            expect(setToNowButton.find('Tooltip').length).toBe(1);\r\n        });\r\n\r\n        it('should use the tooltip passed as a prop or the default one', () => {\r\n            const propsWithTooltip: ISetToNowProps = _.extend({}, BUTTON_BASIC_PROPS, {\r\n                tooltip: 'We now have a custom tooltip',\r\n            });\r\n            expect(setToNowButton.find(Tooltip).props().title).toBe(SET_TO_NOW_DEFAULT_TOOLTIP);\r\n\r\n            setToNowButton.setProps(propsWithTooltip);\r\n\r\n            expect(setToNowButton.find(Tooltip).props().title).toBe(propsWithTooltip.tooltip);\r\n        });\r\n\r\n        it('should call the onClick prop when clicking the button', () => {\r\n            setToNowButton.find('button').simulate('click');\r\n\r\n            expect(BUTTON_BASIC_PROPS.onClick).toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=298.bundle.js.map