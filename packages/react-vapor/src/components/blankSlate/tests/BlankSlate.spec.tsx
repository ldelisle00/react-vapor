import {ShallowWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {Button} from '../../button/Button';

import {Svg} from '../../svg/Svg';
import {BlankSlate, IBlankSlateProps} from '../BlankSlate';

describe('BlankSlate', () => {
    let blankSlateComponent: ShallowWrapper<IBlankSlateProps, any>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<BlankSlate />);
        }).not.toThrow();
    });

    describe('<Blankslate /> with default props', () => {
        beforeEach(() => {
            blankSlateComponent = shallow(<BlankSlate />);
        });

        it('should render the default title', () => {
            expect(blankSlateComponent.find('h1').text()).toEqual('');
        });

        it('should render without the class added to adjust the style with a modal', () => {
            expect(blankSlateComponent.find('.mod-header-padding')).toHaveLength(0);
        });

        it('should render without description', () => {
            expect(blankSlateComponent.find('p')).toHaveLength(0);
        });

        it('should render without button', () => {
            expect(blankSlateComponent.find('button')).toHaveLength(0);
        });
    });

    describe('<Blankslate /> with custom props', () => {
        const customProps = {
            title: 'title',
            description: 'description test',
            buttons: [
                {
                    name: 'test',
                    primary: true,
                    enabled: true,
                },
            ],
            withModal: false,
            svgName: 'tips',
        };

        const renderBlankSlate = (props: IBlankSlateProps = {}) => {
            blankSlateComponent = shallow(<BlankSlate {..._.defaults(props, customProps)} />);
        };

        it('should render the custom title', () => {
            renderBlankSlate();

            expect(blankSlateComponent.find('h1').text()).toEqual(customProps.title);
        });

        it('should add the class to adjust the style with a modal', () => {
            renderBlankSlate({
                withModal: true,
            });

            expect(blankSlateComponent.find('.mod-header-padding')).toHaveLength(1);
        });

        it('should render the custom description', () => {
            renderBlankSlate();

            expect(blankSlateComponent.find('p')).toHaveLength(1);
            expect(blankSlateComponent.find('p').text()).toEqual(customProps.description);
        });

        it('should render the custom description with a link', () => {
            renderBlankSlate({
                description: (
                    <span>
                        This is a description with a link to <a href="https://www.google.com"></a>this website.
                    </span>
                ),
            });

            expect(blankSlateComponent.find('p').text()).toEqual('This is a description with a link to this website.');
        });

        it('should render the button', () => {
            renderBlankSlate();

            expect(blankSlateComponent.find(Button)).toHaveLength(1);
        });

        it('should render two buttons', () => {
            renderBlankSlate({
                buttons: [
                    {
                        name: 'test',
                        primary: true,
                        enabled: true,
                    },
                    {
                        name: 'test 2',
                        primary: true,
                        enabled: true,
                    },
                ],
            });

            expect(blankSlateComponent.find(Button)).toHaveLength(2);
        });

        it('should render the icon', () => {
            renderBlankSlate();

            expect(blankSlateComponent.find(Svg)).toHaveLength(1);
        });
    });
});
