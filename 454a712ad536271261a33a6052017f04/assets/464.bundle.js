(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1558:function(n,e,t){"use strict";t.r(e),e.default="import * as React from 'react';\r\nimport {IReduxAction, ReduxConnect} from '../../../utils/ReduxUtils';\r\nimport {changeLastUpdated, ILastUpdatedPayload} from '../LastUpdatedActions';\r\nimport {LastUpdatedConnected} from '../LastUpdatedConnected';\r\n\r\nexport interface ILastUpdateConnectedExamplesProps {\r\n    onRefresh?: () => void;\r\n}\r\n\r\nconst mapStateToProps = () => {\r\n    return {};\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<ILastUpdatedPayload>) => void\r\n): ILastUpdateConnectedExamplesProps => {\r\n    return {\r\n        onRefresh: () => {\r\n            dispatch(changeLastUpdated('LastUpdatedConnectedExampleComponent'));\r\n        },\r\n    };\r\n};\r\n\r\n@ReduxConnect(mapStateToProps, mapDispatchToProps)\r\nexport class LastUpdatedConnectedExamples extends React.Component<ILastUpdateConnectedExamplesProps, any> {\r\n    componentDidMount() {\r\n        setInterval(() => {\r\n            this.props.onRefresh();\r\n        }, 10000);\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"form-group\" style={{width: 400}}>\r\n                <div>\r\n                    <label className=\"form-control-label\">\r\n                        Last update updating with Redux (every 10 seconds here with the changeLastUpdated action with\r\n                        the id)\r\n                    </label>\r\n                    <LastUpdatedConnected id=\"LastUpdatedConnectedExampleComponent\" />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=464.bundle.js.map