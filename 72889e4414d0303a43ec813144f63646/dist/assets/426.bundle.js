(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{1523:function(r,e,n){"use strict";n.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ITabProps} from '../../tab/Tab';\r\nimport {TabConnected} from '../../tab/TabConnected';\r\nimport {TabNavigation} from '../../tab/TabNavigation';\r\nimport {ITabsHeaderProps, TabsHeader} from '../TabsHeader';\r\n\r\ndescribe('<TabsHeader/>', () => {\r\n    let tabsHeaderComponent: ReactWrapper<ITabsHeaderProps, any>;\r\n    let store: Store<IReactVaporState>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<TabsHeader />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<Title /> with default props', () => {\r\n        beforeEach(() => {\r\n            tabsHeaderComponent = mount(\r\n                <Provider store={store}>\r\n                    <TabsHeader />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        });\r\n\r\n        afterEach(() => {\r\n            tabsHeaderComponent.detach();\r\n        });\r\n\r\n        it('should render nothing if the tabs props is empty', () => {\r\n            expect(tabsHeaderComponent.find(TabNavigation).length).toEqual(0);\r\n        });\r\n    });\r\n\r\n    describe('<TabsHeader /> with custom props', () => {\r\n        const tab1: ITabProps = {\r\n            id: 'a',\r\n            title: 'test',\r\n        };\r\n\r\n        const tab2: ITabProps = {\r\n            id: 'b',\r\n            title: 'test1',\r\n        };\r\n\r\n        const renderTabsHeader = (props: ITabsHeaderProps = {}) => {\r\n            tabsHeaderComponent = mount(\r\n                <Provider store={store}>\r\n                    <TabsHeader {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        };\r\n\r\n        afterEach(() => {\r\n            tabsHeaderComponent.detach();\r\n        });\r\n\r\n        it('should render 1 tab', () => {\r\n            renderTabsHeader({\r\n                tabs: [tab1],\r\n            });\r\n            expect(tabsHeaderComponent.find(TabConnected).length).toEqual(1);\r\n        });\r\n\r\n        it('should render 2 tabs', () => {\r\n            renderTabsHeader({\r\n                tabs: [tab1, tab2],\r\n            });\r\n            expect(tabsHeaderComponent.find(TabConnected).length).toEqual(2);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=426.bundle.js.map