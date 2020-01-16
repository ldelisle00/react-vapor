(window.webpackJsonp=window.webpackJsonp||[]).push([[851],{1939:function(t,e,r){"use strict";r.r(e),e.default="import * as moment from 'moment';\r\nimport * as _ from 'underscore';\r\nimport * as s from 'underscore.string';\r\nimport {addActionsToActionBar} from '../../actions/ActionBarActions';\r\nimport {SELECTION_BOXES} from '../../datePicker/examples/DatePickerExamplesCommon';\r\nimport {changeLastUpdated} from '../../lastUpdated/LastUpdatedActions';\r\nimport {turnOffLoading, turnOnLoading} from '../../loading/LoadingActions';\r\nimport {IData, ITableProps} from '../Table';\r\nimport {TableActions} from '../TableActions';\r\nimport {TableChildComponent, TableSortingOrder} from '../TableConstants';\r\nimport {\r\n    applyDatePickerOnDisplayedIds,\r\n    applyFilterOnDisplayedIds,\r\n    applyPaginationOnDisplayedIds,\r\n    applyPredicatesOnDisplayedIds,\r\n    applySortOnDisplayedIds,\r\n    defaultTableStateModifier,\r\n    defaultTableStateModifierThunk,\r\n    dispatchPostTableStateModification,\r\n    dispatchPreTableStateModification,\r\n} from '../TableDataModifier';\r\nimport {unselectAllRows} from '../TableRowActions';\r\nimport {getTableChildComponentId, getTableLoadingIds} from '../TableUtils';\r\nimport {predictableData, tableOwnPropsMock, tablePropsMockWithData} from './TableTestCommon';\r\n\r\ndescribe('TableDataModifier', () => {\r\n    describe('dispatchPreTableStateModification', () => {\r\n        it('should dispatch three actions to unselectAllRows, remove actions, and turn on loading', () => {\r\n            const dispatchSpy = jasmine.createSpy('dispatchSpy') as any;\r\n\r\n            const actions = [\r\n                unselectAllRows(tableOwnPropsMock.id),\r\n                addActionsToActionBar(\r\n                    getTableChildComponentId(tableOwnPropsMock.id, TableChildComponent.ACTION_BAR),\r\n                    []\r\n                ),\r\n                turnOnLoading(getTableLoadingIds(tableOwnPropsMock.id)),\r\n            ];\r\n\r\n            dispatchPreTableStateModification(tableOwnPropsMock.id, dispatchSpy);\r\n\r\n            actions.forEach((action) => {\r\n                expect(dispatchSpy).toHaveBeenCalledWith(action);\r\n            });\r\n            expect(dispatchSpy.calls.count()).toBe(actions.length);\r\n        });\r\n    });\r\n\r\n    describe('dispatchPostTableStateModification', () => {\r\n        it('should dispatch two actions to turnOffLoading and update the last updated component', () => {\r\n            const dispatchSpy = jasmine.createSpy('dispatchSpy') as any;\r\n\r\n            const actions = [\r\n                turnOffLoading(getTableLoadingIds(tableOwnPropsMock.id)),\r\n                changeLastUpdated(getTableChildComponentId(tableOwnPropsMock.id, TableChildComponent.LAST_UPDATED)),\r\n            ];\r\n\r\n            dispatchPostTableStateModification(tableOwnPropsMock.id, dispatchSpy);\r\n\r\n            actions.forEach((action) => {\r\n                expect(dispatchSpy).toHaveBeenCalledWith(action);\r\n            });\r\n            expect(dispatchSpy.calls.count()).toBe(actions.length);\r\n        });\r\n    });\r\n\r\n    describe('applyPredicatesOnDisplayedIds', () => {\r\n        const {tableCompositeState} = tablePropsMockWithData;\r\n        const {data} = tableCompositeState;\r\n        const {displayedIds} = data;\r\n\r\n        it('should return the same ids if the tableCompositeState has no predicates', () => {\r\n            expect(applyPredicatesOnDisplayedIds([...displayedIds], tableCompositeState, data.byId)).toEqual(\r\n                displayedIds\r\n            );\r\n        });\r\n\r\n        it('should return the same ids if the tableCompositeState has no predicates', () => {\r\n            expect(applyPredicatesOnDisplayedIds([...displayedIds], data.byId, tableCompositeState)).toEqual(\r\n                displayedIds\r\n            );\r\n        });\r\n\r\n        it('should keep only ids with the specified value of the specified attribute', () => {\r\n            expect(\r\n                applyPredicatesOnDisplayedIds([...displayedIds], data.byId, {\r\n                    ...tableCompositeState,\r\n                    predicates: {userName: predictableData.userName},\r\n                })\r\n            ).toEqual([predictableData.id]);\r\n\r\n            expect(\r\n                applyPredicatesOnDisplayedIds([...displayedIds], data.byId, {\r\n                    ...tableCompositeState,\r\n                    predicates: {email: predictableData.email},\r\n                })\r\n            ).toEqual([predictableData.id]);\r\n\r\n            expect(\r\n                applyPredicatesOnDisplayedIds([...displayedIds], data.byId, {\r\n                    ...tableCompositeState,\r\n                    predicates: {email: predictableData.email, userName: predictableData.userName},\r\n                })\r\n            ).toEqual([predictableData.id]);\r\n        });\r\n    });\r\n\r\n    describe('applyFilterOnDisplayedIds', () => {\r\n        const {tableCompositeState} = tablePropsMockWithData;\r\n        const {data} = tableCompositeState;\r\n        const {displayedIds} = data;\r\n\r\n        it('should return the same ids if the tableCompositeState has no filter', () => {\r\n            expect(\r\n                applyFilterOnDisplayedIds([...displayedIds], tableCompositeState, data.byId, tablePropsMockWithData)\r\n            ).toEqual(displayedIds);\r\n        });\r\n\r\n        it('should only return the ids containing the filter content if not empty', () => {\r\n            expect(\r\n                applyFilterOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, filter: predictableData.password},\r\n                    tablePropsMockWithData\r\n                )\r\n            ).toEqual([predictableData.id]);\r\n\r\n            expect(\r\n                applyFilterOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, filter: 'no rows has this content in their heading attribute'},\r\n                    tablePropsMockWithData\r\n                )\r\n            ).toEqual([]);\r\n        });\r\n\r\n        it('should not throw with a custom filter method on own props', () => {\r\n            expect(\r\n                applyFilterOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, filter: predictableData.password},\r\n                    {...tablePropsMockWithData, filterMethod: Boolean}\r\n                )\r\n            ).toEqual(displayedIds);\r\n        });\r\n    });\r\n\r\n    describe('applySortOnDisplayedIds', () => {\r\n        const {tableCompositeState} = tablePropsMockWithData;\r\n        const {data} = tableCompositeState;\r\n        const {displayedIds} = data;\r\n\r\n        it('should return the same ids if the tableCompositeState has no sortState', () => {\r\n            expect(\r\n                applySortOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, sortState: undefined},\r\n                    tablePropsMockWithData\r\n                )\r\n            ).toEqual(displayedIds);\r\n        });\r\n\r\n        it('should return the same ids if the tableCompositeState has a sortState but is unsorted', () => {\r\n            expect(\r\n                applySortOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, sortState: {order: TableSortingOrder.UNSORTED, attribute: 'userName'}},\r\n                    tablePropsMockWithData\r\n                )\r\n            ).toEqual(displayedIds);\r\n        });\r\n\r\n        it('should return the same ids if the tableCompositeState has a sortState, could be sorted, but with no specified attribute', () => {\r\n            expect(\r\n                applySortOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, sortState: {order: TableSortingOrder.ASCENDING, attribute: undefined}},\r\n                    tablePropsMockWithData\r\n                )\r\n            ).toEqual(displayedIds);\r\n        });\r\n\r\n        it('should return the same ids but sorted ascending by the specified attribute if sorted ASCENDING', () => {\r\n            const expectedOrderOfIds = _.sortBy(_.values(data.byId), (currentData) =>\r\n                currentData.userName.toLowerCase()\r\n            ).map((currentData) => currentData.id);\r\n            expect(\r\n                applySortOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, sortState: {order: TableSortingOrder.ASCENDING, attribute: 'userName'}},\r\n                    tablePropsMockWithData\r\n                )\r\n            ).toEqual(expectedOrderOfIds);\r\n        });\r\n\r\n        it('should return the same ids but sorted descending by the specified attribute if sorted DESCENDING', () => {\r\n            const expectedOrderOfIds = _.sortBy(_.values(data.byId), (currentData) =>\r\n                currentData.userName.toLowerCase()\r\n            )\r\n                .reverse()\r\n                .map((currentData) => currentData.id);\r\n            expect(\r\n                applySortOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, sortState: {order: TableSortingOrder.DESCENDING, attribute: 'userName'}},\r\n                    tablePropsMockWithData\r\n                )\r\n            ).toEqual(expectedOrderOfIds);\r\n        });\r\n\r\n        describe('with custom sortByMethod', () => {\r\n            let tablePropsWithSortBy: ITableProps;\r\n\r\n            beforeEach(() => {\r\n                tablePropsWithSortBy = {\r\n                    ...tablePropsMockWithData,\r\n                    headingAttributes: [\r\n                        {\r\n                            attributeName: 'userName',\r\n                            titleFormatter: _.identity,\r\n                            attributeFormatter: _.identity,\r\n                            sortByMethod: (attributeValue: string) => s.reverse(attributeValue).toLowerCase(),\r\n                        },\r\n                    ],\r\n                };\r\n            });\r\n\r\n            it('should return the same ids but sorted ascending with the custom sortByMethod by the specified attribute if sorted ASCENDING', () => {\r\n                const expectedOrderOfIds = _.chain(data.byId)\r\n                    .values()\r\n                    .sortBy((currentData) => s.reverse(currentData.userName).toLowerCase())\r\n                    .map((currentData) => currentData.id)\r\n                    .value();\r\n\r\n                const resultIds = applySortOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, sortState: {order: TableSortingOrder.ASCENDING, attribute: 'userName'}},\r\n                    tablePropsWithSortBy\r\n                );\r\n\r\n                expect(resultIds).toEqual(expectedOrderOfIds);\r\n            });\r\n\r\n            it('should return the same ids but sorted descending with the custom sortByMethod by the specified attribute if sorted DESCENDING', () => {\r\n                const expectedOrderOfIds = _.chain(data.byId)\r\n                    .values()\r\n                    .sortBy((currentData) => s.reverse(currentData.userName).toLowerCase())\r\n                    .map((currentData) => currentData.id)\r\n                    .reverse()\r\n                    .value();\r\n\r\n                const resultIds = applySortOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, sortState: {order: TableSortingOrder.DESCENDING, attribute: 'userName'}},\r\n                    tablePropsWithSortBy\r\n                );\r\n\r\n                expect(resultIds).toEqual(expectedOrderOfIds);\r\n            });\r\n        });\r\n\r\n        describe('with custom sortMethod', () => {\r\n            let tableProps: ITableProps;\r\n            const testColumnAttribute = 'userName';\r\n\r\n            const cumtomSortFunction = (items: IData[], attribute: string, ascending: boolean): IData[] => {\r\n                expect(attribute).toBe(testColumnAttribute);\r\n                expect(ascending).toBe(true);\r\n                return _.sortBy(items, attribute);\r\n            };\r\n\r\n            beforeEach(() => {\r\n                tableProps = {\r\n                    ...tablePropsMockWithData,\r\n                    headingAttributes: [\r\n                        {\r\n                            attributeName: testColumnAttribute,\r\n                            titleFormatter: _.identity,\r\n                            attributeFormatter: _.identity,\r\n                            sortMethod: cumtomSortFunction,\r\n                        },\r\n                    ],\r\n                };\r\n            });\r\n\r\n            it('should return the same ids but sorted by the specified custom sortMethod function', () => {\r\n                const expectedOrderOfIds = _.sortBy(_.values(data.byId), testColumnAttribute).map(\r\n                    (currentData) => currentData.id\r\n                );\r\n\r\n                expect(\r\n                    applySortOnDisplayedIds(\r\n                        [...displayedIds],\r\n                        data.byId,\r\n                        {\r\n                            ...tableCompositeState,\r\n                            sortState: {order: TableSortingOrder.ASCENDING, attribute: testColumnAttribute},\r\n                        },\r\n                        tableProps\r\n                    )\r\n                ).toEqual(expectedOrderOfIds);\r\n            });\r\n        });\r\n    });\r\n\r\n    describe('applyPaginationOnDisplayedIds', () => {\r\n        const {tableCompositeState} = tablePropsMockWithData;\r\n        const {data} = tableCompositeState;\r\n        const {displayedIds} = data;\r\n\r\n        it('should return the same ids if the tableCompositeState has no perPage and page', () => {\r\n            expect(applyPaginationOnDisplayedIds([...displayedIds], tableCompositeState)).toEqual(displayedIds);\r\n        });\r\n\r\n        it('should skip the first 5 ids if perPage is 5 and page is 1', () => {\r\n            expect(\r\n                applyPaginationOnDisplayedIds([...displayedIds], {...tableCompositeState, perPage: 5, page: 1})\r\n            ).toEqual(displayedIds.slice(5 * 1, 5 * 1 + 5));\r\n        });\r\n\r\n        it('should keep the first 5 only if perPage is 5 and page is 0', () => {\r\n            expect(\r\n                applyPaginationOnDisplayedIds([...displayedIds], {...tableCompositeState, perPage: 5, page: 0})\r\n            ).toEqual(displayedIds.slice(5 * 0, 5 * 0 + 5));\r\n        });\r\n    });\r\n\r\n    describe('applyDatePickerOnDisplayedIds', () => {\r\n        const {tableCompositeState} = tablePropsMockWithData;\r\n        const {data} = tableCompositeState;\r\n        const {displayedIds} = data;\r\n\r\n        it('should return the same ids if the tableCompositeState has no from/to', () => {\r\n            expect(\r\n                applyDatePickerOnDisplayedIds([...displayedIds], tableCompositeState, data.byId, tablePropsMockWithData)\r\n            ).toEqual(displayedIds);\r\n        });\r\n\r\n        it('should only return the ids containing the dates inside the from/to if datepicker is defined', () => {\r\n            const from = moment()\r\n                .add(1, 'day')\r\n                .toDate();\r\n            const to = moment()\r\n                .add(3, 'day')\r\n                .toDate();\r\n\r\n            expect(\r\n                applyDatePickerOnDisplayedIds(\r\n                    [...displayedIds],\r\n                    data.byId,\r\n                    {...tableCompositeState, from, to},\r\n                    {\r\n                        ...tablePropsMockWithData,\r\n                        datePicker: {datesSelectionBoxes: SELECTION_BOXES, attributeName: 'lastLogin'},\r\n                    }\r\n                )\r\n            ).toEqual([predictableData.id]);\r\n        });\r\n    });\r\n\r\n    describe('defaultTableStateModifier', () => {\r\n        const {tableCompositeState} = tablePropsMockWithData;\r\n\r\n        it('should not throw', () => {\r\n            expect(() => defaultTableStateModifier(tablePropsMockWithData, tableCompositeState)).not.toThrow();\r\n        });\r\n\r\n        it('should not throw on calling the returned function', () => {\r\n            expect(() =>\r\n                defaultTableStateModifier(tablePropsMockWithData, tableCompositeState)(tableCompositeState)\r\n            ).not.toThrow();\r\n        });\r\n\r\n        it('should return the proper data in the tableState', () => {\r\n            const expectedData = {\r\n                byId: {\r\n                    ...tableCompositeState.data.byId,\r\n                },\r\n                allIds: [...tableCompositeState.data.allIds],\r\n                displayedIds: [predictableData.id],\r\n                totalEntries: 1,\r\n                totalPages: 1,\r\n            };\r\n\r\n            const receivedState = defaultTableStateModifier(tablePropsMockWithData, {\r\n                ...tableCompositeState,\r\n                filter: predictableData.password,\r\n            })(tableCompositeState);\r\n\r\n            expect(receivedState.data).toEqual(expectedData);\r\n        });\r\n    });\r\n\r\n    describe('defaultTableStateModifierThunk', () => {\r\n        const {tableCompositeState} = tablePropsMockWithData;\r\n\r\n        it('should not throw', () => {\r\n            expect(() =>\r\n                defaultTableStateModifierThunk(tablePropsMockWithData, true, tableCompositeState)\r\n            ).not.toThrow();\r\n        });\r\n\r\n        it('should dispatch an action of type MODIFY_STATE_TABLE and turn off loading', () => {\r\n            const dispatchSpy = jasmine.createSpy('dispatchSpy');\r\n            defaultTableStateModifierThunk(tablePropsMockWithData, true, tableCompositeState)(dispatchSpy);\r\n            expect(dispatchSpy).toHaveBeenCalledWith(jasmine.objectContaining({type: TableActions.modifyState}));\r\n            expect(dispatchSpy).toHaveBeenCalledWith(turnOffLoading(getTableLoadingIds(tablePropsMockWithData.id)));\r\n            expect(dispatchSpy.calls.count()).toBe(2);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=851.bundle.js.map