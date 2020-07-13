import { MessageActionTypes } from './MessageReducer'
import { SendOff } from '../Common'

export const MessageSelector = state => ({
    message: state.message.message,
    notify: state.messate.notify,
})

export const MessageDispatch = dispatch => ({
    showMessage: input => {
        var data = {
            content: input.content,
        }
        SendOff(dispatch,
            MessageActionTypes.DISPLAY_MESSAGE
        )(data)
    },
    hideMessage: input => {
        SendOff(dispatch,
            MessageActionTypes.HIDE_MESSAGE
        )()
    },
    showNotify: input => {
        var data = {
            content: input.content,
        }
        SendOff(dispatch,
            MessageActionTypes.DISPLAY_NOTIFY
        )(data)
    },
    hideNotify: input => {
        SendOff(dispatch,
            MessageActionTypes.HIDE_NOTIFY
        )()
    },
})
