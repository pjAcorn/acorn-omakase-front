import { AxiosResponse } from 'axios';
import { defaultInstance, AuthTokenInstance } from './customAPI';

interface NewPostData {
    title: string;
    content: string;
    userId: string;
    category: string;
}



const API = {
    // getProfile: async (data: GetProfileData): Promise<AxiosResponse> => {
    //     const response = await AuthTokenInstance.get(`users/${data.userId}`);
    //     return response;
    // },

    newPost: async (data: NewPostData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`posts/new`, data);
        return response;
    }
    
}



export default API;