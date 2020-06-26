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
            var images1 = action.payload.data.images
            var data1 = {
                ...state,
                images: images1,
            }
            return data1
        case ImagesActionTypes.GET_TOPICS:
            var images2 = action.payload.data.images
            var data2 = {
                ...state,
                images: images2,
            }
            return data2
        case ImagesActionTypes.SET_FILTER:
            var images3 = action.payload.data.images
            var data3 = {
                ...state,
                images: images3,
            }
            return data3
        case ImagesActionTypes.SET_SEARCH:
            var images4 = action.payload.data.images
            var data4 = {
                ...state,
                images: images4,
            }
            return data4
        default:
            return state

    }
}
