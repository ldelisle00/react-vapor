import { mount, ReactWrapper, shallow } from 'enzyme';
import * as _ from 'underscore';
import { ILogoCardProps, LogoCard, DEFAULT_LOGO_CARD_CLASSNAME } from '../LogoCard';
import { DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME, CornerRibbon, ICornerRibbonProps, PlacementX, PlacementY } from '../../cornerRibbon/CornerRibbon';
import { IBadgeProps } from '../../badge/Badge';
import { Badge } from 'react-bootstrap';

describe('LogoCard', () => {
  let logoCard: ReactWrapper<ILogoCardProps>;
  const mountWithProps = (props: Partial<ILogoCardProps>) => {
    logoCard = mount(
      <LogoCard {..._.defaults(props, { title: 'test card' })} />,
      { attachTo: document.getElementById('App') },
    );
  };

  it('should render without errors', () => {
    expect(() => {
      shallow(<LogoCard title='test card' />);
    }).not.toThrow();
  });

  describe('Default <LogoCard />', () => {
    const defaultLogoCardProps: Partial<ILogoCardProps> = {
      onClick: jasmine.createSpy('onClick'),
      title: 'some logocard title',
    };

    beforeEach(() => {
      mountWithProps(defaultLogoCardProps);
    });

    it('should have the default logo-card class', () => {
      expect(logoCard.hasClass(DEFAULT_LOGO_CARD_CLASSNAME)).toBe(true);
    });

    it('should not have the ribbon-container class if no ribbon is used on the LogoCard', () => {
      expect(logoCard.hasClass(DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME)).toBe(false);
    });

    it('should render the specied title as props', () => {
      expect(logoCard.find('.logo-card-title').text()).toEqual(defaultLogoCardProps.title);
    });

    it('should trigger the specified onClick prop if any', () => {
      logoCard.simulate('click');

      expect(defaultLogoCardProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('should render no badges if no badges are specified as props', () => {
      expect(logoCard.find('Badge').length).toBe(0);
    });
  });

  describe('Disabled <LogoCard />', () => {
    const disabledLogoCardProps: Partial<ILogoCardProps> = {
      disabled: true,
      onClick: jasmine.createSpy('onClick'),
      ribbon: {
        label: 'ribbonWhenEnabled',
      },
      disabledRibbon: {
        label: 'ribbonWhenDisabled',
      }
    };

    beforeEach(() => {
      mountWithProps(disabledLogoCardProps);
    });

    it('should have the disabled class', () => {
      expect(logoCard.hasClass('disabled')).toBe(true);
    });

    it('should have the ribbon-container class', () => {
      expect(logoCard.hasClass(DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME)).toBe(true);
    })

    it('should not call onClick when clicking on the logoCard', () => {
      logoCard.simulate('click');

      expect(disabledLogoCardProps.onClick).not.toHaveBeenCalled();
    });

    it('should render the disabled ribbon when a ribbon is already applied', () => {
      expect(logoCard.find(CornerRibbon).text()).toBe(disabledLogoCardProps.disabledRibbon.label);
    });
  });

  describe('<LogoCard /> with badges, description and ribbon', () => {
    const thisLogoCardProps: Partial<ILogoCardProps> = {
      badges: [
        {
          label: 'badge 1',
        },
        {
          label: 'badge 2',
        }
      ],
      ribbon: {
        label: 'some-ribbon',
        placementX: PlacementX.Right,
        placementY: PlacementY.Bottom,
        extraClasses: ['bold'],
      },
      description: 'some description'
    }

    beforeEach(() => {
      mountWithProps(thisLogoCardProps);
    });

    it('should render as many badges as specified in the props if any', () => {
      expect(logoCard.find('Badge').length).toBe(thisLogoCardProps.badges.length);
    });

    it('should render a ribbon as specified in the props if any', () => {
      expect(logoCard.find(CornerRibbon).props()).toEqual(thisLogoCardProps.ribbon);
    });

    it('should render a description with ml1 class', () => {
      const descriptionSpan = logoCard.find('span.ml1');

      expect(descriptionSpan.length).toBeGreaterThan(0);
      expect(descriptionSpan.text()).toBe(thisLogoCardProps.description);
    });
  });
});
