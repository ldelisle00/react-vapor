(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{1609:function(n,o,e){"use strict";e.r(o),o.default="import * as loremIpsum from 'lorem-ipsum';\nimport * as React from 'react';\nimport {connect} from 'react-redux';\nimport * as _ from 'underscore';\n\nimport {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';\nimport {WithDirtyActions} from '../../../hoc/withDirty/withDirtyActions';\nimport {WithDirtySelectors} from '../../../hoc/withDirty/withDirtySelectors';\nimport {IReactVaporState} from '../../../ReactVapor';\nimport {IDispatch} from '../../../utils/ReduxUtils';\nimport {Button} from '../../button/Button';\nimport {Input} from '../../input/Input';\nimport {Section} from '../../section/Section';\nimport {Svg} from '../../svg/Svg';\nimport {Tooltip} from '../../tooltip/Tooltip';\nimport {ModalLoading} from '../loading/ModalLoading';\nimport {closeModal, openModal} from '../ModalActions';\nimport {ModalCompositeConnected} from '../ModalCompositeConnected';\nimport {UnsavedChangesModalProvider} from '../UnsavedChangeModalProvider';\n\nexport interface ModalConnectedExampleProps {\n    id?: string;\n    open?: (id: string) => void;\n    close?: (id: string) => void;\n    isDirty?: boolean;\n    toggleIsDirty?: (id: string, dirty: boolean) => void;\n}\n\nexport const ModalWindowExamples: ExampleComponent = () => (\n    <Section title=\"Modal Window Examples\">\n        <ModalCompositeExampleConnected />\n        <ModalWithDirtyChangeDiscardPrevention id=\"UnsavedChangeModal\" />\n        <ModalLoadingExample />\n    </Section>\n);\n\nModalWindowExamples.title = 'Modal Window';\nModalWindowExamples.description =\n    'Modal windows appear in front of the main page and disable it while they are visible. They act as a zoom in on an element of the main page that allows additionnal interaction or configuration. They make possible for users to focus on their content whilst avoiding leaving the context from which they have been called.';\n\n// start-print\n\nconst mapDispatchToProps = (dispatch: IDispatch) => ({\n    open: (id: string) => dispatch(openModal(id)),\n    close: (id: string) => dispatch(closeModal(id)),\n    toggleIsDirty: (id: string, isDirty: boolean) => dispatch(WithDirtyActions.toggle(id, isDirty)),\n});\n\nconst ModalExampleDisconnected: React.FunctionComponent<ModalConnectedExampleProps> = ({\n    open,\n    close,\n    toggleIsDirty,\n}) => {\n    const handleClose = (id: string) => {\n        close(id);\n        toggleIsDirty(id, false);\n    };\n\n    const modalId = 'Modal-Connected-#1';\n    return (\n        <Section level={2} title=\"Modals connected to the redux store\">\n            <Section level={3} title=\"A simple modal window connected\">\n                <Button\n                    className=\"btn\"\n                    onClick={() => {\n                        return open(modalId);\n                    }}\n                >\n                    Open Modal\n                </Button>\n\n                <ModalCompositeConnected\n                    id={modalId}\n                    title=\"Modal composite\"\n                    modalHeaderChildren={\n                        <Tooltip title=\"A tooltip for the title\">\n                            <Svg svgName=\"help\" className=\"icon mod-2x ml1\" svgClass=\"fill-orange\" />\n                        </Tooltip>\n                    }\n                    modalBodyChildren={<div className=\"mt2\">{loremIpsum({count: 10})}</div>}\n                    modalFooterChildren={\n                        <Button className=\"btn\" onClick={() => handleClose(modalId)}>\n                            Close\n                        </Button>\n                    }\n                    modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n                />\n            </Section>\n\n            <Section level={3} title=\"A modal with additionnal configuration props\">\n                <Button className=\"btn\" onClick={() => open('example-4')}>\n                    Open Modal\n                </Button>\n                <ModalCompositeConnected\n                    id=\"example-4\"\n                    title=\"Modal with addtional ReactModal props\"\n                    classes={['mod-fade-in-scale']}\n                    modalBodyChildren=\"This modal only closes by using the close button or the X.\"\n                    modalFooterChildren={\n                        <Button className=\"btn\" onClick={() => handleClose('example-4')}>\n                            Close\n                        </Button>\n                    }\n                    modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n                    docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}\n                    shouldCloseOnEsc={false}\n                    shouldCloseOnOverlayClick={false}\n                    onAfterOpen={() => alert('The modal content has mounted and is ready to open.')}\n                    closeCallback={() => alert('The modal has closed.')}\n                />\n            </Section>\n        </Section>\n    );\n};\n\nconst ModalCompositeExampleConnected = connect(null, mapDispatchToProps)(ModalExampleDisconnected);\n\nconst mapStateToProps = (state: IReactVaporState, ownProps: any) => ({\n    isDirty: WithDirtySelectors.getIsDirty(state, {id: ownProps.id}),\n});\n\nconst ModalWithDirtyChangeDiscardPreventionDisconnected: React.FunctionComponent<ModalConnectedExampleProps> = ({\n    id,\n    close,\n    open,\n    toggleIsDirty,\n    isDirty,\n}) => {\n    const handleClose = () => {\n        close(id);\n        toggleIsDirty(id, false);\n    };\n\n    return (\n        <Section level={3} title=\"A modal implemented with the <UnsavedChangesModalProvider/>\">\n            <Button className=\"btn\" onClick={() => open(id)}>\n                Open Modal\n            </Button>\n            <UnsavedChangesModalProvider isDirty={isDirty}>\n                {({promptBefore}) => (\n                    <ModalCompositeConnected\n                        id={id}\n                        title=\"A modal with a dirty change discard prevention\"\n                        classes={['mod-fade-in-scale']}\n                        modalBodyChildren={\n                            <div className=\"mt2\">\n                                <div className=\"mb2\">\n                                    <Input\n                                        id=\"input\"\n                                        labelTitle=\"Try to close me with dirty changes.\"\n                                        onChange={(i) => toggleIsDirty(id, _.isEmpty(i) ? false : true)}\n                                    />\n                                </div>\n                                {loremIpsum({count: 10})}\n                            </div>\n                        }\n                        modalFooterChildren={\n                            <Button className=\"btn\" onClick={() => promptBefore(() => handleClose()) && handleClose()}>\n                                Close\n                            </Button>\n                        }\n                        validateShouldNavigate={() => promptBefore(() => handleClose())}\n                        modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n                        docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}\n                    />\n                )}\n            </UnsavedChangesModalProvider>\n        </Section>\n    );\n};\n\nconst ModalWithDirtyChangeDiscardPrevention = connect(\n    mapStateToProps,\n    mapDispatchToProps\n)(ModalWithDirtyChangeDiscardPreventionDisconnected);\n\nconst ModalLoadingExampleDisconnected: React.FunctionComponent<{open: (id: string) => void}> = ({open}) => {\n    const loadingModalExampleId = 'Loading-modal-example';\n    return (\n        <Section level={3} title=\"A loading modal\">\n            <Button className=\"btn\" onClick={() => open(loadingModalExampleId)}>\n                Open Modal\n            </Button>\n            <ModalLoading id={loadingModalExampleId} title={'my loading title'} openOnMount={false} />\n        </Section>\n    );\n};\n\nconst ModalLoadingExample = connect(null, mapDispatchToProps)(ModalLoadingExampleDisconnected);\n"}}]);
//# sourceMappingURL=515.bundle.js.map