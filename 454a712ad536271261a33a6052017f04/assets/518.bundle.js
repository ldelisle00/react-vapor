(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{1612:function(n,e,r){"use strict";r.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {Defaults} from '../../../Defaults';\r\nimport {IModalProps, Modal} from '../Modal';\r\n\r\ndescribe('Modal', () => {\r\n    const id: string = 'modal';\r\n\r\n    describe('<Modal />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<Modal id={id} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<Modal />', () => {\r\n        let modal: ReactWrapper<IModalProps, any>;\r\n        let modalInstance: Modal;\r\n\r\n        beforeEach(() => {\r\n            modal = mount(<Modal id={id} />, {attachTo: document.getElementById('App')});\r\n            modalInstance = modal.instance() as Modal;\r\n        });\r\n\r\n        afterEach(() => {\r\n            modal.detach();\r\n        });\r\n\r\n        it('should call prop onRender on mounting if set', () => {\r\n            const renderSpy = jasmine.createSpy('onRender');\r\n\r\n            expect(() => modalInstance.componentWillMount()).not.toThrow();\r\n\r\n            modal.setProps({id: id, onRender: renderSpy});\r\n            modal.unmount();\r\n            modal.mount();\r\n            expect(renderSpy.calls.count()).toBe(1);\r\n        });\r\n\r\n        it('should call prop onDestroy on unmounting if set', () => {\r\n            const destroySpy = jasmine.createSpy('onDestroy');\r\n\r\n            expect(() => modalInstance.componentWillUnmount()).not.toThrow();\r\n\r\n            modal.setProps({id: id, onDestroy: destroySpy});\r\n            modal.mount();\r\n            modal.unmount();\r\n            expect(destroySpy.calls.count()).toBe(1);\r\n        });\r\n\r\n        it('should call the prop closeCallback if it exists when closing the modal', () => {\r\n            jasmine.clock().install();\r\n\r\n            const closeCallbackSpy: jasmine.Spy = jasmine.createSpy('closeCallback');\r\n            modal.setProps({isOpened: true, closeCallback: closeCallbackSpy});\r\n            modal.update();\r\n            modal.setProps({isOpened: false});\r\n            modal.update();\r\n\r\n            jasmine.clock().tick(Defaults.MODAL_TIMEOUT);\r\n\r\n            expect(closeCallbackSpy).toHaveBeenCalledTimes(1);\r\n            jasmine.clock().uninstall();\r\n        });\r\n\r\n        it('should call the prop closeCallback with a timeout if specified when closing the modal', () => {\r\n            jasmine.clock().install();\r\n\r\n            const closeCallbackSpy: jasmine.Spy = jasmine.createSpy('closeCallback');\r\n            modal.setProps({isOpened: true, closeCallback: closeCallbackSpy, closeTimeout: 5});\r\n            modal.update();\r\n            modal.setProps({isOpened: false});\r\n            modal.update();\r\n\r\n            expect(closeCallbackSpy).toHaveBeenCalledTimes(0);\r\n\r\n            jasmine.clock().tick(5);\r\n\r\n            expect(closeCallbackSpy).toHaveBeenCalledTimes(1);\r\n\r\n            jasmine.clock().uninstall();\r\n        });\r\n\r\n        it('should set container class when the container class is specified', () => {\r\n            const containerClass = 'mod-small';\r\n            const classes = [containerClass];\r\n            expect(\r\n                modal\r\n                    .find('div')\r\n                    .first()\r\n                    .html()\r\n            ).not.toContain(containerClass);\r\n\r\n            modal.setProps({id, classes});\r\n            modal.mount();\r\n            expect(\r\n                modal\r\n                    .find('div')\r\n                    .first()\r\n                    .html()\r\n            ).toContain(containerClass);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=518.bundle.js.map