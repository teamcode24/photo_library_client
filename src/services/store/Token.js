var name = "___token"

export const Token = {
    save: token => localStorage.setItem(name, token),
    get: () => localStorage.getItem(name) ?? "",
    remove: () => localStorage.removeItem(name),
}
