import { USER_LOGINS, USER_LOGINS_API } from '../actionTypes/actionTypes';

const defaultState = () => {
    return {
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    }
}

const userLoginsReducer = (state = defaultState(), action) => {
    switch ( action.type ) {
        case USER_LOGINS_API:
          state = action.payload.data;
          break;
          
        case USER_LOGINS:
            state = action.formData;
            break;
        default: 
          break;
      }
      return state;
}

export default userLoginsReducer;