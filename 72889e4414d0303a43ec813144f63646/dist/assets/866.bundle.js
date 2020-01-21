(window.webpackJsonp=window.webpackJsonp||[]).push([[866],{1955:function(n,e,t){"use strict";t.r(e),e.default="import * as faker from 'faker/locale/en';\r\nimport * as _ from 'underscore';\r\nimport {TableChildComponent, TableSortingOrder} from '../TableConstants';\r\nimport {\r\n    convertDataByIdToCollection,\r\n    convertInitialCollectionToDataById,\r\n    getNextTableSortingOrder,\r\n    getTableChildComponentId,\r\n    getTableLoadingIds,\r\n} from '../TableUtils';\r\n\r\ndescribe('TableUtils', () => {\r\n    describe('getNextTableSortingOrder', () => {\r\n        const {ASCENDING, DESCENDING, UNSORTED} = TableSortingOrder;\r\n\r\n        it('should return ASCENDING if the previous order was UNSORTED', () => {\r\n            expect(getNextTableSortingOrder(UNSORTED)).toBe(ASCENDING);\r\n        });\r\n\r\n        it('should return ASCENDING if the previous order was DESCENDING', () => {\r\n            expect(getNextTableSortingOrder(DESCENDING)).toBe(ASCENDING);\r\n        });\r\n\r\n        it('should return DESCENDING if the previous order was ASCENDING', () => {\r\n            expect(getNextTableSortingOrder(ASCENDING)).toBe(DESCENDING);\r\n        });\r\n    });\r\n\r\n    describe('getTableChildComponentId', () => {\r\n        const particularCases: any[] = [\r\n            TableChildComponent.LOADING_NAVIGATION,\r\n            TableChildComponent.PER_PAGE,\r\n            TableChildComponent.PAGINATION,\r\n        ];\r\n        const tableId = 'tableId';\r\n\r\n        it('should return the tableId following by the table child component name if it is not a particular case', () => {\r\n            _.chain(TableChildComponent)\r\n                .values()\r\n                .without(...particularCases)\r\n                .each((childComponent: any) => {\r\n                    expect(getTableChildComponentId(tableId, childComponent)).toBe(`${tableId}${childComponent}`);\r\n                });\r\n        });\r\n\r\n        it('should return the \"loading-\" prefix following by the table id and the navigation child component suffix for the LOADING_NAVIGATION component', () => {\r\n            expect(getTableChildComponentId(tableId, TableChildComponent.LOADING_NAVIGATION)).toBe(\r\n                `loading-${tableId}${TableChildComponent.NAVIGATION}`\r\n            );\r\n        });\r\n\r\n        it('should return the \"pagination-\" prefix following by the table id and the navigation child component suffix for the PAGINATION component', () => {\r\n            expect(getTableChildComponentId(tableId, TableChildComponent.PAGINATION)).toBe(\r\n                `pagination-${tableId}${TableChildComponent.NAVIGATION}`\r\n            );\r\n        });\r\n\r\n        it('should return the table id and the navigation child component suffix for the PER_PAGE component', () => {\r\n            expect(getTableChildComponentId(tableId, TableChildComponent.PER_PAGE)).toBe(\r\n                `${tableId}${TableChildComponent.NAVIGATION}`\r\n            );\r\n        });\r\n    });\r\n\r\n    describe('getTableLoadingIds', () => {\r\n        it('should return an array of all the loading ids to be toggled', () => {\r\n            const tableId = 'tableId';\r\n            expect(getTableLoadingIds(tableId)).toEqual([\r\n                tableId,\r\n                getTableChildComponentId(tableId, TableChildComponent.ACTION_BAR),\r\n                getTableChildComponentId(tableId, TableChildComponent.LOADING_NAVIGATION),\r\n            ]);\r\n        });\r\n    });\r\n\r\n    describe('data structure conversions', () => {\r\n        it('should convert a collection into a dataById format', () => {\r\n            const collection = [\r\n                {\r\n                    companyName: faker.company.companyName(),\r\n                    catchPhrase: faker.company.catchPhrase(),\r\n                    id: 'a',\r\n                },\r\n                {\r\n                    companyName: faker.company.companyName(),\r\n                    catchPhrase: faker.company.catchPhrase(),\r\n                    id: 'b',\r\n                },\r\n            ];\r\n\r\n            const dataById = {\r\n                [collection[0].companyName]: {\r\n                    ...collection[0],\r\n                    id: collection[0].companyName,\r\n                    ORIGINAL_MODEL_ID_BEFORE_TRANSFORMATION: collection[0].id,\r\n                },\r\n                [collection[1].companyName]: {\r\n                    ...collection[1],\r\n                    id: collection[1].companyName,\r\n                    ORIGINAL_MODEL_ID_BEFORE_TRANSFORMATION: collection[1].id,\r\n                },\r\n            };\r\n\r\n            // convertInitialCollectionToDataById\r\n            expect(convertInitialCollectionToDataById(collection, 'companyName')).toEqual(dataById);\r\n\r\n            // convertDataByIdToCollection\r\n            expect(convertDataByIdToCollection(dataById)).toEqual(collection);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=866.bundle.js.map