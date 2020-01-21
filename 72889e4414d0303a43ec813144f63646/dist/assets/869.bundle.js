(window.webpackJsonp=window.webpackJsonp||[]).push([[869],{1958:function(r,e,a){"use strict";a.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {ITextAreaProps} from './TextArea';\r\n\r\nexport interface ITextAreaLabelProps {\r\n    children: React.ReactElement<ITextAreaProps>;\r\n    label: string;\r\n    containerClassName?: string;\r\n}\r\n\r\nexport const TextAreaLabel = (props: ITextAreaLabelProps) => (\r\n    <div className={classNames('input-field form-group', props.containerClassName)}>\r\n        {props.children}\r\n        <label htmlFor={props.children.props.id}>{props.label}</label>\r\n    </div>\r\n);\r\n"}}]);
//# sourceMappingURL=869.bundle.js.map