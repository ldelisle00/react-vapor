(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{1993:function(e,r,n){"use strict";n.r(r),r.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {TextArea, TextAreaConnected} from '../TextArea';\r\nimport {TextAreaLabel} from '../TextAreaLabel';\r\n\r\ndescribe('TextAreaLabel', () => {\r\n    it('should render without error with TextArea or TextAreaConnected inside it', () => {\r\n        expect(() =>\r\n            shallow(\r\n                <TextAreaLabel label=\"label\">\r\n                    <TextArea id=\"test\" />\r\n                </TextAreaLabel>\r\n            )\r\n        ).not.toThrow();\r\n        expect(() =>\r\n            shallow(\r\n                <TextAreaLabel label=\"label\">\r\n                    <TextAreaConnected id=\"test\" />\r\n                </TextAreaLabel>\r\n            )\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should render with a container div containing the textarea and a label', () => {\r\n        const containerDiv = shallow(\r\n            <TextAreaLabel label=\"label\">\r\n                <TextArea id=\"test\" />\r\n            </TextAreaLabel>\r\n        ).find('div');\r\n        expect(containerDiv.first()).toBeDefined();\r\n        expect(containerDiv.children().length).toBe(2);\r\n        expect(containerDiv.find(TextArea).length).toBe(1);\r\n        expect(containerDiv.find('label').length).toBe(1);\r\n    });\r\n\r\n    it('should have a label with the same id as the textarea', () => {\r\n        const textAreaId = 'text-area-id';\r\n        const containerDiv = shallow(\r\n            <TextAreaLabel label=\"label\">\r\n                <TextArea id={textAreaId} />\r\n            </TextAreaLabel>\r\n        ).find('div');\r\n        expect(containerDiv.find('label').prop('htmlFor')).toBe(textAreaId);\r\n    });\r\n\r\n    it('should render with extra classes on the container div if passed as prop', () => {\r\n        const extraClass = 'extra-class';\r\n\r\n        let component = shallow(\r\n            <TextAreaLabel label=\"label\">\r\n                <TextArea id=\"test\" />\r\n            </TextAreaLabel>\r\n        );\r\n        expect(component.find('div').prop('className')).not.toContain(extraClass);\r\n\r\n        component = shallow(\r\n            <TextAreaLabel label=\"label\" containerClassName={extraClass}>\r\n                <TextArea id=\"test\" />\r\n            </TextAreaLabel>\r\n        );\r\n        expect(component.find('div').prop('className')).toContain(extraClass);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=894.bundle.js.map