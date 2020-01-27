(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{1655:function(t,n,e){"use strict";e.r(n),n.default="import * as _ from 'underscore';\r\nimport {IReduxAction} from '../../../../utils/ReduxUtils';\r\nimport {filterThrough} from '../../../filterBox/FilterBoxActions';\r\nimport {selectListBoxOption} from '../../../listBox/ListBoxActions';\r\nimport {TableHOCUtils} from '../../../table-hoc/TableHOCUtils';\r\nimport {modifyState} from '../../../tables/TableActions';\r\nimport {\r\n    IChangePaginationActionPayload,\r\n    IPaginationActionPayload,\r\n    PaginationActions,\r\n} from '../NavigationPaginationActions';\r\nimport {\r\n    IPaginationState,\r\n    paginationCompositeInitialState,\r\n    paginationCompositeReducer,\r\n    paginationInitialState,\r\n    paginationReducer,\r\n} from '../NavigationPaginationReducers';\r\n\r\ndescribe('Reducers', () => {\r\n    describe('NavigationPaginationReducers', () => {\r\n        const genericAction: IReduxAction<IChangePaginationActionPayload> = {\r\n            type: 'DO_SOMETHING',\r\n            payload: {\r\n                id: 'pagination',\r\n                pageNb: 22,\r\n            },\r\n        };\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined', () => {\r\n            const paginationCompositeState = paginationCompositeReducer(undefined, genericAction);\r\n\r\n            expect(paginationCompositeState).toBe(paginationCompositeInitialState);\r\n        });\r\n\r\n        it('should return the default state if the action is not defined and the state is undefined for a specific pagination', () => {\r\n            const paginationState = paginationReducer(undefined, genericAction);\r\n\r\n            expect(paginationState).toBe(paginationInitialState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined', () => {\r\n            const oldState: IPaginationState[] = [paginationInitialState];\r\n            const paginationCompositeState: IPaginationState[] = paginationCompositeReducer(oldState, genericAction);\r\n\r\n            expect(paginationCompositeState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state when the action is not defined for a specific pagination', () => {\r\n            const oldState: IPaginationState = {\r\n                id: 'pagination',\r\n                pageNb: 22,\r\n            };\r\n            const pageNbState = paginationReducer(oldState, genericAction);\r\n\r\n            expect(pageNbState).toBe(oldState);\r\n        });\r\n\r\n        it('should return the old state with one more PaginationState when the action is \"ADD_PAGINATION\"', () => {\r\n            let oldState: IPaginationState[] = paginationCompositeInitialState;\r\n            const action: IReduxAction<IChangePaginationActionPayload> = {\r\n                type: PaginationActions.add,\r\n                payload: {\r\n                    id: 'pagination',\r\n                    pageNb: 1,\r\n                },\r\n            };\r\n            let paginationCompositeState: IPaginationState[] = paginationCompositeReducer(oldState, action);\r\n\r\n            expect(paginationCompositeState.length).toBe(oldState.length + 1);\r\n            expect(paginationCompositeState.filter((p) => p.id === action.payload.id).length).toBe(1);\r\n\r\n            oldState = paginationCompositeState;\r\n            action.payload.id = 'pagination2';\r\n            paginationCompositeState = paginationCompositeReducer(oldState, action);\r\n\r\n            expect(paginationCompositeState.length).toBe(oldState.length + 1);\r\n            expect(paginationCompositeState.filter((p) => p.id === action.payload.id).length).toBe(1);\r\n        });\r\n\r\n        it('should return the old state without the PaginationState with the action id when the action is \"REMOVE_PAGINATION\"', () => {\r\n            let oldState: IPaginationState[] = [\r\n                {\r\n                    id: 'some-pagination',\r\n                    pageNb: 2,\r\n                },\r\n                {\r\n                    id: 'some-pagination2',\r\n                    pageNb: 5,\r\n                },\r\n                {\r\n                    id: 'some-pagination1',\r\n                    pageNb: 33,\r\n                },\r\n            ];\r\n            const action: IReduxAction<IPaginationActionPayload> = {\r\n                type: PaginationActions.remove,\r\n                payload: {\r\n                    id: 'some-pagination2',\r\n                },\r\n            };\r\n            let paginationCompositeState: IPaginationState[] = paginationCompositeReducer(oldState, action);\r\n\r\n            expect(paginationCompositeState.length).toBe(oldState.length - 1);\r\n            expect(paginationCompositeState.filter((p) => p.id === action.payload.id).length).toBe(0);\r\n\r\n            oldState = paginationCompositeState;\r\n            action.payload.id = 'some-pagination';\r\n            paginationCompositeState = paginationCompositeReducer(oldState, action);\r\n\r\n            expect(paginationCompositeState.length).toBe(oldState.length - 1);\r\n            expect(paginationCompositeState.filter((p) => p.id === action.payload.id).length).toBe(0);\r\n        });\r\n\r\n        it('should change the page number of the action id when action is \"CHANGE_PAGE\"', () => {\r\n            const oldState: IPaginationState = {\r\n                id: 'pagination',\r\n                pageNb: 22,\r\n            };\r\n            const newState: IPaginationState = {\r\n                id: 'pagination',\r\n                pageNb: 2,\r\n            };\r\n            const action: IReduxAction<IPaginationActionPayload> = {\r\n                type: PaginationActions.changePage,\r\n                payload: newState,\r\n            };\r\n            const paginationState = paginationCompositeReducer([oldState], action);\r\n\r\n            expect(paginationState[0]).toEqual(jasmine.objectContaining(newState));\r\n        });\r\n\r\n        it('should set the page number at 0 for the action id if the action is \"RESET_PAGING\"', () => {\r\n            const oldState: IPaginationState = {\r\n                id: 'pagination',\r\n                pageNb: 22,\r\n            };\r\n            const newState: IPaginationState = {\r\n                id: 'pagination',\r\n                pageNb: 0,\r\n            };\r\n            const action: IReduxAction<IPaginationActionPayload> = {\r\n                type: PaginationActions.reset,\r\n                payload: newState,\r\n            };\r\n            const paginationState = paginationCompositeReducer([oldState], action);\r\n\r\n            expect(paginationState[0]).toEqual(jasmine.objectContaining(newState));\r\n        });\r\n\r\n        it('should set the page number at 0 for the table state modification action if the table id is in the pagination id and shouldResetPage is true', () => {\r\n            const tableId = 'table';\r\n            const shouldResetPage = true;\r\n            const oldState: IPaginationState = {\r\n                id: `pagination${tableId}`,\r\n                pageNb: 22,\r\n            };\r\n\r\n            expect(\r\n                paginationCompositeReducer([oldState], modifyState(tableId, _.identity, shouldResetPage))[0].pageNb\r\n            ).toBe(0);\r\n        });\r\n\r\n        it('should not reset the page for the table state modification action if the table id is in the pagination id and shouldResetPage is false', () => {\r\n            const tableId = 'table';\r\n            const shouldResetPage = false;\r\n            const oldState: IPaginationState = {\r\n                id: `pagination${tableId}`,\r\n                pageNb: 22,\r\n            };\r\n\r\n            expect(\r\n                paginationCompositeReducer([oldState], modifyState(tableId, _.identity, shouldResetPage))[0].pageNb\r\n            ).toBe(oldState.pageNb);\r\n        });\r\n\r\n        it('should not reset the page for the table state modification action if the table id is not in the pagination id regardless of shouldResetPage', () => {\r\n            const tableId = 'table';\r\n            const shouldResetPage = true;\r\n            const oldState: IPaginationState = {\r\n                id: 'pagination',\r\n                pageNb: 22,\r\n            };\r\n\r\n            expect(\r\n                paginationCompositeReducer([oldState], modifyState(tableId, _.identity, shouldResetPage))[0].pageNb\r\n            ).toBe(oldState.pageNb);\r\n        });\r\n\r\n        it('should set the page number at 0 for the filterThrough action if the filter id is in the pagination id', () => {\r\n            const filterId = 'some-filter-id';\r\n            const oldState: IPaginationState = {\r\n                id: `pagination-${filterId}`,\r\n                pageNb: 22,\r\n            };\r\n\r\n            const action = filterThrough(filterId, 'new filter value');\r\n            expect(paginationCompositeReducer([oldState], action)[0].pageNb).toBe(0);\r\n        });\r\n\r\n        it('should not set the page number at 0 for the filterThrough action if the filter id is not in the pagination id', () => {\r\n            const filterId = 'some-filter-id';\r\n            const oldState: IPaginationState = {\r\n                id: `pagination-different-filter-id`,\r\n                pageNb: 22,\r\n            };\r\n\r\n            const action = filterThrough(filterId, 'new filter value');\r\n            expect(paginationCompositeReducer([oldState], action)[0].pageNb).toBe(oldState.pageNb);\r\n        });\r\n\r\n        it('should set the page number at 0 for the ListBox select action if the predicate table id is in the pagination id', () => {\r\n            const tableId = 'some-id';\r\n            const oldState: IPaginationState = {\r\n                id: `pagination-${tableId}`,\r\n                pageNb: 22,\r\n            };\r\n\r\n            const action = selectListBoxOption(\r\n                TableHOCUtils.getPredicateId(tableId, 'componentId'),\r\n                false,\r\n                'new predicate value'\r\n            );\r\n            expect(paginationCompositeReducer([oldState], action)[0].pageNb).toBe(0);\r\n        });\r\n\r\n        it('should not set the page number at 0 for the ListBox select action if the predicate table id is not in the pagination id', () => {\r\n            const tableId = 'some-id';\r\n            const oldState: IPaginationState = {\r\n                id: `pagination-different-table-id`,\r\n                pageNb: 22,\r\n            };\r\n\r\n            const action = selectListBoxOption(\r\n                TableHOCUtils.getPredicateId(tableId, 'componentId'),\r\n                false,\r\n                'new predicate value'\r\n            );\r\n            expect(paginationCompositeReducer([oldState], action)[0].pageNb).toBe(oldState.pageNb);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=567.bundle.js.map