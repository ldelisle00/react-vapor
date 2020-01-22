(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{1554:function(r,n,t){"use strict";t.r(n),n.default="import classNames from 'classnames';\r\nimport * as moment from 'moment';\r\nimport * as React from 'react';\r\n\r\nexport interface ILastUpdatedOwnProps extends React.ClassAttributes<LastUpdated> {\r\n    id?: string;\r\n    label?: string;\r\n    className?: string;\r\n}\r\n\r\nexport interface ILastUpdatedStateProps {\r\n    time?: Date;\r\n}\r\n\r\nexport interface ILastUpdatedDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n}\r\n\r\nexport interface ILastUpdatedProps extends ILastUpdatedOwnProps, ILastUpdatedStateProps, ILastUpdatedDispatchProps {}\r\n\r\nexport const LAST_UPDATE_LABEL: string = 'Last update:';\r\n\r\nexport class LastUpdated extends React.Component<ILastUpdatedProps, any> {\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const label: string = this.props.label || LAST_UPDATE_LABEL;\r\n        const time: Date = this.props.time || new Date();\r\n        const lastUpdateTime: string = moment(time).format('LTS');\r\n\r\n        return (\r\n            <div className={classNames('table-last-update', this.props.className)}>\r\n                {label} {lastUpdateTime}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=460.bundle.js.map