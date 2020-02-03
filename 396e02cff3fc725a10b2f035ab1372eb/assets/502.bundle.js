(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{1608:function(r,n,s){"use strict";s.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as VaporSVG from 'coveo-styleguide';\r\nimport * as React from 'react';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\nimport {slugify} from 'underscore.string';\r\n\r\nimport {Badge, IBadgeProps} from '../badge/Badge';\r\nimport {\r\n    CornerRibbon,\r\n    DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME,\r\n    ICornerRibbonProps,\r\n} from '../cornerRibbon/CornerRibbon';\r\nimport {Svg} from '../svg/Svg';\r\n\r\nexport const DEFAULT_LOGO_CARD_CLASSNAME: string = 'logo-card';\r\nexport const DEFAULT_LOGO_ICON: string = VaporSVG.svg.sourceCustom.name;\r\nexport const DEFAULT_LOGO_ICON_CLASSNAME: string = 'icon';\r\nexport const DEFAULT_LOGO_ICON_SIZE: string = 'mod-4x';\r\nexport const DEFAULT_DISABLED_RIBBON_LABEL: string = 'Unavailable';\r\n\r\nexport interface ILogoCardProps {\r\n    badges?: IBadgeProps[];\r\n    description?: string;\r\n    disabled?: boolean;\r\n    disabledRibbon?: ICornerRibbonProps;\r\n    extraContainerClasses?: string[];\r\n    onClick?: () => void;\r\n    ribbon?: ICornerRibbonProps;\r\n    svgName?: string;\r\n    title: string;\r\n}\r\n\r\nconst LogoCardPropsToOmit = keys<ILogoCardProps>();\r\n\r\nexport class LogoCard extends React.Component<ILogoCardProps & React.HTMLProps<HTMLDivElement>> {\r\n    static defaultProps: Partial<ILogoCardProps> = {\r\n        badges: [],\r\n        disabled: false,\r\n        disabledRibbon: {\r\n            label: DEFAULT_DISABLED_RIBBON_LABEL,\r\n        },\r\n        extraContainerClasses: [],\r\n        svgName: DEFAULT_LOGO_ICON,\r\n    };\r\n\r\n    private handleClick() {\r\n        if (this.props.onClick && !this.props.disabled) {\r\n            this.props.onClick();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const containerClassName = classNames(\r\n            DEFAULT_LOGO_CARD_CLASSNAME,\r\n            this.props.disabled || this.props.ribbon ? DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME : '',\r\n            this.props.extraContainerClasses,\r\n            this.props.disabled ? 'disabled' : ''\r\n        );\r\n        const logoIconClassName = classNames(DEFAULT_LOGO_ICON_CLASSNAME, DEFAULT_LOGO_ICON_SIZE);\r\n        const descriptionClassName = classNames(this.props.badges.length ? 'ml1' : '');\r\n\r\n        const badges = this.props.badges.map((badgeProps) => <Badge {...badgeProps} key={slugify(badgeProps.label)} />);\r\n        const description = this.props.description ? (\r\n            <span className={descriptionClassName}>{this.props.description}</span>\r\n        ) : null;\r\n\r\n        let ribbon = null;\r\n        if (this.props.disabled) {\r\n            ribbon = <CornerRibbon {...this.props.disabledRibbon} />;\r\n        } else if (this.props.ribbon) {\r\n            ribbon = <CornerRibbon {...this.props.ribbon} />;\r\n        }\r\n\r\n        return (\r\n            <div\r\n                className={containerClassName}\r\n                onClick={() => this.handleClick()}\r\n                {..._.omit(this.props, LogoCardPropsToOmit)}\r\n            >\r\n                <div className=\"logo-card-logo\">\r\n                    <Svg svgName={this.props.svgName} className={logoIconClassName} />\r\n                </div>\r\n                <div className=\"logo-card-content\">\r\n                    <h2 className=\"logo-card-title\">{this.props.title}</h2>\r\n                    <div>\r\n                        {...badges}\r\n                        {description}\r\n                    </div>\r\n                </div>\r\n                {ribbon}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=502.bundle.js.map