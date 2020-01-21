(window.webpackJsonp=window.webpackJsonp||[]).push([[887],{1975:function(n,t,r){"use strict";r.r(t),t.default='import * as React from \'react\';\r\nimport {connect} from \'react-redux\';\r\nimport {ExampleComponent} from \'../../../../docs/src/components/ComponentsInterface\';\r\nimport {IDispatch} from \'../../../utils/ReduxUtils\';\r\nimport {Button} from \'../../button/Button\';\r\nimport {Section} from \'../../section/Section\';\r\nimport {IToastProps, Toast} from \'../Toast\';\r\nimport {addToast} from \'../ToastActions\';\r\nimport {ToastContainer} from \'../ToastContainer\';\r\nimport {ToastContainerConnected} from \'../ToastContainerConnected\';\r\n\r\nexport const ToastExamples: ExampleComponent = () => (\r\n    <Section>\r\n        <ToastsWithLocalState />\r\n        <ToastsWithReduxStore />\r\n    </Section>\r\n);\r\n\r\nconst ToastsWithLocalState: React.FunctionComponent = () => {\r\n    const [state, setState] = React.useState({\r\n        Success: false,\r\n        Warning: false,\r\n        Error: false,\r\n        Timed: false,\r\n    });\r\n\r\n    return (\r\n        <>\r\n            <Section level={2} title="Toasts with a local state">\r\n                <Button\r\n                    enabled\r\n                    className="btn"\r\n                    name="Top left"\r\n                    onClick={() => setState({...state, Success: !state.Success})}\r\n                />\r\n\r\n                <Button\r\n                    enabled\r\n                    className="btn"\r\n                    name="Middle Earth"\r\n                    onClick={() => setState({...state, Warning: !state.Warning})}\r\n                />\r\n\r\n                <Button className="btn" name="Top right" onClick={() => setState({...state, Error: !state.Error})} />\r\n\r\n                <Button className="btn" name="Bottom" onClick={() => setState({...state, Timed: !state.Timed})} />\r\n            </Section>\r\n\r\n            <ToastContainer left>\r\n                {state.Success && (\r\n                    <Toast\r\n                        key="toast-1"\r\n                        id="toast-1"\r\n                        title="Timed Sucess !!"\r\n                        dismiss={1000}\r\n                        onClose={() => setState({...state, Success: false})}\r\n                    />\r\n                )}\r\n            </ToastContainer>\r\n            <ToastContainer>\r\n                {state.Warning && (\r\n                    <Toast\r\n                        key="toast-1"\r\n                        id="toast-1"\r\n                        title="Warning !!"\r\n                        type="Warning"\r\n                        onClose={() => setState({...state, Warning: false})}\r\n                    />\r\n                )}\r\n            </ToastContainer>\r\n            <ToastContainer right>\r\n                {state.Error && (\r\n                    <Toast\r\n                        key="toast-1"\r\n                        id="toast-1"\r\n                        title="Error !!"\r\n                        type="Error"\r\n                        onClose={() => setState({...state, Error: false})}\r\n                    />\r\n                )}\r\n            </ToastContainer>\r\n            <ToastContainer bottom>\r\n                {state.Timed && (\r\n                    <Toast\r\n                        key="toast-1"\r\n                        id="toast-1"\r\n                        title="An eternal Success !"\r\n                        dismissible={false}\r\n                        onClose={() => setState({...state, Timed: false})}\r\n                    />\r\n                )}\r\n            </ToastContainer>\r\n        </>\r\n    );\r\n};\r\n\r\nconst MapDispatchToProps = (dispatch: IDispatch) => ({\r\n    renderToast: (containerId: string, title: string, options?: IToastProps) =>\r\n        dispatch(addToast(containerId, title, options)),\r\n});\r\n\r\nconst ToastsWithReduxStoreDisconnected: React.FunctionComponent<ReturnType<typeof MapDispatchToProps>> = ({\r\n    renderToast,\r\n}) => {\r\n    const toastContent = () => (\r\n        <ul>\r\n            <li style={{marginBottom: \'5px\'}}>\r\n                <a href="#">Some Link</a>\r\n            </li>\r\n            <li>Complex React Component</li>\r\n        </ul>\r\n    );\r\n\r\n    return (\r\n        <>\r\n            <Section level={2} title="Toasts with a redux store">\r\n                <Button\r\n                    enabled\r\n                    className="btn"\r\n                    name="Success"\r\n                    onClick={() => renderToast(\'containerId\', \'Success !\')}\r\n                />\r\n\r\n                <Button\r\n                    enabled\r\n                    className="btn"\r\n                    name="Warning   "\r\n                    onClick={() => renderToast(\'containerId\', \'Warning !\', {type: \'Warning\'})}\r\n                />\r\n\r\n                <Button\r\n                    className="btn"\r\n                    name="Error"\r\n                    onClick={() => renderToast(\'containerId\', \'Error !\', {type: \'Error\'})}\r\n                />\r\n\r\n                <Button\r\n                    className="btn"\r\n                    name="Timed Success"\r\n                    onClick={() => renderToast(\'containerId\', \'Timed Success !\', {dismiss: 1000})}\r\n                />\r\n\r\n                <Button\r\n                    className="btn"\r\n                    name="custom JSX"\r\n                    onClick={() => renderToast(\'containerId\', \'Custom JSX !\', {content: toastContent})}\r\n                />\r\n                <Button\r\n                    className="btn"\r\n                    name="custom String"\r\n                    onClick={() => renderToast(\'containerId\', \'Timed Success!\', {content: \'I am a string !\'})}\r\n                />\r\n            </Section>\r\n            <ToastContainerConnected id="containerId" />\r\n        </>\r\n    );\r\n};\r\nconst ToastsWithReduxStore = connect(null, MapDispatchToProps)(ToastsWithReduxStoreDisconnected);\r\n'}}]);
//# sourceMappingURL=887.bundle.js.map