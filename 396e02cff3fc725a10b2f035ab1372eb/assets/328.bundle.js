(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{1435:function(n,e,r){"use strict";r.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {InfiniteScrollProps} from 'react-infinite-scroll-component';\r\nimport * as _ from 'underscore';\r\nimport * as s from 'underscore.string';\r\n\r\nimport {keyCode} from '../../utils/InputUtils';\r\nimport {Content} from '../content/Content';\r\nimport {FilterBox} from '../filterBox/FilterBox';\r\nimport {ISvgProps, Svg} from '../svg/Svg';\r\nimport {ITooltipProps, Tooltip} from '../tooltip/Tooltip';\r\nimport {\r\n    DropdownSearchAutoInfiniteScroll,\r\n    IDropdownSearchAutoInfiniteScrollOptions,\r\n} from './DropdownSearchAutoInfiniteScroll';\r\nimport {DropdownSearchInfiniteScrollOptions} from './DropdownSearchInfiniteScrollOptions';\r\n\r\nexport interface IDropdownOption {\r\n    svg?: ISvgProps;\r\n    value: string;\r\n    displayValue?: string;\r\n    prefix?: string;\r\n    selected?: boolean;\r\n    custom?: boolean;\r\n    hidden?: boolean;\r\n    disabled?: boolean;\r\n    disabledTooltip?: ITooltipProps;\r\n    default?: boolean;\r\n    append?: string;\r\n}\r\n\r\nexport interface IDropdownSearchStateProps {\r\n    isOpened?: boolean;\r\n    filterText?: string;\r\n    options?: IDropdownOption[];\r\n    activeOption?: IDropdownOption;\r\n    setFocusOnDropdownButton?: boolean;\r\n}\r\n\r\nexport interface IDropdownSearchOwnProps {\r\n    id?: string;\r\n    modMenu?: boolean;\r\n    fixedPrepend?: string;\r\n    containerClasses?: string[];\r\n    defaultOptions?: IDropdownOption[];\r\n    defaultSelectedOption?: IDropdownOption;\r\n    filterPlaceholder?: string;\r\n    maxWidth?: React.ReactText;\r\n    width?: React.ReactText;\r\n    hasFilterSuggestionBoxWidthFixed?: boolean;\r\n    highlightThreshold?: number;\r\n    highlightAllFilterResult?: boolean;\r\n    noResultText?: string;\r\n    createOptionText?: string;\r\n    deselectAllTooltipText?: string;\r\n    isDisabled?: boolean;\r\n    onOptionClickCallBack?: (option: IDropdownOption) => void;\r\n    onMountCallBack?: () => void;\r\n    onClickCallBack?: () => void;\r\n    supportSingleCustomOption?: boolean;\r\n    searchThresold?: number;\r\n    infiniteScroll?: InfiniteScrollProps;\r\n    hasMoreItems?: () => boolean;\r\n    customFiltering?: (filterText: string) => void;\r\n    autoInfiniteScroll?: IDropdownSearchAutoInfiniteScrollOptions;\r\n}\r\n\r\nexport interface IDropdownSearchDispatchProps {\r\n    onMount?: () => void;\r\n    onDestroy?: () => void;\r\n    onToggleDropdown?: () => void;\r\n    onBlur?: (options: IDropdownOption[]) => void;\r\n    onFocus?: () => void;\r\n    onFilterTextChange?: (filterText: string) => void;\r\n    onOptionClick?: (option: IDropdownOption) => void;\r\n    onCustomOptionClick?: (displayValue: string) => void;\r\n    onKeyDownFilterBox?: (keyCode: number, activeOption?: IDropdownOption) => void;\r\n    onKeyDownDropdownButton?: (keyCode: number, activeOption?: IDropdownOption) => void;\r\n    onMouseEnterDropdown?: (activeOption?: IDropdownOption) => void;\r\n    onRemoveSelectedOption?: (value: string) => void;\r\n    onRemoveAllSelectedOptions?: () => void;\r\n    onClose?: () => void;\r\n    updateOptions?: (options: IDropdownOption[]) => void;\r\n}\r\n\r\nexport interface IDropdownSearchProps\r\n    extends IDropdownSearchOwnProps,\r\n        IDropdownSearchStateProps,\r\n        IDropdownSearchDispatchProps {}\r\n\r\n/**\r\n * @deprecated use components from SelectComponents instead\r\n */\r\nexport class DropdownSearch extends React.Component<IDropdownSearchProps, {}> {\r\n    static defaultProps: Partial<IDropdownSearchProps> = {\r\n        isOpened: false,\r\n        highlightThreshold: 100,\r\n        highlightAllFilterResult: false,\r\n        noResultText: 'No results',\r\n        searchThresold: 7,\r\n    };\r\n\r\n    filterInput: HTMLDivElement;\r\n    ulElement: HTMLElement;\r\n\r\n    protected dropdownButton: HTMLElement;\r\n\r\n    componentDidUpdate() {\r\n        this.updateScrollPositionBasedOnActiveElement();\r\n\r\n        if (this.dropdownButton && this.props.setFocusOnDropdownButton && this.isSearchOn()) {\r\n            this.dropdownButton.focus();\r\n        }\r\n\r\n        if (\r\n            this.props.updateOptions &&\r\n            !this.props.options.length &&\r\n            this.props.defaultOptions &&\r\n            this.props.defaultOptions.length\r\n        ) {\r\n            this.props.updateOptions(this.props.defaultOptions);\r\n        }\r\n    }\r\n\r\n    componentWillMount() {\r\n        if (this.props.onMount) {\r\n            this.props.onMount();\r\n        }\r\n\r\n        if (this.props.onMountCallBack) {\r\n            this.props.onMountCallBack();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n        if (this.props.onDestroy) {\r\n            this.props.onDestroy();\r\n        }\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className={this.getClasses()} style={this.getStyles()}>\r\n                {this.getMainInput()}\r\n                {this.getDropdownMenu()}\r\n            </div>\r\n        );\r\n    }\r\n\r\n    protected getDropdownOptions(): JSX.Element[] {\r\n        const hasInfiniteScrolling = !!this.props.infiniteScroll || !!this.props.autoInfiniteScroll;\r\n        const ElementTag: string = hasInfiniteScrolling ? 'div' : 'li';\r\n        const options = _.chain(this.getDisplayedOptions())\r\n            .filter((option: IDropdownOption) => {\r\n                const value = option.displayValue || option.value;\r\n                return (\r\n                    _.isEmpty(this.props.filterText) ||\r\n                    s.contains(value.toLowerCase(), this.props.filterText.toLowerCase())\r\n                );\r\n            })\r\n            .map((opt: IDropdownOption, index: number, opts: IDropdownOption[]) => {\r\n                const optionClasses = classNames('dropdown-option', {\r\n                    'with-append': !_.isUndefined(opt.append),\r\n                    'state-selected': opt.selected,\r\n                });\r\n                const wrapperClasses = classNames('option-wrapper', {\r\n                    active: JSON.stringify(opt) === JSON.stringify(this.props.activeOption),\r\n                    disabled: !!opt.disabled,\r\n                });\r\n\r\n                const value = opt.displayValue || opt.value;\r\n                const valueToShow =\r\n                    !!this.props.highlightAllFilterResult || opts.length <= this.props.highlightThreshold\r\n                        ? this.getTextFiltered(value)\r\n                        : value;\r\n\r\n                const formattedOption = React.createElement(\r\n                    ElementTag,\r\n                    {\r\n                        key: opt.value,\r\n                        className: wrapperClasses,\r\n                        title: value,\r\n                        'data-value': opt.value,\r\n                        onMouseDown: (e: React.MouseEvent<HTMLSpanElement>) => this.handleOnOptionClick(e),\r\n                    },\r\n                    <>\r\n                        <span className={optionClasses}>\r\n                            {this.getDropdownPrepend(opt)}\r\n                            {this.getSvg(opt)}\r\n                            {valueToShow}\r\n                        </span>\r\n                        {this.getDropdownOptionAppend(opt)}\r\n                    </>\r\n                );\r\n\r\n                return opt.disabled && opt.disabledTooltip ? (\r\n                    <Tooltip key={opt.value} noSpanWrapper {...opt.disabledTooltip}>\r\n                        {formattedOption}\r\n                    </Tooltip>\r\n                ) : (\r\n                    formattedOption\r\n                );\r\n            })\r\n            .value();\r\n\r\n        return options.length ? options : this.getNoOptions();\r\n    }\r\n\r\n    protected getSelectedOption(): IDropdownOption {\r\n        return _.findWhere(this.props.options, {selected: true});\r\n    }\r\n\r\n    protected getSelectedOptions(): IDropdownOption[] {\r\n        return _.where(this.props.options, {selected: true});\r\n    }\r\n\r\n    protected getDropdownOptionAppend(option?: IDropdownOption): JSX.Element {\r\n        return option && option.append ? <div className=\"dropdown-option-append\">{option.append}</div> : null;\r\n    }\r\n\r\n    protected getNoOptions(): JSX.Element[] {\r\n        return [\r\n            <li key=\"noResultDropdownSearch\">\r\n                <span className=\"no-search-results\">{this.props.noResultText}</span>\r\n            </li>,\r\n        ];\r\n    }\r\n\r\n    protected getSvg(option: IDropdownOption): JSX.Element {\r\n        return option && option.svg ? (\r\n            <span key={option.svg.svgName} className=\"value-icon\">\r\n                <Svg {...option.svg} />\r\n            </span>\r\n        ) : null;\r\n    }\r\n\r\n    protected getTextFiltered(text: string): Array<JSX.Element | string> | string {\r\n        const originalText = (text || '').toString();\r\n        if (!_.isEmpty(this.props.filterText)) {\r\n            let highlightIndexKey: number = 0;\r\n            const textFilterElements: Array<JSX.Element | string> = [''];\r\n            let index: number = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());\r\n            while (index !== -1) {\r\n                if (index > 0) {\r\n                    textFilterElements.push(text.substring(0, index));\r\n                }\r\n                textFilterElements.push(\r\n                    this.getTextElement(\r\n                        text.substring(index, index + this.props.filterText.length),\r\n                        originalText,\r\n                        highlightIndexKey,\r\n                        'bold'\r\n                    )\r\n                );\r\n                text = text.substring(index + this.props.filterText.length);\r\n                index = text.toLowerCase().indexOf(this.props.filterText.toLowerCase());\r\n                highlightIndexKey += 1;\r\n            }\r\n            textFilterElements.push(text);\r\n\r\n            return textFilterElements;\r\n        }\r\n\r\n        return text;\r\n    }\r\n\r\n    protected getTextElement(\r\n        subText: string,\r\n        text: string,\r\n        highlightIndexKey: number,\r\n        className: string = ''\r\n    ): JSX.Element {\r\n        return (\r\n            <span key={`${text}-${highlightIndexKey}`} className={className}>\r\n                {subText}\r\n            </span>\r\n        );\r\n    }\r\n\r\n    protected getMainInputPrepend(option: IDropdownOption): JSX.Element {\r\n        const prepend = this.props.fixedPrepend || (option && option.prefix);\r\n\r\n        return prepend ? <Content key={prepend} classes={['dropdown-prepend']} content={prepend} /> : null;\r\n    }\r\n\r\n    protected getDropdownPrepend(option: IDropdownOption): JSX.Element {\r\n        return option && option.prefix ? (\r\n            <Content key={option.prefix} classes={['dropdown-prepend']} content={option.prefix} />\r\n        ) : null;\r\n    }\r\n\r\n    protected getMainInput(): JSX.Element {\r\n        const selectedOption: IDropdownOption = _.findWhere(this.props.options, {selected: true});\r\n        const filterPlaceHolder: string =\r\n            (selectedOption && (selectedOption.displayValue || selectedOption.value)) || this.props.filterPlaceholder;\r\n\r\n        if (this.props.isOpened && (this.isSearchOn() || this.props.supportSingleCustomOption)) {\r\n            return (\r\n                <FilterBox\r\n                    id={this.props.id}\r\n                    onFilter={(id, filterText) => this.handleOnFilterTextChange(filterText)}\r\n                    onBlur={() => this.handleOnBlur()}\r\n                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDownFilterBox(e)}\r\n                    filterPlaceholder={filterPlaceHolder}\r\n                    isAutoFocus={true}\r\n                    filterText={this.props.filterText || ''}\r\n                />\r\n            );\r\n        }\r\n        const buttonClasses = classNames('btn dropdown-toggle dropdown-button-search-container mod-search', {\r\n            'dropdown-toggle-placeholder': selectedOption && selectedOption.default === true,\r\n        });\r\n\r\n        return (\r\n            <button\r\n                className={buttonClasses}\r\n                type=\"button\"\r\n                data-toggle=\"dropdown\"\r\n                onClick={() => this.handleOnClick()}\r\n                onBlur={() => this.handleOnClose()}\r\n                onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => this.handleOnKeyDownDropdownButton(e as any)}\r\n                style={{\r\n                    maxWidth: this.props.maxWidth,\r\n                }}\r\n                ref={(input: HTMLButtonElement) => (this.dropdownButton = input)}\r\n                disabled={!!this.props.isDisabled}\r\n            >\r\n                {this.getMainInputPrepend(selectedOption)}\r\n                {this.getSvg(selectedOption)}\r\n                {this.getSelectedOptionElement()}\r\n                {this.getDropdownOptionAppend(selectedOption)}\r\n                <span className=\"dropdown-toggle-arrow\"></span>\r\n            </button>\r\n        );\r\n    }\r\n\r\n    protected isScrolledIntoView(el: Element) {\r\n        const boxTop = this.ulElement.getBoundingClientRect().top;\r\n        const boxBottom = this.ulElement.getBoundingClientRect().bottom;\r\n        const elTop = el.getBoundingClientRect().top;\r\n        const elBottom = el.getBoundingClientRect().bottom;\r\n\r\n        return elTop >= boxTop && elBottom <= boxBottom;\r\n    }\r\n\r\n    protected getDisplayedOptions(): IDropdownOption[] {\r\n        return _.reject(\r\n            this.props.options,\r\n            (option) => (!this.props.supportSingleCustomOption && option.custom) || option.hidden\r\n        );\r\n    }\r\n\r\n    protected handleOnOptionClickOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {\r\n        if (this.isKeyToPreventOnKeyDown(e)) {\r\n            e.preventDefault();\r\n\r\n            if (e.keyCode !== keyCode.upArrow && this.props.onOptionClickCallBack && this.props.activeOption) {\r\n                this.props.onOptionClickCallBack(this.props.activeOption);\r\n            }\r\n        }\r\n    }\r\n\r\n    protected handleOnKeyDownFilterBox(e: React.KeyboardEvent<HTMLInputElement>) {\r\n        if (this.props.onKeyDownFilterBox) {\r\n            this.props.onKeyDownFilterBox(e.keyCode, this.props.activeOption);\r\n        }\r\n\r\n        this.handleOnOptionClickOnKeyDown(e);\r\n    }\r\n\r\n    protected getClasses() {\r\n        return classNames(\r\n            'dropdown',\r\n            'mod-search',\r\n            {\r\n                open: this.props.isOpened,\r\n                'mod-menu': this.props.modMenu,\r\n            },\r\n            ...(this.props.containerClasses || [])\r\n        );\r\n    }\r\n\r\n    protected getStyles() {\r\n        return {\r\n            width: this.props.width,\r\n        };\r\n    }\r\n\r\n    private getDropdownMenu(): JSX.Element {\r\n        if (!this.props.isOpened) {\r\n            return null;\r\n        }\r\n        const dropdownOptions: JSX.Element[] = this.getDropdownOptions();\r\n\r\n        if (this.props.autoInfiniteScroll) {\r\n            return (\r\n                <DropdownSearchAutoInfiniteScroll\r\n                    {...this.props.autoInfiniteScroll}\r\n                    options={dropdownOptions}\r\n                    onMouseEnter={() => this.handleOnMouseEnter()}\r\n                    ulElementRefFunction={(menu: HTMLElement) => (this.ulElement = menu)}\r\n                />\r\n            );\r\n        }\r\n\r\n        if (this.props.infiniteScroll) {\r\n            return (\r\n                <DropdownSearchInfiniteScrollOptions\r\n                    infiniteScroll={{\r\n                        ...this.props.infiniteScroll,\r\n                        dataLength: dropdownOptions.length,\r\n                        hasMore: this.props.hasMoreItems && this.props.hasMoreItems(),\r\n                    }}\r\n                    onMouseEnter={() => this.handleOnMouseEnter()}\r\n                    ulElementRefFunction={(menu: HTMLElement) => (this.ulElement = menu)}\r\n                    options={dropdownOptions}\r\n                />\r\n            );\r\n        }\r\n\r\n        return (\r\n            <ul\r\n                className=\"dropdown-menu\"\r\n                ref={(menu: HTMLUListElement) => {\r\n                    this.ulElement = menu;\r\n                }}\r\n                onMouseEnter={() => this.handleOnMouseEnter()}\r\n            >\r\n                {dropdownOptions}\r\n            </ul>\r\n        );\r\n    }\r\n\r\n    private getSelectedOptionElement(): JSX.Element[] {\r\n        if (this.props.options.length) {\r\n            return _.map(this.getSelectedOptions(), (selectedOption: IDropdownOption) => {\r\n                const displayValue = selectedOption.displayValue || selectedOption.value;\r\n                return (\r\n                    <span\r\n                        key={selectedOption.value}\r\n                        className={classNames('dropdown-selected-value', {'with-append': !!selectedOption.append})}\r\n                        data-value={selectedOption.value}\r\n                        title={displayValue}\r\n                    >\r\n                        {displayValue}\r\n                    </span>\r\n                );\r\n            });\r\n        }\r\n\r\n        return null;\r\n    }\r\n\r\n    private isSearchOn(): boolean {\r\n        return !!this.props.infiniteScroll || this.props.options.length > this.props.searchThresold;\r\n    }\r\n\r\n    private updateScrollPositionBasedOnActiveElement() {\r\n        const activeLi: HTMLCollectionOf<Element> = this.ulElement\r\n            ? this.ulElement.getElementsByClassName('active')\r\n            : undefined;\r\n        if (activeLi && activeLi.length) {\r\n            const el: Element = activeLi[0];\r\n            if (!this.isScrolledIntoView(el)) {\r\n                if (el.getBoundingClientRect().bottom > this.ulElement.getBoundingClientRect().bottom) {\r\n                    this.ulElement.scrollTop +=\r\n                        el.getBoundingClientRect().bottom - this.ulElement.getBoundingClientRect().bottom;\r\n                }\r\n                if (el.getBoundingClientRect().top < this.ulElement.getBoundingClientRect().top) {\r\n                    this.ulElement.scrollTop -=\r\n                        this.ulElement.getBoundingClientRect().top - el.getBoundingClientRect().top;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    private handleOnFilterTextChange(filterText: string) {\r\n        if (this.props.customFiltering) {\r\n            this.props.customFiltering(filterText);\r\n        } else {\r\n            this.props.onFilterTextChange?.(filterText);\r\n        }\r\n    }\r\n\r\n    private handleOnClick() {\r\n        if (this.props.onClickCallBack) {\r\n            this.props.onClickCallBack();\r\n        }\r\n\r\n        if (this.props.onToggleDropdown) {\r\n            this.props.onToggleDropdown();\r\n        }\r\n    }\r\n\r\n    private handleOnOptionClick = (e: React.MouseEvent<HTMLSpanElement>) => {\r\n        if (e.target) {\r\n            const option = _.findWhere(this.props.options, {value: e.currentTarget.dataset.value});\r\n            if (option && !option.disabled) {\r\n                if (this.props.onOptionClick) {\r\n                    this.props.onOptionClick(option);\r\n                }\r\n\r\n                if (this.props.onOptionClickCallBack) {\r\n                    this.props.onOptionClickCallBack(option);\r\n                }\r\n            } else {\r\n                e.preventDefault();\r\n                e.stopPropagation();\r\n            }\r\n        }\r\n    };\r\n\r\n    private handleOnBlur() {\r\n        if (this.props.onBlur && !this.props.setFocusOnDropdownButton) {\r\n            this.props.onBlur(this.props.options);\r\n        }\r\n    }\r\n\r\n    private handleOnClose() {\r\n        if (this.props.onClose) {\r\n            this.props.onClose();\r\n        }\r\n    }\r\n\r\n    private isKeyToPreventOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {\r\n        /**\r\n         * Prevent Enter key because it triggers an undesirable click event\r\n         * Prevent Tab key to prevent focusing on the next element when selecting an option\r\n         * Prevent Up Arrow key when the first option in the dropdown is the active option to avoid two focus events to be triggered\r\n         */\r\n        return (\r\n            e.keyCode === keyCode.enter ||\r\n            e.keyCode === keyCode.tab ||\r\n            (e.keyCode === keyCode.upArrow && this.props.activeOption === this.props.options[0])\r\n        );\r\n    }\r\n\r\n    private handleOnKeyDownDropdownButton(e: React.KeyboardEvent<HTMLInputElement>) {\r\n        if (this.props.onKeyDownDropdownButton) {\r\n            this.props.onKeyDownDropdownButton(e.keyCode, this.props.activeOption);\r\n        }\r\n\r\n        if (!this.isSearchOn()) {\r\n            this.handleOnOptionClickOnKeyDown(e);\r\n        }\r\n\r\n        if (!this.isSearchOn() && _.contains([keyCode.downArrow, keyCode.upArrow], e.keyCode)) {\r\n            e.preventDefault();\r\n        }\r\n    }\r\n\r\n    private handleOnMouseEnter() {\r\n        if (this.props.onMouseEnterDropdown) {\r\n            this.props.onMouseEnterDropdown(this.props.activeOption);\r\n        }\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=328.bundle.js.map