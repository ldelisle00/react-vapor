(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1276:function(n,s,r){"use strict";r.r(s),s.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IBaseActionOptions} from '../actions/Action';\r\nimport {Button} from '../button/Button';\r\nimport {Svg} from '../svg/Svg';\r\n\r\nexport interface IBlankSlateProps extends React.ClassAttributes<BlankSlate> {\r\n    title?: React.ReactNode;\r\n    description?: React.ReactNode;\r\n    additionalSection?: React.ReactNode;\r\n    buttons?: IBaseActionOptions[];\r\n    withModal?: boolean;\r\n    classes?: string[];\r\n    containerClasses?: string[];\r\n    descriptionClassName?: string;\r\n    svgName?: string;\r\n    svgClass?: string;\r\n}\r\n\r\nexport class BlankSlate extends React.Component<IBlankSlateProps, {}> {\r\n    static defaultProps: Partial<IBlankSlateProps> = {\r\n        title: null,\r\n        description: null,\r\n        additionalSection: null,\r\n        buttons: [],\r\n        withModal: false,\r\n        classes: [],\r\n        containerClasses: [],\r\n        descriptionClassName: '',\r\n        svgName: '',\r\n        svgClass: '',\r\n    };\r\n\r\n    private getSvgTemplate() {\r\n        return this.props.svgName ? (\r\n            <Svg svgName={this.props.svgName} svgClass={`icon mod-4x ${this.props.svgClass}`} />\r\n        ) : null;\r\n    }\r\n\r\n    private getDescriptionTemplate(): JSX.Element {\r\n        return this.props.description ? (\r\n            <p className={this.props.descriptionClassName}>{this.props.description}</p>\r\n        ) : null;\r\n    }\r\n\r\n    private getButtonsTemplate(): JSX.Element[] {\r\n        return _.map(this.props.buttons, (buttonProps: IBaseActionOptions) => {\r\n            return <Button key={buttonProps.name} {...buttonProps} />;\r\n        });\r\n    }\r\n\r\n    render() {\r\n        const marginClasses: string = this.props.withModal ? 'mt2 mb2' : 'm2';\r\n        const blankSlateClasses: string = `blankslate ${marginClasses} ${this.props.classes.join(' ')}`;\r\n        const modalClasses: string = classNames(\r\n            {'mod-header-padding': this.props.withModal},\r\n            this.props.containerClasses\r\n        );\r\n\r\n        return (\r\n            <div className={modalClasses}>\r\n                <div className={blankSlateClasses}>\r\n                    {this.getSvgTemplate()}\r\n                    <h1>{this.props.title}</h1>\r\n                    {this.getDescriptionTemplate()}\r\n                    {this.getButtonsTemplate()}\r\n                    {this.props.additionalSection}\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=164.bundle.js.map