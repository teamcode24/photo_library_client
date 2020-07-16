export const MessageActionTypes = {
    DISPLAY_MESSAGE: "DISPLAY_MESSAGE",
    HIDE_MESSAGE: "HIDE_MESSAGE",
}

const initialMessageState = {
    show: false,
    content: "",
    items: [],
}

export const MessageReducer = (state = initialMessageState, action) => {
    switch (action.type) {
        case MessageActionTypes.DISPLAY_MESSAGE:
            var data1 = {
                ...state,
                ...action.payload,
                show: true,
            }
            return data1
        case MessageActionTypes.HIDE_MESSAGE:
            var data2 = {
                ...state,
                ...action.payload,
                show: false,
            }
            return data2
        default:
            return state
    }
}
