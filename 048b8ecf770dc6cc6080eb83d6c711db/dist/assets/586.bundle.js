(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1692:function(e,r,n){"use strict";n.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../../ReactVapor';\r\nimport {clearState} from '../../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../../utils/tests/TestUtils';\r\nimport {addLoading, turnOffLoading} from '../../../loading/LoadingActions';\r\nimport {addPagination, changePage} from '../../pagination/NavigationPaginationActions';\r\nimport {INavigationPerPageProps, NavigationPerPage, PER_PAGE_NUMBERS} from '../NavigationPerPage';\r\nimport {changePerPage} from '../NavigationPerPageActions';\r\nimport {NavigationPerPageConnected} from '../NavigationPerPageConnected';\r\nimport {INavigationPerPageSelectProps, NavigationPerPageSelect} from '../NavigationPerPageSelect';\r\n\r\ndescribe('<NavigationPerPageConnected />', () => {\r\n    let wrapper: ReactWrapper<any, any>;\r\n    let navigationPerPage: ReactWrapper<INavigationPerPageProps, any>;\r\n    let store: Store<IReactVaporState>;\r\n    const basicNavigationPerPageProps: INavigationPerPageProps = {\r\n        totalEntries: 55,\r\n        id: 'navigation-per-page',\r\n        initialPosition: 0,\r\n    };\r\n    const loadingId: string = basicNavigationPerPageProps.id + '-loading';\r\n    basicNavigationPerPageProps.loadingIds = [loadingId];\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n        store.dispatch(addLoading(loadingId));\r\n        store.dispatch(turnOffLoading([loadingId]));\r\n\r\n        wrapper = mount(\r\n            <Provider store={store}>\r\n                <div>\r\n                    <NavigationPerPageConnected {...basicNavigationPerPageProps} />\r\n                </div>\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n        navigationPerPage = wrapper.find(NavigationPerPage).first();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n        wrapper.detach();\r\n    });\r\n\r\n    it('should get the current perPageNumber as a prop', () => {\r\n        const currentPerPageProp = navigationPerPage.props().currentPerPage;\r\n\r\n        expect(currentPerPageProp).toBeDefined();\r\n        expect(currentPerPageProp).toBe(10);\r\n\r\n        store.dispatch(changePerPage(basicNavigationPerPageProps.id, 20));\r\n        wrapper.update();\r\n\r\n        expect(wrapper.find(NavigationPerPage).props().currentPerPage).toBe(20);\r\n\r\n        store.dispatch(clearState());\r\n        wrapper.update();\r\n\r\n        expect(wrapper.find(NavigationPerPage).props().currentPerPage).toBe(PER_PAGE_NUMBERS[0]);\r\n\r\n        wrapper.unmount();\r\n\r\n        const perPageNumber: number[] = [11, 22, 33];\r\n        wrapper = mount(\r\n            <Provider store={store}>\r\n                <div>\r\n                    <NavigationPerPageConnected {...basicNavigationPerPageProps} perPageNumbers={perPageNumber} />\r\n                </div>\r\n            </Provider>,\r\n            {attachTo: document.getElementById('App')}\r\n        );\r\n        store.dispatch(clearState());\r\n        wrapper.update();\r\n\r\n        expect(wrapper.find(NavigationPerPage).props().currentPerPage).toBe(perPageNumber[0]);\r\n    });\r\n\r\n    it('should get what to do onRender as a prop', () => {\r\n        const onRenderProp = navigationPerPage.props().onRender;\r\n\r\n        expect(onRenderProp).toBeDefined();\r\n    });\r\n\r\n    it('should get what to do onDestroy as a prop', () => {\r\n        const onDestroyProp = navigationPerPage.props().onDestroy;\r\n\r\n        expect(onDestroyProp).toBeDefined();\r\n    });\r\n\r\n    it('should get what to do onPerPageClick as a prop', () => {\r\n        const onPerPageClickProp = navigationPerPage.props().onPerPageClick;\r\n\r\n        expect(onPerPageClickProp).toBeDefined();\r\n    });\r\n\r\n    it('should add itself to the store with its selected per page number on mount', () => {\r\n        expect(_.findWhere(store.getState().perPageComposite, {id: basicNavigationPerPageProps.id})).toBeDefined();\r\n    });\r\n\r\n    it('should remove itself to the store when unmouting', () => {\r\n        wrapper.unmount();\r\n        expect(_.findWhere(store.getState().perPageComposite, {id: basicNavigationPerPageProps.id})).toBeUndefined();\r\n    });\r\n\r\n    it('should change the per page number when clicking on a <NavigationPerPageSelect /> link', () => {\r\n        const perPageSelected = navigationPerPage.find('a').last();\r\n\r\n        perPageSelected.simulate('click');\r\n        expect(\r\n            _.findWhere(store.getState().perPageComposite, {id: basicNavigationPerPageProps.id}).perPage.toString()\r\n        ).toBe(perPageSelected.find('span').text());\r\n    });\r\n\r\n    it('should not update the currentPerPage prop if a selected <NavigationPerPageSelect /> is clicked', () => {\r\n        const perPageSelected = navigationPerPage.find('NavigationPerPageSelect').first();\r\n\r\n        expect(_.findWhere(store.getState().perPageComposite, {id: basicNavigationPerPageProps.id}).perPage).toBe(10);\r\n\r\n        perPageSelected.find('a').simulate('click');\r\n\r\n        expect(_.findWhere(store.getState().perPageComposite, {id: basicNavigationPerPageProps.id}).perPage).toBe(10);\r\n    });\r\n\r\n    it('should update the currentPerPage prop if an unselected <NavigationPerPageSelect /> is clicked', () => {\r\n        const perPageUnSelected = navigationPerPage.find('NavigationPerPageSelect').at(1);\r\n\r\n        expect(_.findWhere(store.getState().perPageComposite, {id: basicNavigationPerPageProps.id}).perPage).toBe(10);\r\n\r\n        perPageUnSelected.find('a').simulate('click');\r\n\r\n        expect(_.findWhere(store.getState().perPageComposite, {id: basicNavigationPerPageProps.id}).perPage).toBe(20);\r\n    });\r\n\r\n    it(\r\n        'should change the page to the one starting with the same item as the previous per page when a new per page is' +\r\n            'selected',\r\n        () => {\r\n            const paginationId: string = 'pagination-' + basicNavigationPerPageProps.id;\r\n            const firstPerPage: ReactWrapper<INavigationPerPageSelectProps, any> = navigationPerPage\r\n                .find(NavigationPerPageSelect)\r\n                .first() as ReactWrapper<INavigationPerPageSelectProps, any>;\r\n            const secondPerPage: ReactWrapper<INavigationPerPageSelectProps, any> = navigationPerPage\r\n                .find(NavigationPerPageSelect)\r\n                .at(1) as ReactWrapper<INavigationPerPageSelectProps, any>;\r\n            const startingPage: number = 4;\r\n            const expectedPage: number = Math.floor(\r\n                (startingPage * firstPerPage.props().perPageNb) / secondPerPage.props().perPageNb\r\n            );\r\n\r\n            store.dispatch(addPagination(paginationId));\r\n            store.dispatch(changePage(paginationId, 4));\r\n\r\n            secondPerPage.find('a').simulate('click');\r\n            expect(_.findWhere(store.getState().paginationComposite, {id: paginationId}).pageNb).toBe(expectedPage);\r\n\r\n            firstPerPage.find('a').simulate('click');\r\n            expect(_.findWhere(store.getState().paginationComposite, {id: paginationId}).pageNb).toBe(startingPage);\r\n        }\r\n    );\r\n});\r\n"}}]);
//# sourceMappingURL=586.bundle.js.map