import { USER_INFO, USER_INFO_API } from '../actionTypes/actionTypes';

const defaultState = () => {
    return {
        first_name: '',
        last_name: '',
        address: '',
        country: '',
    }
}

const userInfoReducer = (state = defaultState(), action) => {
    switch ( action.type ) {
        case USER_INFO_API:
          state = action.payload.data;
          break;
          
        case USER_INFO:
            state = action.formData;
            break;
        default: 
          break;
      }
      return state;
}

export default userInfoReducer;