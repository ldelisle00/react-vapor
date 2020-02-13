(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{1483:function(e,n,r){"use strict";r.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {FACET_TOGGLE_MORE_LABEL, FacetMoreToggle, IFacetMoreToggleProps} from '../FacetMoreToggle';\r\n\r\ndescribe('Facets', () => {\r\n    const basicFacetMoreToggleProps: IFacetMoreToggleProps = {\r\n        facet: 'facetTitle',\r\n    };\r\n    describe('<FacetMoreToggle />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<FacetMoreToggle {...basicFacetMoreToggleProps} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<FacetMoreToggle />', () => {\r\n        let facetMoreToggle: ReactWrapper<IFacetMoreToggleProps, any>;\r\n\r\n        beforeEach(() => {\r\n            facetMoreToggle = mount(<FacetMoreToggle {...basicFacetMoreToggleProps} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            facetMoreToggle.detach();\r\n        });\r\n\r\n        it('should get the facet as a prop', () => {\r\n            const facetProp = facetMoreToggle.props().facet;\r\n\r\n            expect(facetProp).toBeDefined();\r\n            expect(facetProp).toBe(basicFacetMoreToggleProps.facet);\r\n        });\r\n\r\n        it('should display the moreLabel if passed as a prop else use the default label', () => {\r\n            const expectedMoreLabel = 'Show more rows';\r\n            const newFacetMoreToggleProps = _.extend({}, basicFacetMoreToggleProps, {moreLabel: expectedMoreLabel});\r\n\r\n            expect(facetMoreToggle.html()).toContain(FACET_TOGGLE_MORE_LABEL);\r\n\r\n            facetMoreToggle.setProps(newFacetMoreToggleProps);\r\n            facetMoreToggle.mount();\r\n            expect(facetMoreToggle.html()).not.toContain(FACET_TOGGLE_MORE_LABEL);\r\n            expect(facetMoreToggle.html()).toContain(expectedMoreLabel);\r\n        });\r\n\r\n        it('should call onToggleMore on change if prop is set', () => {\r\n            const onToggleMoreSpy = jasmine.createSpy('onToggleMore');\r\n            const handleOnChangeSpy = spyOn<any>(facetMoreToggle.instance(), 'handleOnChange').and.callThrough();\r\n            const newFacetMoreToggleProps = _.extend({}, basicFacetMoreToggleProps, {onToggleMore: onToggleMoreSpy});\r\n\r\n            facetMoreToggle.find('input').simulate('change');\r\n            expect(handleOnChangeSpy).toHaveBeenCalled();\r\n\r\n            facetMoreToggle = mount(<FacetMoreToggle {...newFacetMoreToggleProps} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n            const newHandleOnChangeSpy = spyOn<any>(facetMoreToggle.instance(), 'handleOnChange').and.callThrough();\r\n\r\n            facetMoreToggle.find('input').simulate('change');\r\n            expect(newHandleOnChangeSpy).toHaveBeenCalled();\r\n            expect(onToggleMoreSpy.calls.count()).toBe(1);\r\n        });\r\n\r\n        it('should stop clicks from propagating their events', () => {\r\n            const generalEventSpy = jasmine.createSpy('generalEvent');\r\n\r\n            document.addEventListener('click', generalEventSpy);\r\n\r\n            (document.getElementsByClassName('facet-more')[0] as HTMLDivElement).click();\r\n            expect(generalEventSpy).not.toHaveBeenCalled();\r\n\r\n            document.getElementById('App').click();\r\n            expect(generalEventSpy).toHaveBeenCalled();\r\n\r\n            document.removeEventListener('click', generalEventSpy);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=375.bundle.js.map