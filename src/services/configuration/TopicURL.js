import { mergePath, selectServer } from './Common'

const ProductionServer = {
    protocol: '',
    host: 'photo-server-467.herokuapp.com',
    port: 0,
    rev: 'api/v1/t',
}

const DevelopmentServer = {
    protocol: '',
    host: 'localhost',
    port: 3000,
    rev: 'api/v1/t',
}

const TopicServer = selectServer(ProductionServer, DevelopmentServer)

const TopicURL = {
    GET_TOPICS: mergePath(TopicServer, ""),
    GET_TOPIC: path => mergePath(TopicServer, path),
    GET_TOPIC_LIST: mergePath(TopicServer, "/list"),
}

export default TopicURL
