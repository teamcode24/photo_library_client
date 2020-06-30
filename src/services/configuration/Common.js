import urljoin from 'url-join'

const serverPath = server => {
    var url = '';
    if (server.protocol.length > 0) {
        url = server.protocol + ':'
    }
    url += "//" + server.host;
    if (server.port > 0) {
        url += ":" + server.port
    }
    return url
}

const getParamsPath = params => {
    var params_str = ""
    var params_array = []
    var keys = Object.getOwnPropertyNames(params)
    for (var i=0; i<keys.length; i++) {
        params_array.push(keys[i] + "=" + params[keys[i]])
    }
    if (params_array.length > 0) {
        params_str = "?" + params_array.join("&")
    }
    return params_str
}

export const mergePath = (server, name = '', data = '') => {
    var url = urljoin(serverPath(server), server.rev, name, data)
    return url
}

export const mergePathParams = (server, name = '', params = '') => {
    var url = urljoin(serverPath(server), server.rev, name)
    return urljoin(url, getParamsPath(params))
}

export const joinServerPath = (server, path = '') => {
    return urljoin(serverPath(server), path)
}

export const selectServer = (productionServer, developmentServer) => {
    // if (process.env.NODE_ENV === 'production') return productionServer
    // else return developmentServer
    return productionServer
}
