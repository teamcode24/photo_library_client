const Dirs = {
    user: "/user",
    topic: "/t",
    photo: "/photos",
}

export const UserPath = {
    root: Dirs.user,
    login: Dirs.user + "/login",
    join: Dirs.user + "/join",
    forgot_password: Dirs.user + "/forgot_password",
    account: Dirs.user + "/account",
    any: Dirs.user + "/*",
}

export const TopicPath = {
    root: Dirs.topic,
    any: Dirs.topic + "/*",
}

export const PhotoPath = {
    photos: Dirs.photo,
    any: Dirs.photo + "/*",
}

export const DefaultPath = {
    root: "/",
    any: "/*",
}

export default {
    default: DefaultPath,
    user: UserPath,
    topic: TopicPath,
    photo: PhotoPath,
}
