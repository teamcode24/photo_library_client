export const UserActionTypes = {
    REMEMBER: "REMEMBER",
}

const initialUserActionState = {
    email: '',
    remember: true,
}

export const UserReducer = (state = initialUserActionState, action) => {
    switch (action.type) {
        case UserActionTypes.REMEMBER:
            var data = action.payload
            if (data.remember === false) {
                data.email = ""
            }
            var newState = {
                ...state,
                ...data,
            }
            return newState
        default:
            return state
    }
}
