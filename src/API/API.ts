import { AxiosResponse } from 'axios';
import { defaultInstance, AuthTokenInstance } from './customAPI';


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
    userId: string;
    category: string;
}

const API = {

    createPost: async (data: CreatePostData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`posts/new`, data);
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