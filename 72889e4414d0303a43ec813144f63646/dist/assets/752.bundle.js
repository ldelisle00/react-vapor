(window.webpackJsonp=window.webpackJsonp||[]).push([[752],{1841:function(e,n,a){"use strict";a.r(n),n.default='import * as React from \'react\';\r\nimport {SyncFeedback, SyncFeedbackState} from \'../SyncFeedback\';\r\n\r\nexport class SyncFeedbackExample extends React.Component<any, any> {\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <label className="form-control-label">SyncFeedback</label>\r\n                <div className="form-control">\r\n                    <div className="mb2">\r\n                        A SyncFeedback component on state NONE is invisible.\r\n                        <SyncFeedback state={SyncFeedbackState.NONE} />\r\n                    </div>\r\n                    <div className="mb2">\r\n                        There is a default feedback message for each state\r\n                        <SyncFeedback state={SyncFeedbackState.SYNCING} />\r\n                        <SyncFeedback state={SyncFeedbackState.SUCCESS} />\r\n                        <SyncFeedback state={SyncFeedbackState.ERROR} />\r\n                    </div>\r\n                    <div className="mb2">\r\n                        You can pass a custom feedback message\r\n                        <SyncFeedback\r\n                            state={SyncFeedbackState.SYNCING}\r\n                            feedback="This message is a SyncFeedback component on state SYNCING"\r\n                        />\r\n                        <SyncFeedback\r\n                            state={SyncFeedbackState.SUCCESS}\r\n                            feedback="This message is a SyncFeedback component on state SUCCESS"\r\n                        />\r\n                        <SyncFeedback\r\n                            state={SyncFeedbackState.ERROR}\r\n                            feedback="This message is a SyncFeedback component on state ERROR"\r\n                        />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=752.bundle.js.map