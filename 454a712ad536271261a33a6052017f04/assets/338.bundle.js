(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{1433:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\r\nimport * as _ from \'underscore\';\r\nimport {Svg} from \'../../svg/Svg\';\r\nimport {Tooltip} from \'../../tooltip/Tooltip\';\r\nimport {IDropdownOption} from \'../DropdownSearch\';\r\nimport {SelectedOption} from \'./SelectedOption\';\r\n\r\nexport interface IMultiselectInputProps {\r\n    selectedOptions: IDropdownOption[];\r\n    onRemoveClick?: (value: string) => void;\r\n    onRemoveAll?: () => void;\r\n    onFilterTextChange?: (filterText: string) => void;\r\n    onBlur?: () => void;\r\n    onFocus?: () => void;\r\n    onKeyDownFilterBox?: (e: React.KeyboardEvent<HTMLInputElement>) => void;\r\n    filterPlaceholder?: string;\r\n    filterText?: string;\r\n    deselectAllTooltipText?: string;\r\n}\r\n\r\nexport class MultiselectInput extends React.Component<IMultiselectInputProps, any> {\r\n    static defaultProps: Partial<IMultiselectInputProps> = {\r\n        deselectAllTooltipText: \'Deselect all options\',\r\n    };\r\n\r\n    private handleOnRemoveAll() {\r\n        if (this.props.onRemoveAll) {\r\n            this.props.onRemoveAll();\r\n        }\r\n    }\r\n\r\n    private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r\n        if (this.props.onFilterTextChange) {\r\n            this.props.onFilterTextChange(e.target.value);\r\n        }\r\n    };\r\n\r\n    private handleOnBlur() {\r\n        if (this.props.onBlur) {\r\n            this.props.onBlur();\r\n        }\r\n    }\r\n\r\n    private handleOnFocus() {\r\n        if (this.props.onFocus) {\r\n            this.props.onFocus();\r\n        }\r\n    }\r\n\r\n    private handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {\r\n        if (this.props.onKeyDownFilterBox) {\r\n            this.props.onKeyDownFilterBox(e);\r\n        }\r\n    }\r\n\r\n    private getSelectedOptionComponents(): JSX.Element[] {\r\n        const selectedOptionComponents: JSX.Element[] = [];\r\n\r\n        _.map(this.props.selectedOptions, (selectedOption) => {\r\n            selectedOptionComponents.push(\r\n                <SelectedOption\r\n                    value={selectedOption.value}\r\n                    label={selectedOption.displayValue}\r\n                    key={selectedOption.value}\r\n                    onRemoveClick={this.props.onRemoveClick}\r\n                />\r\n            );\r\n        });\r\n\r\n        return selectedOptionComponents;\r\n    }\r\n\r\n    private getRemoveAllSelectedOptionsButton(): JSX.Element {\r\n        if (this.props.selectedOptions.length) {\r\n            return (\r\n                <Tooltip title={this.props.deselectAllTooltipText} placement={\'top\'}>\r\n                    <div className="remove-all-selected-options" onClick={() => this.handleOnRemoveAll()}>\r\n                        <Svg svgName="clear" svgClass="icon fill-medium-blue" />\r\n                    </div>\r\n                </Tooltip>\r\n            );\r\n        }\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className="multiselect-input">\r\n                <div className="multiselect-selected flex flex-center flex-auto">\r\n                    <div className="selected-options-container">{this.getSelectedOptionComponents()}</div>\r\n                    {this.getRemoveAllSelectedOptionsButton()}\r\n                </div>\r\n                <div className="multiselect-add flex flex-center flex-auto">\r\n                    <input\r\n                        className="mod-no-border flex-auto"\r\n                        placeholder={this.props.filterPlaceholder}\r\n                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange(e)}\r\n                        onBlur={() => this.handleOnBlur()}\r\n                        onFocus={() => this.handleOnFocus()}\r\n                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDown(e)}\r\n                        value={this.props.filterText}\r\n                    />\r\n                    <Svg svgName="filter" className="icon fill-dark-medium-grey" />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=338.bundle.js.map