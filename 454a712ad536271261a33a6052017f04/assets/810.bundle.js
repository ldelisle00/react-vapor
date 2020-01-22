(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{1897:function(r,e,n){"use strict";n.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {SlideY} from '../../animations/SlideY';\r\nimport {IErrorSection, TableError} from './TableError';\r\n\r\nexport interface ITableCollapsibleRowOwnProps extends React.ClassAttributes<TableCollapsibleRow> {\r\n    id: string;\r\n    isInError?: boolean;\r\n    nbColumns: number;\r\n}\r\n\r\nexport interface ITableCollapsibleRowStateProps {\r\n    opened?: boolean;\r\n}\r\n\r\nexport interface ITableCollapsibleRowChildrenProps {\r\n    error?: IErrorSection;\r\n    descriptionLabel?: string;\r\n    troubleshootingLabel?: string;\r\n    errorCodeLabel?: string;\r\n}\r\n\r\nexport interface ITableCollapsibleRowProps\r\n    extends ITableCollapsibleRowOwnProps,\r\n        ITableCollapsibleRowStateProps,\r\n        ITableCollapsibleRowChildrenProps {}\r\n\r\nexport class TableCollapsibleRow extends React.Component<ITableCollapsibleRowProps, any> {\r\n    render() {\r\n        const rowClasses: string = classNames('collapsible-row', this.props.id, {in: this.props.opened});\r\n        const error: JSX.Element = this.props.isInError ? (\r\n            <TableError\r\n                error={this.props.error}\r\n                descriptionLabel={this.props.descriptionLabel}\r\n                troubleshootingLabel={this.props.troubleshootingLabel}\r\n                errorCodeLabel={this.props.errorCodeLabel}\r\n            />\r\n        ) : null;\r\n\r\n        return (\r\n            <tr className={rowClasses}>\r\n                <td colSpan={this.props.nbColumns}>\r\n                    <SlideY in={this.props.opened} timeout={350}>\r\n                        {error}\r\n                        <div className=\"clearfix\"></div>\r\n                        <section className=\"columns\">{this.props.children}</section>\r\n                    </SlideY>\r\n                </td>\r\n            </tr>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=810.bundle.js.map