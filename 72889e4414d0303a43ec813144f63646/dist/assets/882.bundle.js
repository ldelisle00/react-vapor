(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1971:function(o,n,t){"use strict";t.r(n),n.default="import {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {addToastContainer, removeToast, removeToastContainer} from './ToastActions';\r\nimport {\r\n    IToastContainerDispatchProps,\r\n    IToastContainerOwnProps,\r\n    IToastContainerProps,\r\n    IToastContainerStateProps,\r\n    ToastContainer,\r\n} from './ToastContainer';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IToastContainerOwnProps): IToastContainerStateProps => {\r\n    const container = _.findWhere(state.toastContainers, {id: ownProps.id}) || {id: null, toasts: []};\r\n    return {\r\n        toasts: container.toasts,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IToastContainerOwnProps): IToastContainerDispatchProps => ({\r\n    onRender: () => dispatch(addToastContainer(ownProps.id)),\r\n    onDestroy: () => dispatch(removeToastContainer(ownProps.id)),\r\n    onCloseToast: (id: string) => dispatch(removeToast(ownProps.id, id)),\r\n});\r\n\r\nexport const ToastContainerConnected: React.ComponentClass<IToastContainerProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(ToastContainer);\r\n"}}]);
//# sourceMappingURL=882.bundle.js.map