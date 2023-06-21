import { AxiosResponse } from 'axios';
import { defaultInstance, AuthTokenInstance } from './customAPI';

interface SignUpData {
    loginId: string;
    nickname: string;
    password: string;
    email: string;
    name: string;
    region: string;
}

interface LoginData {
    loginId: string;
    password: string;
}

interface CheckIdData {
    loginId: string;
}

interface CheckEmailData {
    email: string;
}

interface CheckEmailCodeData {
    email: string;
}

interface GetLoginIdData {
    email: string;
    code: string;
}

interface findPasswordData {
    code: string;
    email: string;
    loginId: string;
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

// 메인 기능
interface ShopData {
    addressSido: string;
    addressSigungu: string;
    cateLData: string;
    cateAData: string;
    cateMData: string;
}

// interface ReceivedShopData {
//     year1: number;
//     year2: number;
//     year3: number;
//     year4: number;
//     year5: number;
//     sum: number;
//     avg: number;
// }

const API = {

    signUp: async (data: SignUpData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`users/signup`, data);
        return response;
    },

    checkId: async (loginId: CheckIdData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`users/signup/id`, loginId);
        return response;
    },

    checkEmail: async (email: CheckEmailData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`users/signup/email`, email);
        return response;
    },

    logIn: async (data: LoginData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`users/login`, data);
        return response;
    },

    checkEmailCode: async (email: CheckEmailCodeData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`users/email`, email);
        return response;
    },

    getLoginId: async (data: GetLoginIdData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`users/find/id`, data);
        return response;
    },

    findPassword: async (data: findPasswordData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`users/find/password`, data);
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
            `posts/newest?pageSize=${data.postPerPage}&pageNum=${data.currentPage}`);
        console.log(response);
        return response;
    },

    postDetail: async (data: GetPostId): Promise<AxiosResponse> => {
        const response = await AuthTokenInstance.get(`posts/${data.postId}`);
        return response;
    },

    viewPostByName: async (data: GetPostByName): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`posts/search/keyword`, data);
        return response;
    },

    sendShopData: async (data: ShopData): Promise<AxiosResponse> => {
        const response = await defaultInstance.post(`analyze`, data);
        return response;
    }
}



export default API;