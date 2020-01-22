(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1351:function(n,o,t){"use strict";t.r(o),o.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\n\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {Svg} from '../../svg/Svg';\r\nimport {CollapsibleConnected} from '../CollapsibleConnected';\r\nimport {CollapsibleInfoBox, CollapsibleInfoBoxProps} from '../CollapsibleInfoBox';\r\n\r\ndescribe('CollapsibleInfoBox', () => {\r\n    const basicProps: CollapsibleInfoBoxProps = {\r\n        id: 'my-collapsible-info-box',\r\n        title: 'wanna-buy-some-magic?',\r\n    };\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => shallow(<CollapsibleInfoBox {...basicProps} />)).not.toThrow();\r\n    });\r\n\r\n    describe('rendering', () => {\r\n        let component: ReactWrapper<CollapsibleInfoBoxProps>;\r\n\r\n        const mountComponent = (props?: Partial<CollapsibleInfoBoxProps>) => {\r\n            if (component && component.length) {\r\n                component.unmount();\r\n            }\r\n            component = mount(\r\n                <Provider store={TestUtils.buildStore()}>\r\n                    <CollapsibleInfoBox {...basicProps} {...props} />\r\n                </Provider>\r\n            );\r\n        };\r\n\r\n        beforeEach(() => {\r\n            mountComponent();\r\n        });\r\n\r\n        it('should render a CollapsibleConnected component', () => {\r\n            expect(component.find(CollapsibleConnected).exists()).toBe(true);\r\n        });\r\n\r\n        it('should display a <h3 /> and a <Svg /> if not a section', () => {\r\n            expect(component.find('h3').exists()).toBe(true);\r\n            expect(component.find(Svg).length).toBe(2);\r\n        });\r\n\r\n        it('should display a <h2 /> instead of a <h3 /> and a <Svg /> if it is a section', () => {\r\n            mountComponent({isSection: true});\r\n\r\n            expect(component.find('h2').exists()).toBe(true);\r\n            expect(component.find('h3').exists()).toBe(false);\r\n            expect(component.find(Svg).length).toBe(1);\r\n        });\r\n\r\n        it('should display the sectionAdditionalContent if there is any and it is a section', () => {\r\n            const sectionAdditionalContent = 'some content';\r\n\r\n            mountComponent({isSection: true, sectionAdditionalContent});\r\n\r\n            expect(component.html()).toContain(sectionAdditionalContent);\r\n        });\r\n\r\n        it('should display the sectionAdditionalContent according to the sectionAdditionalContentCondition if any', () => {\r\n            const sectionAdditionalContent = 'some content';\r\n\r\n            mountComponent({isSection: true, sectionAdditionalContent, sectionAdditionalContentCondition: () => false});\r\n\r\n            expect(component.find('.hidden').length).toBe(1);\r\n\r\n            mountComponent({isSection: true, sectionAdditionalContent, sectionAdditionalContentCondition: () => true});\r\n\r\n            expect(component.find('.hidden').length).toBe(0);\r\n        });\r\n\r\n        it('should have the class passed as a prop for the additional content', () => {\r\n            const classes: string = 'something';\r\n            const sectionAdditionalContent = 'some content';\r\n\r\n            mountComponent({isSection: true, sectionAdditionalContent, sectionAdditionalContentClasses: classes});\r\n\r\n            expect(component.find(`.${classes}`).length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=254.bundle.js.map