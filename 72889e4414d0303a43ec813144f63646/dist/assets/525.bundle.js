(window.webpackJsonp=window.webpackJsonp||[]).push([[525],{1621:function(n,r,o){"use strict";o.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {IModalBodyProps, ModalBody} from '../ModalBody';\r\n\r\ndescribe('ModalBody', () => {\r\n    describe('<ModalBody />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<ModalBody />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<ModalBody />', () => {\r\n        let modalBody: ReactWrapper<IModalBodyProps, any>;\r\n\r\n        beforeEach(() => {\r\n            modalBody = mount(<ModalBody />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            modalBody.detach();\r\n        });\r\n\r\n        it('should set class when the class is specified', () => {\r\n            const containerClass = 'mod-header-padding';\r\n            const classes = [containerClass];\r\n            expect(\r\n                modalBody\r\n                    .find('div')\r\n                    .first()\r\n                    .html()\r\n            ).not.toContain(containerClass);\r\n\r\n            modalBody.setProps({classes});\r\n            modalBody.mount();\r\n            expect(\r\n                modalBody\r\n                    .find('div')\r\n                    .first()\r\n                    .html()\r\n            ).toContain(containerClass);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=525.bundle.js.map