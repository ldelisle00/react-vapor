(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1532:function(n,r,o){"use strict";o.r(r),r.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {IDispatch} from '../../utils/ReduxUtils';\r\nimport {Svg} from '../svg/Svg';\r\nimport {removePrompt} from './InlinePromptActions';\r\n\r\nexport interface IUserChoice {\r\n    description?: string;\r\n    cancel?: string;\r\n    choices?: Record<string, string>;\r\n    icon?: string;\r\n}\r\n\r\nexport interface IInlinePromptOptions {\r\n    onClick: () => void;\r\n    userChoice: IUserChoice;\r\n    isOpened?: boolean;\r\n    className?: string;\r\n}\r\n\r\nexport interface IInlinePromptProps {\r\n    id?: string;\r\n    options: IInlinePromptOptions;\r\n}\r\n\r\nexport const InlinePrompt: React.FunctionComponent<IInlinePromptProps &\r\n    Partial<ReturnType<typeof mapDispatchToProps>>> = ({options, onCancel}) => {\r\n    const icon: JSX.Element = options.userChoice.icon ? (\r\n        <Svg svgName={options.userChoice.icon} className=\"prompt-icon mr1\" svgClass=\"icon mod-2x fill-medium-blue\" />\r\n    ) : null;\r\n\r\n    const choices: JSX.Element[] = _.map(options.userChoice.choices, (choice: string) => (\r\n        <button\r\n            type=\"button\"\r\n            className=\"btn action mod-danger prompt-action enabled\"\r\n            onClick={options.onClick}\r\n            key={choice}\r\n        >\r\n            {choice}\r\n        </button>\r\n    ));\r\n\r\n    const description: JSX.Element = options.userChoice.description ? (\r\n        <span className=\"description\">{options.userChoice.description}</span>\r\n    ) : null;\r\n\r\n    const cancel: JSX.Element = options.userChoice.cancel ? (\r\n        <button type=\"button\" className=\"btn cancel prompt-action enabled\" onClick={onCancel}>\r\n            {options.userChoice.cancel}\r\n        </button>\r\n    ) : null;\r\n\r\n    const className = classNames(`prompt-${options.className ?? 'info'}`, {opened: options.isOpened});\r\n\r\n    return (\r\n        <span className={className}>\r\n            <span className=\"label-confirmation\">\r\n                {icon}\r\n                {description}\r\n            </span>\r\n            {choices}\r\n            {cancel}\r\n        </span>\r\n    );\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch<IReactVaporState>, ownProps: IInlinePromptProps) => ({\r\n    onCancel: () => dispatch(removePrompt(ownProps.id)),\r\n});\r\n\r\nexport const InlinePromptConnected = connect(null, mapDispatchToProps)(InlinePrompt);\r\n"}}]);
//# sourceMappingURL=435.bundle.js.map