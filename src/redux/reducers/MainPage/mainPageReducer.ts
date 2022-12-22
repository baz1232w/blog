import {MainPageAC, MainPageActions, MainPageState} from "../../../models/mainPageTypes";

const initialState: MainPageState = {
    blogs: [],
    loading: true,
    error: '',
    totalItems: 0,
    isLogin: false,
    user: null
}

export const mainPageReducer = (state = initialState, actions: MainPageActions): MainPageState => {
    switch (actions.type) {
        case MainPageAC.FETCH_BLOGS_ITEMS:
            return {
                ...state,
                loading: true,
            }
        case MainPageAC.FETCH_BLOGS_ITEMS_SUCCESS:
            return {
                ...state,
                blogs: actions.payload.reverse(),
                totalItems: actions.payload.length,
                loading: false,
            }
        case MainPageAC.FETCH_BLOGS_ITEMS_ERROR:
            return {
                ...state,
                error: actions.payload,
                loading: false,
            }
        case MainPageAC.ADD_BLOG_ITEM:
            return {
                ...state,
                blogs: [...state.blogs, actions.payload]
            }
        case MainPageAC.SIGN_IN_OUT:
            return {
                ...state,
                isLogin: actions.payload
            }
        case MainPageAC.FETCH_USER_PROFILE:
            return {
                ...state,
                user: actions.payload
            }
        case MainPageAC.DELETE_BLOG_ITEM:
            return {
                ...state,
                blogs: [...state.blogs].filter(el => el.id != actions.payload)
            }
        default:
            return state
    }
}