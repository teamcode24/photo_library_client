import axios from 'axios'
import UserURL from '../../configuration/UserURL'
import { SendOff, AxiosSuccess, AxiosError, makeCancelable } from '../Common'
import { AccountActionTypes } from './AccountReducer'
import { Token } from '../Token'

export const AccountSelector = state => ({account: state.account})
export const AccountDispatch = dispatch => ({
    getProfile: input => {
        var loginPromise = axios.get(UserURL.GET_PROFILE, {
            headers: {authorization: Token.get()}
        })
        .then(AxiosSuccess)
        .then(
            res => {
                SendOff(dispatch,
                    AccountActionTypes.SAVE_ACCOUNT
                )(res)
                return Promise.resolve(res)
            }
        )
        .catch(AxiosError)
        .catch(
            error => {
                return Promise.reject(error)
            }
        )
        return makeCancelable(loginPromise)
    },
})
