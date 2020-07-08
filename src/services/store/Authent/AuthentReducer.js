import { Token } from '../Token'

export const AuthentActionTypes = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}

const initialAuthentState = {
    authenticated: false,
}

export const AuthentReducer = (state = initialAuthentState, action) => {
    switch (action.type) {
        case AuthentActionTypes.LOGIN:
            var token = action.payload.data.token
            Token.save(token)
            var data = {
                ...state,
                authenticated: true,
            }
            return data
        case AuthentActionTypes.LOGOUT:
            Token.remove()
            return {
                ...state,
                authenticated: false,
            }
        default:
            return state

    }
}
