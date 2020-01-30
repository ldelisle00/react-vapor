(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{1397:function(t,o,n){"use strict";n.r(o),o.default='import * as React from \'react\';\r\nimport {Svg} from \'../svg/Svg\';\r\nimport {Tooltip} from \'../tooltip/Tooltip\';\r\n\r\nexport interface ISetToNowProps extends React.ClassAttributes<SetToNowButton> {\r\n    onClick: () => void;\r\n    tooltip?: string;\r\n}\r\n\r\nexport const SET_TO_NOW_DEFAULT_TOOLTIP: string = \'Set to now\';\r\n\r\nexport class SetToNowButton extends React.Component<ISetToNowProps, any> {\r\n    render() {\r\n        return (\r\n            <Tooltip title={this.props.tooltip || SET_TO_NOW_DEFAULT_TOOLTIP} placement="top">\r\n                <button type="button" onClick={() => this.props.onClick()} className="date-button">\r\n                    <Svg svgName="set-to-now" className="fill-medium-blue" />\r\n                </button>\r\n            </Tooltip>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=288.bundle.js.map