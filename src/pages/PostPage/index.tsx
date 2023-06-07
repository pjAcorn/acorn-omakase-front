import LabelBasicInput from '../../components/LabelBasicInput';
import { useState, SyntheticEvent, useCallback, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react';
import API from '../../API/API';
import axios from 'axios';
import Button from '../../components/styled-components/Button';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import Label from '../../components/styled-components/Label';

interface PostFormData {
    title: string,
    content: string,
    nickname: string,
    created_at: string

}

const PostPage = () => {

    const [postData, setPostData] = useState([]);


    useEffect(() => {
        const getPosts = async () => {
            const response = await API.viewPost();
            const postList = response.data.list;
            setPostData(postList);
            console.log(postList);
        };
        getPosts();
    }, []);



    const [page, setPage] = useState(1); //페이지
    const pageSize = 10; // posts가 보일 최대한의 갯수
    const offset = (page - 1) * pageSize; // 시작점과 끝점을 구하는 offset

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
            <form className={styles.list}>
                <div>
                    {postData.map((post) => (
                        <li key={post.post_id}>
                            <Link to={`/posts/${post.post_id}`}>
                               {post.post_id} {post.nickname} {post.title} {post.created_at}
                            </Link>
                        </li>
                    ))}
                </div>
            </form>
        </div >
    );
};

export default PostPage;