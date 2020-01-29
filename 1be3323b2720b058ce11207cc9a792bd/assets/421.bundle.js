(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{1528:function(r,e,n){"use strict";n.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\nimport * as React from 'react';\r\nimport {Breadcrumb, IBreadcrumbProps} from '../../breadcrumbs/Breadcrumb';\r\nimport {BreadcrumbHeader, IBreadcrumbHeaderProps} from '../BreadcrumbHeader';\r\nimport {HeaderWrapper} from '../HeaderWrapper';\r\n\r\ndescribe('<BreadcrumbHeader/>', () => {\r\n    const defaultProps: IBreadcrumbHeaderProps = {\r\n        breadcrumb: {\r\n            title: {\r\n                text: 'test',\r\n            },\r\n        },\r\n    };\r\n\r\n    let basicHeaderComponent: ReactWrapper<IBreadcrumbHeaderProps, any>;\r\n\r\n    it('should render without errors', () => {\r\n        expect(() => {\r\n            shallow(<BreadcrumbHeader {...defaultProps} />);\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('<BreadcrumbHeader /> with default props', () => {\r\n        beforeEach(() => {\r\n            basicHeaderComponent = mount(<BreadcrumbHeader {...defaultProps} />, {\r\n                attachTo: document.getElementById('App'),\r\n            });\r\n        });\r\n\r\n        afterEach(() => {\r\n            basicHeaderComponent.detach();\r\n        });\r\n\r\n        it('should render the default Breadcrumb', () => {\r\n            const breadcrumbHeaderComponent = basicHeaderComponent.find(Breadcrumb);\r\n            expect(breadcrumbHeaderComponent.length).toBe(1);\r\n            expect((breadcrumbHeaderComponent.props() as IBreadcrumbProps).title.text).toBe(\r\n                defaultProps.breadcrumb.title.text\r\n            );\r\n        });\r\n\r\n        it('should render the HeaderWrapper', () => {\r\n            expect(basicHeaderComponent.find(HeaderWrapper).length).toBe(1);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=421.bundle.js.map