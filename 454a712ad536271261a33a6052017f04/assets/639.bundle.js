(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{1730:function(t,n,o){"use strict";o.r(n),n.default="import {FunctionComponent} from 'react';\nimport * as React from 'react';\nimport {connect} from 'react-redux';\nimport {IReactVaporState} from '../../ReactVapor';\nimport {IDispatch} from '../../utils/ReduxUtils';\nimport {Button, IButtonProps} from '../button/Button';\nimport {RefreshCallBackActions} from './RefeshCallbackActions';\nimport {IRefreshCallbackOwnProps, RefreshCallback} from './RefreshCallback';\nimport {RefreshStatus, RefreshStatusSelectors} from './RefreshCallbackReducer';\n\nexport interface IButtonWithRefreshCallbackProps extends IRefreshCallbackOwnProps {\n    buttonContainerProps?: React.HtmlHTMLAttributes<HTMLDivElement>;\n    button: IButtonProps;\n}\n\nconst mapStateToProps = (state: IReactVaporState, ownProps: IButtonWithRefreshCallbackProps) => ({\n    status: RefreshStatusSelectors.getRefreshStatus(state, {id: ownProps.id}),\n});\n\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IButtonWithRefreshCallbackProps) => ({\n    start: () => dispatch(RefreshCallBackActions.start(ownProps.id)),\n    stop: () => dispatch(RefreshCallBackActions.stop(ownProps.id)),\n});\n\nconst isNotStopped = (status: string) => status !== RefreshStatus.stopped;\n\nconst buttonWithRefreshCallbackDisconnected: FunctionComponent<IButtonWithRefreshCallbackProps &\n    Partial<ReturnType<typeof mapStateToProps>> &\n    Partial<ReturnType<typeof mapDispatchToProps>>> = ({\n    button,\n    buttonContainerProps,\n    status,\n    start,\n    stop,\n    ...refreshCallbackProps\n}) => (\n    <>\n        <div {...(buttonContainerProps || {})}>\n            <Button\n                {...button}\n                onClick={() => {\n                    stop();\n                    refreshCallbackProps.callback?.(start);\n                }}\n                enabled={isNotStopped(status)}\n            />\n        </div>\n        <RefreshCallback {...refreshCallbackProps} />\n    </>\n);\n\nexport const ButtonWithRefreshCallback = connect(\n    mapStateToProps,\n    mapDispatchToProps\n)(buttonWithRefreshCallbackDisconnected);\n"}}]);
//# sourceMappingURL=639.bundle.js.map