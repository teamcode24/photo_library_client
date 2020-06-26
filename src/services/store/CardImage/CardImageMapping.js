import { makeCancelable, DownloadToFileAuth } from "../Common"

export const CardImageDispatch = dispatch => ({
    downloadImage: input => {
        var fetchImagePromise = DownloadToFileAuth(input.url, input.name)
        return makeCancelable(fetchImagePromise)
    },
})
