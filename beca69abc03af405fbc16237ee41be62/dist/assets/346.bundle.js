(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{1442:function(e,r,n){"use strict";n.r(r),r.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Provider} from 'react-redux';\r\nimport {Store} from 'redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporState} from '../../../../ReactVapor';\r\nimport {keyCode} from '../../../../utils/InputUtils';\r\nimport {clearState} from '../../../../utils/ReduxUtils';\r\nimport {TestUtils} from '../../../../utils/tests/TestUtils';\r\nimport {UUID} from '../../../../utils/UUID';\r\nimport {IDropdownSearchProps} from '../../DropdownSearch';\r\nimport {\r\n    addCustomSelectedOption,\r\n    applyFilterDropdownSearch,\r\n    closeDropdownSearch,\r\n    openDropdownSearch,\r\n    updateOptionsDropdownSearch,\r\n} from '../../DropdownSearchActions';\r\nimport {defaultSelectedOptionPlaceholder} from '../../DropdownSearchReducers';\r\nimport {MultiSelectDropdownSearch} from '../MultiSelectDropdownSearch';\r\nimport {MultiSelectDropdownSearchConnected} from '../MultiSelectDropdownSearchConnected';\r\n\r\ndescribe('MultiSelectDropdownSearch', () => {\r\n    const id: string = UUID.generate();\r\n\r\n    describe('<MultiSelectDropdownSearchConnected />', () => {\r\n        let wrapper: ReactWrapper<any, any>;\r\n        let multiSelectDropdownSearchConnected: ReactWrapper<IDropdownSearchProps, any>;\r\n        let store: Store<IReactVaporState>;\r\n\r\n        const defaultOptions = [{value: 'a'}, {value: 'b'}];\r\n\r\n        const props: IDropdownSearchProps = {\r\n            id: id,\r\n            defaultOptions: defaultOptions,\r\n        };\r\n\r\n        const renderMultiSelectDropdownSearchConnected = (currentProps: IDropdownSearchProps) => {\r\n            wrapper = mount(\r\n                <Provider store={store}>\r\n                    <MultiSelectDropdownSearchConnected {...currentProps} />\r\n                </Provider>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n            multiSelectDropdownSearchConnected = wrapper.find(MultiSelectDropdownSearch).first();\r\n        };\r\n\r\n        beforeEach(() => {\r\n            store = TestUtils.buildStore();\r\n        });\r\n\r\n        afterEach(() => {\r\n            store.dispatch(clearState());\r\n            wrapper.detach();\r\n        });\r\n\r\n        describe('mount and unmount', () => {\r\n            beforeEach(() => {\r\n                renderMultiSelectDropdownSearchConnected(props);\r\n            });\r\n\r\n            it('should add a new dropdownSearch state in the store when mounted', () => {\r\n                wrapper.unmount();\r\n                store.dispatch(clearState());\r\n                expect(store.getState().dropdownSearch.length).toBe(0);\r\n\r\n                wrapper.mount();\r\n                expect(store.getState().dropdownSearch.length).toBe(1);\r\n            });\r\n\r\n            it('should call onDestroy prop when will unmount', () => {\r\n                wrapper.unmount();\r\n                expect(store.getState().dropdownSearch.length).toBe(0);\r\n            });\r\n        });\r\n\r\n        describe('mapDispatchToProps', () => {\r\n            beforeEach(() => {\r\n                renderMultiSelectDropdownSearchConnected(props);\r\n            });\r\n\r\n            it('should get what to do on destroy as a prop', () => {\r\n                const onDestroyProp = multiSelectDropdownSearchConnected.props().onDestroy;\r\n\r\n                expect(onDestroyProp).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onMount as a prop', () => {\r\n                const onMountProp = multiSelectDropdownSearchConnected.props().onMount;\r\n\r\n                expect(onMountProp).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onBlur as a prop', () => {\r\n                const onBlurProp = multiSelectDropdownSearchConnected.props().onBlur;\r\n\r\n                expect(onBlurProp).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onOptionClick as a prop', () => {\r\n                const onOptionClickProp = multiSelectDropdownSearchConnected.props().onOptionClick;\r\n\r\n                expect(onOptionClickProp).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onCustomOptionClick as a prop', () => {\r\n                const onCustomOptionClickProp = multiSelectDropdownSearchConnected.props().onCustomOptionClick;\r\n\r\n                expect(onCustomOptionClickProp).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onFilterTextChange as a prop', () => {\r\n                const onFilterClickProp = multiSelectDropdownSearchConnected.props().onFilterTextChange;\r\n\r\n                expect(onFilterClickProp).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onKeyDownFilterBox as a prop', () => {\r\n                const onKeyDownFilterBox = multiSelectDropdownSearchConnected.props().onKeyDownFilterBox;\r\n\r\n                expect(onKeyDownFilterBox).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onRemoveSelectedOption as a prop', () => {\r\n                const onRemoveSelectedOption = multiSelectDropdownSearchConnected.props().onRemoveSelectedOption;\r\n\r\n                expect(onRemoveSelectedOption).toBeDefined();\r\n            });\r\n\r\n            it('should get what to do on onRemoveAllSelectedOptions as a prop', () => {\r\n                const onRemoveAllSelectedOptions = multiSelectDropdownSearchConnected.props()\r\n                    .onRemoveAllSelectedOptions;\r\n\r\n                expect(onRemoveAllSelectedOptions).toBeDefined();\r\n            });\r\n\r\n            it('should toggle the close dropdown on blur', () => {\r\n                const dropdown = wrapper.find('.dropdown');\r\n\r\n                store.dispatch(closeDropdownSearch(id, []));\r\n\r\n                multiSelectDropdownSearchConnected.props().onBlur([]);\r\n\r\n                expect(dropdown.hasClass('open')).toBe(false);\r\n            });\r\n\r\n            it('should open the dropdown on focus', () => {\r\n                store.dispatch(closeDropdownSearch(id, []));\r\n                wrapper.update();\r\n\r\n                wrapper\r\n                    .find(MultiSelectDropdownSearch)\r\n                    .props()\r\n                    .onFocus();\r\n                wrapper.update();\r\n\r\n                expect(wrapper.find('.open').length).toBe(1);\r\n            });\r\n\r\n            it('should add the selected value in the state on click an option', () => {\r\n                store.dispatch(updateOptionsDropdownSearch(id, [{value: 'test 1'}, {value: 'test 2'}]));\r\n                store.dispatch(openDropdownSearch(id));\r\n\r\n                wrapper\r\n                    .find('li span')\r\n                    .first()\r\n                    .simulate('mouseDown');\r\n\r\n                const selectedOption = store.getState().dropdownSearch[0].options[0];\r\n                expect(selectedOption).not.toBe(defaultSelectedOptionPlaceholder);\r\n                expect(selectedOption.value).toBe('test 1');\r\n            });\r\n\r\n            it('should add the filterText in the state on onFilterTextChange', () => {\r\n                const filter: string = 't';\r\n                expect(store.getState().dropdownSearch[0].filterText).toBe('');\r\n\r\n                multiSelectDropdownSearchConnected.props().onFilterTextChange(filter);\r\n                expect(store.getState().dropdownSearch[0].filterText).toBe(filter);\r\n            });\r\n\r\n            it('should add a custom option on custom option click', () => {\r\n                const filterText: string = 'filter_text';\r\n                multiSelectDropdownSearchConnected.props().onCustomOptionClick(filterText);\r\n\r\n                expect(_.find(store.getState().dropdownSearch[0].options, {value: filterText})).toBeDefined();\r\n            });\r\n\r\n            it('should update filterText on key down', () => {\r\n                const enterKeyCode: number = keyCode.enter;\r\n                const filterText: string = 'custom value';\r\n\r\n                store.dispatch(applyFilterDropdownSearch(id, filterText));\r\n\r\n                multiSelectDropdownSearchConnected.props().onKeyDownFilterBox(enterKeyCode);\r\n\r\n                expect(_.find(store.getState().dropdownSearch[0].options, {value: filterText})).toBeDefined();\r\n            });\r\n\r\n            it('should remove selected option', () => {\r\n                const selectedOptionValue = 'value';\r\n\r\n                store.dispatch(addCustomSelectedOption(id, selectedOptionValue));\r\n\r\n                multiSelectDropdownSearchConnected.props().onRemoveSelectedOption(selectedOptionValue);\r\n\r\n                expect(\r\n                    _.find(store.getState().dropdownSearch[0].options, {value: selectedOptionValue})\r\n                ).toBeUndefined();\r\n            });\r\n\r\n            it('should remove all selected option', () => {\r\n                const selectedOptionValue1 = 'value_1';\r\n                const selectedOptionValue2 = 'value_2';\r\n\r\n                store.dispatch(addCustomSelectedOption(id, selectedOptionValue1));\r\n                store.dispatch(addCustomSelectedOption(id, selectedOptionValue2));\r\n\r\n                multiSelectDropdownSearchConnected.props().onRemoveAllSelectedOptions();\r\n\r\n                expect(_.where(store.getState().dropdownSearch[0].options, {selected: true}).length).toBe(0);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=346.bundle.js.map