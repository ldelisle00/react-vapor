(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1265:function(e,n,t){"use strict";t.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as ReactDOM from 'react-dom';\r\nimport * as _ from 'underscore';\r\n\r\nimport {SlideY} from '../../animations/SlideY';\r\nimport {IReactVaporState} from '../../ReactVapor';\r\nimport {mod} from '../../utils/DataStructuresUtils';\r\nimport {keyCode} from '../../utils/InputUtils';\r\nimport {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {defaultListBoxMatchFilter} from '../filterBox/FilterBoxUtils';\r\nimport {IItemBoxProps} from '../itemBox/ItemBox';\r\nimport {ListBoxConnected} from '../listBox/ListBoxConnected';\r\nimport {\r\n    addAutocomplete,\r\n    removeAutocomplete,\r\n    setAutocompleteActive,\r\n    setAutocompleteValue,\r\n    toggleAutocomplete,\r\n} from './AutocompleteActions';\r\nimport {IAutocompleteState} from './AutocompleteReducers';\r\n\r\nexport interface IAutocompleteOwnProps {\r\n    id: string;\r\n    items: IItemBoxProps[];\r\n    inline?: boolean;\r\n    matchFilter?: (filterValue: string, item: IItemBoxProps) => boolean;\r\n}\r\n\r\nexport interface IAutocompleteStateProps {\r\n    isOpen?: boolean;\r\n    value?: string;\r\n    visibleItems?: IItemBoxProps[];\r\n    active?: number;\r\n}\r\n\r\nexport interface IAutocompleteDispatchProps {\r\n    onRender?: () => void;\r\n    onDestroy?: () => void;\r\n    onDocumentClick?: () => void;\r\n    onFocus?: () => void;\r\n    onValueChange?: (value: string, open: boolean) => void;\r\n    setActive?: (diff: number) => void;\r\n}\r\n\r\nexport interface IAutocompleteProps\r\n    extends IAutocompleteOwnProps,\r\n        IAutocompleteStateProps,\r\n        IAutocompleteDispatchProps {}\r\n\r\nconst mapStateToProps = (state: IReactVaporState, ownProps: IAutocompleteOwnProps): IAutocompleteStateProps => {\r\n    const autocomplete: IAutocompleteState = _.findWhere(state.autocompletes, {id: ownProps.id});\r\n    const listbox = _.findWhere(state.listBoxes, {id: ownProps.id});\r\n    const defaultValue = listbox && listbox.selected && listbox.selected.length ? listbox.selected[0] : '';\r\n    const value = (autocomplete && autocomplete.value) || defaultValue;\r\n\r\n    const itemsWithHidden = _.map(\r\n        ownProps.items,\r\n        (item: IItemBoxProps): IItemBoxProps => {\r\n            const visible = _.isFunction(ownProps.matchFilter)\r\n                ? ownProps.matchFilter(value, item)\r\n                : defaultListBoxMatchFilter(value, item);\r\n\r\n            return {...item, hidden: !visible || !!item.hidden};\r\n        }\r\n    );\r\n\r\n    let index = 0;\r\n    const activeIndex = autocomplete && autocomplete.active;\r\n    const visibleLength = _.filter(itemsWithHidden, (item: IItemBoxProps) => !item.hidden && !item.disabled).length;\r\n    const visibleItems = _.map(\r\n        itemsWithHidden,\r\n        (item: IItemBoxProps): IItemBoxProps => {\r\n            let active = false;\r\n            if (!item.hidden && !item.disabled) {\r\n                active = mod(activeIndex, visibleLength) === index;\r\n                index++;\r\n            }\r\n            return {...item, highlight: value, active};\r\n        }\r\n    );\r\n\r\n    return {\r\n        value,\r\n        visibleItems,\r\n        active: autocomplete && autocomplete.active,\r\n        isOpen: autocomplete && autocomplete.open,\r\n    };\r\n};\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IAutocompleteOwnProps): IAutocompleteDispatchProps => ({\r\n    onRender: () => dispatch(addAutocomplete(ownProps.id)),\r\n    onDestroy: () => dispatch(removeAutocomplete(ownProps.id)),\r\n    onDocumentClick: () => dispatch(toggleAutocomplete(ownProps.id, false)),\r\n    onFocus: () => dispatch(toggleAutocomplete(ownProps.id)),\r\n    onValueChange: (value: string, open: boolean) => dispatch(setAutocompleteValue(ownProps.id, value, open)),\r\n    setActive: (diff: number) => dispatch(setAutocompleteActive(ownProps.id, diff)),\r\n});\r\n\r\n@ReduxConnect(mapStateToProps, mapDispatchToProps)\r\nexport class AutocompleteConnected extends React.Component<\r\n    IAutocompleteProps & React.HTMLProps<AutocompleteConnected>,\r\n    {}\r\n> {\r\n    private dropdown: HTMLDivElement;\r\n    private menu: HTMLDivElement;\r\n\r\n    static defaultProps: Partial<IAutocompleteOwnProps> = {\r\n        inline: false,\r\n    };\r\n\r\n    componentWillMount() {\r\n        this.props.onRender();\r\n        document.addEventListener('mousedown', this.handleDocumentClick);\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        document.removeEventListener('mousedown', this.handleDocumentClick);\r\n        this.props.onDestroy();\r\n    }\r\n\r\n    render() {\r\n        const pickerClasses = classNames(this.props.className, 'autocomplete', {\r\n            open: this.props.isOpen,\r\n            dropdown: !this.props.inline,\r\n        });\r\n        const dropdownClasses = classNames('autocomplete-list-container bg-pure-white', {\r\n            hidden: !this.props.isOpen,\r\n            absolute: !this.props.inline,\r\n            'full-content-x': !this.props.inline,\r\n            'show-on-top': !this.props.inline,\r\n        });\r\n        return (\r\n            <div className={pickerClasses} ref={(ref: HTMLDivElement) => (this.dropdown = ref)}>\r\n                <div className=\"input-wrapper validate input-field\">\r\n                    <input\r\n                        onFocus={() => this.props.onFocus()}\r\n                        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => this.onKeyUp(e)}\r\n                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => this.onKeyDown(e)}\r\n                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>\r\n                            this.props.onValueChange(e.target.value, true)\r\n                        }\r\n                        value={this.props.value}\r\n                        required\r\n                    />\r\n                    {this.props.children}\r\n                </div>\r\n                <div className={dropdownClasses} ref={(ref: HTMLDivElement) => (this.menu = ref)}>\r\n                    <SlideY in={this.props.isOpen} timeout={350}>\r\n                        <ListBoxConnected id={this.props.id} classes={['relative']} items={this.props.visibleItems} />\r\n                    </SlideY>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private onToggleDropdown() {\r\n        this.menu.style.minWidth = this.dropdown.clientWidth + 'px';\r\n\r\n        this.props.onFocus();\r\n    }\r\n\r\n    private onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {\r\n        if (_.contains([keyCode.tab, keyCode.downArrow, keyCode.upArrow], e.keyCode)) {\r\n            e.preventDefault();\r\n            e.stopPropagation();\r\n        }\r\n    }\r\n\r\n    private onKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {\r\n        if (keyCode.escape === e.keyCode && this.props.isOpen) {\r\n            this.onToggleDropdown();\r\n        }\r\n\r\n        if (_.contains([keyCode.enter, keyCode.tab], e.keyCode) && this.props.isOpen) {\r\n            const active = _.findWhere(this.props.visibleItems, {active: true});\r\n            if (active) {\r\n                this.props.onValueChange(active.value, false);\r\n            }\r\n        } else if (keyCode.enter === e.keyCode) {\r\n            this.onToggleDropdown();\r\n        }\r\n\r\n        if (keyCode.downArrow === e.keyCode) {\r\n            this.props.setActive(1);\r\n        }\r\n\r\n        if (keyCode.upArrow === e.keyCode) {\r\n            this.props.setActive(-1);\r\n        }\r\n    }\r\n\r\n    private handleDocumentClick = (e: MouseEvent) => {\r\n        if (this.props.isOpen && document.body.contains(e.target as HTMLElement)) {\r\n            const dropdown: Element | Text = ReactDOM.findDOMNode(this.dropdown);\r\n\r\n            if (!dropdown.contains(e.target as Node)) {\r\n                this.props.onDocumentClick();\r\n            }\r\n        }\r\n    };\r\n}\r\n"}}]);
//# sourceMappingURL=152.bundle.js.map