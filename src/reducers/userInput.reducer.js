import { USER_INPUT } from '../actionTypes/actionTypes';

const userInputReducer = (state = '', action) => {
    switch( action.type) {
        case USER_INPUT:
            return action.formData;
        default:
            return state;
    }
}

export default userInputReducer;