import initialState from '../initialState';
import profileTypes from './types';

export default function profileReducer(state = initialState.profiles, action) {
    switch (action.type) {
        case profileTypes.EDIT_PROFILE_SUCCESS: {
            debugger;
            let oldState = [...state];
            const oldProfileIndex = oldState.findIndex(
                (profile) => profile._id === action.profile._id
            );
            oldState[oldProfileIndex] = action.profile;
            return Object.assign([], oldState);
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
