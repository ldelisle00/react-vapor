(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{1472:function(e,o,r){"use strict";r.r(o),o.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {toggleMoreFacetRows} from './FacetActions';\r\nimport {\r\n    FacetMoreToggle,\r\n    IFacetMoreToggleDispatchProps,\r\n    IFacetMoreToggleOwnProps,\r\n    IFacetMoreToggleProps,\r\n    IFacetMoreToggleStateProps,\r\n} from './FacetMoreToggle';\r\nimport {IFacetState} from './FacetReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IFacetMoreToggleOwnProps): IFacetMoreToggleStateProps => {\r\n    const item: IFacetState = _.findWhere(state.facets, {facet: ownProps.facet});\r\n\r\n    return {\r\n        isOpened: item && item.opened,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (\r\n    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void\r\n): IFacetMoreToggleDispatchProps => ({\r\n    onToggleMore: (facet: string) => dispatch(toggleMoreFacetRows(facet)),\r\n});\r\n\r\nexport const FacetMoreToggleConnected: React.ComponentClass<IFacetMoreToggleProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(FacetMoreToggle);\r\n"}}]);
//# sourceMappingURL=366.bundle.js.map