import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {createTestAppContainer, removeTestAppContainer} from '../../../utils/tests/TestUtils';
import {Loading} from '../../loading/Loading';
import {Svg} from '../../svg/Svg';
import {StatusCard, StatusCardProps} from '../StatusCard';

describe('StatusCard', () => {
    const basicProps: StatusCardProps = {
        color: 'green',
        title: 'Title',
    };
    const statusCardChild = 'Some child';

    it('should render without errors', () => {
        expect(() => {
            shallow(<StatusCard {...basicProps}>{statusCardChild}</StatusCard>);
        }).not.toThrow();
    });

    describe('<StatusCard />', () => {
        let statusCard: ReactWrapper<StatusCardProps>;

        const mountWithProps = (props?: Partial<StatusCardProps>) => {
            statusCard = mount(
                <StatusCard {...basicProps} {...props}>
                    {statusCardChild}
                </StatusCard>
            );
        };

        beforeEach(() => {
            createTestAppContainer();
            mountWithProps();
        });

        afterEach(() => {
            if (statusCard?.exists()) {
                statusCard.unmount();
            }
            removeTestAppContainer();
        });

        it('should get the props correctly', () => {
            const addedProps: Partial<StatusCardProps> = {icon: 'view', simple: true};
            mountWithProps(addedProps);
            const statusCardProps = statusCard.props();

            expect(statusCardProps.color).toBe(basicProps.color);
            expect(statusCardProps.icon).toBe(addedProps.icon);
            expect(statusCardProps.title).toBe(basicProps.title);
            expect(statusCardProps.simple).toBe(addedProps.simple);
            expect((statusCardProps as any).children).toBe(statusCardChild);
        });

        it('should have a class with the color prop', () => {
            expect(statusCard.find(`.border-left-color-${basicProps.color}`)).toHaveLength(1);
        });

        it('should have the class simple if simple prop is set to true', () => {
            expect(statusCard.find('.simple')).toHaveLength(0);

            mountWithProps({simple: true});

            expect(statusCard.find('.simple')).toHaveLength(1);
        });

        it('should render a <Svg /> with the class status-card-icon if there is an icon prop', () => {
            expect(statusCard.find(Svg)).toHaveLength(0);

            mountWithProps({icon: 'view'});

            const svg = statusCard.find(Svg);

            expect(svg).toHaveLength(1);
            expect(svg.find('.status-card-icon').length).toBeGreaterThanOrEqual(1);
        });

        it('should render a <h3/> with the class status-card-title', () => {
            const title = statusCard.find('h3');

            expect(title).toHaveLength(1);
            expect(title.html()).toContain(basicProps.title);
            expect(title.find('.status-card-title')).toHaveLength(1);
        });

        it('should render the children with the class styles.statusCardInfo', () => {
            const children = statusCard.find('.status-card-info');

            expect(children).toHaveLength(1);
            expect(children.html()).toContain(statusCardChild);
        });

        it('should render a <Loading /> component when the prop loading is set to true', () => {
            expect(statusCard.find(Loading)).toHaveLength(0);

            mountWithProps({loading: true});

            expect(statusCard.find(Loading)).toHaveLength(1);
        });
    });
});
