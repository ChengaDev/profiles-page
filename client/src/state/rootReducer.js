import { combineReducers } from 'redux';
import profileReducer from './profiles/reducer';
import alertsReducer from './alerts/reducer';

export default combineReducers({
    profiles: profileReducer,
    alerts: alertsReducer
});
