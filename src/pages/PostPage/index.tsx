import LabelBasicInput from '../../components/LabelBasicInput';
import { useState, SyntheticEvent, useCallback, useEffect } from 'react';
import Button from '../../components/styled-components/Button';
import styles from './style.module.scss';
import API from '../../API/API';
import { useNavigate } from 'react-router-dom';

interface PostFormData {
    title: string;
    content: string;
    nickname: string;
    category: string;
}

// const [postData, setPostData] = useState<PostFormData>({
//     title: '',
//     content: '',
//     nickname: '',
//     category: '',
// });

// const useEffect(() => {
//     const getProfile = async () => {
//       const response = await API.getPosts();
//       setPostData(response.data);
//       setUserEmail(response.data.email);
//     };
//     getProfile();
// }, [userId]);

const PostPage = () => {
    return (
        <div className={styles.main}>
            <form className={styles.top}>
                <h1 className={styles.h1}>묻고 답해요</h1>
                <div className={styles.btext}>맡김차림 회원 사장님들과 소통해봐요</div>
            </form>
            <form className={styles.PostForm}>
                <ul className={styles.category}>카테고리
                    <li className={styles.li}>
                        <a href='/posts/free'>자유게시판</a>
                    </li>
                    <li className={styles.li}>
                        <a href='/posts/item'>중고거래</a>
                    </li>
                </ul>
                <input className={styles.label} name='search' />
                <Button
                    text='검색'
                    width='75px'
                    height='50px'
                    color='#000'
                    background='#737373'
                />
            </form>
            <form>
                게시판 메인 내용 ▽

            </form>
        </div>
    );
};

export default PostPage;