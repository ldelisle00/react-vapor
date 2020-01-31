(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{1595:function(n,o,e){"use strict";e.r(o),o.default="import * as classNames from 'classnames';\nimport * as React from 'react';\nimport * as _ from 'underscore';\n\nconst Table = ({numberOfColumns = 4, numberOfRow = 10}: {numberOfColumns?: number; numberOfRow?: number}) => {\n    return (\n        <>\n            <table className=\"table big-table\">\n                <Body numberOfColumns={numberOfColumns} numberOfRow={numberOfRow} />\n            </table>\n        </>\n    );\n};\n\nconst Body = ({numberOfColumns = 4, numberOfRow = 10}: {numberOfColumns?: number; numberOfRow?: number}) => (\n    <tbody>\n        {_.times(numberOfRow, (nColumn: number) => (\n            <tr key={`table-row-loading-${nColumn}`} className=\"mod-border-bottom no-hover\">\n                {_.times(numberOfColumns, (nRow: number) => (\n                    <Row key={`table-row-loading-${nRow}`} num={nColumn} />\n                ))}\n            </tr>\n        ))}\n    </tbody>\n);\n\nconst Row = ({num}: {num: number}) => (\n    <td className=\"table-cell-loading\">\n        <div className={classNames('table-cell-content-loading', {'mod-half': num % 2})} />\n    </td>\n);\n\nexport const TableLoading = {\n    Table,\n    Body,\n    Row,\n};\n"}}]);
//# sourceMappingURL=489.bundle.js.map