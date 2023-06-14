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

const API = {

    logIn: async (data: LoginData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`users/login`, data);
        return response;
      },

    createPost: async (data: CreatePostData): Promise<AxiosResponse> => {
        const response = await AuthTokenInstance.post(`posts/new`, data);
        return response;
    },
    
    viewPost: async (): Promise<AxiosResponse> => {
        const response = await defaultInstance.get(`posts/newest`);
        return response;
    },

    postDetail: async (data:GetPostId): Promise<AxiosResponse> => {
        const response = await defaultInstance.get(`posts/${data.postId}`);
        return response;
    }
}



export default API;