import { mergePath, selectServer } from './Common'

const ProductionServer = {
    protocol: '',
    host: 'photo-server-467.herokuapp.com',
    port: 0,
    rev: 'api/v1/users',
}

const DevelopmentServer = {
    protocol: '',
    host: 'localhost',
    port: 3000,
    rev: 'api/v1/users',
}

const UserServer = selectServer(ProductionServer, DevelopmentServer)

const UserURL = {
    LOGIN: mergePath(UserServer, 'login'),
    CREATE_USER: mergePath(UserServer, 'register'),
    RESET_PASSWORD: mergePath(UserServer, 'sendmail'),
    VERIFY: hash => mergePath(UserServer, 'confirmation', hash),
    GET_PROFILE: mergePath(UserServer, 'profile'),
}

export default UserURL
