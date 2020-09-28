import {ShallowWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {Banner, BannerMessageStates, BannerProps} from '../Banner';

describe('Banner', () => {
    const basicProps: BannerProps = {
        name: 'some name',
    };
    let banner: ShallowWrapper<BannerProps>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<Banner {...basicProps} />);
        }).not.toThrow();
    });

    describe('<Banner />', () => {
        const shallowWithProps = (props?: Partial<BannerProps>) => {
            if (banner && banner.length) {
                banner.unmount();
            }
            banner = shallow(<Banner {...basicProps} {...props} />);
        };

        beforeEach(() => {
            shallowWithProps();
        });

        it('should have the class "center" if the prop alignCenter is set', () => {
            expect(banner.find('.center')).toHaveLength(0);

            shallowWithProps({alignCenter: true});

            expect(banner.find('.center')).toHaveLength(1);
        });

        it('should have the class styles.bannerWarningTitle on the title if messageCondition is set to Warning', () => {
            expect(banner.find(`.mod-warning`)).toHaveLength(0);

            shallowWithProps({messageState: BannerMessageStates.Warning, messageTitle: 'something'});

            expect(banner.find(`.mod-warning`)).toHaveLength(1);
        });

        it('should have the class styles.bannerErrorTitle on the title if messageCondition is set to Error', () => {
            expect(banner.find(`.mod-error`)).toHaveLength(0);

            shallowWithProps({messageState: BannerMessageStates.Error, messageTitle: 'something'});

            expect(banner.find(`.mod-error`)).toHaveLength(1);
        });

        it('should display a <h2> if there is a nameSubtitle', () => {
            expect(banner.find('h2')).toHaveLength(0);

            shallowWithProps({nameSubtitle: 'something'});

            expect(banner.find('h2')).toHaveLength(1);
        });

        it('should display a bannerRight if there are some topRightInfos or bottomRightInfos', () => {
            expect(banner.find('.banner-right')).toHaveLength(0);

            shallowWithProps({topRightInfos: <div></div>});

            expect(banner.find('.banner-right')).toHaveLength(1);

            shallowWithProps({topRightInfos: <div></div>, bottomRightInfos: <div></div>});

            expect(banner.find('.banner-right')).toHaveLength(2);
        });

        it('should display a <h3> if there is a messageTitle', () => {
            expect(banner.find('h3')).toHaveLength(0);

            shallowWithProps({messageTitle: 'something'});

            expect(banner.find('h3')).toHaveLength(1);
        });

        it('should display a bannerDescription if there are children', () => {
            expect(banner.find('.banner-description')).toHaveLength(0);

            banner = shallow(<Banner {...basicProps}>I am a child!</Banner>);

            expect(banner.find('.banner-description')).toHaveLength(1);
        });

        it('should display a bannerWarningIcon if the messageState is either set to Warning or Error', () => {
            expect(banner.find('.banner-warning-icon').exists()).toBe(false);

            shallowWithProps({messageTitle: 'something', messageState: BannerMessageStates.Warning});

            expect(banner.find('.banner-warning-icon').exists()).toBe(true);

            shallowWithProps({messageTitle: 'something', messageState: BannerMessageStates.Error});

            expect(banner.find('.banner-warning-icon').exists()).toBe(true);
        });
    });
});
