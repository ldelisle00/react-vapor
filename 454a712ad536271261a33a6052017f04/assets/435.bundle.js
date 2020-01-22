(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1530:function(r,n,e){"use strict";e.r(n),n.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IInlinePromptOptions, InlinePrompt, InlinePromptConnected} from '../InlinePrompt';\r\nimport {addPrompt} from '../InlinePromptActions';\r\n\r\ndescribe('InlinePrompt', () => {\r\n    let id: string;\r\n    let options: IInlinePromptOptions;\r\n\r\n    describe('InlinePromptView', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let inlinePrompt: ReactWrapper;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        beforeEach(() => {\r\n            id = 'filter-box';\r\n            options = {\r\n                onClick: jasmine.createSpy('onClick'),\r\n                userChoice: {\r\n                    icon: 'icon',\r\n                    description: 'description',\r\n                    cancel: 'cancel',\r\n                    choices: {\r\n                        confirm: 'confirm',\r\n                        other: 'other',\r\n                        newChoice: 'some other choice',\r\n                    },\r\n                },\r\n                isOpened: false,\r\n                className: 'some-class',\r\n            };\r\n\r\n            store = TestUtils.buildStore();\r\n\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <InlinePromptConnected id={id} options={options} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            inlinePrompt = wrapper.find(InlinePrompt).first();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        it('should remove the prompt from the store on cancel', () => {\r\n            store.dispatch(addPrompt(id, options));\r\n            expect(_.findWhere(store.getState().prompts, {id: id})).toBeDefined();\r\n\r\n            (inlinePrompt as any).props().onCancel();\r\n            expect(_.findWhere(store.getState().prompts, {id: id})).not.toBeDefined();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=435.bundle.js.map