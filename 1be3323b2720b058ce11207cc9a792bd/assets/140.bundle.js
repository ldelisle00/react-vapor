(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1253:function(n,r,t){"use strict";t.r(r),r.default="import {shallow} from 'enzyme';\r\nimport {shallowWithStore} from 'enzyme-redux';\r\nimport * as React from 'react';\r\n\r\nimport {getStoreMock} from '../../../utils/tests/TestUtils';\r\nimport {IInlinePromptOptions, InlinePrompt} from '../../inlinePrompt/InlinePrompt';\r\nimport {ActionBar} from '../ActionBar';\r\nimport {PrimaryAction} from '../PrimaryAction';\r\nimport {SecondaryActions} from '../SecondaryActions';\r\n\r\ndescribe('ActionsBar', () => {\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            const actionBar = shallow(<ActionBar />);\r\n            actionBar.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should call onRender prop if set when mounting', () => {\r\n        const onRenderSpy = jasmine.createSpy('onRender');\r\n        shallow(<ActionBar onRender={onRenderSpy} />);\r\n        expect(onRenderSpy).toHaveBeenCalled();\r\n    });\r\n\r\n    it('should call onDestroy prop if set when will unmount', () => {\r\n        const onDestroySpy = jasmine.createSpy('onDestroy');\r\n\r\n        const actionBar = shallow(<ActionBar onDestroy={onDestroySpy} />);\r\n        actionBar.unmount();\r\n        expect(onDestroySpy).toHaveBeenCalled();\r\n    });\r\n\r\n    it('should display a <PrimaryAction /> component if there is a primary action', () => {\r\n        expect(\r\n            shallow(<ActionBar actions={[{enabled: true, primary: true}]} />)\r\n                .childAt(1)\r\n                .dive()\r\n                .find(PrimaryAction).length\r\n        ).toBe(1);\r\n\r\n        expect(\r\n            shallow(<ActionBar actions={[{enabled: true, primary: false}]} />)\r\n                .childAt(1)\r\n                .dive()\r\n                .find(PrimaryAction).length\r\n        ).toBe(0);\r\n    });\r\n\r\n    it('should display a <SecondaryActions /> component if there are secondary actions', () => {\r\n        expect(\r\n            shallow(<ActionBar actions={[{enabled: true, primary: false}]} />)\r\n                .childAt(1)\r\n                .dive()\r\n                .find(SecondaryActions)\r\n                .exists()\r\n        ).toBe(true);\r\n\r\n        expect(\r\n            shallow(<ActionBar actions={[{enabled: true, primary: true}]} />)\r\n                .childAt(1)\r\n                .dive()\r\n                .find(SecondaryActions)\r\n                .exists()\r\n        ).toBe(false);\r\n    });\r\n\r\n    it('should display an <InlinePrompt /> and no actions if there is a prompt', () => {\r\n        const inlinePromptOptions: IInlinePromptOptions = {\r\n            onClick: jasmine.createSpy('onClick'),\r\n            userChoice: {},\r\n        };\r\n        const inlinePrompt = shallowWithStore(\r\n            <ActionBar prompt={{id: '💎', options: inlinePromptOptions}} />,\r\n            getStoreMock()\r\n        )\r\n            .childAt(1)\r\n            .dive()\r\n            .childAt(0)\r\n            .dive()\r\n            .childAt(0)\r\n            .dive()\r\n            .find(InlinePrompt);\r\n\r\n        expect(inlinePrompt.exists()).toBe(true);\r\n    });\r\n\r\n    it('should display an <ItemFilter /> if there is an itemFilter prop', () => {\r\n        const itemFilter = shallow(<ActionBar itemFilter=\"💎\" />)\r\n            .childAt(0)\r\n            .dive();\r\n\r\n        expect(itemFilter.exists()).toBe(true);\r\n    });\r\n\r\n    it('should call clearItemFilter if defined when clicking the \"item-filter-clear\" button', () => {\r\n        const clearItemFilterSpy = jasmine.createSpy('clearItemFilter');\r\n        const itemFilter = shallow(<ActionBar itemFilter=\"💎\" clearItemFilter={clearItemFilterSpy} />)\r\n            .childAt(0)\r\n            .dive();\r\n\r\n        (itemFilter as any).prop('onClear')();\r\n\r\n        expect(clearItemFilterSpy).toHaveBeenCalled();\r\n    });\r\n\r\n    it('should have all the default action bar classes', () => {\r\n        const actionBar = shallow(<ActionBar />);\r\n        ActionBar.defaultClasses.forEach((className) => {\r\n            expect(actionBar.hasClass(className)).toBe(true);\r\n        });\r\n    });\r\n\r\n    it('should not have the default action bar classes if \"removeDefaultContainerClasses\" prop is truthy', () => {\r\n        const actionBar = shallow(<ActionBar removeDefaultContainerClasses />);\r\n        ActionBar.defaultClasses.forEach((className) => {\r\n            expect(actionBar.hasClass(className)).toBe(false);\r\n        });\r\n    });\r\n\r\n    it('should add extra classes to the container div if extra container classes are passed', () => {\r\n        const actionBar = shallow(<ActionBar extraContainerClasses={['💎']} />);\r\n\r\n        expect(actionBar.hasClass('💎')).toBe(true);\r\n    });\r\n\r\n    it('should not have the mod-deactivate-pointer class if the action bar is not loading', () => {\r\n        const actionBar = shallow(<ActionBar />);\r\n\r\n        expect(actionBar.hasClass('mod-deactivate-pointer')).toBe(false);\r\n    });\r\n\r\n    it('should have the mod-deactivate-pointer class if the action bar is loading', () => {\r\n        const actionBar = shallow(<ActionBar isLoading />);\r\n\r\n        expect(actionBar.hasClass('mod-deactivate-pointer')).toBe(true);\r\n    });\r\n\r\n    it('should add the class small-actions-container if the props withSmallActions is set to true', () => {\r\n        const actionBar = shallow(<ActionBar withSmallActions />);\r\n\r\n        expect(actionBar.hasClass('small-actions-container')).toBe(true);\r\n    });\r\n\r\n    it('should set the width on the bar if there is one sent as a prop', () => {\r\n        const actionBar = shallow(<ActionBar width={90} />);\r\n\r\n        expect(actionBar.get(0).props.style).toEqual(jasmine.objectContaining({width: 90}));\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=140.bundle.js.map