import { combineReducers } from 'redux'
import { AuthentReducer } from './Authent/AuthentReducer'
import { AccountReducer } from './Account/AccountReducer'
import { UserReducer } from './User/UserReducer'
import { PhotosReducer } from './Photos/PhotosReducer'
import { TopicsReducer } from './Topics/TopicsReducer'
import { MessageReducer } from './Message/MessageReducer'
import { NotifyReducer } from './Message/NotifyReducer'

const Home = {
    photo: PhotosReducer,
    topic: TopicsReducer,
}

const Message = {
    message: MessageReducer,
    notify: NotifyReducer,
}

const AllReducer = {
    authent: AuthentReducer,
    account: AccountReducer,
    user: UserReducer,
    home: combineReducers(Home),
    message: combineReducers(Message),
}

export default combineReducers(AllReducer)
