(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{1661:function(n,a,o){"use strict";o.r(a),a.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../../utils/ReduxUtils';\r\nimport {\r\n    INavigationPaginationDispatchProps,\r\n    INavigationPaginationOwnProps,\r\n    INavigationPaginationProps,\r\n    INavigationPaginationStateProps,\r\n    NavigationPagination,\r\n} from './NavigationPagination';\r\nimport {addPagination, changePage, removePagination} from './NavigationPaginationActions';\r\nimport {IPaginationState} from './NavigationPaginationReducers';\r\n\r\nconst mapStateToProps = (\r\n    state: IReactVaporState,\r\n    ownProps: INavigationPaginationOwnProps\r\n): INavigationPaginationStateProps => {\r\n    const item: IPaginationState = _.findWhere(state.paginationComposite, {id: ownProps.id});\r\n\r\n    return {\r\n        currentPage: item ? item.pageNb : 0,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,\r\n    ownProps: INavigationPaginationOwnProps\r\n): INavigationPaginationDispatchProps => ({\r\n    onRender: () => dispatch(addPagination(ownProps.id)),\r\n    onDestroy: () => dispatch(removePagination(ownProps.id)),\r\n    onPageClick: (pageNb: number) => dispatch(changePage(ownProps.id, pageNb)),\r\n});\r\n\r\nexport const NavigationPaginationConnected: React.ComponentClass<INavigationPaginationProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(NavigationPagination);\r\n"}}]);
//# sourceMappingURL=567.bundle.js.map