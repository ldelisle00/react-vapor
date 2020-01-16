(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{1635:function(t,i,r){"use strict";r.r(i),i.default="import {createSelector} from 'reselect';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IStringListState} from '../../reusableState/customList/StringListReducers';\r\n\r\nconst initialMultiBoxIDs: IStringListState = {id: undefined, list: []};\r\nconst getMultiBoxIDs = (state: Partial<IReactVaporState>, props: {id: string}): IStringListState =>\r\n    (state && state.multilineIds && state.multilineIds[props.id]) || initialMultiBoxIDs;\r\n\r\nconst multiBoxIDsCombiner = (multiBoxState: IStringListState): string[] => (multiBoxState && multiBoxState.list) || [];\r\n\r\nconst getMultiBoxIDsList: (state: Partial<IReactVaporState>, props: {id: string}) => string[] = createSelector(\r\n    getMultiBoxIDs,\r\n    multiBoxIDsCombiner\r\n);\r\n\r\nexport const MultilineBoxSelectors = {\r\n    getIds: getMultiBoxIDsList,\r\n};\r\n"}}]);
//# sourceMappingURL=540.bundle.js.map