(window.webpackJsonp=window.webpackJsonp||[]).push([[899],{1986:function(e,r,s){"use strict";s.r(r),r.default="import * as React from 'react';\r\nimport {DisplayClass} from '../../utils/ComponentUtils';\r\n\r\nexport interface IUserFeedbackProps {\r\n    feedbackText: string;\r\n    state: string;\r\n    extraClasses?: string[];\r\n    displayOnShow?: string;\r\n}\r\n\r\nexport interface IUserFeedbackStyle {\r\n    classes: string;\r\n}\r\n\r\nexport const UserFeedbackState = {\r\n    VALID: 'VALID',\r\n    WARNING: 'WARNING',\r\n    ERROR: 'ERROR',\r\n};\r\n\r\nexport const TextColorClass = {\r\n    default: 'text-dark-grey',\r\n    error: 'text-red',\r\n};\r\n\r\nexport class UserFeedback extends React.Component<IUserFeedbackProps, any> {\r\n    render() {\r\n        const style = this.getUserFeedbackStyle();\r\n        return <div className={style.classes}>{this.props.feedbackText}</div>;\r\n    }\r\n\r\n    private getUserFeedbackStyle(): IUserFeedbackStyle {\r\n        const state = this.props.state in UserFeedbackState ? this.props.state : UserFeedbackState.VALID;\r\n        const displayClassOnShow = this.props.displayOnShow || DisplayClass.BLOCK;\r\n\r\n        const renderedDisplayClass = state === UserFeedbackState.VALID ? DisplayClass.HIDDEN : displayClassOnShow;\r\n        const renderedTextColorClass =\r\n            state === UserFeedbackState.ERROR ? TextColorClass.error : TextColorClass.default;\r\n        const renderedExtraClasses = this.props.extraClasses || [];\r\n\r\n        return {\r\n            classes: renderedExtraClasses.concat(renderedTextColorClass, renderedDisplayClass).join(' '),\r\n        };\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=899.bundle.js.map