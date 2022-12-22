import axios from 'axios'
import {IBlog} from "../models/mainPageTypes";

const axiosRequests = axios.create({
    baseURL: 'https://63a35aee471b38b2060d3a39.mockapi.io/'
})

export const api = {
    fetchBlogsItems: async function () {
        const response = await axiosRequests.get('/blogs')
        return response.data
    },
    addPostItem: async function (object: IBlog) {
        await axiosRequests.post('/blogs', {...object})
    },
    deleteBlogItem: async function(id:string) {
        await axiosRequests.delete(`/blogs/${id}`)
    }
}


