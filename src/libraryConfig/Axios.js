import axios from 'axios'
import { Store } from '../services/store/Storage'
import { AuthentActionTypes } from '../services/store/Authent/AuthentReducer'

axios.interceptors.response.use(response => response, error => {
    if(error.response && error.response.status === 401) {
        Store.dispatch({
            type: AuthentActionTypes.LOGOUT
        })
    }
    return Promise.reject(error)
})
