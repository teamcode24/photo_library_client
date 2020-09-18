import { Store } from './Storage'
import { SendOff } from './Common'
import { MessageActionTypes } from './Message/MessageReducer'
import { NotifyActionTypes } from './Message/NotifyReducer'
import { SidebarActionTypes } from './Sidebar/SidebarReducer'
import i18n from '../../libraryConfig/i18n'

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
    sidebar: {
        show: input => {
            SendOff(Store.dispatch,
                SidebarActionTypes.SHOW
            )(input)
        },
        hide: input => {
            SendOff(Store.dispatch,
                SidebarActionTypes.HIDE
            )(input)
        },
        toggle: input => {
            SendOff(Store.dispatch,
                SidebarActionTypes.TOGGLE
            )(input)
        }
    },
    language: {
        change: input => {
            i18n.changeLanguage(input)
        }
    }
}

export default GlobalDispatch
