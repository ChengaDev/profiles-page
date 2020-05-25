import initialState from '../initialState';
import profileTypes from './types';

export default function profileReducer(state = initialState.profiles, action) {
    switch (action.type) {
        case profileTypes.EDIT_PROFILE_SUCCESS: {
            const oldProfileIndex = state.findIndex(
                (profile) => profile._id === action.updatedProfile._id
            );
            const updatedProfile = {
                ...state[oldProfileIndex],
                ...action.updatedProfile
            };
            return Object.assign(
                [],
                ...state.slice(0, oldProfileIndex),
                updatedProfile,
                ...state.slice(oldProfileIndex + 1)
            );
        }
        case profileTypes.DELETE_PROFILE_SUCCESS:
            return Object.assign(
                [],
                state.filter((profile) => profile._id !== action.profileId)
            );
        case profileTypes.LOAD_PROFILES_SUCCESS:
            return Object.assign([], state, [...action.profiles]);
        case profileTypes.CREATE_PROFILE_SUCCESS: {
            return Object.assign([], state, [...state, action.profile]);
        }
        default:
            return state;
    }
}
