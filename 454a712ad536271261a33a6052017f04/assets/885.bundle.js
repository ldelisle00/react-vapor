(window.webpackJsonp=window.webpackJsonp||[]).push([[885],{1971:function(n,t,o){"use strict";o.r(t),t.default="// tslint:disable-next-line:no-unused-variable\r\nimport {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Toast} from '../Toast';\r\nimport {IToastContainerProps, ToastContainer} from '../ToastContainer';\r\n\r\ndescribe('Toasts', () => {\r\n    let component: ReactWrapper<IToastContainerProps, {}>;\r\n    let basicProps: IToastContainerProps;\r\n    let instance: ToastContainer;\r\n\r\n    describe('<ToastContainer />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => shallow(<ToastContainer />)).not.toThrow();\r\n        });\r\n\r\n        it('should render without errors with children', () => {\r\n            expect(() =>\r\n                shallow(\r\n                    <ToastContainer>\r\n                        <a href=\"#\">Hello</a>\r\n                    </ToastContainer>\r\n                )\r\n            ).not.toThrow();\r\n            expect(() =>\r\n                shallow(\r\n                    <ToastContainer>\r\n                        <Toast title=\"test\" />\r\n                    </ToastContainer>\r\n                )\r\n            ).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<ToastContainer />', () => {\r\n        beforeEach(() => {\r\n            basicProps = {};\r\n            component = mount(<ToastContainer {...basicProps} />, {attachTo: document.getElementById('App')});\r\n            instance = component.instance() as ToastContainer;\r\n        });\r\n\r\n        afterEach(() => {\r\n            component.detach();\r\n        });\r\n\r\n        it('should call prop onRender on mounting if set', () => {\r\n            const renderSpy = jasmine.createSpy('onRender');\r\n            const newToastAttributes = _.extend({}, basicProps, {onRender: renderSpy});\r\n\r\n            expect(() => instance.componentWillMount()).not.toThrow();\r\n\r\n            component.unmount();\r\n            component.setProps(newToastAttributes).mount();\r\n            expect(renderSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call prop onDestroy on unmounting if set', () => {\r\n            const destroySpy = jasmine.createSpy('onDestroy');\r\n            const newToastAttributes = _.extend({}, basicProps, {onDestroy: destroySpy});\r\n\r\n            expect(() => instance.componentWillUnmount()).not.toThrow();\r\n\r\n            component.setProps(newToastAttributes).mount();\r\n\r\n            component.unmount();\r\n            expect(destroySpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should be possible to pass toasts in props', () => {\r\n            const newToastAttributes = _.extend({}, basicProps, {\r\n                toasts: [{id: 'toast-id', title: 'some toast title'}],\r\n            });\r\n\r\n            component.setProps(newToastAttributes);\r\n\r\n            expect(() => component.mount()).not.toThrow();\r\n            expect(component.find(Toast).length).toBe(1);\r\n        });\r\n\r\n        it('should be call prop onCloseToast when a toast is closed', () => {\r\n            const onCloseToast = jasmine.createSpy('onCloseToast');\r\n            let newToastAttributes = _.extend({}, basicProps, {toasts: [{id: 'toast-id', title: 'some toast title'}]});\r\n\r\n            component.setProps(newToastAttributes).mount();\r\n\r\n            component\r\n                .find(Toast)\r\n                .props()\r\n                .onClose();\r\n            expect(onCloseToast).toHaveBeenCalledTimes(0);\r\n\r\n            newToastAttributes = _.extend({}, newToastAttributes, {onCloseToast});\r\n            component.setProps(newToastAttributes).mount();\r\n\r\n            component\r\n                .find(Toast)\r\n                .props()\r\n                .onClose();\r\n            expect(onCloseToast).toHaveBeenCalledTimes(1);\r\n            expect(onCloseToast).toHaveBeenCalledWith(newToastAttributes.toasts[0].id);\r\n        });\r\n\r\n        it('should not throw if toast method onClose is not defined', () => {\r\n            const newToastAttributes = _.extend({}, basicProps, {\r\n                toasts: [{id: 'toast-id', title: 'some toast title'}],\r\n            });\r\n\r\n            component.setProps(newToastAttributes).mount();\r\n            expect(() =>\r\n                component\r\n                    .find(Toast)\r\n                    .props()\r\n                    .onClose()\r\n            ).not.toThrow();\r\n        });\r\n\r\n        it('should call toast method onClose when defined', () => {\r\n            const onCloseSpy = jasmine.createSpy('onClose');\r\n            const newToastAttributes = _.extend({}, basicProps, {\r\n                toasts: [{id: 'toast-id', title: 'some toast title', onClose: onCloseSpy}],\r\n            });\r\n            component.setProps(newToastAttributes).mount();\r\n            component\r\n                .find(Toast)\r\n                .props()\r\n                .onClose();\r\n            expect(onCloseSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=885.bundle.js.map