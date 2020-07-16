export const NotifyActionTypes = {
    DISPLAY_NOTIFY: "DISPLAY_NOTIFY",
    HIDE_NOTIFY: "HIDE_NOTIFY",
}

const initialNotifyState = {
    show: false,
    content: "",
    items: [],
}

export const NotifyReducer = (state = initialNotifyState, action) => {
    switch (action.type) {
        case NotifyActionTypes.DISPLAY_NOTIFY:
            var data1 = {
                ...state,
                ...action.payload,
                show: true,
            }
            return data1
        case NotifyActionTypes.HIDE_NOTIFY:
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
