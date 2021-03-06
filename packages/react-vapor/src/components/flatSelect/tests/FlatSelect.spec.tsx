import {mount} from 'enzyme';
import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import {Provider} from 'react-redux';

import {getStoreMock} from '../../../utils/tests/TestUtils';
import {UUID} from '../../../utils/UUID';
import {FlatSelectConnected, IFlatSelectOwnProps} from '../FlatSelect';
import {addFlatSelect, removeFlatSelect, selectFlatSelect} from '../FlatSelectActions';
import {FlatSelectOption, IFlatSelectOptionProps} from '../FlatSelectOption';

describe('FlatSelect', () => {
    const defaultOptions: IFlatSelectOptionProps[] = [
        {
            id: UUID.generate(),
            option: {
                content: 'test',
            },
        },
        {
            id: UUID.generate(),
            option: {
                content: 'test',
            },
        },
    ];

    const props: IFlatSelectOwnProps = {
        id: '🍄',
        options: defaultOptions,
    };

    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const component = shallowWithState(<FlatSelectConnected {...props} />, {}).dive();
            component.unmount();
        }).not.toThrow();
    });

    it('should render a flat select option for each option', () => {
        const component = shallowWithState(<FlatSelectConnected {...props} />, {}).dive();

        expect(component.children().length).toBe(props.options.length);
        component.children().forEach((option) => {
            expect(option.type()).toBe(FlatSelectOption);
        });
    });

    it('should have the mod-btn-group class if the group prop is true', () => {
        const component = shallowWithState(<FlatSelectConnected {...props} group />, {}).dive();

        expect(component.hasClass('mod-btn-group')).toBe(true);
    });

    it('should have the mod-option-picker class if the optionPicker prop is true', () => {
        const component = shallowWithState(<FlatSelectConnected {...props} optionPicker />, {}).dive();

        expect(component.hasClass('mod-option-picker')).toBe(true);
    });

    it('should select the first option if no default option is specified', () => {
        const store = getStoreMock();
        act(() => {
            mount(
                <Provider store={store}>
                    <FlatSelectConnected {...props} />
                </Provider>
            );
        });

        expect(store.getActions()).toContain(addFlatSelect(props.id, props.options[0].id));
    });

    it('should select the default option it is specified', () => {
        const store = getStoreMock();
        act(() => {
            mount(
                <Provider store={store}>
                    <FlatSelectConnected {...props} defaultSelectedOptionId={props.options[1].id} />
                </Provider>
            );
        });

        expect(store.getActions()).toContain(addFlatSelect(props.id, props.options[1].id));
    });

    it('should remove the flat select from the store when unmounting', () => {
        const store = getStoreMock();
        const component = mount(
            <Provider store={store}>
                <FlatSelectConnected {...props} defaultSelectedOptionId={props.options[1].id} />
            </Provider>
        );
        component.unmount();

        expect(store.getActions()).toContain(removeFlatSelect(props.id));
    });

    it('should call "onClick" prop when changing selection', () => {
        const onClickSpy = jasmine.createSpy('onClick');
        const component = shallowWithState(<FlatSelectConnected {...props} onClick={onClickSpy} />, {}).dive();
        component.children().first().prop('onClick')('new-option');

        expect(onClickSpy).toHaveBeenCalledTimes(1);
        expect(onClickSpy).toHaveBeenCalledWith('new-option');
    });

    it('should dispatch selectFlatSelect action when changing selection', () => {
        const store = getStoreMock();
        const component = shallowWithStore(<FlatSelectConnected {...props} />, store).dive();
        component.children().first().prop('onClick')({id: 'new-option'});

        expect(store.getActions()).toContain(selectFlatSelect(props.id, 'new-option'));
    });
});
