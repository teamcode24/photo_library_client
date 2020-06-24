import { Token } from '../Token'

export const AuthentActionTypes = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}

const initialAuthentState = {
    isAuthenticated: false,
}

export const AuthentReducer = (state = initialAuthentState, action) => {
    switch (action.type) {
        case AuthentActionTypes.LOGIN:
            var token = action.payload.data.token
            Token.save(token)
            var data = {
                ...state,
                isAuthenticated: true,
            }
            return data
        case AuthentActionTypes.LOGOUT:
            Token.remove()
            return {
                ...state,
                isAuthenticated: false,
            }
        default:
            return state

    }
}
