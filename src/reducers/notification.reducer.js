import { 
    NOTIFICATIONS_DISPLAY_MESSAGE, 
    NOTIFICATIONS_CLEAR_MESSAGE 
} from '../actionTypes/actionTypes';

const defaultState = () => {
  return {
    message: ''
  }
}

export const messageReducer = (state = defaultState().message, action) => {
    switch (action.type) {
      case NOTIFICATIONS_DISPLAY_MESSAGE:
        state = action.payload;
        break;
      case NOTIFICATIONS_CLEAR_MESSAGE:
        state = defaultState().message;
        break;
      default: 
        break;
    }

    // console.log( state );
    return state;
};

export default messageReducer;
