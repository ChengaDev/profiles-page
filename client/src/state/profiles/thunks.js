import {
    getAllProfiles,
    createProfile as createProfileCall,
    deleteProfile as deleteProfileCall,
    updateProfile as updateProfileCall
} from '../../api/profileApi';
import {
    loadProfilesSuccess,
    createProfileSuccess,
    deleteProfileSuccess
} from './actions';
import { showErrorAlert } from '../alerts/thunks';

export const updateProfile = (updatedProfile) => {
    return async function (dispatch, getState) {
        try {
            await updateProfileCall(updatedProfile);
            dispatch(deleteProfileSuccess(updatedProfile));
        } catch (ex) {
            dispatch(showErrorAlert());
        }
    };
};

export const deleteProfile = (profileId) => {
    return async function (dispatch, getState) {
        try {
            await deleteProfileCall(profileId);
            dispatch(deleteProfileSuccess(profileId));
        } catch (ex) {
            dispatch(showErrorAlert());
        }
    };
};

export const createProfile = (profile) => {
    return async function (dispatch, getState) {
        try {
            const response = await createProfileCall(profile);
            dispatch(createProfileSuccess({ ...response.profile }));
        } catch (ex) {
            dispatch(showErrorAlert());
        }
    };
};

export const fetchProfiles = () => {
    return async function (dispatch, getState) {
        try {
            const profiles = await getAllProfiles();
            dispatch(loadProfilesSuccess(profiles));
        } catch (ex) {
            dispatch(showErrorAlert());
        }
    };
};
