export interface MainPageState {
    blogs: IBlog[]
    loading: boolean
    error: string
    totalItems: number
    isLogin: boolean
    user: IUser | null
}

export interface IBlog {
    id: string
    title: string
    imageUrl: string
    content: string
    username: string
    date: string
    googleId: string
}

export interface IUser {
    imageUrl: string
    name: string
    googleId: string
}

export enum MainPageAC {
    FETCH_BLOGS_ITEMS = 'mainPage/fetchBlogsItems',
    FETCH_BLOGS_ITEMS_SUCCESS = 'mainePage/fetchBlogsItemsSuccess',
    FETCH_BLOGS_ITEMS_ERROR = 'mainePage/fetchBlogsItemsError',
    ADD_BLOG_ITEM = 'mainePage/addBlogItem',
    SIGN_IN_OUT = 'mainePage/signInOut',
    FETCH_USER_PROFILE = 'mainPage/fetchUserProfile',
    DELETE_BLOG_ITEM = 'mainPage/deleteBlogItem',
}

type fetchBlogsItems = {
    type: MainPageAC.FETCH_BLOGS_ITEMS
}

type fetchBlogsItemsSuccess = {
    type: MainPageAC.FETCH_BLOGS_ITEMS_SUCCESS
    payload: []
}

type fetchBlogsItemsError = {
    type: MainPageAC.FETCH_BLOGS_ITEMS_ERROR
    payload: string
}

type addBlogItem = {
    type: MainPageAC.ADD_BLOG_ITEM
    payload: IBlog
}

type signInOut = {
    type: MainPageAC.SIGN_IN_OUT
    payload: boolean
}

type fetchUserProfile = {
    type: MainPageAC.FETCH_USER_PROFILE
    payload: IUser
}

type deleteBlogItem = {
    type: MainPageAC.DELETE_BLOG_ITEM
    payload: string
}

export type MainPageActions =
    fetchBlogsItems
    | fetchBlogsItemsSuccess
    | fetchBlogsItemsError
    | addBlogItem
    | signInOut
    | fetchUserProfile
    | deleteBlogItem