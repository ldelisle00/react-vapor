(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1265:function(n,t,a){"use strict";a.r(t),t.default="import {FunctionComponent} from 'react';\nimport * as _ from 'underscore';\nimport {BlankSlate, IBlankSlateProps} from './BlankSlate';\nimport {blankSlateWithError} from './BlankSlateWithError';\nimport {blankSlateWithTable, IBlankSlateWithTableProps} from './BlankSlateWithTable';\n\nexport interface IBlankSlateWithTable extends IBlankSlateWithTableProps, IBlankSlateProps {}\n\nexport const BlankSlateWithTable: FunctionComponent<IBlankSlateWithTable> = _.compose(blankSlateWithTable)(BlankSlate);\n\nexport const BlankSlateWithTableInError: FunctionComponent<IBlankSlateWithTable> = _.compose(\n    blankSlateWithTable,\n    blankSlateWithError\n)(BlankSlate);\n\nexport const BlankSlateWithError: FunctionComponent<IBlankSlateWithTable> = _.compose(blankSlateWithError)(BlankSlate);\n"}}]);
//# sourceMappingURL=164.bundle.js.map