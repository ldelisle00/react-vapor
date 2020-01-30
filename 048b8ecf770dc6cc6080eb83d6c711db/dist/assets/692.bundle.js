(window.webpackJsonp=window.webpackJsonp||[]).push([[692],{1792:function(e,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport {keys} from 'ts-transformer-keys';\r\nimport * as _ from 'underscore';\r\n\r\nimport {WithServerSideProcessingProps} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {IReactVaporState} from '../../../ReactVapor';\r\nimport {FlatSelectConnected} from '../../flatSelect/FlatSelectConnected';\r\nimport {IFlatSelectOptionProps} from '../../flatSelect/FlatSelectOption';\r\nimport {FlatSelectSelectors} from '../../flatSelect/FlatSelectSelectors';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {ISelectProps} from '../SelectConnected';\r\n\r\nexport interface ISelectWithPredicateOwnProps {\r\n    options: IFlatSelectOptionProps[];\r\n    matchPredicate: (predicate: string, item: IItemBoxProps) => boolean;\r\n}\r\nconst SelectWithPredicatePropsToOmit = keys<ISelectWithPredicateOwnProps>();\r\ninterface SelectWithPredicateStateProps {\r\n    predicate: string;\r\n    items: IItemBoxProps[];\r\n}\r\n\r\nexport interface ISelectWithPredicateProps\r\n    extends ISelectWithPredicateOwnProps,\r\n        ISelectProps,\r\n        Partial<SelectWithPredicateStateProps>,\r\n        WithServerSideProcessingProps {}\r\n\r\nexport const selectWithPredicate = (\r\n    Component: React.ComponentType<ISelectProps>\r\n): React.ComponentType<ISelectWithPredicateProps> => {\r\n    const WrappedComponent: React.FunctionComponent<ISelectWithPredicateProps> = (props) => {\r\n        React.useEffect(() => {\r\n            props.onUpdate?.();\r\n        }, [props.predicate, props.onUpdate]);\r\n\r\n        return (\r\n            <Component {..._.omit(props, SelectWithPredicatePropsToOmit)}>\r\n                <FlatSelectConnected\r\n                    id={props.id}\r\n                    classes={['full-content-x']}\r\n                    options={props.options}\r\n                    group\r\n                    optionPicker\r\n                />\r\n                {props.children}\r\n            </Component>\r\n        );\r\n    };\r\n\r\n    WrappedComponent.displayName = `withPredicate(${Component.displayName})`;\r\n\r\n    return connect(mapStateToProps)(WrappedComponent);\r\n};\r\n\r\nfunction mapStateToProps(state: IReactVaporState, ownProps: ISelectWithPredicateProps): SelectWithPredicateStateProps {\r\n    const predicate = FlatSelectSelectors.getSelectedOptionId(state, {id: ownProps.id}) || ownProps.options[0].id;\r\n\r\n    const items = ownProps.isServer\r\n        ? ownProps.items\r\n        : _.map(ownProps.items, (item: IItemBoxProps) => {\r\n              const visible = ownProps.matchPredicate(predicate, item);\r\n\r\n              return {...item, hidden: !visible || item.hidden};\r\n          });\r\n\r\n    return {\r\n        items,\r\n        predicate,\r\n    };\r\n}\r\n"}}]);
//# sourceMappingURL=692.bundle.js.map