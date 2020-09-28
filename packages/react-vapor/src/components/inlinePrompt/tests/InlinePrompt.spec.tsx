import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {Svg} from '../../svg/Svg';
import {IInlinePromptOptions, InlinePrompt} from '../InlinePrompt';

describe('InlinePrompt', () => {
    let options: IInlinePromptOptions;

    it('should render without errors', () => {
        options = {
            onClick: jest.fn(),
            userChoice: {},
        };

        expect(() => {
            shallow(<InlinePrompt options={options} />);
        }).not.toThrow();
    });

    describe('<InlinePrompt />', () => {
        let inlinePrompt: ReactWrapper;
        let onClickSpy: jest.Mock<any, any>;

        beforeEach(() => {
            onClickSpy = jest.fn();
            options = {
                onClick: onClickSpy,
                userChoice: {
                    icon: 'icon',
                    description: 'description',
                    cancel: 'cancel',
                    choices: {
                        confirm: 'confirm',
                        other: 'other',
                        newChoice: 'some other choice',
                    },
                },
                isOpened: false,
                className: 'some-class',
            };

            inlinePrompt = mount(<InlinePrompt options={options} />);
        });

        afterEach(() => {
            inlinePrompt.unmount(); // <-- new
        });

        it('should have the className as a class if defined', () => {
            const newOptions: IInlinePromptOptions = _.extend({}, options, {className: undefined});

            expect(inlinePrompt.find('.prompt-' + options.className)).toHaveLength(1);

            inlinePrompt.setProps({options: newOptions});

            expect(inlinePrompt.find('.prompt-' + options.className)).toHaveLength(0);
            expect(inlinePrompt.find('.prompt-info')).toHaveLength(1);
        });

        it('should have the opened as a class if opened', () => {
            const newOptions = _.extend({}, options, {isOpened: true});

            expect(inlinePrompt.find('.opened')).toHaveLength(0);

            inlinePrompt.setProps({options: newOptions});

            expect(inlinePrompt.find('.opened')).toHaveLength(1);
        });

        it('should display an icon if there is one set in the user choice', () => {
            const newUserChoice = _.extend({}, options.userChoice, {icon: undefined});
            const newOptions = _.extend({}, options, {userChoice: newUserChoice});

            expect(inlinePrompt.find(Svg)).toHaveLength(1);

            inlinePrompt.setProps({options: newOptions});

            expect(inlinePrompt.find(Svg)).toHaveLength(0);
        });

        it('should render as many choice buttons as there are choices', () => {
            expect(inlinePrompt.find('.prompt-action.action')).toHaveLength(_.size(options.userChoice.choices));
        });

        it('should display the description if there is one set in the user choice', () => {
            const newUserChoice = _.extend({}, options.userChoice, {description: undefined});
            const newOptions = _.extend({}, options, {userChoice: newUserChoice});

            expect(inlinePrompt.find('.description')).toHaveLength(1);

            inlinePrompt.setProps({options: newOptions});

            expect(inlinePrompt.find('.description')).toHaveLength(0);
        });

        it('should have a cancel button if there is one set in the user choice', () => {
            const newUserChoice = _.extend({}, options.userChoice, {cancel: undefined});
            const newOptions = _.extend({}, options, {userChoice: newUserChoice});

            expect(inlinePrompt.find('.cancel')).toHaveLength(1);

            inlinePrompt.setProps({options: newOptions});

            expect(inlinePrompt.find('.cancel')).toHaveLength(0);
        });

        it('should call the onClick prop when choice is clicked', () => {
            inlinePrompt.find('.prompt-action').first().simulate('click');

            expect(onClickSpy.mock.calls).toHaveLength(1);
        });

        it('should call the onCancel prop if set when clicking the cancel button', () => {
            const onCancelSpy = jest.fn();

            inlinePrompt.setProps({options: options, onCancel: onCancelSpy});
            inlinePrompt.find('.cancel').first().simulate('click');

            expect(onCancelSpy.mock.calls).toHaveLength(1);
        });
    });
});
