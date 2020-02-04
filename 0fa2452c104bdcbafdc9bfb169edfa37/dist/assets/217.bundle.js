(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1328:function(n,e,r){"use strict";r.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as ReactDOM from 'react-dom';\r\nimport {IInputProps, Input} from '../input/Input';\r\n\r\nexport interface ICheckboxOwnProps {\r\n    handleOnClick?: (isChecked: boolean) => void;\r\n    clearSides?: boolean;\r\n}\r\n\r\nexport interface ICheckboxStateProps {\r\n    defaultDisabled?: boolean;\r\n}\r\n\r\nexport interface ICheckboxProps extends ICheckboxOwnProps, ICheckboxStateProps, IInputProps {}\r\n\r\nexport class Checkbox extends React.Component<ICheckboxProps> {\r\n    componentDidMount() {\r\n        this.updateIndeterminate();\r\n    }\r\n\r\n    componentDidUpdate() {\r\n        this.updateIndeterminate();\r\n    }\r\n\r\n    private updateIndeterminate() {\r\n        const inputElements = (ReactDOM.findDOMNode(this) as Element).getElementsByTagName('input');\r\n        if (inputElements.length) {\r\n            inputElements[0].indeterminate = !!this.props.indeterminate;\r\n        }\r\n    }\r\n\r\n    private handleOnClick(e: React.MouseEvent<HTMLElement>) {\r\n        if (!this.props.disabled) {\r\n            if (this.props.onClick) {\r\n                e.preventDefault();\r\n                e.stopPropagation();\r\n                this.props.onClick(e);\r\n            }\r\n            if (this.props.handleOnClick) {\r\n                this.props.handleOnClick(this.props.checked);\r\n            }\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const classes: string = classNames(\r\n            'coveo-checkbox-label',\r\n            {disabled: !!this.props.disabled, 'checkbox-clear': this.props.clearSides},\r\n            this.props.classes\r\n        );\r\n        const innerInputClasses: string = classNames(\r\n            'coveo-checkbox',\r\n            'react-vapor-checkbox',\r\n            this.props.innerInputClasses\r\n        );\r\n        return (\r\n            <Input\r\n                {...this.props}\r\n                classes={[classes]}\r\n                innerInputClasses={[innerInputClasses]}\r\n                type=\"checkbox\"\r\n                onClick={(e: React.MouseEvent<HTMLElement>) => this.handleOnClick(e)}\r\n                readOnly\r\n            >\r\n                <button type=\"button\" disabled={!!this.props.disabled}></button>\r\n                {this.props.children}\r\n            </Input>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=217.bundle.js.map