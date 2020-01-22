(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1491:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\nimport {UUID} from '../../../utils/UUID';\r\nimport {IContentProps} from '../../content/Content';\r\nimport {Loading} from '../../loading/Loading';\r\nimport {ISvgProps, Svg} from '../../svg/Svg';\r\nimport {FlatSelectConnected} from '../FlatSelectConnected';\r\nimport {IFlatSelectOptionProps} from '../FlatSelectOption';\r\n\r\nexport class FlatSelectExamples extends React.Component {\r\n    render() {\r\n        const defaultFlatSelectOption: IFlatSelectOptionProps[] = [\r\n            {\r\n                id: UUID.generate(),\r\n                option: {content: 'Option 1'},\r\n            },\r\n            {\r\n                id: UUID.generate(),\r\n                option: {content: 'Option 2'},\r\n            },\r\n            {\r\n                id: UUID.generate(),\r\n                option: {content: 'Option 3'},\r\n            },\r\n        ];\r\n\r\n        const svg: ISvgProps = {\r\n            svgName: 'domain-google',\r\n            svgClass: 'icon',\r\n        };\r\n        const prepend: IContentProps = {content: () => <Svg {...svg} />, classes: ['mr1']};\r\n        const append: IContentProps = {content: () => <Svg {...svg} />, classes: ['ml1']};\r\n\r\n        return (\r\n            <div className=\"mt2\">\r\n                <h1 className=\"text-blue mb1\">Flat Select List</h1>\r\n\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Default Flat Select</label>\r\n                    <div className=\"form-control\">\r\n                        <FlatSelectConnected\r\n                            {...{\r\n                                id: UUID.generate(),\r\n                                options: defaultFlatSelectOption,\r\n                            }}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Flat Select mod group</label>\r\n                    <div className=\"form-control\">\r\n                        <FlatSelectConnected\r\n                            {...{\r\n                                id: UUID.generate(),\r\n                                options: defaultFlatSelectOption,\r\n                                group: true,\r\n                            }}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Flat Select mod option picker</label>\r\n                    <div className=\"form-control\">\r\n                        <FlatSelectConnected\r\n                            {...{\r\n                                id: UUID.generate(),\r\n                                options: defaultFlatSelectOption,\r\n                                optionPicker: true,\r\n                            }}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Flat Select with option tooltip</label>\r\n                    <div className=\"form-control\">\r\n                        <FlatSelectConnected\r\n                            {...{\r\n                                id: UUID.generate(),\r\n                                options: [\r\n                                    {\r\n                                        id: UUID.generate(),\r\n                                        option: {content: 'Option 1'},\r\n                                        tooltip: {title: 'Option 1 tooltip', container: 'body', placement: 'bottom'},\r\n                                    },\r\n                                    {\r\n                                        id: UUID.generate(),\r\n                                        option: {content: 'Option 2'},\r\n                                        tooltip: {title: 'Option 2 tooltip', container: 'body', placement: 'bottom'},\r\n                                    },\r\n                                ],\r\n                            }}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Flat Select mod group with option tooltip</label>\r\n                    <div className=\"form-control\">\r\n                        <FlatSelectConnected\r\n                            {...{\r\n                                id: UUID.generate(),\r\n                                options: [\r\n                                    {\r\n                                        id: UUID.generate(),\r\n                                        option: {content: 'Option 1'},\r\n                                        tooltip: {title: 'Option 1 tooltip', container: 'body', placement: 'bottom'},\r\n                                    },\r\n                                    {\r\n                                        id: UUID.generate(),\r\n                                        option: {content: 'Option 2'},\r\n                                        tooltip: {title: 'Option 2 tooltip', container: 'body', placement: 'bottom'},\r\n                                    },\r\n                                ],\r\n                                group: true,\r\n                            }}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Flat Select with option prepend</label>\r\n                    <div className=\"form-control\">\r\n                        <FlatSelectConnected\r\n                            {...{\r\n                                id: UUID.generate(),\r\n                                options: [\r\n                                    {\r\n                                        id: UUID.generate(),\r\n                                        option: {content: 'Option 1'},\r\n                                        prepend: prepend,\r\n                                    },\r\n                                    {\r\n                                        id: UUID.generate(),\r\n                                        option: {content: 'Option 2'},\r\n                                        prepend: prepend,\r\n                                    },\r\n                                ],\r\n                            }}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Flat Select with option append</label>\r\n                    <div className=\"form-control\">\r\n                        <FlatSelectConnected\r\n                            {...{\r\n                                id: UUID.generate(),\r\n                                options: [\r\n                                    {\r\n                                        id: UUID.generate(),\r\n                                        option: {content: 'Option 1'},\r\n                                        append: append,\r\n                                    },\r\n                                    {\r\n                                        id: UUID.generate(),\r\n                                        option: {content: 'Option 2'},\r\n                                        append: append,\r\n                                    },\r\n                                ],\r\n                            }}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Flat Select with option component</label>\r\n                    <div className=\"form-control\">\r\n                        <FlatSelectConnected\r\n                            {...{\r\n                                id: UUID.generate(),\r\n                                options: [\r\n                                    {\r\n                                        id: UUID.generate(),\r\n                                        option: {content: Loading},\r\n                                    },\r\n                                    {\r\n                                        id: UUID.generate(),\r\n                                        option: {content: Loading},\r\n                                    },\r\n                                ],\r\n                            }}\r\n                        />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=396.bundle.js.map