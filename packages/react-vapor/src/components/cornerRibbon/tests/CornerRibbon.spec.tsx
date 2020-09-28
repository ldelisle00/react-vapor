import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {
    CornerRibbon,
    DEFAULT_CORNER_RIBBON_CLASSNAME,
    ICornerRibbonProps,
    PlacementX,
    PlacementY,
} from '../CornerRibbon';

describe('CornerRibbon', () => {
    let cornerRibbon: ReactWrapper<ICornerRibbonProps, any>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<CornerRibbon />);
        }).not.toThrow();
    });

    describe('<CornerRibbon />', () => {
        const mountWithProps = (props: Partial<ICornerRibbonProps>) => {
            cornerRibbon = mount(<CornerRibbon {...props} />);
        };

        it('should have the default corner-ribon class', () => {
            mountWithProps({});

            expect(cornerRibbon.find(`.${DEFAULT_CORNER_RIBBON_CLASSNAME}`)).toHaveLength(1);
        });

        it('should render in the top right of its ribbon-container by default', () => {
            mountWithProps({});

            expect(cornerRibbon.find(`.${PlacementY.Top}`)).toHaveLength(1);
            expect(cornerRibbon.find(`.${PlacementX.Right}`)).toHaveLength(1);
        });

        it('should render the label specified as prop if any', () => {
            mountWithProps({
                label: 'someRibbon',
            });

            expect(cornerRibbon.text()).toEqual('someRibbon');
        });

        it('should render the ribbon in x axle position specified as prop if any', () => {
            mountWithProps({
                placementX: PlacementX.Left,
            });

            expect(cornerRibbon.find(`.${PlacementX.Left}`)).toHaveLength(1);

            cornerRibbon.setProps({
                placementX: PlacementX.Right,
            });

            expect(cornerRibbon.find(`.${PlacementX.Right}`)).toHaveLength(1);
        });

        it('should render the ribbon in y axle position specified as prop if any', () => {
            mountWithProps({
                placementY: PlacementY.Bottom,
            });

            expect(cornerRibbon.find(`.${PlacementY.Bottom}`)).toHaveLength(1);

            cornerRibbon.setProps({
                placementY: PlacementY.Top,
            });

            expect(cornerRibbon.find(`.${PlacementY.Top}`)).toHaveLength(1);
        });

        it('should render the ribbon with extra classes if specified as prop', () => {
            mountWithProps({
                extraClasses: ['bold', 'bg-orange'],
            });

            expect(cornerRibbon.find('.bold')).toHaveLength(1);
            expect(cornerRibbon.find('.bg-orange')).toHaveLength(1);
        });
    });
});
