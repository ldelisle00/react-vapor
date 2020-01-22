(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{1608:function(n,e,o){"use strict";o.r(e),e.default="import * as React from 'react';\nimport {Button} from '../button/Button';\nimport {ModalComposite} from './ModalComposite';\n\nconst defaultModalTitle = 'Unsaved Changes';\nconst defaultModalClasses = ['mod-prompt', 'mod-fade-in-scale'];\nconst defaultModalDescription =\n    'Are you sure you want to leave this page without saving? All unsaved changes will be lost.';\nconst defaultConfirmButtonText = 'Exit without applying changes';\n\nexport interface IUnsavedChangesModalProviderProps {\n    isDirty: boolean;\n    modalTitle?: string;\n    className?: string[];\n    children: (props: {promptBefore: (callbackOnDiscard: () => any) => boolean}) => React.ReactNode;\n    unsavedChangesDescription?: string;\n    confirmButtonText?: string;\n}\n\nexport const UnsavedChangesModalProvider: React.FunctionComponent<IUnsavedChangesModalProviderProps> = ({\n    isDirty,\n    children,\n    modalTitle = defaultModalTitle,\n    className = defaultModalClasses,\n    unsavedChangesDescription = defaultModalDescription,\n    confirmButtonText = defaultConfirmButtonText,\n}) => {\n    const [isOpen, setIsOpen] = React.useState(false);\n    const [confirm, setConfirm] = React.useState(null);\n\n    const promptBefore = (callbackOnDiscard: () => any): boolean => {\n        if (isDirty) {\n            setIsOpen(true);\n            setConfirm(() => () => {\n                callbackOnDiscard();\n                close();\n            });\n            return false;\n        }\n        return true;\n    };\n\n    const close = () => {\n        setIsOpen(false);\n    };\n\n    return (\n        <>\n            {children({promptBefore})}\n            <ModalComposite\n                title={modalTitle}\n                classes={className}\n                modalHeaderClasses={['mod-confirmation']}\n                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}\n                modalBodyChildren={<div>{unsavedChangesDescription}</div>}\n                modalFooterChildren={\n                    <>\n                        <Button small name={confirmButtonText} onClick={confirm} primary />\n                        <Button small autoFocus name=\"Cancel\" onClick={close} />\n                    </>\n                }\n                isOpen={isOpen}\n                onClose={close}\n            />\n        </>\n    );\n};\n"}}]);
//# sourceMappingURL=514.bundle.js.map