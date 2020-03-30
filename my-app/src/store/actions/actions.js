import * as ACTION_TYPES from './action_types';

export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
}

export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    }
}

export const user_input = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT,
        payload: text //js object in RW
        
    }
}

export const login_success = () => {
    return {
        type: ACTION_TYPES.LOGIN_SUCCESS
    }
}

export const login_failure = () => {
    return {
        type: ACTION_TYPES.LOGIN_FAILURE
    }
}