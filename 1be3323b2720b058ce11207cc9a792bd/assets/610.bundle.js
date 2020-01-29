(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{1715:function(n,r,o){"use strict";o.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nimport {Svg} from '../svg/Svg';\r\n\r\nexport interface IOptionsCycleConnectedOwnProps {\r\n    id: string;\r\n    startAt?: number;\r\n}\r\n\r\nexport interface IOptionsCycleOwnProps {\r\n    options: React.ReactNode[];\r\n    isInline?: boolean;\r\n    wrapAround?: boolean;\r\n    className?: string;\r\n    previousClassName?: string;\r\n    nextClassName?: string;\r\n    buttonClassName?: string;\r\n}\r\n\r\nexport interface IOptionsCycleStateProps {\r\n    currentOption: number;\r\n}\r\n\r\nexport interface IOptionsCycleDispatchProps {\r\n    onRender: () => void;\r\n    onDestroy: () => void;\r\n    onChange: (index: number) => void;\r\n}\r\n\r\nexport interface IOptionsCycleProps\r\n    extends IOptionsCycleOwnProps,\r\n        Partial<IOptionsCycleStateProps>,\r\n        Partial<IOptionsCycleDispatchProps> {}\r\n\r\nexport class OptionsCycle extends React.Component<IOptionsCycleProps> {\r\n    static defaultProps: Partial<IOptionsCycleProps> = {\r\n        currentOption: 0,\r\n        wrapAround: true,\r\n    };\r\n\r\n    private goToPreviousOption() {\r\n        if (this.props.onChange) {\r\n            const newOptionIndex = this.props.currentOption\r\n                ? this.props.currentOption - 1\r\n                : this.props.options.length - 1;\r\n            this.props.onChange(newOptionIndex);\r\n        }\r\n    }\r\n\r\n    private goToNextOption() {\r\n        if (this.props.onChange) {\r\n            const newOptionIndex =\r\n                this.props.currentOption === this.props.options.length - 1 ? 0 : this.props.currentOption + 1;\r\n            this.props.onChange(newOptionIndex);\r\n        }\r\n    }\r\n\r\n    componentDidMount() {\r\n        this.props.onRender?.();\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        this.props.onDestroy?.();\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div\r\n                className={classNames('options-cycle text-medium-blue', this.props.className, {\r\n                    'mod-inline': this.props.isInline,\r\n                })}\r\n            >\r\n                <button\r\n                    type=\"button\"\r\n                    className={classNames('options-cycle-button previous-option', this.props.previousClassName)}\r\n                    onClick={() => this.goToPreviousOption()}\r\n                    disabled={!this.props.wrapAround && this.props.currentOption === 0}\r\n                >\r\n                    <Svg svgName=\"arrow-left-rounded\" svgClass=\"icon fill-dark-blue mod-16\" />\r\n                </button>\r\n                <span className={classNames('options-cycle-option', this.props.buttonClassName)}>\r\n                    {this.props.options[this.props.currentOption]}\r\n                </span>\r\n                <button\r\n                    type=\"button\"\r\n                    className={classNames('options-cycle-button next-option', this.props.nextClassName)}\r\n                    onClick={() => this.goToNextOption()}\r\n                    disabled={!this.props.wrapAround && this.props.currentOption === this.props.options.length - 1}\r\n                >\r\n                    <Svg svgName=\"arrow-right-rounded\" svgClass=\"icon fill-dark-blue mod-16\" />\r\n                </button>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=610.bundle.js.map