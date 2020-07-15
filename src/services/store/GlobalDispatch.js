import { Store } from './Storage'
import { SendOff } from './Common'
import { MessageActionTypes } from './Message/MessageReducer'
import { NotifyActionTypes } from './Message/NotifyReducer'

const GlobalDispatch = {
    message: {
        show: input => {
            var data = {
                content: input.content,
            }
            SendOff(Store.dispatch,
                MessageActionTypes.DISPLAY_MESSAGE
            )(data)
        },
        hide: input => {
            SendOff(Store.dispatch,
                MessageActionTypes.HIDE_MESSAGE
            )()
        },
    },
    notify: {
        show: input => {
            var data = {
                content: input.content,
            }
            SendOff(Store.dispatch,
                NotifyActionTypes.DISPLAY_NOTIFY
            )(data)
        },
        hide: input => {
            SendOff(Store.dispatch,
                NotifyActionTypes.HIDE_NOTIFY
            )()
        },
    },
}

export default GlobalDispatch
