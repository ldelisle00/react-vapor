(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{1370:function(r,o,s){"use strict";s.r(o),o.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nexport interface ColorProps {\r\n    color: string;\r\n}\r\n\r\n// tslint:disable\r\nexport const VaporColors: Record<\r\n    string,\r\n    string\r\n> = require('!sass-variable-loader?preserveVariableNames!coveo-styleguide/scss/common/palette.scss');\r\n// tslint:enable\r\n\r\nexport class Color extends React.Component<ColorProps & React.HTMLProps<HTMLDivElement>> {\r\n    static defaultprops: Partial<ColorProps> = {\r\n        color: 'pure-white',\r\n    };\r\n\r\n    render() {\r\n        const isHex = _.keys(VaporColors).indexOf(this.props.color) === -1;\r\n        let colorStyle: React.CSSProperties = (isHex && {backgroundColor: this.props.color}) || {};\r\n        if (this.props.style) {\r\n            colorStyle = {...colorStyle, ...this.props.style};\r\n        }\r\n        return (\r\n            <div\r\n                {..._.omit(this.props, 'color', 'hex')}\r\n                style={colorStyle}\r\n                className={classNames(this.props.className, {\r\n                    [`bg-${this.props.color}`]: !isHex,\r\n                })}\r\n            >\r\n                {this.props.children}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=264.bundle.js.map