(window.webpackJsonp=window.webpackJsonp||[]).push([[521],{1627:function(o,r,e){"use strict";e.r(r),r.default="import {connect} from 'react-redux';\r\n\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {closeModal} from './ModalActions';\r\nimport {IModalHeaderDispatchProps, IModalHeaderOwnProps, IModalHeaderProps, ModalHeader} from './ModalHeader';\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IModalHeaderOwnProps): IModalHeaderDispatchProps => ({\r\n    onClose: () => dispatch(closeModal(ownProps.id)),\r\n});\r\n\r\nexport const ModalHeaderConnected: React.ComponentClass<IModalHeaderProps> = connect(\r\n    undefined,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(ModalHeader);\r\n"}}]);
//# sourceMappingURL=521.bundle.js.map