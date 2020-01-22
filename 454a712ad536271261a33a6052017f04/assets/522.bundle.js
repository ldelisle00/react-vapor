(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{1616:function(o,e,n){"use strict";n.r(e),e.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as ReactModal from 'react-modal';\r\n\r\nimport {ModalBody} from '../ModalBody';\r\nimport {ModalComposite} from '../ModalComposite';\r\nimport {ModalFooter} from '../ModalFooter';\r\nimport {ModalHeader} from '../ModalHeader';\r\n\r\ndescribe('ModalComposite', () => {\r\n    it('should not throw when rendering and unmounting', () => {\r\n        expect(() => {\r\n            const modalComposite = shallow(<ModalComposite />);\r\n            modalComposite.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should render a ReactModal component', () => {\r\n        const modalComposite = shallow(<ModalComposite />);\r\n\r\n        expect(modalComposite.find(ReactModal).exists()).toBe(true);\r\n    });\r\n\r\n    it('should pass down any ReactModal.Props to the ReactModal component', () => {\r\n        const modalComposite = shallow(<ModalComposite shouldCloseOnEsc={false} shouldCloseOnOverlayClick={false} />);\r\n\r\n        expect(modalComposite.find(ReactModal).props().shouldCloseOnEsc).toBe(false);\r\n        expect(modalComposite.find(ReactModal).props().shouldCloseOnOverlayClick).toBe(false);\r\n    });\r\n\r\n    it('should call the onRender prop if defined on mount', () => {\r\n        const onRenderSpy = jasmine.createSpy('onRender');\r\n\r\n        shallow(<ModalComposite onRender={onRenderSpy} />);\r\n\r\n        expect(onRenderSpy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should call the onDestroy prop if defined on unmount', () => {\r\n        const onDestroySpy = jasmine.createSpy('onDestroy');\r\n\r\n        const modalComposite = shallow(<ModalComposite onDestroy={onDestroySpy} />);\r\n        modalComposite.unmount();\r\n\r\n        expect(onDestroySpy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should render a ModalHeader inside the modal content', () => {\r\n        const modalComposite = shallow(<ModalComposite isOpened title={'my title'} />).dive();\r\n        const modalContent = modalComposite.find('.modal-content');\r\n\r\n        expect(modalContent.exists()).toBe(true, 'should exists');\r\n        expect(modalContent.find(ModalHeader).exists()).toBe(true);\r\n    });\r\n\r\n    it('should render modal header children inside the modal header', () => {\r\n        const modalHeaderChildren = <span>A bird in the hand is worth two in the bush.</span>;\r\n        const modalComposite = shallow(\r\n            <ModalComposite isOpened modalHeaderChildren={modalHeaderChildren} title={'patate'} />\r\n        ).dive();\r\n\r\n        expect(modalComposite.find(ModalHeader).contains(modalHeaderChildren)).toBe(true);\r\n    });\r\n\r\n    it('should render modal body children inside the modal body', () => {\r\n        const modalBodyChildren = <span>All that glitters is not gold.</span>;\r\n        const modalComposite = shallow(<ModalComposite isOpened modalBodyChildren={modalBodyChildren} />).dive();\r\n\r\n        expect(modalComposite.find(ModalBody).contains(modalBodyChildren)).toBe(true);\r\n    });\r\n\r\n    it('should render modal footer children inside the modal footer', () => {\r\n        const modalFooterChildren = <span>A drowning man will clutch at a straw.</span>;\r\n        const modalComposite = shallow(<ModalComposite isOpened modalFooterChildren={modalFooterChildren} />).dive();\r\n\r\n        expect(modalComposite.find(ModalFooter).contains(modalFooterChildren)).toBe(true);\r\n    });\r\n\r\n    it('should call the closeCallback prop after the modal has closed', () => {\r\n        const closeCallbackSpy = jasmine.createSpy('closeCallback');\r\n        const modalComposite = shallow(<ModalComposite closeCallback={closeCallbackSpy} />);\r\n\r\n        modalComposite.prop('onAfterClose')();\r\n\r\n        expect(closeCallbackSpy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should add a \"layer-x\" class to the modal overlay where x equals the layer prop value', () => {\r\n        const modalComposite = shallow(<ModalComposite isOpened layer={3} />);\r\n        const overlayClasses = modalComposite.find(ReactModal).props().overlayClassName as ReactModal.Classes;\r\n\r\n        expect(overlayClasses.base).toContain('layer-3');\r\n    });\r\n\r\n    it('should not add any \"layer-x\" class to the modal overlay when the layer is smaller than 1', () => {\r\n        const modalComposite = shallow(<ModalComposite isOpened layer={0} />);\r\n        const overlayClasses = modalComposite.find(ReactModal).props().overlayClassName as ReactModal.Classes;\r\n\r\n        expect(overlayClasses.base).not.toContain('layer-0');\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=522.bundle.js.map