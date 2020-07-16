import { Store } from './Storage'
import { SendOff } from './Common'
import { MessageActionTypes } from './Message/MessageReducer'
import { NotifyActionTypes } from './Message/NotifyReducer'

const GlobalDispatch = {
    message: {
        show: input => {
            SendOff(Store.dispatch,
                MessageActionTypes.DISPLAY_MESSAGE
            )(input)
        },
        hide: input => {
            SendOff(Store.dispatch,
                MessageActionTypes.HIDE_MESSAGE
            )()
        },
    },
    notify: {
        show: input => {
            SendOff(Store.dispatch,
                NotifyActionTypes.DISPLAY_NOTIFY
            )(input)
        },
        hide: input => {
            SendOff(Store.dispatch,
                NotifyActionTypes.HIDE_NOTIFY
            )()
        },
    },
}

export default GlobalDispatch
