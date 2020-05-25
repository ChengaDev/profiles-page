import {
    showErrorAlert as showErrorAlertAction,
    hideErrorAlert as hideErrorAlertAction
} from './actions';

export const showErrorAlert = () => {
    return function (dispatch, getState) {
        dispatch(showErrorAlertAction());
        setTimeout(() => {
            dispatch(hideErrorAlertAction());
        }, 3000);
    };
};
