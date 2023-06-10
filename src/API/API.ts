import { AxiosResponse } from 'axios';
import { defaultInstance, AuthTokenInstance } from './customAPI';

interface NewPostData {
    title: string;
    content: string;
    userId: string;
    category: string;
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


const API = {

    newPost: async (data: NewPostData): Promise<AxiosResponse> => {
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