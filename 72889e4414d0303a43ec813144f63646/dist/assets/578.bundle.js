(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{1674:function(r,e,n){"use strict";n.r(e),e.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {NavigationPerPageSelect} from './NavigationPerPageSelect';\r\n\r\nexport interface INavigationPerPageOwnProps extends React.ClassAttributes<NavigationPerPage> {\r\n    id?: string;\r\n    totalEntries: number;\r\n    label?: string;\r\n    perPageNumbers?: number[];\r\n    loadingIds?: string[];\r\n    initialPosition?: number;\r\n}\r\n\r\nexport interface INavigationPerPageStateProps {\r\n    currentPerPage?: number;\r\n    currentPage?: number;\r\n}\r\n\r\nexport interface INavigationPerPageDispatchProps {\r\n    onRender?: (perPageNb: number) => void;\r\n    onDestroy?: () => void;\r\n    onPerPageClick?: (newPerPage: number, currentPerPage?: number, currentPage?: number) => void;\r\n}\r\n\r\nexport interface INavigationPerPageProps\r\n    extends INavigationPerPageOwnProps,\r\n        INavigationPerPageStateProps,\r\n        INavigationPerPageDispatchProps {}\r\n\r\nexport const PER_PAGE_NUMBERS: number[] = [10, 20, 30];\r\nexport const PER_PAGE_LABEL: string = 'Results per page';\r\n\r\nexport class NavigationPerPage extends React.Component<INavigationPerPageProps> {\r\n    static defaultProps: Partial<INavigationPerPageProps> = {\r\n        perPageNumbers: PER_PAGE_NUMBERS,\r\n        label: PER_PAGE_LABEL,\r\n    };\r\n    private initialPosition: number;\r\n\r\n    private handleClick(newPerPage: number) {\r\n        if (this.props.onPerPageClick && this.props.currentPerPage !== newPerPage) {\r\n            this.props.onPerPageClick(newPerPage, this.props.currentPerPage, this.props.currentPage);\r\n        }\r\n    }\r\n\r\n    componentWillMount() {\r\n        this.initialPosition = !_.isUndefined(this.props.initialPosition)\r\n            ? this.props.initialPosition\r\n            : Math.ceil(this.props.perPageNumbers.length / 2) - 1;\r\n        this.props.onRender?.(this.props.perPageNumbers[this.initialPosition]);\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onDestroy?.();\r\n    }\r\n\r\n    render() {\r\n        const currentPerPage: number = this.props.currentPerPage || this.props.perPageNumbers[this.initialPosition];\r\n        const topNumber: number = this.props.totalEntries;\r\n\r\n        const perPageSelects: JSX.Element[] = _.map(\r\n            this.props.perPageNumbers,\r\n            (num: number, index: number): JSX.Element => {\r\n                const shouldShowPerPageSelect: boolean = topNumber > (this.props.perPageNumbers[index - 1] || 0);\r\n\r\n                if (shouldShowPerPageSelect) {\r\n                    const selectId: string = `perpage-${this.props.id || ''}-${num}`;\r\n                    const isSelected: boolean = currentPerPage === num;\r\n                    return (\r\n                        <NavigationPerPageSelect\r\n                            onPerPageClick={(newPerPageNb: number) => this.handleClick(newPerPageNb)}\r\n                            perPageNb={num}\r\n                            key={selectId}\r\n                            selected={isSelected}\r\n                        />\r\n                    );\r\n                }\r\n            }\r\n        );\r\n\r\n        return (\r\n            <div className=\"items-per-page prepended-flat-select\">\r\n                <div className=\"flat-select-prepend\">{this.props.label}:</div>\r\n                <div className=\"flat-select clearfix\">{perPageSelects}</div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=578.bundle.js.map