(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1232:function(e,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\n\r\nimport {ExamplesStore} from '../../../../../docs/Store';\r\nimport {ActionBarConnected} from '../../ActionBar';\r\nimport {filterItems} from '../ItemFilterActions';\r\n\r\nconst ACTION_BAR_ID = 'item-filter-connected-example';\r\nconst ITEM_FILTER_LABEL = 'Item filter';\r\n\r\nexport class ItemFilterConnectedExamples extends React.Component<any, any> {\r\n    componentDidMount() {\r\n        ExamplesStore.dispatch(filterItems(ACTION_BAR_ID, 'Item'));\r\n        ExamplesStore.dispatch(filterItems(ACTION_BAR_ID + '1', 'Very looooooooooooong item'));\r\n        ExamplesStore.dispatch(filterItems(ACTION_BAR_ID + '2', 'Very looooooooooooong item'));\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"mt2\">\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Action bar with an item filter and Redux state</label>\r\n                    <ActionBarConnected\r\n                        id={ACTION_BAR_ID}\r\n                        itemFilterLabel={ITEM_FILTER_LABEL}\r\n                        onClearItemFilter={() => alert('Item filter was cleared')}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        Action bar with an item filter cropped on the right and with Redux state\r\n                    </label>\r\n                    <ActionBarConnected\r\n                        id={`${ACTION_BAR_ID}1`}\r\n                        itemFilterLabel={ITEM_FILTER_LABEL}\r\n                        itemFilterCropLength={10}\r\n                        onClearItemFilter={() => alert('Item filter was cleared')}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        Action bar with an item filter cropped on the left and with Redux state\r\n                    </label>\r\n                    <ActionBarConnected\r\n                        id={`${ACTION_BAR_ID}2`}\r\n                        itemFilterLabel={ITEM_FILTER_LABEL}\r\n                        itemFilterCropLength={-10}\r\n                        onClearItemFilter={() => alert('Item filter was cleared')}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">\r\n                        Action bar with an item filter cropped on the left with Redux state and tooltip options\r\n                    </label>\r\n                    <ActionBarConnected\r\n                        id={`${ACTION_BAR_ID}3`}\r\n                        itemFilterLabel={ITEM_FILTER_LABEL}\r\n                        itemTooltipProps={{title: 'tooltip', placement: 'top'}}\r\n                        itemFilterCropLength={-10}\r\n                        onClearItemFilter={() => alert('Item filter was cleared')}\r\n                    />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=131.bundle.js.map