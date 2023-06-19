import { AxiosResponse } from 'axios';
import { defaultInstance, AuthTokenInstance } from './customAPI';

interface LoginData {
    loginId: string;
    password: string;
  }

interface ViewPostData {
    title: string;
    content: string;
    userId: string;
    category: string;
}

interface GetPostId {
    postId: string;
  }

interface CreatePostData {
    title: string;
    content: string;
    category: string;
}

interface CreateCommentData {
    commentContent: string;
    postId: string;
}

interface GetPostByName {
    keyword: string;
}

interface PageData {
    currentPage: number;
    postPerPage: number;
}
const API = {

    logIn: async (data: LoginData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`users/login`, data);
        return response;
      },

    createPost: async (data: CreatePostData): Promise<AxiosResponse> => {
        const response = await AuthTokenInstance.post(`posts/new`, data);
        return response;
    },
    
    createComment: async (data: CreateCommentData): Promise<AxiosResponse> => {
        const response = await AuthTokenInstance.post(`comment/new`, data);
        return response;
    },
    
    viewPost: async (data: PageData): Promise<AxiosResponse> => {
        const response = await defaultInstance.get(
            `posts/newest?pageSize=${data.postPerPage}&limit=${data.currentPage}`);
        return response;
    },

    postDetail: async (data:GetPostId): Promise<AxiosResponse> => {
        const response = await AuthTokenInstance.get(`posts/${data.postId}`);
        return response;
    },

    // viewPostsByViewed: async (): Promise<AxiosResponse> => {
    //     const response = await defaultInstance.get(`posts/newest?pageNum=${data.limit}&pageSize=${data.page}`);
    //     return response;
    // },

    viewPostByName: async (data:GetPostByName): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`posts/search/keyword`, data);
        return response;
    },
}



export default API;