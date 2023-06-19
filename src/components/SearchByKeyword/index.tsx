import { useState, useEffect, ChangeEvent, } from 'react';
import API from '../../API/API';
import Button from '../../components/styled-components/Button';
import styles from './style.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Paging from '../Paging';

const SearchByKeyword = () => {
    const navigate = useNavigate();
    const [postData, setPostData] = useState([]);
    const [keyword, setKeyword] = useState<string>('');

    useEffect (() => {
        const getPosts = async () => {
        const data = { keyword, };
        const response = API.viewPostByName(data);
        console.log(data);
        response
            .then((res) => {
                setPostData(res.data.list);
                console.log(res.data.list)
            })
            .catch((error) => {
                if (error.code === 'ERR_BAD_REQUEST') {
                    error.message = '입력한 게시글이 존재하지 않습니다.';
                    // eslint-disable-next-line no-alert
                    alert(error.message);
                }
            });
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
}

export default SearchByKeyword;