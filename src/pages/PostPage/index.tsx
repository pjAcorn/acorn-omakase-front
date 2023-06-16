import { useState, useEffect, ChangeEvent, } from 'react';
import API from '../../API/API';
import Button from '../../components/styled-components/Button';
import styles from './style.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Paging from './Paging/Paging';
import SearchBasicInput from '../../components/SearchBasicInput';


const PostPage = () => {
    const navigate = useNavigate();
    const [postData, setPostData] = useState([]);
    const [keyword, setKeyword] = useState<string>('');

    useEffect(() => {
        const getPosts = async () => {
            const response = await API.viewPost();
            const postList = response.data.list;
            setPostData(postList);
            console.log(postList);
        };
        getPosts();
    }, []);

    const onChangeByName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
        console.log(e.currentTarget.value)
    };

    const onCreateHandler = () => {
        const data = {keyword,};
        const response = API.viewPostByName(data);
        console.log(data);
        response
            .then((res) => {
                setPostData(res.data);       
            })
            .catch((error) => {
                if (error.code === 'ERR_BAD_REQUEST') {
                    error.message = '입력한 게시글이 존재하지 않습니다.';
                    // eslint-disable-next-line no-alert
                    alert(error.message);
                }
            });
    };

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
                        <a href='/posts/free' style={{ textDecoration: "none" }}>자유게시판</a>
                    </li>
                    <li className={styles.li}>
                        <a href='/posts/item' style={{ textDecoration: "none" }}>중고거래</a>
                    </li>
                </ul>
                <input
                    type='text'
                    className={styles.input}
                    name='search'
                    placeholder='제목으로 검색'
                    onChange={onChangeByName}
                    
                />
                <Button
                    text='검색'
                    width='75px'
                    height='50px'
                    color='#000'
                    background='#737373'
                    onClick={onCreateHandler}
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
            <table>
                <tr>
                    <Link
                        to={`/posts`}
                        className={styles.links}
                        style={{ textDecoration: "none" }}>
                        <th>최신순</th>
                    </Link>
                    <Link
                        to={`/posts/view`}
                        className={styles.links}
                        style={{ textDecoration: "none" }}>
                        <th>조회순</th>
                    </Link>
                    <Link
                        to={`/posts/like`}
                        className={styles.links}
                        style={{ textDecoration: "none" }}>
                        <th>좋아요순</th>
                    </Link>
                </tr>
            </table>
            <form className={styles.list}>
                <table className={styles.table}>
                    <tbody>
                        {postData.map((post) => (
                            <tr key={post.post_id}>
                                <td>{post.nickname}</td>
                                <Link
                                    to={`/posts/${post.post_id}`}
                                    state={post.post_id}
                                    className={styles.table}
                                    style={{ textDecoration: "none" }}>
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