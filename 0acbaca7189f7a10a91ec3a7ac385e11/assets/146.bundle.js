(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1248:function(n,r,o){"use strict";o.r(r),r.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport {IActionOptions} from '../Action';\r\nimport {ACTION_SEPARATOR} from '../ActionConstants';\r\nimport {ISecondaryActionsProps, SecondaryActions} from '../SecondaryActions';\r\n\r\ndescribe('Actions', () => {\r\n    const actions: IActionOptions[] = [\r\n        {\r\n            name: 'action',\r\n            link: 'http://coveo.com',\r\n            target: '_blank',\r\n            enabled: true,\r\n        },\r\n        ACTION_SEPARATOR,\r\n        {\r\n            name: 'action2',\r\n            trigger: jasmine.createSpy('triggerMethod'),\r\n            enabled: true,\r\n        },\r\n    ];\r\n\r\n    describe('<SecondaryActions />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<SecondaryActions actions={actions} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('SecondaryActions', () => {\r\n        let secondaryActions: ReactWrapper<ISecondaryActionsProps, any>;\r\n\r\n        beforeEach(() => {\r\n            secondaryActions = mount(<SecondaryActions actions={actions} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            secondaryActions.detach();\r\n        });\r\n\r\n        it('should get the actions as a prop', () => {\r\n            const actionsProp = secondaryActions.props().actions;\r\n\r\n            expect(actionsProp).toBeDefined();\r\n            expect(actionsProp.length).toBe(actions.length);\r\n            expect(actionsProp[0]).toEqual(jasmine.objectContaining(actions[0]));\r\n        });\r\n\r\n        it('should display a <ActionsDropdown /> if there is more than one action', () => {\r\n            expect(secondaryActions.find('ActionsDropdown').length).toBe(1);\r\n\r\n            secondaryActions.setProps({actions: [actions[0]]});\r\n\r\n            expect(secondaryActions.find('ActionsDropdown').length).toBe(0);\r\n        });\r\n\r\n        it('should display a <PrimaryAction /> if there is only one action', () => {\r\n            expect(secondaryActions.find('PrimaryAction').length).toBe(0);\r\n\r\n            secondaryActions.setProps({actions: [actions[0]]});\r\n\r\n            expect(secondaryActions.find('PrimaryAction').length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=146.bundle.js.map