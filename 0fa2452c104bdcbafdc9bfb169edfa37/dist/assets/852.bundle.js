(window.webpackJsonp=window.webpackJsonp||[]).push([[852],{1951:function(n,r,e){"use strict";e.r(r),r.default="import * as _ from 'underscore';\r\nimport {IData, ITableRowData} from './Table';\r\nimport {DEFAULT_TABLE_DATA, TableChildComponent, TableSortingOrder} from './TableConstants';\r\n\r\nconst {ASCENDING, DESCENDING, UNSORTED} = TableSortingOrder;\r\n\r\nexport const getNextTableSortingOrder = (sortedState: TableSortingOrder): TableSortingOrder =>\r\n    _.contains([UNSORTED, DESCENDING], sortedState) ? ASCENDING : DESCENDING;\r\n\r\nexport const getTableChildComponentId = (tableId: string, childComponent: TableChildComponent): string => {\r\n    switch (childComponent) {\r\n        case TableChildComponent.LOADING_NAVIGATION:\r\n            return `loading-${tableId}${TableChildComponent.NAVIGATION}`;\r\n        case TableChildComponent.PAGINATION:\r\n            return `pagination-${tableId}${TableChildComponent.NAVIGATION}`;\r\n        case TableChildComponent.PER_PAGE:\r\n            return `${tableId}${TableChildComponent.NAVIGATION}`;\r\n        default:\r\n            return `${tableId}${childComponent}`;\r\n    }\r\n};\r\n\r\nexport const getTableLoadingIds = (tableId: string): string[] => [\r\n    tableId,\r\n    getTableChildComponentId(tableId, TableChildComponent.ACTION_BAR),\r\n    getTableChildComponentId(tableId, TableChildComponent.LOADING_NAVIGATION),\r\n];\r\n\r\nexport const convertInitialCollectionToDataById = (\r\n    collection: Array<{[key: string]: any}>,\r\n    attributeNameForId: string\r\n): ITableRowData => {\r\n    return collection.reduce((finalData: ITableRowData, model: {[key: string]: any}) => {\r\n        return {\r\n            ...finalData,\r\n            [model[attributeNameForId]]: {\r\n                ...model,\r\n                id: model[attributeNameForId],\r\n                ORIGINAL_MODEL_ID_BEFORE_TRANSFORMATION: model.id,\r\n            },\r\n        };\r\n    }, DEFAULT_TABLE_DATA.byId);\r\n};\r\n\r\nexport const convertDataByIdToCollection = (\r\n    dataById: ITableRowData,\r\n    keepIdAttribute = true\r\n): Array<{[key: string]: any}> => {\r\n    return _.values(dataById).map((data: IData) => {\r\n        const model: {[key: string]: any} = {\r\n            ...data,\r\n            id: keepIdAttribute && (data.ORIGINAL_MODEL_ID_BEFORE_TRANSFORMATION || data.id),\r\n        };\r\n        delete model.ORIGINAL_MODEL_ID_BEFORE_TRANSFORMATION;\r\n\r\n        return model;\r\n    });\r\n};\r\n"}}]);
//# sourceMappingURL=852.bundle.js.map