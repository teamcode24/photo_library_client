var clear = path => {
    path = path.replace(/^\/*(.+?)\/*$/g, "$1")
    return path
}

export const joinUrl = (server, name, data) => {
    var url = '';
    if (server.protocal.length > 0) {
        url = server.protocal + ':'
    }
    url += "//" + server.host;
    if (server.port.length > 0) {
        url += ":" + server.port
    }
    url += "/" + server.rev + "/" + clear(name)
    if (data !== undefined && data !== null) {
        url += "/" + data
    }
    return url
}

export const joinUrlParams = (server, name, params) => {
    var url = '';
    if (server.protocal.length > 0) {
        url = server.protocal + ':'
    }
    url += "//" + server.host;
    if (server.port !== undefined && server.port.length > 0) {
        url += ":" + server.port
    }
    url += "/" + server.rev + "/" + clear(name)
    var params_str = ""
    var params_array = []
    var keys = Object.getOwnPropertyNames(params)
    for (var i=0; i<keys.length; i++) {
        params_array.push(keys[i] + "=" + params[keys[i]])
    }
    if (params_array.length > 0) {
        params_str = "?" + params_array.join("&")
    }
    return url + params_str
}

export const joinServer = (server, path) => {
    var url = "//" + server.host + ":" + server.port + "/" + clear(path)
    return url
}
