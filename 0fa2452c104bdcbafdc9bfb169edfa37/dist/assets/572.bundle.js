(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{1678:function(a,n,r){"use strict";r.r(n),n.default='import * as React from \'react\';\r\nimport {INavigationProps, Navigation} from \'../Navigation\';\r\n\r\nexport class NavigationExamples extends React.Component<any, any> {\r\n    render() {\r\n        const navigationProps: INavigationProps = {\r\n            totalPages: 10,\r\n            totalEntries: 50,\r\n            currentPerPage: 10,\r\n            onPageClick: (newPage) => alert(\'New page selected: \' + (newPage + 1)),\r\n            onPerPageClick: (newPerPage) => alert(\'New per page option selected: \' + newPerPage),\r\n        };\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Navigation</label>\r\n                    <Navigation {...navigationProps} />\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Navigation with loading</label>\r\n                    <Navigation {...navigationProps} isLoading={true} />\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Navigation with custom values</label>\r\n                    <Navigation\r\n                        {...navigationProps}\r\n                        previousLabel="Précédente"\r\n                        nextLabel="Prochaine"\r\n                        numberOfPagesToShow={3}\r\n                        currentPage={1}\r\n                        perPageLabel="Items par page"\r\n                        perPageNumbers={[2, 10, 25, 50]}\r\n                    />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=572.bundle.js.map