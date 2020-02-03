(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{1513:function(p,r,e){"use strict";e.r(r),r.default="import {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {\r\n    Flippable,\r\n    IFlippableDispatchProps,\r\n    IFlippableOwnProps,\r\n    IFlippableProps,\r\n    IFlippableStateProps,\r\n} from './Flippable';\r\nimport {addFlippable, changeFlippableSide, removeFlippable} from './FlippableActions';\r\nimport {IFlippableState} from './FlippableReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IFlippableOwnProps): IFlippableStateProps => {\r\n    const flippable: IFlippableState = _.findWhere(state.flippables, {id: ownProps.id});\r\n    return {\r\n        isFlipped: flippable && flippable.flipped,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IFlippableOwnProps): IFlippableDispatchProps => ({\r\n    onRender: () => dispatch(addFlippable(ownProps.id)),\r\n    onDestroy: () => dispatch(removeFlippable(ownProps.id)),\r\n    onFlip: () => dispatch(changeFlippableSide(ownProps.id, true)),\r\n    onUnflip: () => dispatch(changeFlippableSide(ownProps.id, false)),\r\n});\r\n\r\nexport const FlippableConnected: React.ComponentClass<IFlippableProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Flippable);\r\n"}}]);
//# sourceMappingURL=406.bundle.js.map