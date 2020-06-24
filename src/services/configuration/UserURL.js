import { joinUrl } from './Common'

const UserServer = {
    host: 'localhost',
    port: 3000,
    rev: 'api/v1/users',
}

const UserURL = {
    LOGIN: joinUrl(UserServer, 'login'),
    CREATE_USER: joinUrl(UserServer, 'register'),
    RESET_PASSWORD: joinUrl(UserServer, 'sendmail'),
    VERIFY: hash => joinUrl(UserServer, 'confirmation', hash),
    GET_PROFILE: joinUrl(UserServer, 'profile'),
}

export default UserURL
