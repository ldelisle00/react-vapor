import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {createTestAppContainer, removeTestAppContainer} from '../../../utils/tests/TestUtils';
import {Loading} from '../../loading/Loading';
import {Svg} from '../../svg/Svg';
import {StatusCard, StatusCardProps} from '../StatusCard';
import * as styles from '../styles/StatusCard.scss';

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
                </StatusCard>,
                {attachTo: document.getElementById('App')}
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

        it('should have the class styles.statusCard', () => {
            expect(statusCard.find(`.${styles.statusCard}`)).toHaveLength(1);
        });

        it('should have a class with the color prop', () => {
            expect(statusCard.find(`.border-left-color-${basicProps.color}`)).toHaveLength(1);
        });

        it('should have the class simple if simple prop is set to true', () => {
            expect(statusCard.find('.simple')).toHaveLength(0);

            mountWithProps({simple: true});

            expect(statusCard.find('.simple')).toHaveLength(1);
        });

        it('should render a <Svg /> with the class styles.statusCardIcon if there is an icon prop', () => {
            expect(statusCard.find(Svg)).toHaveLength(0);

            mountWithProps({icon: 'view'});

            const svg = statusCard.find(Svg);

            expect(svg).toHaveLength(1);
            expect(svg.find(`.${styles.statusCardIcon}`).length).toBeGreaterThanOrEqual(1);
        });

        it('should render a <h3/> with the class styles.statusCardTitle', () => {
            const title = statusCard.find('h3');

            expect(title).toHaveLength(1);
            expect(title.html()).toContain(basicProps.title);
            expect(title.find(`.${styles.statusCardTitle}`)).toHaveLength(1);
        });

        it('should render the children with the class styles.statusCardInfo', () => {
            const children = statusCard.find(`.${styles.statusCardInfo}`);

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
