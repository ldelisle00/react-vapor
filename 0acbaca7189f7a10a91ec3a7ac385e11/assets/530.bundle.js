(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{1625:function(r,o,n){"use strict";n.r(o),o.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {IModalFooterProps, ModalFooter} from '../ModalFooter';\r\n\r\ndescribe('ModalFooter', () => {\r\n    describe('<ModalFooter />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<ModalFooter />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<ModalFooter />', () => {\r\n        let modalFooter: ReactWrapper<IModalFooterProps, any>;\r\n\r\n        beforeEach(() => {\r\n            modalFooter = mount(<ModalFooter />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            modalFooter.detach();\r\n        });\r\n\r\n        it('should set class when the class is specified', () => {\r\n            const containerClass = 'mod-header-padding';\r\n            const classes = [containerClass];\r\n            expect(\r\n                modalFooter\r\n                    .find('div')\r\n                    .first()\r\n                    .html()\r\n            ).not.toContain(containerClass);\r\n\r\n            modalFooter.setProps({classes});\r\n            modalFooter.mount();\r\n            expect(\r\n                modalFooter\r\n                    .find('div')\r\n                    .first()\r\n                    .html()\r\n            ).toContain(containerClass);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=530.bundle.js.map