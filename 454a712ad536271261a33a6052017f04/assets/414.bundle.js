(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{1509:function(r,e,a){"use strict";a.r(e),e.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {Breadcrumb, IBreadcrumbProps} from '../breadcrumbs/Breadcrumb';\r\nimport {HeaderWrapper, IHeaderWrapperProps} from './HeaderWrapper';\r\n\r\nexport interface IBreadcrumbHeaderProps extends IHeaderWrapperProps {\r\n    breadcrumb: IBreadcrumbProps;\r\n}\r\n\r\nexport class BreadcrumbHeader extends React.Component<IBreadcrumbHeaderProps, {}> {\r\n    static defaultProps: Partial<IBreadcrumbHeaderProps> = _.extend(\r\n        {\r\n            breadcrumb: {\r\n                title: {\r\n                    text: '',\r\n                },\r\n            },\r\n            classes: [],\r\n        },\r\n        HeaderWrapper.defaultProps\r\n    );\r\n\r\n    render() {\r\n        return (\r\n            <HeaderWrapper {..._.omit(this.props, 'breadcrumb')}>\r\n                <Breadcrumb {...this.props.breadcrumb} />\r\n            </HeaderWrapper>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=414.bundle.js.map