export const AccountActionTypes = {
    SAVE_ACCOUNT: "SAVE_ACCOUNT",
    CHANGE_NAME: "CHANGE_NAME",
    CHANGE_EMAIL: "CHANGE_EMAIL",
}

const initialAccountState = {
    name: '',
    email: '',
}

export const AccountReducer = (state = initialAccountState, action) => {
    switch (action.type) {
        case AccountActionTypes.SAVE_ACCOUNT:
            return {
                ...state,
                name: action.payload.data.user.name,
                email: action.payload.data.user.email,
            }
        case AccountActionTypes.CHANGE_NAME:
            return {
                ...state,
                name: action.payload.name
            }
        case AccountActionTypes.CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }
        default:
            return state
    }
}
