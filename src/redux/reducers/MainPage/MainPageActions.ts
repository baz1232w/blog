import {IBlog, IUser, MainPageAC, MainPageActions} from "../../../models/mainPageTypes";
import {Dispatch} from "react";
import {api} from '../../../api/axiosRequests'


export const fetchBlogsItems = () => {
    return async (dispatch: Dispatch<MainPageActions>) => {
        try {
            dispatch({type: MainPageAC.FETCH_BLOGS_ITEMS})
            const data = await api.fetchBlogsItems()
            dispatch({type: MainPageAC.FETCH_BLOGS_ITEMS_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: MainPageAC.FETCH_BLOGS_ITEMS_ERROR, payload: 'fetching error'})
        }
    }
}

export const addBlogItem = (object: IBlog) => {
    return async (dispatch: Dispatch<MainPageActions>) => {
        try {
            await api.addPostItem(object)
            dispatch({type: MainPageAC.ADD_BLOG_ITEM, payload: object})
        } catch (e) {
            alert('Cannot add Blog Item')
        }
    }
}

export const deleteBlogItem = (id:string) => {
    return async (dispatch:Dispatch<MainPageActions>) => {
        try {
            await api.deleteBlogItem(id)
            dispatch({type: MainPageAC.DELETE_BLOG_ITEM, payload:id})
        } catch (e) {
            dispatch({type: MainPageAC.FETCH_BLOGS_ITEMS_ERROR, payload:'Cannot delete Blog Item'})
        }
    }
}

export const signInOut = (isSign: boolean) => ({type: MainPageAC.SIGN_IN_OUT, payload: isSign})
export const getUserProfile = (user: IUser) => ({type: MainPageAC.FETCH_USER_PROFILE, payload: user})