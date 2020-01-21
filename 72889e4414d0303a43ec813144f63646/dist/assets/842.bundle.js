(window.webpackJsonp=window.webpackJsonp||[]).push([[842],{1931:function(r,t,n){"use strict";n.r(t),t.default="import {mount} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {clearState} from '../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../utils/tests/TestUtils';\r\nimport {ActionBarConnected} from '../../actions/ActionBar';\r\nimport {DatePickerDropdownConnected} from '../../datePicker/DatePickerDropdownConnected';\r\nimport {SELECTION_BOXES} from '../../datePicker/examples/DatePickerExamplesCommon';\r\nimport {DropdownSearchConnected} from '../../dropdownSearch/DropdownSearchConnected';\r\nimport {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';\r\nimport {Loading} from '../../loading/Loading';\r\nimport {ITableProps} from '../Table';\r\nimport {TableChildActionBar} from '../table-children/TableChildActionBar';\r\nimport {TABLE_PREDICATE_DEFAULT_VALUE} from '../TableConstants';\r\nimport {tablePropsMock} from './TableTestCommon';\r\n\r\ndescribe('<TableChildActionBar />', () => {\r\n    let store: Store<IReactVaporState>;\r\n\r\n    beforeEach(() => {\r\n        store = TestUtils.buildStore();\r\n    });\r\n\r\n    afterEach(() => {\r\n        store.dispatch(clearState());\r\n    });\r\n\r\n    describe('render', () => {\r\n        const mountComponentWithProps = (props: ITableProps) => {\r\n            return mount(\r\n                <Provider store={store}>\r\n                    <TableChildActionBar {...props} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        };\r\n\r\n        describe('render without error', () => {\r\n            it('should render without error if basic props are passed', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps(tablePropsMock);\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if an actionBar prop is passed', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({...tablePropsMock, actionBar: true});\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if an actionBar prop and a filter prop are passed', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({...tablePropsMock, actionBar: true, filter: true});\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if an actionBar prop and a datePicker prop are passed', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        actionBar: true,\r\n                        datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'date'},\r\n                    });\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if an actionBar prop, a filter prop, and one predicate are passed', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        actionBar: true,\r\n                        filter: true,\r\n                        predicates: [{attributeName: 'email', attributeNameFormatter: _.identity, props: {}}],\r\n                    });\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if an actionBar prop, a filter prop, and two predicate are passed', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        actionBar: true,\r\n                        filter: true,\r\n                        predicates: [\r\n                            {attributeName: 'email', attributeNameFormatter: _.identity, props: {}},\r\n                            {attributeName: 'userName', attributeNameFormatter: _.identity, props: {}},\r\n                        ],\r\n                    });\r\n                }).not.toThrow();\r\n            });\r\n\r\n            it('should render without error if an actionBar prop, a filter prop, a datePicker prop and two predicate are passed', () => {\r\n                expect(() => {\r\n                    mountComponentWithProps({\r\n                        ...tablePropsMock,\r\n                        actionBar: true,\r\n                        filter: true,\r\n                        predicates: [\r\n                            {attributeName: 'email', attributeNameFormatter: _.identity, props: {}},\r\n                            {attributeName: 'userName', attributeNameFormatter: _.identity, props: {}},\r\n                        ],\r\n                        datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'date'},\r\n                    });\r\n                }).not.toThrow();\r\n            });\r\n        });\r\n\r\n        describe('render content', () => {\r\n            it('should render with null if no action bar is passed as prop', () => {\r\n                expect(mountComponentWithProps(tablePropsMock).html()).toBeNull();\r\n            });\r\n\r\n            it('should render with an action bar if there is an actionBar prop', () => {\r\n                expect(\r\n                    mountComponentWithProps({...tablePropsMock, actionBar: true}).find(ActionBarConnected).length\r\n                ).toBe(1);\r\n            });\r\n\r\n            it('should render with an action bar and a filter inside it if there is an actionBar prop and a filter prop', () => {\r\n                const tableActionBar = mountComponentWithProps({...tablePropsMock, actionBar: true, filter: true});\r\n                expect(tableActionBar.find(ActionBarConnected).length).toBe(1);\r\n                expect(tableActionBar.find(ActionBarConnected).find(FilterBoxConnected).length).toBe(1);\r\n            });\r\n\r\n            it('should render with an action bar and a datePicker inside it if there is an actionBar prop and a datePicker prop', () => {\r\n                const tableActionBar = mountComponentWithProps({\r\n                    ...tablePropsMock,\r\n                    actionBar: true,\r\n                    datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'date'},\r\n                });\r\n                expect(tableActionBar.find(ActionBarConnected).length).toBe(1);\r\n                expect(tableActionBar.find(ActionBarConnected).find(DatePickerDropdownConnected).length).toBe(1);\r\n            });\r\n\r\n            it('should render with an action bar and a predicate inside it if there is an actionBar prop and one predicate', () => {\r\n                const tableActionBar = mountComponentWithProps({\r\n                    ...tablePropsMock,\r\n                    actionBar: true,\r\n                    predicates: [{attributeName: 'email', attributeNameFormatter: _.identity, props: {}}],\r\n                });\r\n                expect(tableActionBar.find(ActionBarConnected).length).toBe(1);\r\n                expect(tableActionBar.find(ActionBarConnected).find(DropdownSearchConnected).length).toBe(1);\r\n            });\r\n\r\n            it('should render with an action bar and two predicates inside it if there is an actionBar prop and two predicates', () => {\r\n                const tableActionBar = mountComponentWithProps({\r\n                    ...tablePropsMock,\r\n                    actionBar: true,\r\n                    predicates: [\r\n                        {attributeName: 'email', attributeNameFormatter: _.identity, props: {}},\r\n                        {attributeName: 'userName', attributeNameFormatter: _.identity, props: {}},\r\n                    ],\r\n                });\r\n                expect(tableActionBar.find(ActionBarConnected).length).toBe(1);\r\n                expect(tableActionBar.find(ActionBarConnected).find(DropdownSearchConnected).length).toBe(2);\r\n            });\r\n\r\n            it('should render with an action bar and prefix content inside it if there is an actionBar prop and prefixContent', () => {\r\n                const tableActionBar = mountComponentWithProps({\r\n                    ...tablePropsMock,\r\n                    actionBar: true,\r\n                    prefixContent: {\r\n                        content: Loading,\r\n                    },\r\n                });\r\n                expect(tableActionBar.find(ActionBarConnected).length).toBe(1);\r\n                expect(tableActionBar.find(ActionBarConnected).find(Loading).length).toBe(1);\r\n            });\r\n\r\n            it('should call onPredicateOptionClick if onOptionClickCallback of a dropdownSearch connected is called', () => {\r\n                const onPredicateOptionClickSpy = jasmine.createSpy('onPredicateOptionClickSpy');\r\n                const tableActionBar = mountComponentWithProps({\r\n                    ...tablePropsMock,\r\n                    onPredicateOptionClick: onPredicateOptionClickSpy,\r\n                    actionBar: true,\r\n                    predicates: [{attributeName: 'email', attributeNameFormatter: _.identity, props: {}}],\r\n                });\r\n                tableActionBar\r\n                    .find(ActionBarConnected)\r\n                    .find(DropdownSearchConnected)\r\n                    .first()\r\n                    .props()\r\n                    .onOptionClickCallBack({value: 'test'});\r\n\r\n                expect(onPredicateOptionClickSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should put the option TABLE_PREDICATE_DEFAULT_VALUE as defaultSelectedOption by default', () => {\r\n                const tableActionBar = mountComponentWithProps({\r\n                    ...tablePropsMock,\r\n                    actionBar: true,\r\n                    predicates: [{attributeName: 'email', attributeNameFormatter: _.identity, props: {}}],\r\n                });\r\n\r\n                expect(\r\n                    tableActionBar\r\n                        .find(ActionBarConnected)\r\n                        .find(DropdownSearchConnected)\r\n                        .prop('defaultSelectedOption')\r\n                ).toEqual({value: TABLE_PREDICATE_DEFAULT_VALUE});\r\n            });\r\n\r\n            it('should put the option with defaut: true as defaultSelectedOption (if there is one)', () => {\r\n                const customDefaultValue = 'myDefault';\r\n                const tableActionBar = mountComponentWithProps({\r\n                    ...tablePropsMock,\r\n                    actionBar: true,\r\n                    predicates: [\r\n                        {\r\n                            attributeName: 'userName',\r\n                            attributeNameFormatter: _.identity,\r\n                            props: {defaultOptions: [{value: customDefaultValue, default: true}]},\r\n                        },\r\n                    ],\r\n                });\r\n\r\n                expect(\r\n                    tableActionBar\r\n                        .find(ActionBarConnected)\r\n                        .find(DropdownSearchConnected)\r\n                        .prop('defaultSelectedOption')\r\n                ).toEqual({value: customDefaultValue});\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=842.bundle.js.map