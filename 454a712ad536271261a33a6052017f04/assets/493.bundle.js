(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{1587:function(r,o,n){"use strict";n.r(o),o.default='import * as React from \'react\';\r\nimport {LogoCard} from \'../LogoCard\';\r\nimport {EXAMPLE_RIBBON_PROPS, MULTIPLE_BADGES} from \'./LogoCardExamplesCommon\';\r\n\r\nexport class LogoCardExamples extends React.Component<any, any> {\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Default LogoCard</label>\r\n                    <div className="form-control">\r\n                        <LogoCard title="Card title" description="Card description" />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">LogoCard with badges, description and ribbon</label>\r\n                    <div className="form-control">\r\n                        <LogoCard\r\n                            title="Card title"\r\n                            badges={MULTIPLE_BADGES}\r\n                            ribbon={EXAMPLE_RIBBON_PROPS}\r\n                            description="Card description"\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Disabled logo card</label>\r\n                    <div className="form-control">\r\n                        <LogoCard title="Card title" badges={MULTIPLE_BADGES} description="Card description" disabled />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=493.bundle.js.map