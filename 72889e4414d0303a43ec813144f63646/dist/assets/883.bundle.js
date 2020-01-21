(window.webpackJsonp=window.webpackJsonp||[]).push([[883],{1972:function(t,n,a){"use strict";a.r(n),n.default="import * as _ from 'underscore';\r\n\r\nimport {IReduxAction} from '../../utils/ReduxUtils';\r\nimport {IToastProps, ToastType} from './Toast';\r\nimport {IToastActionPayload, IToastAddPayload, IToastContainerActionPayload, ToastAction} from './ToastActions';\r\n\r\nexport interface IToastsState {\r\n    id: string;\r\n    toasts: IToastState[];\r\n}\r\n\r\nexport interface IToastState extends IToastProps {\r\n    id: string;\r\n    title: React.ReactNode;\r\n}\r\n\r\nexport const toastContainerInitialState: IToastsState = {\r\n    id: undefined,\r\n    toasts: [],\r\n};\r\n\r\nexport const toastInitialState: IToastState = {\r\n    id: undefined,\r\n    title: '',\r\n    type: ToastType.Success,\r\n    dismiss: 0,\r\n    dismissible: true,\r\n    animate: true,\r\n    content: '',\r\n};\r\n\r\nexport const toastsContainerInitialState: IToastsState[] = [];\r\n\r\nexport const toastContainerReducer = (\r\n    state: IToastsState = toastContainerInitialState,\r\n    action: IReduxAction<IToastContainerActionPayload>\r\n): IToastsState => {\r\n    switch (action.type) {\r\n        case ToastAction.addToastContainer:\r\n            return {\r\n                ...state,\r\n                id: action.payload.id,\r\n                toasts: [],\r\n            };\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\r\nconst toastsReducer = (state: IToastState[], action: IReduxAction<IToastActionPayload>): IToastState[] => {\r\n    if (action.type === ToastAction.addToast) {\r\n        const payload = action.payload as IToastAddPayload;\r\n        return [...state, payload];\r\n    } else {\r\n        return _.reject(state, (toast: IToastState) => action.payload.id === toast.id);\r\n    }\r\n};\r\n\r\nexport const toastsContainerReducer = (\r\n    state: IToastsState[] = toastsContainerInitialState,\r\n    action: IReduxAction<IToastContainerActionPayload>\r\n): IToastsState[] => {\r\n    switch (action.type) {\r\n        case ToastAction.addToastContainer:\r\n            return [...state, toastContainerReducer(undefined, action)];\r\n        case ToastAction.removeToastContainer:\r\n            return _.reject(state, (container: IToastsState) => action.payload.id === container.id);\r\n        case ToastAction.addToast:\r\n        case ToastAction.removeToast:\r\n            return state.map(\r\n                (container: IToastsState): IToastsState => {\r\n                    const toastAction = action as IReduxAction<IToastActionPayload>;\r\n                    return toastAction.payload.containerId === container.id\r\n                        ? {...container, toasts: toastsReducer(container.toasts, toastAction)}\r\n                        : container;\r\n                }\r\n            );\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n"}}]);
//# sourceMappingURL=883.bundle.js.map