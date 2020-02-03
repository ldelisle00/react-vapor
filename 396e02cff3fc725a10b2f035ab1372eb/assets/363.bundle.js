(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{1470:function(e,t,r){"use strict";r.r(t),t.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';\r\nimport {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {Facet, IFacet, IFacetDispatchProps, IFacetOwnProps, IFacetProps, IFacetStateProps} from './Facet';\r\nimport {addFacet, changeFacet, emptyFacet, removeFacet} from './FacetActions';\r\nimport {IFacetState} from './FacetReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IFacetOwnProps): IFacetStateProps => {\r\n    const item: IFacetState = _.findWhere(state.facets, {facet: ownProps.facet.name});\r\n    const selectedFacetRows: IFacet[] = item ? getSelectedRows(ownProps.facetRows, item.selected) : [];\r\n\r\n    return {\r\n        isOpened: item && item.opened,\r\n        selectedFacetRows,\r\n        withReduxState: true,\r\n    };\r\n};\r\n\r\nconst getSelectedRows = (rows: IFacet[], selectedRows: IFacet[]): IFacet[] =>\r\n    _.compact(\r\n        _.map(rows, (row: IFacet) => {\r\n            const selectedRow: IFacet = _.findWhere(selectedRows, {name: row.name});\r\n            return selectedRow && {...selectedRow, ...row};\r\n        })\r\n    );\r\n\r\nconst mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void): IFacetDispatchProps => ({\r\n    onRender: (facet: string) => dispatch(addFacet(facet)),\r\n    onDestroy: (facet: string) => dispatch(removeFacet(facet)),\r\n    onToggleFacet: (facet: string, facetRow: IFacet) => dispatch(changeFacet(facet, facetRow)),\r\n    onClearFacet: (facet: string) => dispatch(emptyFacet(facet)),\r\n});\r\n\r\nexport const FacetConnected: React.ComponentClass<IFacetProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(Facet);\r\n"}}]);
//# sourceMappingURL=363.bundle.js.map