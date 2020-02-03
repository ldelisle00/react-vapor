(window.webpackJsonp=window.webpackJsonp||[]).push([[864],{1963:function(e,n,r){"use strict";r.r(n),n.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {IActionOptions} from '../../actions/Action';\r\nimport {IData} from '../Table';\r\nimport {ITableChildBodyProps, TableChildBody} from '../table-children/TableChildBody';\r\nimport {TableCollapsibleRow} from '../TableCollapsibleRow';\r\nimport {TableCollapsibleRowWrapper} from '../TableCollapsibleRowWrapper';\r\nimport {TableHeadingRow} from '../TableHeadingRow';\r\n\r\ndescribe('<TableChildBody />', () => {\r\n    const spyOnRowClick: jasmine.Spy = jasmine.createSpy('onRowClick');\r\n    const spyHandleOnRowClick: jasmine.Spy = jasmine.createSpy('handleOnRowClick');\r\n    const someActions: IActionOptions[] = [\r\n        {\r\n            name: 'some-action',\r\n            trigger: jasmine.createSpy('triggerMethod'),\r\n            enabled: true,\r\n        },\r\n    ];\r\n    const tableChildBodyProps: ITableChildBodyProps = {\r\n        tableId: 'best-table',\r\n        rowData: {\r\n            id: 'random-row',\r\n            email: 'someone@somewhere.com',\r\n            url: 'www.somewher.com',\r\n            aProperty: false,\r\n        },\r\n        isLoading: false,\r\n        onRowClick: spyOnRowClick,\r\n        handleOnRowClick: spyHandleOnRowClick,\r\n        getActions: jasmine.createSpy('getActions').and.returnValue(someActions),\r\n        headingAttributes: [\r\n            {\r\n                attributeName: 'email',\r\n                titleFormatter: _.identity,\r\n                attributeFormatter: _.escape,\r\n                filterFormatter: _.identity,\r\n            },\r\n        ],\r\n        isMultiSelect: false,\r\n    };\r\n\r\n    let store: Store<IReactVaporState>;\r\n\r\n    beforeAll(() => {\r\n        document.body.innerHTML += '<div id=\"App\"></div>';\r\n    });\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    describe('render', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        const mountComponentWithProps = (props: ITableChildBodyProps = tableChildBodyProps) => {\r\n            if (wrapper && wrapper.length) {\r\n                wrapper.unmount();\r\n            }\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <TableChildBody {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            return wrapper.find(TableChildBody);\r\n        };\r\n\r\n        it('should render without error', () => {\r\n            expect(() => mountComponentWithProps()).not.toThrow();\r\n        });\r\n\r\n        it('should add additional classes on the cell element for each row', () => {\r\n            const component = mountComponentWithProps({\r\n                ...tableChildBodyProps,\r\n                headingAttributes: [\r\n                    {\r\n                        attributeName: 'email',\r\n                        titleFormatter: _.identity,\r\n                        attributeFormatter: _.escape,\r\n                        filterFormatter: _.identity,\r\n                        additionalCellClasses: [\r\n                            {\r\n                                className: 'new-class',\r\n                            },\r\n                        ],\r\n                    },\r\n                ],\r\n            });\r\n            expect(component.find('td.new-class')).toBeDefined();\r\n        });\r\n\r\n        it('should trigger an onClick event on click cell element', () => {\r\n            const spy = jasmine.createSpy('onclickcell');\r\n\r\n            const component = mountComponentWithProps({\r\n                ...tableChildBodyProps,\r\n                headingAttributes: [\r\n                    {\r\n                        ...tableChildBodyProps.headingAttributes[0],\r\n                        onClickCell: spy,\r\n                    },\r\n                ],\r\n            });\r\n\r\n            component.find('td').simulate('click');\r\n            expect(spy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should not render a <TableCollapsibleRowWrapper /> if the prop collapsibleFormatter is not defined', () => {\r\n            expect(mountComponentWithProps().find(TableCollapsibleRowWrapper).length).toBe(0);\r\n        });\r\n\r\n        it('should render a <TableCollapsibleRowWrapper /> if the prop collapsibleFormatter is defined', () => {\r\n            expect(\r\n                mountComponentWithProps(\r\n                    _.extend({}, tableChildBodyProps, {\r\n                        collapsibleFormatter: () => <div></div>,\r\n                    })\r\n                ).find(TableCollapsibleRowWrapper).length\r\n            ).toBe(1);\r\n        });\r\n\r\n        it('should render a <TableHeadingRow />', () => {\r\n            expect(mountComponentWithProps().find(TableHeadingRow).length).toBe(1);\r\n        });\r\n\r\n        it('should not render a <TableCollapsibleRow /> if there is not a defined collapsibleFormatter ouput', () => {\r\n            expect(mountComponentWithProps().find(TableCollapsibleRow).length).toBe(0);\r\n        });\r\n\r\n        it('should render a <TableCollapsibleRow /> if there is a defined collapsibleFormatter ouput', () => {\r\n            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {\r\n                collapsibleFormatter: (rowData: IData) => rowData.url,\r\n            });\r\n            expect(mountComponentWithProps(newProps).find(TableCollapsibleRow).length).toBe(1);\r\n        });\r\n\r\n        it('should render a wrapper', () => {\r\n            expect(mountComponentWithProps().find('.wrapper').length).toBe(1);\r\n        });\r\n\r\n        it('should call onRowClick with getActions result if it is defined on click of a heading row', () => {\r\n            spyOnRowClick.calls.reset();\r\n            mountComponentWithProps()\r\n                .find(TableHeadingRow)\r\n                .simulate('click');\r\n\r\n            expect(spyOnRowClick).toHaveBeenCalledTimes(1);\r\n            expect(tableChildBodyProps.getActions).toHaveBeenCalled();\r\n\r\n            expect(tableChildBodyProps.onRowClick).toHaveBeenCalledWith(someActions);\r\n            expect(tableChildBodyProps.getActions).toHaveBeenCalledWith(tableChildBodyProps.rowData);\r\n        });\r\n\r\n        it('should call handleOnRowClick if it is defined on click of a heading row', () => {\r\n            spyHandleOnRowClick.calls.reset();\r\n            mountComponentWithProps()\r\n                .find(TableHeadingRow)\r\n                .simulate('click');\r\n\r\n            expect(spyHandleOnRowClick).toHaveBeenCalledTimes(1);\r\n\r\n            expect(tableChildBodyProps.handleOnRowClick).toHaveBeenCalledWith(someActions, tableChildBodyProps.rowData);\r\n        });\r\n\r\n        it('should call getActions results with option callOnDoubleClick true on row double click', () => {\r\n            const actionSpy: jasmine.Spy = jasmine.createSpy('actionSpy');\r\n            const twoActions: IActionOptions[] = [\r\n                {\r\n                    name: 'action that should not be called',\r\n                    enabled: true,\r\n                    trigger: () => {\r\n                        throw new Error('This action should not be called');\r\n                    },\r\n                },\r\n                {\r\n                    name: 'action that should be called',\r\n                    callOnDoubleClick: true,\r\n                    enabled: true,\r\n                    trigger: actionSpy,\r\n                },\r\n            ];\r\n            const getActionsSpy: jasmine.Spy = jasmine.createSpy('getActions').and.returnValue(twoActions);\r\n            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {getActions: getActionsSpy});\r\n\r\n            mountComponentWithProps(newProps)\r\n                .find(TableHeadingRow)\r\n                .simulate('dblclick');\r\n\r\n            expect(getActionsSpy).toHaveBeenCalled();\r\n            expect(actionSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should send not send disabled as a class to the <TableHeadingRow /> if there is no enabled or disabled property on the row data', () => {\r\n            expect(mountComponentWithProps().find('.disabled').length).toBe(0);\r\n        });\r\n\r\n        it('should send not send disabled as a class to the <TableHeadingRow /> if the enabled property is set to true on the row data', () => {\r\n            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {\r\n                rowData: _.extend({}, tableChildBodyProps.rowData, {enabled: true}),\r\n            });\r\n            expect(mountComponentWithProps(newProps).find('.disabled').length).toBe(0);\r\n        });\r\n\r\n        it('should send disabled as a class to the <TableHeadingRow /> if the enabled property is set to false on the row data', () => {\r\n            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {\r\n                rowData: _.extend({}, tableChildBodyProps.rowData, {enabled: false}),\r\n            });\r\n            expect(mountComponentWithProps(newProps).find('.disabled').length).toBeGreaterThanOrEqual(1);\r\n        });\r\n\r\n        it('should send disabled as a class to the <TableHeadingRow /> if the disabled property is set to true on the row data', () => {\r\n            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {\r\n                rowData: _.extend({}, tableChildBodyProps.rowData, {disabled: true}),\r\n            });\r\n            expect(mountComponentWithProps(newProps).find('.disabled').length).toBeGreaterThanOrEqual(1);\r\n        });\r\n\r\n        it('should set the selectionDisabled prop to false on the <TableHeadingRow /> if there are actions defined for the row', () => {\r\n            expect(\r\n                mountComponentWithProps()\r\n                    .find(TableHeadingRow)\r\n                    .props().selectionDisabled\r\n            ).toBe(false);\r\n        });\r\n\r\n        it('should set the selectionDisabled prop to true on the <TableHeadingRow /> if there are no actions defined for the row', () => {\r\n            const newProps: ITableChildBodyProps = _.extend({}, tableChildBodyProps, {\r\n                getActions: jasmine.createSpy('getActions').and.returnValue([]),\r\n            });\r\n\r\n            expect(\r\n                mountComponentWithProps(newProps)\r\n                    .find(TableHeadingRow)\r\n                    .props().selectionDisabled\r\n            ).toBe(true);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=864.bundle.js.map