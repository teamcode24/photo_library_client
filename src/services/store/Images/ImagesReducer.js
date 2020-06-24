export const ImagesActionTypes = {
    GET_IMAGE_THUMB: "GET_IMAGE_THUMB",
    GET_IMAGE_FULL: "GET_IMAGE_FULL",
}

const initialImagesState = {
    images: [],
}

export const ImagesReducer = (state = initialImagesState, action) => {
    switch (action.type) {
        case ImagesActionTypes.GET_IMAGE_THUMB:
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
