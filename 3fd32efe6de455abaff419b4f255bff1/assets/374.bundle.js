(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{1463:function(n,r,e){"use strict";e.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {Svg} from '../svg/Svg';\r\n\r\nexport interface IFilterBoxOwnProps extends React.ClassAttributes<FilterBox> {\r\n    id?: string;\r\n    containerClasses?: string[];\r\n    filterPlaceholder?: string;\r\n    onBlur?: () => void;\r\n    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;\r\n    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;\r\n    isAutoFocus?: boolean;\r\n    maxWidth?: number;\r\n    withTitleOnInput?: boolean;\r\n    truncate?: boolean;\r\n    onFilterCallback?: (id: string, filterText: string) => void;\r\n    className?: string;\r\n}\r\n\r\nexport interface IFilterBoxStateProps {\r\n    filterText?: string;\r\n}\r\n\r\nexport interface IFilterBoxDispatchProps {\r\n    onRender?: (id: string) => void;\r\n    onDestroy?: (id: string) => void;\r\n    onFilter?: (id: string, filterText: string) => void;\r\n}\r\n\r\nexport interface IFilterBoxProps extends IFilterBoxOwnProps, IFilterBoxStateProps, IFilterBoxDispatchProps {}\r\n\r\nexport const FILTER_PLACEHOLDER: string = 'Filter';\r\n\r\nexport class FilterBox extends React.Component<IFilterBoxProps, any> {\r\n    filterInput: HTMLInputElement;\r\n\r\n    constructor(props: IFilterBoxProps) {\r\n        super(props);\r\n    }\r\n\r\n    static defaultProps: Partial<IFilterBoxProps> = {\r\n        isAutoFocus: false,\r\n    };\r\n\r\n    private handleChange = (nextInputValue: string) => {\r\n        this.filterInput.value = nextInputValue;\r\n        this.filterInput.nextElementSibling.setAttribute('class', this.filterInput.value.length ? '' : 'hidden');\r\n\r\n        if (this.props.onFilterCallback) {\r\n            this.props.onFilterCallback(this.props.id, this.filterInput.value);\r\n        }\r\n\r\n        if (this.props.onFilter) {\r\n            this.props.onFilter(this.props.id, this.filterInput.value);\r\n        }\r\n    };\r\n\r\n    private handleOnBlur() {\r\n        if (this.props.onBlur) {\r\n            this.props.onBlur();\r\n        }\r\n    }\r\n\r\n    private handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {\r\n        if (this.props.onKeyDown) {\r\n            this.props.onKeyDown(e);\r\n        }\r\n    }\r\n\r\n    private handleOnKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {\r\n        if (this.props.onKeyUp) {\r\n            this.props.onKeyUp(e);\r\n        }\r\n    }\r\n\r\n    private clearValue = () => {\r\n        this.filterInput.focus();\r\n        this.handleChange('');\r\n    };\r\n\r\n    placeCursorAtEndOfInputValue(e: React.FocusEvent<any>) {\r\n        const input = e.target as HTMLInputElement;\r\n        const temp = input.value;\r\n        input.value = '';\r\n        input.value = temp;\r\n    }\r\n\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender(this.props.id);\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy(this.props.id);\r\n        }\r\n    }\r\n\r\n    componentWillReceiveProps(nextProps: IFilterBoxProps) {\r\n        if (this.props.filterText !== nextProps.filterText && this.filterInput.value !== nextProps.filterText) {\r\n            this.handleChange(nextProps.filterText);\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const inputMaxWidth = {maxWidth: `${this.props.maxWidth}px`};\r\n        const filterPlaceholder = this.props.filterPlaceholder || FILTER_PLACEHOLDER;\r\n        const filterBoxContainerClasses = classNames('filter-container', this.props.containerClasses);\r\n        const filterInputClasses = classNames('filter-box', {truncate: this.props.truncate});\r\n        const svgClearClasses = classNames({hidden: !(this.filterInput && this.filterInput.value)});\r\n\r\n        return (\r\n            <div className={this.props.className}>\r\n                <div\r\n                    id={this.props.id}\r\n                    className={filterBoxContainerClasses}\r\n                    style={inputMaxWidth}\r\n                    title={this.filterInput && this.props.withTitleOnInput ? this.filterInput.value : undefined}\r\n                >\r\n                    <input\r\n                        ref={(filterInput: HTMLInputElement) => (this.filterInput = filterInput)}\r\n                        type=\"text\"\r\n                        className={filterInputClasses}\r\n                        placeholder={filterPlaceholder}\r\n                        onChange={(e: React.FormEvent<HTMLInputElement>) => this.handleChange(e.currentTarget.value)}\r\n                        onBlur={() => this.handleOnBlur()}\r\n                        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {\r\n                            this.placeCursorAtEndOfInputValue(e);\r\n                        }}\r\n                        onKeyDown={(e) => this.handleOnKeyDown(e)}\r\n                        onKeyUp={(e) => this.handleOnKeyUp(e)}\r\n                        style={inputMaxWidth}\r\n                        autoFocus={this.props.isAutoFocus}\r\n                    />\r\n                    <Svg\r\n                        svgName=\"clear\"\r\n                        className={svgClearClasses}\r\n                        svgClass=\"icon mod-lg fill-medium-grey\"\r\n                        onClick={() => this.clearValue()}\r\n                    />\r\n                    <Svg svgName=\"filter\" className=\"filter-icon\" svgClass=\"icon fill-medium-grey mod-lg\" />\r\n                </div>\r\n                {this.props.children}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=374.bundle.js.map