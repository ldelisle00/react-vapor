import {IReactVaporState} from '../../../ReactVapor';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {DefaultGroupIds, DropReducerActions, IDropPayload} from './DropActions';

export interface IDropState {
    [groupId: string]: {
        id: string,
        isOpen: boolean,
    };
}

export const dropInitialState: IDropState = {[DefaultGroupIds.default]: {id: undefined, isOpen: false}};

export const dropReducer = (
    state: IDropState = dropInitialState,
    action: IReduxAction<IDropPayload>,
): IDropState => {
    switch (action.type) {
        case DropReducerActions.toggle:
            const group = DropSelectors.getByGroup({drop: state}, {groupId: action.payload.groupId});
            if (group && action.payload.id === group.id) {
                return {
                    ...state,
                    [action.payload.groupId]: {
                        ...group,
                        isOpen: !group.isOpen,
                    },
                };
            }
            return {
                ...state,
                [action.payload.groupId]: {
                    id: action.payload.id,
                    isOpen: action.payload.isOpen,
                },
            };
        default:
            return state;
    }
};

const getDropByGroup = (state: IReactVaporState, {groupId}: {groupId: string}) => state.drop && state.drop[groupId] || undefined;

const isDropOpen = (state: IReactVaporState, {id, groupId}: {id: string, groupId: string}): boolean => {
    const drop = getDropByGroup(state, {groupId});
    return drop && drop.id === id ? drop.isOpen : false;
};

export const DropSelectors = {
    isOpen: isDropOpen,
    getByGroup: getDropByGroup,
};