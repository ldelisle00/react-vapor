(window.webpackJsonp=window.webpackJsonp||[]).push([[849],{1938:function(r,e,o){"use strict";o.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {SlideY} from '../../../animations/SlideY';\r\nimport {ITableCollapsibleRowProps, TableCollapsibleRow} from '../TableCollapsibleRow';\r\nimport {TableError} from '../TableError';\r\n\r\ndescribe('Tables', () => {\r\n    describe('<TableCollapsibleRow />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<TableCollapsibleRow nbColumns={6} id=\"collapsible-row\" />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<TableCollapsibleRow />', () => {\r\n        let tableCollapsibleRow: ReactWrapper<ITableCollapsibleRowProps, any>;\r\n        let basicTableCollapsibleRowProps: ITableCollapsibleRowProps;\r\n\r\n        beforeEach(() => {\r\n            document.getElementById('App').innerHTML = '<table><tbody id=\"AppTableBody\"></tbody></table>';\r\n\r\n            basicTableCollapsibleRowProps = {\r\n                id: 'collapsible-row',\r\n                nbColumns: 6,\r\n                isInError: true,\r\n                opened: true,\r\n                error: {\r\n                    errorDescription: 'error',\r\n                    errorPrecision: 'the row is in error',\r\n                    errorTroubleshoot: 'you should do something',\r\n                    errorStatus: 'urgent',\r\n                    errorCode: 'error_1',\r\n                },\r\n            };\r\n\r\n            tableCollapsibleRow = mount(<TableCollapsibleRow {...basicTableCollapsibleRowProps} />, {\r\n                attachTo: document.getElementById('AppTableBody'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            tableCollapsibleRow.detach();\r\n        });\r\n\r\n        it('should get its id as a prop', () => {\r\n            const idProp = tableCollapsibleRow.props().id;\r\n\r\n            expect(idProp).toBeDefined();\r\n            expect(idProp).toBe(basicTableCollapsibleRowProps.id);\r\n        });\r\n\r\n        it('should get the number of columns as a prop', () => {\r\n            const nbColumnsProp = tableCollapsibleRow.props().nbColumns;\r\n\r\n            expect(nbColumnsProp).toBeDefined();\r\n            expect(nbColumnsProp).toBe(basicTableCollapsibleRowProps.nbColumns);\r\n        });\r\n\r\n        it('should get if it is in error as a prop', () => {\r\n            const isInErrorProp = tableCollapsibleRow.props().isInError;\r\n\r\n            expect(isInErrorProp).toBeDefined();\r\n            expect(isInErrorProp).toBe(basicTableCollapsibleRowProps.isInError);\r\n        });\r\n\r\n        it('should get if it is opened as a prop', () => {\r\n            const openedProp = tableCollapsibleRow.props().opened;\r\n\r\n            expect(openedProp).toBeDefined();\r\n            expect(openedProp).toBe(basicTableCollapsibleRowProps.opened);\r\n        });\r\n\r\n        it('should get the error as a prop', () => {\r\n            const errorProp = tableCollapsibleRow.props().error;\r\n\r\n            expect(errorProp).toBeDefined();\r\n            expect(errorProp).toEqual(jasmine.objectContaining(basicTableCollapsibleRowProps.error));\r\n        });\r\n\r\n        it('should render an <TableError /> component if is in error', () => {\r\n            const newTableCollapsibleRowProps = _.extend({}, basicTableCollapsibleRowProps, {isInError: false});\r\n\r\n            expect(tableCollapsibleRow.find(TableError).length).toBe(1);\r\n\r\n            tableCollapsibleRow.setProps(newTableCollapsibleRowProps);\r\n            expect(tableCollapsibleRow.find(TableError).length).toBe(0);\r\n        });\r\n\r\n        it('should have its id as a class', () => {\r\n            expect(tableCollapsibleRow.find('tr').hasClass(basicTableCollapsibleRowProps.id)).toBe(true);\r\n        });\r\n\r\n        it('should have \"in\" as a class, and SlideY \"in\" prop set to true if opened', () => {\r\n            const newTableCollapsibleRowProps = _.extend({}, basicTableCollapsibleRowProps, {opened: false});\r\n            const openedClass = 'in';\r\n\r\n            expect(tableCollapsibleRow.find('tr').hasClass(openedClass)).toBe(true);\r\n            expect(tableCollapsibleRow.find(SlideY).prop('in')).toBe(true);\r\n\r\n            tableCollapsibleRow.setProps(newTableCollapsibleRowProps);\r\n            expect(tableCollapsibleRow.find('tr').hasClass(openedClass)).toBe(false);\r\n            expect(tableCollapsibleRow.find(SlideY).prop('in')).toBe(false);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=849.bundle.js.map