import { 
    USER_LOGINS,
    USER_LOGINS_API, 
    USER_INFO, 
    USER_INPUT, 
    NOTIFICATIONS_DISPLAY_MESSAGE, 
    NOTIFICATIONS_CLEAR_MESSAGE 
} from '../actionTypes/actionTypes';
import axios from "axios";

export const userLoginsActionAPI = (formData) => {
    const request = axios.post('https://api.jotform.com/user/register', formData)
    return {
        type: USER_LOGINS_API,
        payload: request
    }
}
export const userLoginsAction = (formData) => {
    return {
        type: USER_LOGINS,
        formData
    }
}



export const userInfoActionAPI = (formData) => {
    const request = axios.post('https://api.jotform.com/user/register', formData)
    return {
        type: USER_INFO,
        payload: request
    }
}
export const userInfoAction = (formData) => {
    return {
        type: USER_INFO,
        formData
    }
}


export const set_message = (object) => {
    return {
      type: NOTIFICATIONS_DISPLAY_MESSAGE,
      payload: object
    };
}
  
  export const clear_message = () => {
    return {
      type: NOTIFICATIONS_CLEAR_MESSAGE,
      payload: null
    };
}
  


//Inputs
export const userInput = (name, value) => {
    return {
        type: USER_INPUT,
        value: value,
        name: name
    }
}