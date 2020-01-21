(window.webpackJsonp=window.webpackJsonp||[]).push([[759],{1848:function(r,a,o){"use strict";o.r(a),a.default="import {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {ReduxUtils} from '../../utils/ReduxUtils';\r\nimport {ITabPaneDispatchProps, ITabPaneOwnProps, ITabPaneProps, ITabPaneStateProps, TabPane} from './TabPane';\r\nimport {DEFAULT_GROUP_ID, ITabGroupState} from './TabReducers';\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: ITabPaneOwnProps): ITabPaneStateProps => {\r\n    const id = ownProps.groupId ? ownProps.groupId : DEFAULT_GROUP_ID;\r\n    const tabGroup = _.find(state.tabs, (currentTabGroup: ITabGroupState) => currentTabGroup.id === id);\r\n    return {\r\n        isActive: tabGroup ? tabGroup.tabs.some((tab) => tab.id === ownProps.id && tab.isSelected) : false,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (): ITabPaneDispatchProps => ({});\r\n\r\nexport const TabPaneConnected: React.ComponentClass<ITabPaneProps> = connect(\r\n    mapStateToProps,\r\n    mapDispatchToProps,\r\n    ReduxUtils.mergeProps\r\n)(TabPane);\r\n"}}]);
//# sourceMappingURL=759.bundle.js.map