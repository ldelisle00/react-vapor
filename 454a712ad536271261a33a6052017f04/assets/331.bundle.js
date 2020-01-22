(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{1426:function(n,e,t){"use strict";t.r(e),e.default="import * as _ from 'underscore';\r\nimport * as s from 'underscore.string';\r\nimport {deepClone} from '../../utils/CloneUtils';\r\nimport {keyCode} from '../../utils/InputUtils';\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IDropdownOption} from './DropdownSearch';\r\nimport {DropdownSearchActions, IOptionsDropdownSearchPayload} from './DropdownSearchActions';\r\nimport {multiSelectDropdownSearchReducer} from './MultiSelectDropdownSearch/MultiSelectDropdownSearchReducer';\r\n\r\nexport interface IDropdownSearchState {\r\n    id: string;\r\n    isOpened?: boolean;\r\n    filterText?: string;\r\n    options?: IDropdownOption[];\r\n    selectedOption?: IDropdownOption;\r\n    activeOption?: IDropdownOption;\r\n    setFocusOnDropdownButton?: boolean;\r\n    defaultSelectedOptionValue?: string;\r\n    supportSingleCustomOption?: boolean;\r\n}\r\n\r\nexport const defaultSelectedOptionPlaceholder: IDropdownOption = {\r\n    value: 'Select an option',\r\n    selected: true,\r\n    custom: true,\r\n    hidden: true,\r\n    default: true,\r\n};\r\n\r\nexport const dropdownSearchInitialState: IDropdownSearchState = {\r\n    id: undefined,\r\n    isOpened: false,\r\n};\r\nexport const dropdownsSearchInitialState: IDropdownSearchState[] = [];\r\n\r\nexport const getNextIndexPosition = (array: any[], item: any, key: number): number => {\r\n    let index: number = array.indexOf(item);\r\n\r\n    if (index === -1) {\r\n        return 0;\r\n    } else if (item) {\r\n        if (key === keyCode.upArrow) {\r\n            index -= 1;\r\n        } else if (key === keyCode.downArrow) {\r\n            index += 1;\r\n        }\r\n    }\r\n    if (index >= array.length - 1) {\r\n        return array.length - 1;\r\n    }\r\n\r\n    return index;\r\n};\r\n\r\nexport const isNotCustomOption = (option: IDropdownOption, includeSelected: boolean = true): boolean =>\r\n    includeSelected ? !option.custom : !option.custom || option.selected;\r\n\r\n// removeCustomOptions only utilized in supportSingleCustomOption scenarios, otherwise causes side effects for multiselect\r\nexport const removeCustomOptions = (\r\n    options: IDropdownOption[],\r\n    supportSingleCustomOption: boolean,\r\n    includeSelected: boolean = true\r\n) => {\r\n    return !supportSingleCustomOption\r\n        ? deepClone(options)\r\n        : deepClone(options.filter((option: IDropdownOption) => isNotCustomOption(option, includeSelected)));\r\n};\r\n\r\nexport const shouldHideOnFilter = (option: IDropdownOption, filterText: string): boolean =>\r\n    !!(option.default || (option.custom && option.value === filterText));\r\n\r\nexport const deselectOption = (options: IDropdownOption[], value: string): IDropdownOption[] => {\r\n    const nextOptions: IDropdownOption[] = deepClone(options);\r\n    const selectedOption = _.find(nextOptions, {value});\r\n    if (selectedOption) {\r\n        if (selectedOption.custom) {\r\n            nextOptions.splice(nextOptions.indexOf(selectedOption), 1);\r\n        } else {\r\n            selectedOption.selected = false;\r\n            selectedOption.hidden = false;\r\n        }\r\n    }\r\n    return nextOptions;\r\n};\r\n\r\nexport const deselectLastSelectedOption = (options: IDropdownOption[]): IDropdownOption[] => {\r\n    const lastSelectedOption: IDropdownOption = _.find(options.slice().reverse(), {selected: true});\r\n    return lastSelectedOption ? deselectOption(options, lastSelectedOption.value) : deepClone(options);\r\n};\r\n\r\nexport const deselectAllOptions = (options: IDropdownOption[], includeCustom: boolean = false): IDropdownOption[] => {\r\n    const nextOptions: IDropdownOption[] = [];\r\n    _.each(options, (option: IDropdownOption) => {\r\n        if (!option.custom || includeCustom) {\r\n            const nextOption = deepClone(option);\r\n            nextOptions.push({...nextOption, selected: false, hidden: false});\r\n        }\r\n    });\r\n\r\n    return nextOptions;\r\n};\r\n\r\nexport const addUniqueSelectedOption = (\r\n    options: IDropdownOption[],\r\n    value: string,\r\n    displayValue?: string\r\n): IDropdownOption[] => {\r\n    const sameValueDoesNotExist = _.findWhere(options, {value}) === undefined;\r\n\r\n    if (sameValueDoesNotExist) {\r\n        const nextOptions: IDropdownOption[] = deepClone(options);\r\n        nextOptions.push({\r\n            value,\r\n            displayValue: displayValue || value,\r\n            selected: true,\r\n            custom: true,\r\n        });\r\n        return nextOptions;\r\n    }\r\n    return deepClone(options);\r\n};\r\n\r\nexport const getDisplayedOptions = (state: IDropdownSearchState): IDropdownOption[] => {\r\n    return _.reject(state.options, (option) => (!state.supportSingleCustomOption && option.custom) || option.hidden);\r\n};\r\n\r\nexport const getFilteredOptions = (state: IDropdownSearchState, filterText?: string) => {\r\n    const currentFilterText: string = filterText || state.filterText || '';\r\n    return _.filter(getDisplayedOptions(state), (option: IDropdownOption) => {\r\n        const displayValue = option.displayValue || option.value;\r\n        return s.contains(displayValue.toLowerCase(), currentFilterText.toLowerCase());\r\n    });\r\n};\r\n\r\nexport const selectSingleOption = (options: IDropdownOption[], selectedOption: IDropdownOption): IDropdownOption[] => {\r\n    return _.map(options, (option: IDropdownOption) =>\r\n        _.extend(deepClone(option), {selected: option.value === selectedOption.value})\r\n    );\r\n};\r\n\r\nexport const multiSelectOption = (options: IDropdownOption[], selectedOption: IDropdownOption): IDropdownOption[] => {\r\n    let valueFound: boolean = false;\r\n    const newOptions: IDropdownOption[] = _.map(options, (option: IDropdownOption) => {\r\n        const nextOption: IDropdownOption = deepClone(option);\r\n        if (nextOption.value === selectedOption.value) {\r\n            valueFound = true;\r\n            nextOption.selected = true;\r\n            nextOption.hidden = true;\r\n        }\r\n        return nextOption;\r\n    });\r\n\r\n    if (!valueFound) {\r\n        return addUniqueSelectedOption(options, selectedOption.value, selectedOption.displayValue);\r\n    }\r\n\r\n    return newOptions;\r\n};\r\n\r\nexport const updateOptions = (\r\n    options: IDropdownOption[],\r\n    selectAValue: boolean = true,\r\n    selectedOption?: IDropdownOption\r\n): IDropdownOption[] => {\r\n    let updatedOptions: IDropdownOption[] = options ? deepClone(options) : [];\r\n\r\n    if (selectAValue) {\r\n        const defaultSelectedOption = selectedOption\r\n            ? {...selectedOption, selected: true, custom: true}\r\n            : defaultSelectedOptionPlaceholder;\r\n\r\n        updatedOptions = _.find(updatedOptions, (option) => option.value === defaultSelectedOption.value)\r\n            ? selectSingleOption(updatedOptions, defaultSelectedOption)\r\n            : [...updatedOptions, defaultSelectedOption];\r\n    }\r\n\r\n    return updatedOptions;\r\n};\r\n\r\nexport const dropdownSearchReducer = (\r\n    state: IDropdownSearchState = dropdownSearchInitialState,\r\n    action: IReduxAction<IOptionsDropdownSearchPayload>\r\n): IDropdownSearchState => {\r\n    let nextOptions: IDropdownOption[] = [];\r\n\r\n    switch (action.type) {\r\n        case DropdownSearchActions.toggle:\r\n            nextOptions = state.supportSingleCustomOption\r\n                ? removeCustomOptions(state.options, state.supportSingleCustomOption, false)\r\n                : state.options;\r\n            return {\r\n                ...state,\r\n                isOpened: !state.isOpened,\r\n                options: nextOptions,\r\n                filterText: '',\r\n                activeOption: undefined,\r\n                setFocusOnDropdownButton: false,\r\n            };\r\n        case DropdownSearchActions.open:\r\n            return {\r\n                ...state,\r\n                isOpened: true,\r\n                filterText: '',\r\n                activeOption: undefined,\r\n                setFocusOnDropdownButton: false,\r\n            };\r\n        case DropdownSearchActions.close:\r\n            return {\r\n                ...state,\r\n                isOpened: false,\r\n                filterText: '',\r\n                activeOption: undefined,\r\n                setFocusOnDropdownButton: false,\r\n            };\r\n        case DropdownSearchActions.update:\r\n            return {\r\n                ...state,\r\n                id: action.payload.id,\r\n                options: updateOptions(\r\n                    action.payload.dropdownOptions,\r\n                    action.payload.selectAValue,\r\n                    action.payload.defaultSelectedOption\r\n                ),\r\n                setFocusOnDropdownButton: false,\r\n            };\r\n        case DropdownSearchActions.filter:\r\n            const options = state.options || [];\r\n            const shouldReturnNewOptions: boolean =\r\n                state.supportSingleCustomOption &&\r\n                options\r\n                    .filter((option: IDropdownOption) => !option.custom && !option.default)\r\n                    .every(\r\n                        (option: IDropdownOption) =>\r\n                            (option.displayValue || option.value).toLowerCase() !==\r\n                            (action.payload.filterText || '').toLowerCase()\r\n                    );\r\n\r\n            nextOptions = shouldReturnNewOptions\r\n                ? options.map((option: IDropdownOption) =>\r\n                      _.extend(option, {hidden: shouldHideOnFilter(option, action.payload.filterText)})\r\n                  )\r\n                : options;\r\n\r\n            if (shouldReturnNewOptions) {\r\n                const newCustomOption: IDropdownOption[] =\r\n                    action.payload.filterText !== ''\r\n                        ? [{value: action.payload.filterText, selected: false, custom: true, hidden: false}]\r\n                        : [];\r\n\r\n                const newState = _.extend(deepClone(state), {\r\n                    options: [\r\n                        ...newCustomOption,\r\n                        ...removeCustomOptions(nextOptions, state.supportSingleCustomOption, false),\r\n                    ],\r\n                });\r\n\r\n                return {\r\n                    ...newState,\r\n                    id: action.payload.id,\r\n                    filterText: action.payload.filterText,\r\n                    activeOption: getFilteredOptions(newState, action.payload.filterText)[0] || undefined,\r\n                    setFocusOnDropdownButton: false,\r\n                };\r\n            }\r\n\r\n            return {\r\n                ...state,\r\n                id: action.payload.id,\r\n                options: deepClone(nextOptions),\r\n                filterText: action.payload.filterText,\r\n                activeOption: getFilteredOptions(state, action.payload.filterText)[0] || undefined,\r\n                setFocusOnDropdownButton: false,\r\n            };\r\n        case DropdownSearchActions.select:\r\n            if (action.payload.addedSelectedOption.disabled) {\r\n                return state;\r\n            }\r\n\r\n            const optionsWithOneSelectedOption = selectSingleOption(\r\n                deselectAllOptions(state.options, true),\r\n                action.payload.addedSelectedOption\r\n            );\r\n\r\n            nextOptions = !state.supportSingleCustomOption\r\n                ? selectSingleOption(state.options, action.payload.addedSelectedOption)\r\n                : removeCustomOptions(optionsWithOneSelectedOption, state.supportSingleCustomOption, false);\r\n\r\n            return {\r\n                ...state,\r\n                options: nextOptions,\r\n                id: action.payload.id,\r\n                isOpened: false,\r\n                activeOption: undefined,\r\n                setFocusOnDropdownButton: action.payload.setFocusOnDropdown,\r\n            };\r\n        case DropdownSearchActions.add:\r\n            return {\r\n                ...state,\r\n                options: updateOptions(\r\n                    action.payload.dropdownOptions,\r\n                    action.payload.selectAValue,\r\n                    action.payload.defaultSelectedOption\r\n                ),\r\n                id: action.payload.id,\r\n                filterText: '',\r\n                isOpened: false,\r\n                supportSingleCustomOption: action.payload.supportSingleCustomOption,\r\n            };\r\n        case DropdownSearchActions.active:\r\n            const keyPressed = action.payload.keyCode;\r\n            const optionsFiltered = getFilteredOptions(state);\r\n            const isFirstSelectedOption = keyPressed === keyCode.upArrow && state.activeOption === optionsFiltered[0];\r\n\r\n            const shouldSelectSecondOption: boolean =\r\n                keyPressed === keyCode.downArrow &&\r\n                (state.activeOption && state.activeOption.value) === (optionsFiltered[0] && optionsFiltered[0].value) &&\r\n                !!state.filterText;\r\n\r\n            const activeOption: IDropdownOption = shouldSelectSecondOption\r\n                ? optionsFiltered[1]\r\n                : optionsFiltered[getNextIndexPosition(optionsFiltered, state.activeOption, keyPressed)];\r\n\r\n            if (_.contains([keyCode.upArrow, keyCode.downArrow], keyPressed)) {\r\n                return {\r\n                    ...state,\r\n                    isOpened: !isFirstSelectedOption,\r\n                    options:\r\n                        state.supportSingleCustomOption && isFirstSelectedOption\r\n                            ? removeCustomOptions(state.options, false)\r\n                            : state.options,\r\n                    activeOption: !isFirstSelectedOption ? activeOption : undefined,\r\n                    setFocusOnDropdownButton: isFirstSelectedOption,\r\n                };\r\n            } else if (keyPressed === keyCode.escape) {\r\n                return {\r\n                    ...state,\r\n                    isOpened: false,\r\n                };\r\n            } else if (keyPressed === -1) {\r\n                return {\r\n                    ...state,\r\n                    id: action.payload.id,\r\n                    activeOption: undefined,\r\n                    setFocusOnDropdownButton: false,\r\n                };\r\n            }\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nexport const dropdownsSearchReducer = (\r\n    state: IDropdownSearchState[] = dropdownsSearchInitialState,\r\n    action: IReduxAction<IOptionsDropdownSearchPayload>\r\n): IDropdownSearchState[] => {\r\n    switch (action.type) {\r\n        case DropdownSearchActions.update:\r\n        case DropdownSearchActions.filter:\r\n        case DropdownSearchActions.active:\r\n        case DropdownSearchActions.toggle:\r\n        case DropdownSearchActions.open:\r\n        case DropdownSearchActions.close:\r\n        case DropdownSearchActions.select:\r\n            return state.map((dropdownSearch: IDropdownSearchState) => {\r\n                return dropdownSearch.id === action.payload.id\r\n                    ? dropdownSearchReducer(dropdownSearch, action)\r\n                    : dropdownSearch;\r\n            });\r\n        case DropdownSearchActions.add:\r\n            return [...state, dropdownSearchReducer(undefined, action)];\r\n        case DropdownSearchActions.addMultiSelect:\r\n            return [...state, multiSelectDropdownSearchReducer(undefined, action)];\r\n        case DropdownSearchActions.deselectAllOptions:\r\n        case DropdownSearchActions.multiSelect:\r\n        case DropdownSearchActions.addCustomSelectedOption:\r\n        case DropdownSearchActions.onKeyDownMultiselect:\r\n        case DropdownSearchActions.deselectOption:\r\n            return state.map((dropdownSearch: IDropdownSearchState) => {\r\n                return dropdownSearch.id === action.payload.id\r\n                    ? multiSelectDropdownSearchReducer(dropdownSearch, action)\r\n                    : dropdownSearch;\r\n            });\r\n        case DropdownSearchActions.remove:\r\n            return _.reject(state, (dropdown: IDropdownSearchState) => {\r\n                return action.payload.id === dropdown.id;\r\n            });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=331.bundle.js.map