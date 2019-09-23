import * as React from 'react';
import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {IActionOptions} from '../Action';
import {addActionsToActionBar} from '../ActionBarActions';
import {ActionBarConnected} from '../ActionBarConnected';
import {ACTION_SEPARATOR} from '../ActionConstants';

const actionBarId = 'action-bar-connected';

export class ActionBarConnectedExamples extends React.Component<any, any> {
    componentDidMount() {
        const actions: IActionOptions[] = [
            ACTION_SEPARATOR,
            {
                name: 'Link to Coveo',
                link: 'http://coveo.com',
                target: '_blank',
                icon: 'edit',
                primary: true,
                enabled: true,
            },
            ACTION_SEPARATOR,
            {
                name: 'Confirm Me',
                trigger: () => alert('You confirmed this action !'),
                target: '_blank',
                icon: 'disable',
                primary: true,
                enabled: true,
                requiresConfirmation: {
                    confirmLabel: 'Want to do this action ?',
                    confirmType: 'danger',
                    buttonLabels: {
                        confirm: 'sure !',
                        cancel: 'never !',
                    },
                },
            },
            ACTION_SEPARATOR,
            {
                name: 'Action 1',
                trigger: () => alert('Action 1 was triggered'),
                enabled: true,
                icon: 'edit',
                requiresConfirmation: {
                    confirmType: 'danger',
                    buttonLabels: {
                        confirm: 'Yes',
                        cancel: 'Cancel',
                    },
                },
            },
            ACTION_SEPARATOR,
            ACTION_SEPARATOR,
            {
                name: 'Action 2',
                trigger: () => alert('Action 2 was triggered'),
                enabled: true,
                requiresConfirmation: {
                    confirmType: 'danger',
                    buttonLabels: {
                        confirm: 'Pretty sure!',
                        cancel: 'Cancel',
                    },
                },
            },
            {
                name: 'Action 4',
                trigger: () => alert('Action 4 was triggered'),
                enabled: true,
            },
            ACTION_SEPARATOR,
            {
                name: 'Link to Coveo (disabled)',
                link: 'http://coveo.com',
                target: '_blank',
                icon: 'edit',
                primary: true,
                enabled: false,
                hideDisabled: false,
            },
            {
                name: 'Action 3',
                trigger: () => alert('You cannot trigger me'),
                icon: 'edit',
                primary: true,
                enabled: false,
                hideDisabled: false,
            },
            ACTION_SEPARATOR,
        ];
        setTimeout(() => {
            ReactVaporStore.dispatch(addActionsToActionBar(actionBarId, actions));
        }, 4000);
    }

    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">
                        Action bar with Redux state and inline prompt (actions appear after 4 seconds)
                    </label>
                    <ActionBarConnected id={actionBarId} />
                </div>
            </div>
        );
    }
}
