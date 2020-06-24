import { joinUrl, joinServer } from './Common'

const ImageServer = {
    protocol: '',
    host: 'photo-server-467.herokuapp.com',
    port: 0,
    rev: 'api/v1/images',
}

const ImageURL = {
    GET_IMAGES: path => joinUrl(ImageServer, path),
    GET_IMAGE: path => joinUrl(ImageServer, path),
    JOIN_SERVER: path => joinServer(ImageServer, path),
}

export default ImageURL
