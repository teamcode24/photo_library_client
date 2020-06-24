export const ImagesActionTypes = {
    GET_IMAGES: "GET_IMAGE",
    GET_TOPICS: "GET_TOPICS",
    SET_FILTER: "SET_FILTER",
    SET_SEARCH: "SET_SEARCH",
}

const initialImagesState = {
    images: [],
    filter: '',
    topics: '',
}

export const ImagesReducer = (state = initialImagesState, action) => {
    switch (action.type) {
        case ImagesActionTypes.GET_IMAGES:
            var images = action.payload.data.images
            var data = {
                ...state,
                images: images,
            }
            return data
        case ImagesActionTypes.GET_TOPICS:
            var images = action.payload.data.images
            var data = {
                ...state,
                images: images,
            }
            return data
        case ImagesActionTypes.SET_FILTER:
            var images = action.payload.data.images
            var data = {
                ...state,
                images: images,
            }
            return data
        case ImagesActionTypes.SET_SEARCH:
            var images = action.payload.data.images
            var data = {
                ...state,
                images: images,
            }
            return data
        default:
            return state

    }
}
