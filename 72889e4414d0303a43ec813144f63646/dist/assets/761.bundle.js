(window.webpackJsonp=window.webpackJsonp||[]).push([[761],{1850:function(n,a,e){"use strict";e.r(a),a.default='import * as React from \'react\';\r\n\r\nimport {TabConnected} from \'../TabConnected\';\r\nimport {TabContent} from \'../TabContent\';\r\nimport {TabNavigation} from \'../TabNavigation\';\r\nimport {TabPaneConnected} from \'../TabPaneConnected\';\r\n\r\nconst TAB1_ID = \'tab1\';\r\nconst TAB2_ID = \'tab2\';\r\nconst TAB3_ID = \'tab3\';\r\n\r\nconst TAB11_ID = \'tab11\';\r\nconst TAB22_ID = \'tab22\';\r\nconst TAB33_ID = \'tab33\';\r\n\r\nexport class TabsExamples extends React.Component<any, any> {\r\n    render() {\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Tabs</label>\r\n                    <div>\r\n                        <TabNavigation>\r\n                            <TabConnected id={TAB1_ID} title="A Tab" />\r\n                            <TabConnected id={TAB2_ID} title="Another Tab" tooltip="I am an enabled tab" />\r\n                            <TabConnected id={TAB3_ID} title="A Disabled Tab" tooltip="I am a disabled tab" disabled />\r\n                        </TabNavigation>\r\n                        <TabContent>\r\n                            <TabPaneConnected id={TAB1_ID}>\r\n                                <div className="mod-header-padding mod-form-top-bottom-padding">\r\n                                    Content of the first tab.\r\n                                </div>\r\n                            </TabPaneConnected>\r\n                            <TabPaneConnected id={TAB2_ID}>\r\n                                <div className="mod-header-padding mod-form-top-bottom-padding">\r\n                                    Content of the second tab.\r\n                                </div>\r\n                            </TabPaneConnected>\r\n                            <TabPaneConnected id={TAB3_ID}>\r\n                                <div className="mod-header-padding mod-form-top-bottom-padding">\r\n                                    Last tab. You shouldn\'t be able to see this because the tab is disabled.\r\n                                </div>\r\n                            </TabPaneConnected>\r\n                        </TabContent>\r\n                    </div>\r\n                </div>\r\n\r\n                <div className="form-group">\r\n                    <label className="form-control-label">\r\n                        Tabs with custom attributes on element (use the inspector to see changes)\r\n                    </label>\r\n                    <div>\r\n                        <TabNavigation className={\'tab-navigation-custom-class\'} style={{backgroundColor: \'grey\'}}>\r\n                            <TabConnected id={TAB11_ID} title="A Tab" />\r\n                            <TabConnected id={TAB22_ID} title="Another Tab" />\r\n                            <TabConnected id={TAB33_ID} title="Yet Another Tab" />\r\n                        </TabNavigation>\r\n                        <TabContent className={\'tab-content-custom-class\'}>\r\n                            <TabPaneConnected id={TAB11_ID}>\r\n                                <div className="mod-header-padding mod-form-top-bottom-padding">\r\n                                    Content of the first tab.\r\n                                </div>\r\n                            </TabPaneConnected>\r\n                            <TabPaneConnected id={TAB22_ID}>\r\n                                <div className="mod-header-padding mod-form-top-bottom-padding">\r\n                                    Content of the second tab.\r\n                                </div>\r\n                            </TabPaneConnected>\r\n                            <TabPaneConnected id={TAB33_ID}>\r\n                                <div className="mod-header-padding mod-form-top-bottom-padding">Last tab.</div>\r\n                            </TabPaneConnected>\r\n                        </TabContent>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=761.bundle.js.map