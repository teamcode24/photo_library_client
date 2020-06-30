import { mergePath, joinServerPath, selectServer } from './Common'

const ProductionServer = {
    protocol: '',
    host: 'photo-server-467.herokuapp.com',
    port: 0,
    rev: 'api/v1/photos',
}

const DevelopmentServer = {
    protocol: '',
    host: 'localhost',
    port: 3000,
    rev: 'api/v1/photos',
}

const PhotoServer = selectServer(ProductionServer, DevelopmentServer)

const PhotoURL = {
    GET_PHOTOS: path => mergePath(PhotoServer, path),
    GET_PHOTO: path => mergePath(PhotoServer, path),
    JOIN_SERVER: path => joinServerPath(PhotoServer, path),
}

export default PhotoURL
