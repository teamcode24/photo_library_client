export const PhotosActionTypes = {
    GET_PHOTOS: "GET_PHOTO",
    GET_TOPICS: "GET_TOPICS",
    SET_FILTER: "SET_FILTER",
    SET_SEARCH: "SET_SEARCH",
}

const initialPhotosState = {
    photos: [],
    filter: '',
}

export const PhotosReducer = (state = initialPhotosState, action) => {
    switch (action.type) {
        case PhotosActionTypes.GET_PHOTOS:
            var photos1 = action.payload.data.photos
            var data1 = {
                ...state,
                photos: photos1,
            }
            return data1
        case PhotosActionTypes.GET_TOPICS:
            var photos2 = action.payload.data.photos
            var data2 = {
                ...state,
                photos: photos2,
            }
            return data2
        case PhotosActionTypes.SET_FILTER:
            var photos3 = action.payload.data.photos
            var data3 = {
                ...state,
                photos: photos3,
            }
            return data3
        case PhotosActionTypes.SET_SEARCH:
            var photos4 = action.payload.data.photos
            var data4 = {
                ...state,
                photos: photos4,
            }
            return data4
        default:
            return state

    }
}
