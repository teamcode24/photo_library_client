import axios from 'axios'
import UserURL from '../../configuration/UserURL'
import { SendOff, AxiosSuccess, AxiosError, makeCancelable } from '../Common'
import { AuthentActionTypes } from '../Authent/AuthentReducer'
import { UserActionTypes } from './UserReducer'

export const UserSelector = state => ({ user: state.user })
export const UserDispatch = dispatch => ({
    remember: input => {
        SendOff(dispatch,
            UserActionTypes.REMEMBER,
        )({
            email: input.email,
            remember: input.remember,
        })
    },
    login: input => {
        var loginPromise = axios.post(UserURL.LOGIN, {
            email: input.email,
            password: input.password
        })
        .then(AxiosSuccess)
        .then(
            res => {
                SendOff(dispatch,
                    AuthentActionTypes.LOGIN,
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
    createUser: input => {
        var createUserPromise = axios.post(UserURL.CREATE_USER, {
            name: input.username,
            email: input.email,
            password: input.password,
        })
        .then(AxiosSuccess)
        .then(
            res => {
                return Promise.resolve(res)
            }
        )
        .catch(AxiosError)
        .catch(
            error => {
                return Promise.reject(error)
            }
        )
        return makeCancelable(createUserPromise)
    },
    resetPassword: input => {
        var resetPasswordPromise = axios.post(UserURL.RESET_PASSWORD, {
            email: input.email,
        })
        .then(AxiosSuccess)
        .then(
            res => {
                return Promise.resolve(res)
            }
        )
        .catch(AxiosError)
        .catch(
            error => {
                return Promise.reject(error)
            }
        )
        return makeCancelable(resetPasswordPromise)
    },
    verify: input => {
        var verifyPromise = axios.post(UserURL.VERIFY(input.hash))
        .then(AxiosSuccess)
        .then(
            res => {
                return Promise.resolve(res)
            }
        )
        .catch(AxiosError)
        .catch(
            error => {
                return Promise.reject(error)
            }
        )
        return makeCancelable(verifyPromise)
    },
})
