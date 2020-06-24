import { joinUrl, joinServer } from './Common'

const ImageServer = {
    protocol: 'https',
    host: 'photo-server-467.herokuapp.com',
    port: 3000,
    rev: 'api/v1/images',
}

const ImageURL = {
    GET_IMAGES: joinUrl(ImageServer, ''),
    GET_IMAGE: path => joinUrl(ImageServer, path),
    JOIN_SERVER: path => joinServer(ImageServer, path),
}

export default ImageURL
