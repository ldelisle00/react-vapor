(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{1478:function(n,r,t){"use strict";t.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {Content, IContentProps} from '../content/Content';\r\nimport {ITooltipProps, Tooltip} from '../tooltip/Tooltip';\r\n\r\nexport interface IFlatSelectOptionProps {\r\n    id: string;\r\n    option: IContentProps;\r\n    classes?: string[];\r\n    prepend?: IContentProps;\r\n    append?: IContentProps;\r\n    tooltip?: ITooltipProps;\r\n    selected?: boolean;\r\n    onClick?: (option: IFlatSelectOptionProps) => void;\r\n}\r\n\r\nexport class FlatSelectOption extends React.Component<IFlatSelectOptionProps, any> {\r\n    static defaultProps: Partial<IFlatSelectOptionProps> = {\r\n        selected: false,\r\n    };\r\n\r\n    private onClick() {\r\n        if (this.props.onClick) {\r\n            this.props.onClick(this.props);\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const classes: string = classNames(\r\n            'flat-select-option',\r\n            {\r\n                selectable: !this.props.selected,\r\n            },\r\n            this.props.classes\r\n        );\r\n\r\n        return (\r\n            <a className={classes} onClick={() => this.onClick()}>\r\n                <Tooltip {...this.props.tooltip}>\r\n                    {this.props.prepend ? <Content {...this.props.prepend} /> : null}\r\n                    {<Content {...this.props.option} />}\r\n                    {this.props.append ? <Content {...this.props.append} /> : null}\r\n                </Tooltip>\r\n            </a>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=389.bundle.js.map