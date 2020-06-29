import { combineReducers } from 'redux'
import { AuthentReducer } from './Authent/AuthentReducer'
import { AccountReducer } from './Account/AccountReducer'
import { UserReducer } from './User/UserReducer'
import { PhotosReducer } from './Photos/PhotosReducer'
import { TopicsReducer } from './Topics/TopicsReducer'

const HomeReducer = {
    photo: PhotosReducer,
    topic: TopicsReducer,
}

const AllReducer = {
    authent: AuthentReducer,
    account: AccountReducer,
    user: UserReducer,
    home: combineReducers(HomeReducer),
}

export default combineReducers(AllReducer)
