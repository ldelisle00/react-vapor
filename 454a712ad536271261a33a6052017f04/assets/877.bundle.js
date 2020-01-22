(window.webpackJsonp=window.webpackJsonp||[]).push([[877],{1964:function(r,n,o){"use strict";o.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IToastProps, Toast} from './Toast';\r\nimport {IToastState} from './ToastReducers';\r\n\r\nexport interface IToastContainerOwnProps {\r\n    id?: string;\r\n    classes?: string[];\r\n    bottom?: boolean;\r\n    left?: boolean;\r\n    right?: boolean;\r\n}\r\n\r\nexport interface IToastContainerStateProps {\r\n    toasts?: IToastState[];\r\n}\r\n\r\nexport interface IToastContainerDispatchProps {\r\n    onDestroy?: () => void;\r\n    onRender?: () => void;\r\n    onCloseToast?: (id: string) => void;\r\n}\r\n\r\nexport interface IToastContainerProps\r\n    extends IToastContainerOwnProps,\r\n        IToastContainerStateProps,\r\n        IToastContainerDispatchProps {}\r\n\r\nexport class ToastContainer extends React.Component<IToastContainerProps, {}> {\r\n    componentWillMount() {\r\n        if (this.props.onRender) {\r\n            this.props.onRender();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    private onCloseToast(id: string) {\r\n        if (this.props.onCloseToast) {\r\n            this.props.onCloseToast(id);\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const classes = classNames('toast-container', this.props.classes, {\r\n            'mod-bottom': this.props.bottom,\r\n            'mod-left': this.props.left,\r\n            'mod-right': this.props.right,\r\n        });\r\n        const toasts = this.props.toasts\r\n            ? _.map(this.props.toasts, (toast: IToastProps) => (\r\n                  <Toast\r\n                      key={toast.id}\r\n                      {...toast}\r\n                      onClose={() => {\r\n                          this.onCloseToast(toast.id);\r\n                          toast.onClose?.();\r\n                      }}\r\n                  />\r\n              ))\r\n            : this.props.children;\r\n\r\n        return <div className={classes}>{toasts}</div>;\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=877.bundle.js.map