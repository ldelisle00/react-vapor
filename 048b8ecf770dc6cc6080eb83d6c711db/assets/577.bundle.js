(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{1682:function(n,e,a){"use strict";a.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nexport interface INavigationPaginationSelectProps extends React.ClassAttributes<NavigationPaginationSelect> {\r\n    disabled?: boolean;\r\n    selected: boolean;\r\n    pageNb: number;\r\n    onPageClick: (pageNb: number) => void;\r\n}\r\n\r\nexport class NavigationPaginationSelect extends React.Component<INavigationPaginationSelectProps, any> {\r\n    render() {\r\n        const linkClasses: string = classNames('flat-select-option', {\r\n            selectable: !this.props.selected,\r\n            disabled: this.props.disabled,\r\n        });\r\n\r\n        return (\r\n            <a\r\n                className={linkClasses}\r\n                data-page={this.props.pageNb}\r\n                onClick={() => this.props.onPageClick(this.props.pageNb)}\r\n            >\r\n                {this.props.pageNb + 1}\r\n            </a>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=577.bundle.js.map