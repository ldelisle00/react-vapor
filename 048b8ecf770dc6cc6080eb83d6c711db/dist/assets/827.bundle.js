(window.webpackJsonp=window.webpackJsonp||[]).push([[827],{1925:function(e,t,r){"use strict";r.r(t),t.default="import {shallowWithState} from 'enzyme-redux';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {ITableHOCProps, TableHOC} from '../TableHOC';\r\nimport {tableWithPredicate} from '../TableWithPredicate';\r\nimport {TableHOCUtils} from '../utils/TableHOCUtils';\r\n\r\ndescribe('Table HOC', () => {\r\n    describe('TableWithPredicate', () => {\r\n        const predicateId = 'predicate-id';\r\n        const predicateValues = [\r\n            {displayValue: 'All', value: '', selected: true},\r\n            {displayValue: 'test', value: 'test'},\r\n        ];\r\n\r\n        const TableWithPredicate = _.compose(tableWithPredicate({id: predicateId, values: predicateValues}))(TableHOC);\r\n\r\n        const defaultProps: ITableHOCProps = {\r\n            id: 'a',\r\n            data: [\r\n                {value: 'a', city: 'not-test'},\r\n                {value: 'b', city: 'test'},\r\n            ],\r\n            renderBody: _.identity,\r\n        };\r\n\r\n        const getStateWithPredicate = (predicate: string) => ({\r\n            listBoxes: [{id: TableHOCUtils.getPredicateId(defaultProps.id, predicateId), selected: [predicate]}],\r\n        });\r\n\r\n        it('should not throw', () => {\r\n            expect(shallowWithState(<TableWithPredicate id=\"a\" data={[]} renderBody={_.identity} />, {}));\r\n            expect(shallowWithState(<TableWithPredicate id=\"b\" data={[{value: 'a'}]} renderBody={_.identity} />, {}));\r\n        });\r\n\r\n        it('should render a TableHOC', () => {\r\n            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, {}).dive();\r\n            expect(wrapper.find(TableHOC).exists()).toBe(true);\r\n        });\r\n\r\n        it('should add an action in the TableHOC props', () => {\r\n            const wrapper = shallowWithState(<TableWithPredicate {...defaultProps} />, {}).dive();\r\n            const actions = wrapper.find(TableHOC).prop('actions');\r\n            expect(actions.length).toBe(1);\r\n        });\r\n\r\n        it('should filter out elements not matching the predicate in the state', () => {\r\n            const predicate = predicateValues[1].value;\r\n            const wrapper = shallowWithState(\r\n                <TableWithPredicate {...defaultProps} />,\r\n                getStateWithPredicate(predicate)\r\n            ).dive();\r\n\r\n            const filteredData = _.filter(defaultProps.data, ({city}) => city === predicate);\r\n            const tableData = wrapper.find(TableHOC).prop('data');\r\n\r\n            expect(tableData).toEqual(filteredData);\r\n        });\r\n\r\n        describe('when server side', () => {\r\n            const TableWithPredicateServer = _.compose(\r\n                withServerSideProcessing,\r\n                tableWithPredicate({id: predicateId, values: predicateValues})\r\n            )(TableHOC);\r\n\r\n            it('should not filter out elements', () => {\r\n                const predicate = predicateValues[1].value;\r\n                const wrapper = shallowWithState(\r\n                    <TableWithPredicateServer {...defaultProps} />,\r\n                    getStateWithPredicate(predicate)\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                const tableData = wrapper.find(TableHOC).prop('data');\r\n\r\n                expect(tableData).toEqual(defaultProps.data);\r\n            });\r\n\r\n            it('should call onUpdate when the predicate changes', () => {\r\n                const updateSpy = jasmine.createSpy('update');\r\n                const predicate = predicateValues[1].value;\r\n                const wrapper = shallowWithState(\r\n                    <TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />,\r\n                    getStateWithPredicate(predicate)\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                wrapper.setProps({predicate: predicateValues[0].value});\r\n                wrapper.update();\r\n\r\n                expect(updateSpy).toHaveBeenCalledTimes(1);\r\n            });\r\n\r\n            it('should not call onUpdate when the predicate does not changes', () => {\r\n                const updateSpy = jasmine.createSpy('update');\r\n                const predicate = predicateValues[1].value;\r\n                const wrapper = shallowWithState(\r\n                    <TableWithPredicateServer {...defaultProps} onUpdate={updateSpy} />,\r\n                    getStateWithPredicate(predicate)\r\n                )\r\n                    .dive()\r\n                    .dive();\r\n\r\n                wrapper.setProps({ignore: true});\r\n                wrapper.update();\r\n\r\n                expect(updateSpy).not.toHaveBeenCalled();\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=827.bundle.js.map