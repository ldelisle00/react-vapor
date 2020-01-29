(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{1764:function(n,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\nimport {connect} from 'react-redux';\nimport {IDispatch} from '../../../utils/ReduxUtils';\nimport {Button} from '../../button/Button';\nimport {LabeledInput} from '../../input/LabeledInput';\nimport {Section} from '../../section/Section';\nimport {ButtonWithRefreshCallback} from '../ButtonWithRefreshCallback';\nimport {RefreshCallBackActions} from '../RefeshCallbackActions';\nimport {RefreshCallback} from '../RefreshCallback';\n\n// start-print\nconst mapDispatchToProps = (dispatch: IDispatch) => ({\n    start: (id: string) => dispatch(RefreshCallBackActions.start(id)),\n    stop: (id: string) => dispatch(RefreshCallBackActions.stop(id)),\n});\n\nconst RefreshExamplesDisconnected = (props: ReturnType<typeof mapDispatchToProps>) => (\n    <>\n        <Section level={2} title=\"Component to handle Refresh\">\n            <LabeledInput label=\"Refresh counter\">\n                <Button name=\"Start\" className=\"btn mr2\" onClick={() => props.start('refresh-1')} />\n                <Button name=\"Stop\" className=\"btn\" onClick={() => props.stop('refresh-1')} />\n                <div>\n                    <RefreshCallback id=\"refresh-1\" callback={() => alert('refresh end')} />\n                </div>\n            </LabeledInput>\n        </Section>\n        <Section level={2} title=\"Component with a button to call the refreshCallback\">\n            <LabeledInput label=\"Refresh counter\">\n                <Button name=\"Start\" className=\"btn mr2\" onClick={() => props.start('refresh-2')} />\n                <Button name=\"Stop\" className=\"btn\" onClick={() => props.stop('refresh-2')} />\n                <div>\n                    <ButtonWithRefreshCallback\n                        id=\"refresh-2\"\n                        delay={20}\n                        callback={(start) => {\n                            alert('refresh end');\n                            start();\n                        }}\n                        button={{\n                            name: 'Refresh',\n                            enabled: true,\n                        }}\n                        buttonContainerProps={{\n                            className: 'mb2',\n                        }}\n                    />\n                </div>\n            </LabeledInput>\n        </Section>\n    </>\n);\n\nexport const RefreshExamples = connect(undefined, mapDispatchToProps)(RefreshExamplesDisconnected);\n// stop-print\n"}}]);
//# sourceMappingURL=663.bundle.js.map