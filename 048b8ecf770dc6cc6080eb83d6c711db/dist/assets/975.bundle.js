(window.webpackJsonp=window.webpackJsonp||[]).push([[975],{2071:function(r,n,t){"use strict";t.r(n),n.default="import {connect} from 'react-redux';\r\nimport * as Redux from 'redux';\r\nimport {ThunkAction, ThunkDispatch} from 'redux-thunk';\r\nimport {extend} from 'underscore';\r\n\r\nimport {IReactVaporState} from '../ReactVapor';\r\n\r\nexport type IThunkAction<R = any, S extends IReactVaporState = IReactVaporState> = ThunkAction<\r\n    R,\r\n    S,\r\n    any,\r\n    IReduxAction<any>\r\n>;\r\nexport type IDispatch<S extends IReactVaporState = IReactVaporState> = ThunkDispatch<S, any, IReduxAction<any>>;\r\n\r\nexport class ReduxUtils {\r\n    static mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {\r\n        return extend({}, stateProps, dispatchProps, ownProps);\r\n    }\r\n\r\n    // Default MergeProps by react-redux\r\n    // https://github.com/reduxjs/react-redux/blob/master/docs/api.md\r\n    static defaultMergeProps(stateProps: any, dispatchProps: any, ownProps: any) {\r\n        return extend({}, ownProps, stateProps, dispatchProps);\r\n    }\r\n}\r\n\r\nexport const CommonActions = {\r\n    clearState: 'CLEAR_STATE',\r\n};\r\n\r\nexport const clearState = (): Redux.Action => ({\r\n    type: CommonActions.clearState,\r\n});\r\n\r\n/* @deprecated use react-redux connect instead */\r\nexport function ReduxConnect(\r\n    mapStateToProps?: any,\r\n    mapDispatchToProps?: any,\r\n    mergeProps?: any,\r\n    options?: any\r\n): (target: any) => any {\r\n    return (target) => connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any;\r\n}\r\n\r\nexport interface BasePayload {\r\n    id: string;\r\n}\r\n\r\nexport interface IReduxAction<T = {}> extends Redux.Action {\r\n    type: string;\r\n    payload?: T;\r\n}\r\n\r\nexport interface IReduxProps {\r\n    dispatch?: (\r\n        action: IReduxAction<any> | JQueryDeferred<any> | JQueryXHR | ((dispatch: Redux.Dispatch<any>) => void)\r\n    ) => void;\r\n}\r\n\r\nexport interface IReduxStatePossibleProps {\r\n    withReduxState?: boolean;\r\n}\r\n"}}]);
//# sourceMappingURL=975.bundle.js.map