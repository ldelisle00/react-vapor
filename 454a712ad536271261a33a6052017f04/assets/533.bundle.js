(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{1627:function(t,r,e){"use strict";e.r(r),r.default="import * as React from 'react';\r\nimport {IMultiStepBarProps, IStep, MultiStepBar, MultiStepState} from '../MultiStepBar';\r\n\r\nexport class MultiStepBarExamples extends React.Component<any, any> {\r\n    render() {\r\n        const stepsWithoutText: IStep[] = [\r\n            {\r\n                state: MultiStepState.Done,\r\n                tooltip: {\r\n                    title: 'This step is done!',\r\n                    placement: 'bottom',\r\n                    footer: 'Here is some information about it!',\r\n                },\r\n            },\r\n            {\r\n                state: MultiStepState.Warning,\r\n                tooltip: {\r\n                    title: 'This one finished with a warning',\r\n                    placement: 'bottom',\r\n                    footer: 'Better check your logs!',\r\n                },\r\n            },\r\n            {\r\n                state: MultiStepState.Error,\r\n                tooltip: {\r\n                    title: 'An error occurred here',\r\n                    placement: 'bottom',\r\n                    footer: 'Somehow the execution continued',\r\n                },\r\n            },\r\n            {\r\n                state: MultiStepState.Doing,\r\n                tooltip: {\r\n                    title: 'This step is currently in progress',\r\n                    placement: 'bottom',\r\n                    footer: 'Display some progress information here',\r\n                },\r\n            },\r\n            {\r\n                state: MultiStepState.ToDo,\r\n                tooltip: {\r\n                    title: 'This step is not yet done',\r\n                    placement: 'bottom',\r\n                    footer: 'Currently waiting for the previous step',\r\n                },\r\n            },\r\n        ];\r\n        const stepsWithText = stepsWithoutText.map((step, i) => ({...step, text: `Step ${i}`}));\r\n        const multiStepBarProps: IMultiStepBarProps = {\r\n            steps: stepsWithText,\r\n        };\r\n        return (\r\n            <div className=\"mt2\">\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Multi Step Bar</label>\r\n                    <MultiStepBar {...multiStepBarProps} />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Multi Step Bar with in-progress shine animation</label>\r\n                    <MultiStepBar {...multiStepBarProps} inProgressAnimation={'shine'} />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Small Multi Step Bar with flare animation</label>\r\n                    <MultiStepBar {...multiStepBarProps} steps={stepsWithoutText} small={true} barAnimation={'flare'} />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Small Multi Step Bar with in progress slide animation</label>\r\n                    <MultiStepBar\r\n                        {...multiStepBarProps}\r\n                        steps={stepsWithoutText}\r\n                        small={true}\r\n                        inProgressAnimation={'slide'}\r\n                    />\r\n                </div>\r\n                <div className=\"form-group\">\r\n                    <label className=\"form-control-label\">Multi Step Bar with separator</label>\r\n                    <MultiStepBar {...multiStepBarProps} separator={true} />\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=533.bundle.js.map