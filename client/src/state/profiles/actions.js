import {
    CREATE_PROFILE_SUCCESS,
    EDIT_PROFILE,
    EDIT_PROFILE_SUCCESS,
    DELETE_PROFILE_SUCCESS,
    LOAD_PROFILES_SUCCESS
} from './types';

export const deleteProfileSuccess = (profileId) => ({
    type: DELETE_PROFILE_SUCCESS,
    profileId
});

export const createProfileSuccess = (profile) => ({
    type: CREATE_PROFILE_SUCCESS,
    profile
});

export const editProfile = (profile) => ({
    type: EDIT_PROFILE,
    profile
});

export const editProfileSuccess = (profile) => ({
    type: EDIT_PROFILE_SUCCESS,
    profile
});

export const loadProfilesSuccess = (profiles) => ({
    type: LOAD_PROFILES_SUCCESS,
    profiles
});
