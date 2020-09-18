export const SidebarActionTypes = {
    SHOW: "SHOW",
    HIDE: "HIDE",
    TOGGLE: "TOGGLE",
}

const initialSidebarState = {
    isOpen: false,
}

export const SidebarReducer = (state = initialSidebarState, action) => {
    var current = state.isOpen

    switch (action.type) {
        case SidebarActionTypes.SHOW:
            return {
                ...state,
                isOpen: true
            }
        case SidebarActionTypes.HIDE:
            return {
                ...state,
                isOpen: false,
            }
        case SidebarActionTypes.TOGGLE:
            return {
                ...state,
                isOpen: !current,
            }
        default:
            return state

    }
}
