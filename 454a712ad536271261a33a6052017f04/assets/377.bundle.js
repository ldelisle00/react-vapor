(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{1472:function(e,n,t){"use strict";t.r(n),n.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {IFacet} from '../Facet';\r\nimport {FacetRow, IFacetRowProps} from '../FacetRow';\r\n\r\ndescribe('Facets', () => {\r\n    const spyOnToggleFacet: jasmine.Spy = jasmine.createSpy('onToggleFacet');\r\n\r\n    const FACET_ROW_PROPS: IFacetRowProps = {\r\n        facetRow: {\r\n            name: 'row',\r\n            formattedName: 'Row',\r\n        },\r\n        facet: 'facetTitle',\r\n        onToggleFacet: spyOnToggleFacet,\r\n        isChecked: false,\r\n    };\r\n    const FACET_ROW: JSX.Element = <FacetRow {...FACET_ROW_PROPS} />;\r\n\r\n    describe('<FacetRow />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => shallow(FACET_ROW)).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('FacetRowView', () => {\r\n        let facetRowView: ReactWrapper<IFacetRowProps, any>;\r\n\r\n        beforeEach(() => {\r\n            facetRowView = mount(FACET_ROW, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            facetRowView.detach();\r\n        });\r\n\r\n        it('should stop event if click on checkbox directly', () => {\r\n            const event = jasmine.createSpyObj('e', ['preventDefault', 'stopPropagation']);\r\n            (facetRowView.instance() as any).stopEvent(event);\r\n\r\n            expect(event.preventDefault).toHaveBeenCalled();\r\n            expect(event.stopPropagation).toHaveBeenCalled();\r\n        });\r\n\r\n        it('should get the facet row as a prop', () => {\r\n            const facetRowProp = facetRowView.props().facetRow;\r\n\r\n            expect(facetRowProp).toBeDefined();\r\n            expect(facetRowProp).toBe(FACET_ROW_PROPS.facetRow);\r\n        });\r\n\r\n        it('should get the facet as a prop', () => {\r\n            const facetProp = facetRowView.props().facet;\r\n\r\n            expect(facetProp).toBeDefined();\r\n            expect(facetProp).toBe(FACET_ROW_PROPS.facet);\r\n        });\r\n\r\n        it('should get the facet as a prop', () => {\r\n            const facetProp = facetRowView.props().facet;\r\n\r\n            expect(facetProp).toBeDefined();\r\n            expect(facetProp).toBe(FACET_ROW_PROPS.facet);\r\n        });\r\n\r\n        it('should get what to do when toggling a row as a prop', () => {\r\n            const onToggleFacetProp = facetRowView.props().onToggleFacet;\r\n\r\n            expect(onToggleFacetProp).toBeDefined();\r\n        });\r\n\r\n        it('should get the maxTooltipLabelLength as a prop', () => {\r\n            expect(facetRowView.props().maxTooltipLabelLength).toBeDefined();\r\n        });\r\n\r\n        it('should get if the row checkbox is checked as a prop', () => {\r\n            const checkedProp = facetRowView.props().isChecked;\r\n\r\n            expect(checkedProp).toBeDefined();\r\n            expect(checkedProp).toBe(FACET_ROW_PROPS.isChecked);\r\n        });\r\n\r\n        it('should display the facet row value', () => {\r\n            expect(facetRowView.html()).toContain(FACET_ROW_PROPS.facetRow.formattedName);\r\n        });\r\n\r\n        it('should call onToggleFacet on change', () => {\r\n            spyOnToggleFacet.calls.reset();\r\n            expect(FACET_ROW_PROPS.onToggleFacet).not.toHaveBeenCalled();\r\n\r\n            facetRowView.find('label').simulate('click');\r\n\r\n            expect(spyOnToggleFacet).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should call onToggleFacet on click button', () => {\r\n            spyOnToggleFacet.calls.reset();\r\n\r\n            facetRowView.find('button').simulate('click');\r\n\r\n            expect(spyOnToggleFacet).toHaveBeenCalledTimes(1);\r\n        });\r\n\r\n        it('should display a <Tooltip /> if the formatted name is longer than maxTooltipLabelLength', () => {\r\n            const maxTooltipLabelLength = 25;\r\n            const longerFormattedNameFacetRow: IFacet = {\r\n                name: 'something',\r\n                formattedName: new Array(maxTooltipLabelLength + 2).join('a'),\r\n            };\r\n            const newProps: IFacetRowProps = _.extend({}, FACET_ROW_PROPS, {\r\n                facetRow: longerFormattedNameFacetRow,\r\n                maxTooltipLabelLength,\r\n            });\r\n\r\n            expect(facetRowView.find('Tooltip').length).toBe(0);\r\n\r\n            facetRowView.setProps(newProps);\r\n\r\n            expect(facetRowView.find('Tooltip').length).toBe(1);\r\n        });\r\n\r\n        it('should display a <Tooltip /> if the formatted name minus the count length is longer than maxTooltipLabelLength', () => {\r\n            const maxTooltipLabelLength = 25;\r\n            const longerFormattedNameFacetRow: IFacet = {\r\n                name: 'something',\r\n                formattedName: new Array(maxTooltipLabelLength).join('a'),\r\n                count: '11',\r\n            };\r\n            const newProps: IFacetRowProps = _.extend({}, FACET_ROW_PROPS, {\r\n                facetRow: longerFormattedNameFacetRow,\r\n                maxTooltipLabelLength,\r\n            });\r\n\r\n            expect(facetRowView.find('Tooltip').length).toBe(0);\r\n\r\n            facetRowView.setProps(newProps);\r\n\r\n            expect(facetRowView.find('Tooltip').length).toBe(1);\r\n        });\r\n\r\n        it('should display a \"span.facet-value-count\" if there is a count', () => {\r\n            const facetRowWithCount: IFacet = {\r\n                name: 'something',\r\n                formattedName: 'Something',\r\n                count: '1',\r\n            };\r\n            const newProps: IFacetRowProps = _.extend({}, FACET_ROW_PROPS, {facetRow: facetRowWithCount});\r\n\r\n            expect(facetRowView.find('span.facet-value-count').length).toBe(0);\r\n\r\n            facetRowView.setProps(newProps);\r\n\r\n            expect(facetRowView.find('span.facet-value-count').length).toBe(1);\r\n        });\r\n\r\n        it('should display a span.facet-value-count the count as value', () => {\r\n            const newProps: IFacetRowProps = _.extend({}, FACET_ROW_PROPS, {\r\n                facetRow: {\r\n                    name: 'something',\r\n                    formattedName: 'something',\r\n                    count: '10',\r\n                },\r\n            });\r\n\r\n            facetRowView.setProps(newProps);\r\n\r\n            expect(facetRowView.find('span.facet-value-count').length).toBe(1);\r\n            expect(facetRowView.html()).toContain(newProps.facetRow.count);\r\n        });\r\n    });\r\n    describe('<FacetRow enableExclude />', () => {\r\n        let facetRowExcludeView: ReactWrapper<IFacetRowProps>;\r\n        let props: IFacetRowProps;\r\n\r\n        beforeEach(() => {\r\n            props = {...FACET_ROW_PROPS, enableExclusions: true};\r\n            facetRowExcludeView = mount(<FacetRow {...props} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        it('should display a .facet-exclude-button when exclude behavior is enabled', () => {\r\n            expect(facetRowExcludeView.find('.facet-exclude-button').length).toBe(1);\r\n        });\r\n\r\n        it('should display a .exclude-icon when exclude behavior is enabled and checkbox is checked as exclude', () => {\r\n            expect(facetRowExcludeView.find('.icon.hide.exclude-icon').length).toBeGreaterThanOrEqual(1);\r\n        });\r\n\r\n        it('should call onToggle with good attribute when exclude behavior is enabled', () => {\r\n            facetRowExcludeView\r\n                .find('.facet-exclude-button')\r\n                .first()\r\n                .simulate('click');\r\n            const facet: IFacet = {\r\n                ...facetRowExcludeView.props().facetRow,\r\n                exclude: true,\r\n            };\r\n            expect(spyOnToggleFacet).toHaveBeenCalledWith(facet);\r\n        });\r\n\r\n        describe('FacetRow enableExclude excluded row', () => {\r\n            beforeEach(() => {\r\n                const facetRow: IFacet = {...FACET_ROW_PROPS.facetRow, exclude: true, count: '2334'};\r\n                facetRowExcludeView.setProps({...props, isChecked: true, facetRow});\r\n            });\r\n\r\n            it('should display a .exclude-box when exclude behavior is enabled and checkbox is checked as exclude', () => {\r\n                expect(facetRowExcludeView.find('.exclude-box').length).toBe(1);\r\n            });\r\n\r\n            it('should display two .text-exclude when exclude behavior is enabled and checkbox is checked as exclude', () => {\r\n                expect(facetRowExcludeView.find('.text-exclude').length).toBe(2);\r\n            });\r\n\r\n            it('should display a <Tooltip /> if the excludeTooltipMessage is defined', () => {\r\n                const facetRow: IFacet = {\r\n                    name: 'something',\r\n                    formattedName: 'Something',\r\n                    count: '11',\r\n                };\r\n                const newProps: IFacetRowProps = {\r\n                    ...FACET_ROW_PROPS,\r\n                    facetRow,\r\n                    excludeTooltipMessage: () => 'test exclude tooltip',\r\n                };\r\n\r\n                expect(facetRowExcludeView.find('Tooltip').length).toBe(0);\r\n\r\n                facetRowExcludeView.setProps(newProps);\r\n\r\n                expect(facetRowExcludeView.find('Tooltip').length).toBe(1);\r\n            });\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=377.bundle.js.map