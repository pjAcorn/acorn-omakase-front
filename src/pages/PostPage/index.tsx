import { useState, SyntheticEvent, useCallback, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react';
import API from '../../API/API';
import Button from '../../components/styled-components/Button';
import styles from './style.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Paging from './Paging/Paging';


const PostPage = () => {
    const navigate = useNavigate();
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

    const postsData = (posts) => {
        if (posts) {
            let result = posts.slice(offset, offset + pageSize);
            return result;
        }
    }

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
                <Button
                    text='글쓰기'
                    width='80px'
                    height='50px'
                    color='#000'
                    background='#D25959'
                    onClick={() => navigate('/posts/create')}
                />
            </form>
            <form className={styles.list}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <Link to={`/posts`}>
                                <th>최신순</th>
                            </Link>
                            <Link to={`/posts/view`}>
                                <th>조회순</th>
                            </Link>
                            <Link to={`/posts/like`}>
                                <th>좋아요순</th>
                            </Link>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {postData.map((post) => (
                            <tr key={post.post_id}>
                                <td>{post.nickname}</td>
                                <Link to={`/posts/${post.post_id}`} state={post.post_id} className={styles.table}>
                                    <td>{post.title}</td>
                                </Link>
                                <td>{post.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Paging page={page} count={pageSize} setPage={offset} />
            </form>
        </div >
    );
};

export default PostPage;