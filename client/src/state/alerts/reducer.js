import initialState from '../initialState';
import { SHOW_ERROR_ALERT, HIDE_ERROR_ALERT } from './types';

export default function alertsReducer(state = initialState.profiles, action) {
    switch (action.type) {
        case SHOW_ERROR_ALERT:
            return Object.assign({}, state, { showErrorAlert: true });
        case HIDE_ERROR_ALERT:
            return Object.assign({}, state, { showErrorAlert: false });
        default:
            return state;
    }
}
