import { joinUrl } from './Common'

const TopicServer = {
    protocol: '',
    host: 'photo-server-467.herokuapp.com',
    port: 0,
    rev: 'api/v1/t',
}

const TopicURL = {
    GET_TOPICS: joinUrl(TopicServer, ""),
    GET_TOPIC: path => joinUrl(TopicServer, path),
    GET_TOPIC_LIST: joinUrl(TopicServer, "/list"),
}

export default TopicURL
