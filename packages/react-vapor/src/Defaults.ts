import ReactModal from 'react-modal';

export const Defaults = {
    MODAL_ROOT: 'body',
    MODAL_TIMEOUT: 300,

    DROP_ROOT: 'body',
    DROP_PARENT_ROOT: 'body',

    TOOLTIP_ROOT: 'body',

    set APP_ELEMENT(appElement: string | HTMLElement) {
        ReactModal.setAppElement(appElement);
    },

    REFRESH_CALLBACK_INTERVAL_MS: 1000,
};
