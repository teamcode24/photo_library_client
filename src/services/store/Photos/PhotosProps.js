import axios from 'axios'
import PhotoURL from '../../configuration/PhotoURL'
import { SendOff, AxiosSuccess, AxiosError, makeCancelable, joinServerPathArray, DownloadToFileAuth } from '../Common'
import { PhotosActionTypes } from './PhotosReducer'
import { Token } from '../Token'

export const PhotosSelector = state => ({
    photos: state.home.photo.photos
})

export const PhotosDispatch = dispatch => ({
    getPhotos: input => {
        var path = input?.path || ""
        var getPhotoPromise = axios.get(PhotoURL.GET_PHOTOS(path), {
            headers: {authorization: Token.get()}
        })
        .then(AxiosSuccess)
        .then(
            res => {
                joinServerPathArray(res, "data.photos", ["urls.thumb", "urls.full"])(PhotoURL.JOIN_SERVER)
                SendOff(dispatch,
                    PhotosActionTypes.GET_PHOTOS
                )(res)
                return Promise.resolve(res)
            }
        )
        .catch(AxiosError)
        .catch(
            error => {
                return Promise.reject(error)
            }
        )
        return makeCancelable(getPhotoPromise)
    },
    downloadImage: input => {
        var fetchImagePromise = DownloadToFileAuth(input.url, input.name)
        return makeCancelable(fetchImagePromise)
    },
})
