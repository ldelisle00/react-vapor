(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{1548:function(n,r,t){"use strict";t.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\n\r\nimport {Content, IContentProps} from '../content/Content';\r\nimport {PartialStringMatch} from '../partial-string-match/PartialStringMatch';\r\nimport {ITooltipProps, Tooltip} from '../tooltip/Tooltip';\r\n\r\nexport interface IItemBoxProps {\r\n    value: string;\r\n    displayValue?: React.ReactNode;\r\n    highlight?: string;\r\n    selected?: boolean;\r\n    active?: boolean;\r\n    hidden?: boolean;\r\n    disabled?: boolean;\r\n    divider?: boolean;\r\n    tooltip?: ITooltipProps;\r\n    classes?: string[];\r\n    prepend?: IContentProps;\r\n    append?: IContentProps;\r\n    onOptionClick?: (option?: IItemBoxProps, index?: number) => void;\r\n    selectedDisplayValue?: string;\r\n}\r\n\r\nexport class ItemBox extends React.Component<IItemBoxProps> {\r\n    static defaultProps: Partial<IItemBoxProps> = {\r\n        tooltip: {\r\n            title: '',\r\n        },\r\n        highlight: '',\r\n    };\r\n\r\n    private listItem: HTMLLIElement;\r\n\r\n    componentDidUpdate(prevProps: IItemBoxProps) {\r\n        if (!prevProps.active && this.props.active) {\r\n            // First parent is the span of the tooltip, second is the list\r\n            const container = this.listItem.offsetParent as HTMLElement;\r\n            if (container) {\r\n                this.scrollIfNeeded(this.listItem, container);\r\n            }\r\n        }\r\n    }\r\n\r\n    private scrollIfNeeded(element: HTMLElement, container: HTMLElement) {\r\n        if (element.offsetTop < container.scrollTop) {\r\n            container.scrollTop = element.offsetTop;\r\n        } else {\r\n            const offsetBottom = element.offsetTop + element.offsetHeight;\r\n            const scrollBottom = container.scrollTop + container.offsetHeight;\r\n            if (offsetBottom > scrollBottom) {\r\n                container.scrollTop = offsetBottom - container.offsetHeight;\r\n            }\r\n        }\r\n    }\r\n\r\n    private getClasses(): string {\r\n        return classNames(\r\n            'item-box',\r\n            {\r\n                selected: this.props.selected,\r\n                active: this.props.active,\r\n                disabled: this.props.disabled,\r\n                hidden: this.props.hidden,\r\n                divider: this.props.divider,\r\n            },\r\n            this.props.classes\r\n        );\r\n    }\r\n\r\n    private handleOnOptionClick = () => {\r\n        if (this.props.onOptionClick) {\r\n            this.props.onOptionClick(this.props);\r\n        }\r\n    };\r\n\r\n    render() {\r\n        return (\r\n            <Tooltip noSpanWrapper {...this.props.tooltip}>\r\n                <li\r\n                    ref={(li: HTMLLIElement) => (this.listItem = li)}\r\n                    className={this.getClasses()}\r\n                    onClick={() => this.handleOnOptionClick()}\r\n                    data-value={this.props.value}\r\n                >\r\n                    {this.props.prepend ? <Content {...this.props.prepend} /> : null}\r\n                    <PartialStringMatch partialMatch={this.props.highlight} caseInsensitive>\r\n                        {this.props.displayValue || this.props.value}\r\n                    </PartialStringMatch>\r\n                    {this.props.append ? <Content {...this.props.append} /> : null}\r\n                </li>\r\n            </Tooltip>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=454.bundle.js.map