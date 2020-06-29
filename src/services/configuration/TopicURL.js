import { joinUrl } from './Common'

const TopicServer = {
    protocol: '',
    host: 'photo-server-467.herokuapp.com',
    port: 0,
    rev: 'api/v1/topics',
}

const TopicURL = {
    GET_TOPICS: path => joinUrl(TopicServer, path),
    GET_TOPIC: path => joinUrl(TopicServer, path),
}

export default TopicURL
