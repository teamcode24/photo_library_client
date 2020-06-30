import { Token } from './Token'

export const SendOff = (dispatch, ...types) => {
    return function (data) {
        for (var i = 0; i < types.length; i++) {
            var type = types[i]
            dispatch({
                type: type,
                payload: data,
            })
        }
    }
}

export const AxiosSuccess = res => ({
    status: res.status,
    statusText: res.statusText,
    data: res.data,
})

export const AxiosError = error => {
    if (error.response) {
        return Promise.reject({
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
        })
    }
    return Promise.reject({
        status: -1,
        statusText: "Unknow error",
        data: error,
    })
}

export const makeCancelable = promise => {
    let hasCanceled = false
    let cancelReason = 'unknow'
    const newPromise = new Promise((resolve, reject) => {
        promise.then(
            res => hasCanceled ? reject({ ...res, isCanceled: true, reason: cancelReason }) : resolve(res),
            err => hasCanceled ? reject({ ...err, isCanceled: true, reason: cancelReason }) : reject(err),
        )
    })
    return {
        promise: newPromise,
        cancel(reason = 'canceled') {
            hasCanceled = true
            cancelReason = reason
        }
    }
}

export const joinServerPath = (obj, propPath) => joiner => {
    var target = obj
    var dirs = propPath.split(".")
    var lastProp = dirs[dirs.length - 1]
    for (var i=0; i<dirs.length-1; i++) {
        target = target[dirs[i]]
    }
    target[lastProp] = joiner(target[lastProp])
}

export const joinServerPathArray = (obj, arrayPath, propsPath) => joiner => {
    var target = obj
    var dirs = arrayPath.split(".")
    for (let i=0; i<dirs.length; i++) {
        target = target[dirs[i]]
    }
    for (let k=0; k<target.length; k++) {
        propsPath.forEach(propPath => {
            joinServerPath(target[k], propPath)(joiner)
        })
    }
}

export const DownloadToFileAuth = (url, name) => {
    var fetchPromise = fetch(url, {
        method: 'GET',
        headers: new Headers({
            'authorization': Token.get(),
        })
    })
        .then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob)
                let link = document.createElement('a')
                link.href = url
                link.download = name
                link.click()
            })
        })

    return fetchPromise
}

export const DownloadToFile = (url, name) => {
    var fetchPromise = fetch(url)
        .then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob)
                let link = document.createElement('a')
                link.href = url
                link.download = name
                link.click()
            })
        })

    return fetchPromise
}
