import { SHOW_ERROR_ALERT, HIDE_ERROR_ALERT } from './types';

export const showErrorAlert = () => ({
    type: SHOW_ERROR_ALERT
});
export const hideErrorAlert = () => ({
    type: HIDE_ERROR_ALERT
});
