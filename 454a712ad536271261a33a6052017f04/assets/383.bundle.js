(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{1478:function(t,e,i){"use strict";i.r(e),e.default="import {FilterUtils} from '../../utils/FilterUtils';\nimport {IItemBoxProps} from '../itemBox/ItemBox';\n\nexport type MatchFilter = (filterValue: string, item: IItemBoxProps) => boolean;\n\nexport const defaultListBoxMatchFilter = (filterValue: string, item: IItemBoxProps) => {\n    const valueMatchesFilter = FilterUtils.matchesString(filterValue, item.value);\n    const displayValueMatchesFilter = FilterUtils.matchesReactNode(filterValue, item.displayValue);\n    return valueMatchesFilter || displayValueMatchesFilter;\n};\n"}}]);
//# sourceMappingURL=383.bundle.js.map