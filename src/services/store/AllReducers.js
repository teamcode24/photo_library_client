import { combineReducers } from 'redux'
import { AuthentReducer } from './Authent/AuthentReducer'
import { AccountReducer } from './Account/AccountReducer'
import { UserReducer } from './User/UserReducer'
import { ImagesReducer } from './Images/ImagesReducer'

const AllReducer = {
    authent: AuthentReducer,
    account: AccountReducer,
    user: UserReducer,
    home: ImagesReducer,
}

export default combineReducers(AllReducer)
