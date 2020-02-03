(window.webpackJsonp=window.webpackJsonp||[]).push([[844],{1943:function(r,e,n){"use strict";n.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IClassName} from '../../utils/ClassNameUtils';\r\nimport {Svg} from '../svg/Svg';\r\nimport {TableSortingOrder} from './TableConstants';\r\n\r\nexport interface ITableHeaderCellOwnProps extends React.ClassAttributes<TableHeaderCell> {\r\n    title: React.ReactNode;\r\n    id?: string;\r\n    attributeToSort?: string;\r\n    tableId?: string;\r\n    className?: IClassName;\r\n    withFixedHeader?: boolean;\r\n    onClickCallback?: (e: React.MouseEvent<HTMLTableHeaderCellElement>) => void;\r\n}\r\n\r\nexport interface ITableHeaderStateProps {\r\n    sorted?: TableSortingOrder;\r\n}\r\n\r\nexport interface ITableHeaderCellDispatchProps {\r\n    onMount?: () => void;\r\n    onSort?: () => void;\r\n    onUnmount?: () => void;\r\n}\r\n\r\nexport interface ITableHeaderCellProps\r\n    extends ITableHeaderCellOwnProps,\r\n        ITableHeaderStateProps,\r\n        ITableHeaderCellDispatchProps {}\r\n\r\nexport class TableHeaderCell extends React.Component<ITableHeaderCellProps, any> {\r\n    static defaultProps: Partial<ITableHeaderCellProps> = {\r\n        sorted: TableSortingOrder.UNSORTED,\r\n    };\r\n\r\n    private handleClick(e: React.MouseEvent<HTMLTableHeaderCellElement>) {\r\n        if (this.props.onSort && this.props.attributeToSort) {\r\n            this.props.onSort();\r\n        }\r\n\r\n        if (this.props.onClickCallback) {\r\n            this.props.onClickCallback(e);\r\n        }\r\n    }\r\n\r\n    private setWithFixedHeaderWrapper(titleNode: React.ReactNode, sortIcon: React.ReactNode) {\r\n        return (\r\n            <div className=\"fixed-header-container\">\r\n                {titleNode}\r\n                {sortIcon}\r\n            </div>\r\n        );\r\n    }\r\n\r\n    componentDidMount() {\r\n        if (this.props.onMount && this.props.attributeToSort) {\r\n            this.props.onMount();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onUnmount) {\r\n            this.props.onUnmount();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const tableCellHasSort = !_.isUndefined(this.props.sorted) && !!this.props.attributeToSort;\r\n        const sortIcon: JSX.Element = tableCellHasSort ? (\r\n            <div className=\"admin-sort-icon\">\r\n                <Svg svgName=\"asc-desc\" className=\"tables-sort icon\" />\r\n            </div>\r\n        ) : null;\r\n\r\n        const headerCellClasses = classNames(this.props.className, {\r\n            'admin-sort': tableCellHasSort,\r\n            'admin-sort-ascending': this.props.sorted === TableSortingOrder.ASCENDING,\r\n            'admin-sort-descending': this.props.sorted === TableSortingOrder.DESCENDING,\r\n        });\r\n\r\n        return (\r\n            <th\r\n                className={headerCellClasses}\r\n                onClick={(e: React.MouseEvent<HTMLTableHeaderCellElement>) => this.handleClick(e)}\r\n            >\r\n                {this.setWithFixedHeaderWrapper(this.props.title, sortIcon)}\r\n            </th>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=844.bundle.js.map