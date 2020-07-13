export const MessageActionTypes = {
    DISPLAY_MESSAGE: "DISPLAY_MESSAGE",
    HIDE_MESSAGE: "HIDE_MESSAGE",
    DISPLAY_NOTIFY: "DISPLAY_NOTIFY",
    HIDE_NOTIFY: "HIDE_NOTIFY",
}

const initialMessageState = {
    message: {
        show: false,
        content: "",
    },
    notify: {
        show: false,
        content: "",
    }
}

export const MessageReducer = (state = initialMessageState, action) => {
    switch (action.type) {
        case MessageActionTypes.DISPLAY_MESSAGE:
            state.message = {
                show: true,
                content: action.payload.content,
            }
            return state
        case MessageActionTypes.HIDE_MESSAGE:
            state.message = {
                show: false,
                content: "",
            }
            return state
        case MessageActionTypes.DISPLAY_NOTIFY:
            state.notify = {
                show: true,
                content: action.payload.content,
            }
            return state
        case MessageActionTypes.HIDE_NOTIFY:
            state.notify = {
                show: false,
                content: "",
            }
            return
        default:
            return state

    }
}
