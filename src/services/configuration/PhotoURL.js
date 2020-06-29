import { joinUrl, joinServer } from './Common'

const PhotoServer = {
    protocol: '',
    host: 'photo-server-467.herokuapp.com',
    port: 0,
    rev: 'api/v1/photos',
}

const PhotoURL = {
    GET_IMAGES: path => joinUrl(PhotoServer, path),
    GET_IMAGE: path => joinUrl(PhotoServer, path),
    JOIN_SERVER: path => joinServer(PhotoServer, path),
}

export default PhotoURL
