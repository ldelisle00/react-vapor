(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1388:function(e,n,r){"use strict";r.r(n),n.default="import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';\r\nimport * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {DateUtils} from '../../../utils/DateUtils';\r\nimport {Button} from '../../button/Button';\r\nimport {ModalFooter} from '../../modal/ModalFooter';\r\nimport {DatePickerBox} from '../DatePickerBox';\r\nimport {\r\n    DatePickerDropdown,\r\n    DEFAULT_APPLY_DATE_LABEL,\r\n    DEFAULT_CANCEL_DATE_LABEL,\r\n    DEFAULT_DATE_PICKER_DROPDOWN_LABEL,\r\n    IDatePickerDropdownProps,\r\n} from '../DatePickerDropdown';\r\nimport {IDatePickerState} from '../DatePickerReducers';\r\n\r\ndescribe('Date picker', () => {\r\n    const DATE_PICKER_DROPDOWN_BASIC_PROPS: IDatePickerDropdownProps = {\r\n        datesSelectionBoxes: [\r\n            {\r\n                title: 'The first box',\r\n            },\r\n        ],\r\n    };\r\n\r\n    describe('<DatePickerDropdown />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<DatePickerDropdown />', () => {\r\n        let shallowWrapper: ShallowWrapper;\r\n        let datePickerDropdown: ReactWrapper<IDatePickerDropdownProps>;\r\n        let datePickerDropdownInstance: DatePickerDropdown;\r\n        let datePicker: IDatePickerState;\r\n\r\n        const now: Date = new Date();\r\n        const then: Date = new Date(new Date().setDate(new Date().getDate() + 1));\r\n\r\n        beforeEach(() => {\r\n            datePickerDropdown = mount(<DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n            datePickerDropdownInstance = datePickerDropdown.instance() as DatePickerDropdown;\r\n            datePicker = {\r\n                id: 'id',\r\n                calendarId: 'calendarId',\r\n                color: 'color',\r\n                lowerLimit: now,\r\n                upperLimit: then,\r\n                isRange: false,\r\n                isClearable: false,\r\n                selected: '',\r\n                appliedLowerLimit: now,\r\n                appliedUpperLimit: then,\r\n                inputLowerLimit: now,\r\n                inputUpperLimit: then,\r\n                simple: false,\r\n            };\r\n        });\r\n\r\n        afterEach(() => {\r\n            datePickerDropdown.detach();\r\n        });\r\n\r\n        it('should get the dates selection boxes as a prop', () => {\r\n            const datesSelectionBoxesProps = datePickerDropdown.props().datesSelectionBoxes;\r\n\r\n            expect(datesSelectionBoxesProps).toBeDefined();\r\n            expect(datesSelectionBoxesProps).toEqual(DATE_PICKER_DROPDOWN_BASIC_PROPS.datesSelectionBoxes);\r\n        });\r\n\r\n        it('should not display a <DatePickerBox /> if it is not opened and prop renderDatePickerWhenClosed is false', () => {\r\n            const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                renderDatePickerWhenClosed: false,\r\n            });\r\n            datePickerDropdown.setProps(props);\r\n\r\n            expect(datePickerDropdown.find('DatePickerBox').length).toBe(0);\r\n        });\r\n\r\n        it('should display a <DatePickerBox /> if it is not opened but prop renderDatePickerWhenClosed is true', () => {\r\n            const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                open: false,\r\n                renderDatePickerWhenClosed: true,\r\n            });\r\n            datePickerDropdown.setProps(props);\r\n\r\n            expect(datePickerDropdown.find('DatePickerBox').length).toBe(1);\r\n        });\r\n\r\n        it('should display a <DatePickerBox /> if it is opened regardless of whether prop renderDatePickerWhenClosed is true or false', () => {\r\n            const props: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                isOpened: true,\r\n                renderDatePickerWhenClosed: false,\r\n            });\r\n            datePickerDropdown.setProps(props);\r\n\r\n            expect(datePickerDropdown.find('DatePickerBox').length).toBe(1);\r\n        });\r\n\r\n        it('should disable the dropdown button when readonly props is truthy', () => {\r\n            datePickerDropdown.setProps({\r\n                ...DATE_PICKER_DROPDOWN_BASIC_PROPS,\r\n                readonly: true,\r\n            });\r\n            const button = datePickerDropdown.children().find('button.dropdown-toggle');\r\n\r\n            expect(datePickerDropdownInstance.props.readonly).toBeTruthy();\r\n            expect(button.props().disabled).toBeTruthy();\r\n        });\r\n\r\n        it('should have the class \"open\" if the isOpened prop is set to true', () => {\r\n            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                isOpened: true,\r\n            });\r\n\r\n            expect(datePickerDropdown.find('.dropdown-wrapper').hasClass('open')).toBe(false);\r\n\r\n            datePickerDropdown.setProps(propsIsOpened);\r\n\r\n            expect(datePickerDropdown.find('.dropdown-wrapper').hasClass('open')).toBe(true);\r\n        });\r\n\r\n        it('should display the label passed as a prop or use the default one', () => {\r\n            const expectedLabel: string = 'This is the date picker dropdown label';\r\n            const propsWithLabel: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                label: expectedLabel,\r\n            });\r\n\r\n            expect(datePickerDropdown.html()).toContain(DEFAULT_DATE_PICKER_DROPDOWN_LABEL);\r\n\r\n            datePickerDropdown.setProps(propsWithLabel);\r\n\r\n            expect(datePickerDropdown.html()).not.toContain(DEFAULT_DATE_PICKER_DROPDOWN_LABEL);\r\n            expect(datePickerDropdown.html()).toContain(expectedLabel);\r\n        });\r\n\r\n        it('should display the dates from the date picker if the datePicker prop is set', () => {\r\n            const formattedNow: string = DateUtils.getSimpleDate(now);\r\n            const formattedThen: string = DateUtils.getSimpleDate(then);\r\n\r\n            let propsWithDatePicker: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                datePicker,\r\n            });\r\n\r\n            expect(datePickerDropdown.find('.dropdown-selected-value').text()).not.toContain(formattedNow);\r\n            expect(datePickerDropdown.find('.dropdown-selected-value').text()).not.toContain(formattedThen);\r\n\r\n            datePickerDropdown.setProps(propsWithDatePicker);\r\n\r\n            expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain(formattedNow);\r\n            expect(datePickerDropdown.find('.dropdown-selected-value').text()).not.toContain(formattedThen);\r\n\r\n            const newDatePicker = {\r\n                id: 'id',\r\n                calendarId: 'calendarId',\r\n                color: 'color',\r\n                lowerLimit: now,\r\n                upperLimit: then,\r\n                isRange: true,\r\n                isClearable: false,\r\n                selected: '',\r\n                appliedLowerLimit: now,\r\n                appliedUpperLimit: then,\r\n                inputLowerLimit: now,\r\n                inputUpperLimit: then,\r\n                simple: false,\r\n            };\r\n            propsWithDatePicker = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {datePicker: newDatePicker});\r\n            datePickerDropdown.setProps(propsWithDatePicker);\r\n\r\n            expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain(formattedNow);\r\n            expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain(formattedThen);\r\n        });\r\n\r\n        it('should display the dates from the date picker if the datePicker prop is set in readonly', () => {\r\n            const formattedNow: string = DateUtils.getSimpleDate(now);\r\n            const formattedThen: string = DateUtils.getSimpleDate(then);\r\n            const toLabel: string = 'à';\r\n\r\n            let propsWithDatePicker: IDatePickerDropdownProps = {\r\n                datePicker,\r\n                toLabel,\r\n                ...DATE_PICKER_DROPDOWN_BASIC_PROPS,\r\n                readonly: true,\r\n            };\r\n\r\n            datePickerDropdown.setProps(propsWithDatePicker).mount();\r\n\r\n            expect(datePickerDropdown.html()).toContain(formattedNow);\r\n            expect(datePickerDropdown.html()).not.toContain(formattedThen);\r\n            expect(datePickerDropdown.html()).not.toContain(toLabel);\r\n\r\n            const newDatePicker = {\r\n                id: 'id',\r\n                calendarId: 'calendarId',\r\n                color: 'color',\r\n                lowerLimit: now,\r\n                upperLimit: then,\r\n                isRange: true,\r\n                isClearable: false,\r\n                selected: '',\r\n                appliedLowerLimit: now,\r\n                appliedUpperLimit: then,\r\n                inputLowerLimit: now,\r\n                inputUpperLimit: then,\r\n                simple: false,\r\n            };\r\n            propsWithDatePicker = {\r\n                toLabel,\r\n                ...DATE_PICKER_DROPDOWN_BASIC_PROPS,\r\n                readonly: true,\r\n                datePicker: newDatePicker,\r\n            };\r\n            datePickerDropdown.setProps(propsWithDatePicker);\r\n\r\n            expect(datePickerDropdown.html()).toContain(formattedNow);\r\n            expect(datePickerDropdown.html()).toContain(formattedThen);\r\n            expect(datePickerDropdown.html()).toContain(toLabel);\r\n        });\r\n\r\n        it('should display the date from the date picker with time on the label if the first dateSelectionBox is with time', () => {\r\n            const rightNow: Date = new Date();\r\n            const newProps: IDatePickerDropdownProps = {\r\n                datesSelectionBoxes: [\r\n                    {\r\n                        title: 'The first box',\r\n                        withTime: true,\r\n                    },\r\n                ],\r\n                datePicker: {\r\n                    id: 'id',\r\n                    calendarId: 'calendarId',\r\n                    color: 'color',\r\n                    lowerLimit: rightNow,\r\n                    upperLimit: rightNow,\r\n                    isRange: true,\r\n                    isClearable: false,\r\n                    selected: '',\r\n                    appliedLowerLimit: rightNow,\r\n                    appliedUpperLimit: rightNow,\r\n                    inputLowerLimit: rightNow,\r\n                    inputUpperLimit: then,\r\n                    simple: false,\r\n                },\r\n            };\r\n\r\n            datePickerDropdown.setProps(newProps);\r\n\r\n            expect(datePickerDropdown.find('.dropdown-selected-value').html()).toContain(\r\n                DateUtils.getDateWithTimeString(rightNow)\r\n            );\r\n        });\r\n\r\n        it('should display the label props if date picker is clearable and nothing is selected', () => {\r\n            const newDatePicker: IDatePickerState = {\r\n                id: 'id',\r\n                calendarId: 'calendarId',\r\n                color: 'color',\r\n                lowerLimit: null,\r\n                upperLimit: null,\r\n                isRange: true,\r\n                isClearable: true,\r\n                selected: '',\r\n                appliedLowerLimit: null,\r\n                appliedUpperLimit: null,\r\n                inputLowerLimit: null,\r\n                inputUpperLimit: null,\r\n                simple: false,\r\n            };\r\n            const newProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                datePicker: newDatePicker,\r\n                label: 'EMPTY_LABEL',\r\n                isClearable: true,\r\n            });\r\n            datePickerDropdown.setProps(newProps);\r\n            expect(datePickerDropdown.find('.dropdown-selected-value').text()).toContain('EMPTY_LABEL');\r\n        });\r\n\r\n        it('should not display the to-label and the upperlimit if it is equal to the lower limit', () => {\r\n            const start = moment()\r\n                .startOf('day')\r\n                .toDate();\r\n            const end = moment()\r\n                .endOf('day')\r\n                .toDate();\r\n            const formattedNow: string = DateUtils.getSimpleDate(start);\r\n            datePicker = {\r\n                id: 'id',\r\n                calendarId: 'calendarId',\r\n                color: 'color',\r\n                lowerLimit: start,\r\n                upperLimit: end,\r\n                isRange: true,\r\n                isClearable: false,\r\n                selected: '',\r\n                appliedLowerLimit: start,\r\n                appliedUpperLimit: end,\r\n                inputLowerLimit: start,\r\n                inputUpperLimit: end,\r\n                simple: false,\r\n            };\r\n            const propsWithDatePicker: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                datePicker,\r\n            });\r\n            datePickerDropdown.setProps(propsWithDatePicker);\r\n\r\n            expect(datePickerDropdown.find('.dropdown-selected-value').text()).toBe(formattedNow);\r\n            expect(datePickerDropdown.find('.to-label').length).toBe(0);\r\n        });\r\n\r\n        it('should call onClick when clicking the dropdown toggle', () => {\r\n            const onClickSpy = jasmine.createSpy();\r\n            shallowWrapper = shallow(<DatePickerDropdown onClick={onClickSpy} />);\r\n            shallowWrapper\r\n                .find('.dropdown-toggle')\r\n                .props()\r\n                .onClick({} as any);\r\n            expect(onClickSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        xit('should not set a click listener to handleDocumentClick if it has the readonly prop', () => {\r\n            const addEventListenerSpy: jasmine.Spy = spyOn(document, 'addEventListener');\r\n\r\n            datePickerDropdown = mount(<DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} readonly />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n            expect(addEventListenerSpy).not.toHaveBeenCalledWith('click', jasmine.anything());\r\n        });\r\n\r\n        it('should set a click listener to handleDocumentClick if it does not have the readonly prop', () => {\r\n            const addEventListenerSpy: jasmine.Spy = spyOn(document, 'addEventListener');\r\n\r\n            datePickerDropdown = mount(<DatePickerDropdown {...DATE_PICKER_DROPDOWN_BASIC_PROPS} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n\r\n            expect(addEventListenerSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should trigger onDocumentClick dispatch on mount and remove it on unmount if prop onDocumentClick is set and isOpened is true', () => {\r\n            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');\r\n            const newDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                onDocumentClick: onDocumentClickSpy,\r\n                isOpened: true,\r\n            });\r\n\r\n            datePickerDropdown.mount();\r\n            document.getElementById('App').click();\r\n            expect(onDocumentClickSpy).not.toHaveBeenCalled();\r\n\r\n            datePickerDropdown.unmount();\r\n            datePickerDropdown.setProps(newDropdownProps);\r\n            datePickerDropdown.mount();\r\n            document.getElementById('App').click();\r\n            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);\r\n\r\n            datePickerDropdown.unmount();\r\n            document.getElementById('App').click();\r\n            expect(onDocumentClickSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should not trigger onDocumentClick dispatch on mount if prop onDocumentClick is set and isOpened is false', () => {\r\n            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');\r\n            const newDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                onDocumentClick: onDocumentClickSpy,\r\n                isOpened: false,\r\n            });\r\n\r\n            datePickerDropdown.mount();\r\n            document.getElementById('App').click();\r\n            expect(onDocumentClickSpy).not.toHaveBeenCalled();\r\n\r\n            datePickerDropdown.unmount();\r\n            datePickerDropdown.setProps(newDropdownProps);\r\n            datePickerDropdown.mount();\r\n            document.getElementById('App').click();\r\n            expect(onDocumentClickSpy).not.toHaveBeenCalled();\r\n\r\n            datePickerDropdown.unmount();\r\n            document.getElementById('App').click();\r\n            expect(onDocumentClickSpy).not.toHaveBeenCalled();\r\n        });\r\n\r\n        it('should not call onDocumentClick when prop is set and clicking on the dropdown', () => {\r\n            const onDocumentClickSpy = jasmine.createSpy('onDocumentClick');\r\n            const newDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                onDocumentClick: onDocumentClickSpy,\r\n                isOpened: true,\r\n            });\r\n\r\n            datePickerDropdown = mount(<DatePickerDropdown {...newDropdownProps} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n\r\n            (document.getElementsByClassName('dropdown-wrapper')[0] as HTMLDivElement).click();\r\n            expect(onDocumentClickSpy).not.toHaveBeenCalled();\r\n\r\n            document.getElementById('App').click();\r\n            expect(onDocumentClickSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onRender prop if set when mounting', () => {\r\n            const onRenderSpy: jasmine.Spy = jasmine.createSpy('onRender');\r\n            const onRenderProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                onRender: onRenderSpy,\r\n            });\r\n\r\n            expect(() => datePickerDropdownInstance.componentDidMount()).not.toThrow();\r\n\r\n            datePickerDropdown.unmount();\r\n            datePickerDropdown.setProps(onRenderProps);\r\n            datePickerDropdown.mount();\r\n            expect(onRenderSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onDestroy prop if set when will unmount', () => {\r\n            const onDestroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');\r\n            const onDestroyProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                onDestroy: onDestroySpy,\r\n            });\r\n\r\n            expect(() => datePickerDropdownInstance.componentWillUnmount()).not.toThrow();\r\n\r\n            datePickerDropdown.setProps(onDestroyProps);\r\n            datePickerDropdown.unmount();\r\n            expect(onDestroySpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should display a footer with two button if the dropdown is opened', () => {\r\n            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                isOpened: true,\r\n            });\r\n            datePickerDropdown.setProps(propsIsOpened);\r\n\r\n            expect(datePickerDropdown.find(ModalFooter).length).toBe(1);\r\n            expect(datePickerDropdown.find(ModalFooter).find(Button).length).toBe(2);\r\n        });\r\n\r\n        it('should display the apply label passed as a prop or use the default one if the dropdown is opened', () => {\r\n            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                isOpened: true,\r\n            });\r\n            datePickerDropdown.setProps(propsIsOpened);\r\n\r\n            const applyLabel: string = 'appliquer';\r\n            const newProps: IDatePickerDropdownProps = _.extend({}, propsIsOpened, {applyLabel});\r\n\r\n            expect(\r\n                datePickerDropdown\r\n                    .find(ModalFooter)\r\n                    .find(Button)\r\n                    .first()\r\n                    .props().name\r\n            ).toContain(DEFAULT_APPLY_DATE_LABEL);\r\n\r\n            datePickerDropdown.setProps(newProps);\r\n\r\n            expect(\r\n                datePickerDropdown\r\n                    .find(ModalFooter)\r\n                    .find(Button)\r\n                    .first()\r\n                    .props().name\r\n            ).not.toContain(DEFAULT_APPLY_DATE_LABEL);\r\n            expect(\r\n                datePickerDropdown\r\n                    .find(ModalFooter)\r\n                    .find(Button)\r\n                    .first()\r\n                    .props().name\r\n            ).toContain(applyLabel);\r\n        });\r\n\r\n        it('should display the cancel label passed as a prop or use the default one if the dropdown is opened', () => {\r\n            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                isOpened: true,\r\n            });\r\n            datePickerDropdown.setProps(propsIsOpened);\r\n\r\n            const cancelLabel: string = 'annuler';\r\n            const newProps: IDatePickerDropdownProps = _.extend({}, propsIsOpened, {cancelLabel});\r\n\r\n            expect(\r\n                datePickerDropdown\r\n                    .find(ModalFooter)\r\n                    .find(Button)\r\n                    .last()\r\n                    .props().name\r\n            ).toContain(DEFAULT_CANCEL_DATE_LABEL);\r\n\r\n            datePickerDropdown.setProps(newProps);\r\n\r\n            expect(\r\n                datePickerDropdown\r\n                    .find(ModalFooter)\r\n                    .find(Button)\r\n                    .last()\r\n                    .props().name\r\n            ).not.toContain(DEFAULT_CANCEL_DATE_LABEL);\r\n            expect(\r\n                datePickerDropdown\r\n                    .find(ModalFooter)\r\n                    .find(Button)\r\n                    .last()\r\n                    .props().name\r\n            ).toContain(cancelLabel);\r\n        });\r\n\r\n        it('should call handleApply when clicking on the apply button', () => {\r\n            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                isOpened: true,\r\n            });\r\n            datePickerDropdown.setProps(propsIsOpened);\r\n\r\n            const handleApplySpy: jasmine.Spy = spyOn<any>(datePickerDropdownInstance, 'handleApply');\r\n\r\n            datePickerDropdown\r\n                .find(ModalFooter)\r\n                .find('button')\r\n                .first()\r\n                .simulate('click');\r\n\r\n            expect(handleApplySpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call handleCancel when clicking on the cancel button', () => {\r\n            const propsIsOpened: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                isOpened: true,\r\n            });\r\n            datePickerDropdown.setProps(propsIsOpened);\r\n\r\n            const handleCancelSpy: jasmine.Spy = spyOn<any>(datePickerDropdownInstance, 'handleCancel');\r\n\r\n            datePickerDropdown\r\n                .find(ModalFooter)\r\n                .find('button')\r\n                .last()\r\n                .simulate('click');\r\n\r\n            expect(handleCancelSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onApply prop if set when calling handleApply', () => {\r\n            const onBeforeApplySpy: jasmine.Spy = jasmine.createSpy('onBeforeApply');\r\n            const onBeforeApplyProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                onBeforeApply: onBeforeApplySpy,\r\n            });\r\n\r\n            expect(() => {\r\n                datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);\r\n            }).not.toThrow();\r\n\r\n            datePickerDropdown.setProps(onBeforeApplyProps);\r\n            datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);\r\n\r\n            expect(onBeforeApplySpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onApply prop if set when calling handleApply', () => {\r\n            const onApplySpy: jasmine.Spy = jasmine.createSpy('onApply');\r\n            const onApplyProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                onApply: onApplySpy,\r\n            });\r\n\r\n            expect(() => {\r\n                datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);\r\n            }).not.toThrow();\r\n\r\n            datePickerDropdown.setProps(onApplyProps);\r\n            datePickerDropdownInstance['handleApply'].call(datePickerDropdownInstance);\r\n\r\n            expect(onApplySpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should call onCancel prop if set when calling handleCancel', () => {\r\n            const onCancelSpy: jasmine.Spy = jasmine.createSpy('onCancel');\r\n            const onCancelProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                onCancel: onCancelSpy,\r\n            });\r\n\r\n            expect(() => {\r\n                datePickerDropdownInstance['handleCancel'].call(datePickerDropdownInstance);\r\n            }).not.toThrow();\r\n\r\n            datePickerDropdown.setProps(onCancelProps);\r\n            datePickerDropdownInstance['handleCancel'].call(datePickerDropdownInstance);\r\n\r\n            expect(onCancelSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it(\r\n            'should call onCancel prop with current month and current year when there is no applied lower limit ' +\r\n                'when calling handleCancel',\r\n            () => {\r\n                const onCancelSpy: jasmine.Spy = jasmine.createSpy('onCancel');\r\n                const newProps: Partial<IDatePickerDropdownProps> = {\r\n                    initiallyUnselected: true,\r\n                    id: 'some-date-picker',\r\n                    onCancel: onCancelSpy,\r\n                    years: [DateUtils.currentYear.toString()],\r\n                    isOpened: true,\r\n                };\r\n                datePickerDropdown.setProps(_.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {...newProps}));\r\n\r\n                datePickerDropdownInstance['handleCancel'].call(datePickerDropdownInstance);\r\n\r\n                expect(onCancelSpy).toHaveBeenCalledWith(DateUtils.currentMonth, 0, true);\r\n            }\r\n        );\r\n\r\n        it('should call handleClear when calling the onClear prop of the date picker box', () => {\r\n            const handleClearSpy: jasmine.Spy = spyOn<any>(datePickerDropdownInstance, 'handleClear');\r\n\r\n            datePickerDropdown\r\n                .find(DatePickerBox)\r\n                .props()\r\n                .onClear();\r\n\r\n            expect(handleClearSpy).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call onClear prop if set when calling handleClear', () => {\r\n            const onClearSpy: jasmine.Spy = jasmine.createSpy('onClear');\r\n            const onClearProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                onClear: onClearSpy,\r\n            });\r\n\r\n            expect(() => {\r\n                datePickerDropdownInstance['handleClear'].call(datePickerDropdownInstance);\r\n            }).not.toThrow();\r\n\r\n            datePickerDropdown.setProps(onClearProps);\r\n            datePickerDropdownInstance['handleClear'].call(datePickerDropdownInstance);\r\n\r\n            expect(onClearSpy).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should have class \"on-right\" on menu if onRight prop is set to true', () => {\r\n            const expectedClass: string = 'on-right';\r\n            const onRightProps: IDatePickerDropdownProps = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                onRight: true,\r\n            });\r\n\r\n            expect(datePickerDropdown.find('.dropdown-menu').hasClass(expectedClass)).toBe(false);\r\n\r\n            datePickerDropdown.setProps(onRightProps);\r\n\r\n            expect(datePickerDropdown.find('.dropdown-menu').hasClass(expectedClass)).toBe(true);\r\n        });\r\n\r\n        describe('with a range limit defined in the <DatePicker/>', () => {\r\n            let datePickerDropdownWithRangeLimit: IDatePickerDropdownProps;\r\n\r\n            const changeDatePickerState = (newState?: Partial<IDatePickerState>) => {\r\n                datePickerDropdownWithRangeLimit = _.extend({}, DATE_PICKER_DROPDOWN_BASIC_PROPS, {\r\n                    datePicker: _.extend(\r\n                        {},\r\n                        datePicker,\r\n                        {\r\n                            isRange: true,\r\n                            rangeLimit: {\r\n                                weeks: 1,\r\n                                days: 1,\r\n                                hours: 1,\r\n                                message: 'test',\r\n                            },\r\n                        },\r\n                        newState\r\n                    ),\r\n                });\r\n\r\n                datePickerDropdown.setProps(datePickerDropdownWithRangeLimit);\r\n                datePickerDropdown = datePickerDropdown.update();\r\n            };\r\n\r\n            it('should disabled the primary button if the the inputLowerLimit has exceeded the range limit with the inputUpperLimit', () => {\r\n                const date: Date = new Date();\r\n                date.setFullYear(date.getFullYear() + 1);\r\n                changeDatePickerState({\r\n                    inputLowerLimit: new Date(),\r\n                    inputUpperLimit: date,\r\n                });\r\n\r\n                expect(\r\n                    datePickerDropdown\r\n                        .find(ModalFooter)\r\n                        .find(Button)\r\n                        .first()\r\n                        .props().enabled\r\n                ).toBe(false);\r\n                expect(\r\n                    datePickerDropdown\r\n                        .find(ModalFooter)\r\n                        .find(Button)\r\n                        .first()\r\n                        .props().tooltip\r\n                ).toBe('test');\r\n            });\r\n\r\n            it('should enabled the primary button if the the inputLowerLimit does not exceeded the range limit with the inputUpperLimit', () => {\r\n                const date: Date = new Date();\r\n                date.setHours(date.getHours() + 1);\r\n                changeDatePickerState({\r\n                    inputLowerLimit: new Date(),\r\n                    inputUpperLimit: date,\r\n                });\r\n\r\n                expect(\r\n                    datePickerDropdown\r\n                        .find(ModalFooter)\r\n                        .find(Button)\r\n                        .first()\r\n                        .props().enabled\r\n                ).toBe(true);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=293.bundle.js.map