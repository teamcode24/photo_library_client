export const NotifyActionTypes = {
    DISPLAY_NOTIFY: "DISPLAY_NOTIFY",
    HIDE_NOTIFY: "HIDE_NOTIFY",
}

const initialNotifyState = {
    show: false,
    content: "",
}

export const NotifyReducer = (state = initialNotifyState, action) => {
    switch (action.type) {
        case NotifyActionTypes.DISPLAY_NOTIFY:
            var data1 = {
                ...state,
                show: true,
                content: action.payload.content,
            }
            return data1
        case NotifyActionTypes.HIDE_NOTIFY:
            var data2 = {
                ...state,
                show: false,
                content: "",
            }
            return data2
        default:
            return state
    }
}
