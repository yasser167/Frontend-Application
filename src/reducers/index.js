import { combineReducers } from 'redux';
import userLoginsReducer from './userLogins.reducer' ;
import userInfoReducer from './userInfo.reducer';
import notificationReducer from './notification.reducer';
import userInputReducer from './userInput.reducer';

const allReducers = combineReducers({
    userLogins: userLoginsReducer,
    userData: userInfoReducer,
    notification: notificationReducer,
    inputValue: userInputReducer
});

export default allReducers;