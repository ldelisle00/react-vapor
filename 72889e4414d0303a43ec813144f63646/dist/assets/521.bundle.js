(window.webpackJsonp=window.webpackJsonp||[]).push([[521],{1617:function(n,o,t){"use strict";t.r(o),o.default="import * as React from 'react';\nimport {Loading} from '../../loading/Loading';\nimport {ModalCompositeConnected} from '../ModalCompositeConnected';\n\nexport interface ModalLoadingProps {\n    id: string;\n    title?: React.ReactNode;\n    openOnMount?: boolean;\n}\n\nexport const ModalLoading: React.FunctionComponent<ModalLoadingProps> = (props) => (\n    <ModalCompositeConnected\n        id={props.id}\n        classes=\"mod-prompt\"\n        modalBodyChildren={\n            <div className=\"loading-prompt\">\n                {props.title ? <div>{props.title}</div> : null}\n                <Loading fullContent />\n            </div>\n        }\n        openOnMount={props.openOnMount}\n        isPrompt\n    />\n);\n\nModalLoading.defaultProps = {\n    openOnMount: true,\n};\n"}}]);
//# sourceMappingURL=521.bundle.js.map