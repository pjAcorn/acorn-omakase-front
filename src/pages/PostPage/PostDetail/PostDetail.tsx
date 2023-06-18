import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import API from '../../../API/API';
import styles from './style.module.scss';
import Button from '../../../components/styled-components/Button';
import PersonIconll from '../../../assets/PersonIconll';

interface PostDetailData {
    title: string;
    content: string;
    createdAt: string;
    category: string;
    nickname: string;
}


const PostDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const postId = location.state;

    const [commentContent, setCommentContent] = useState<string>('');
    const [commentData, setCommentData] = useState([]);
    const [postData, setPostData] = useState<PostDetailData>({
        title: '',
        content: '',
        createdAt: '',
        category: '',
        nickname: '',
    });

    const onChangeCommentContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentContent(e.currentTarget.value);
        console.log(e.currentTarget.value)
    };

    const onCreateHandler = () => {
        const data = {
            commentContent,
            postId,
        };
        const response = API.createComment(data);
        console.log(data);
        response
            .then((res) => {
                if (res.data.code === 'Created') {
                    // eslint-disable-next-line no-alert
                    alert('댓글이 등록되었습니다.');
                    window.location.replace(`/posts/${postId}`);
                }
            })
            .catch((error) => {
                if (error.code === 'ERR_BAD_REQUEST') {
                    error.message = '게시글 등록에 실패하였습니다.';
                    window.location.replace(`/posts/${postId}`);
                    // eslint-disable-next-line no-alert
                    alert(error.message);
                }
            });
    };


    useEffect(() => {

        const getPost = async () => {
            const response = await API.postDetail({ postId });
            setPostData(response.data.post);
            const commentList = response.data.comment;
            setCommentData(commentList);
            console.log(response.data.comment);
        };
        getPost();
    }, [postId]);

    return (
        <>
            <div className={styles.main}>
                <form className={styles.top}>
                    <h1 className={styles.h1}>묻고 답해요</h1>
                    <div className={styles.btext}>맡김차림 회원 사장님들과 소통해봐요</div>
                </form>

                <div className={styles.post}>

                    <div className={styles.row}>
                        <label>{postData.title}</label>

                    </div>

                    <div className={styles.info}>
                        <label className={styles.line}>{postData.category}</label>
                        <label className={styles.line}>{postData.createdAt}</label>
                        <label>작성자 :  </label>
                        <label><PersonIconll />{postData.nickname}</label>
                    </div>

                    <div className={styles.content}>
                        <div>
                            {
                                postData.content
                            }
                        </div>
                    </div>

                </div>

                <div>
                    <div className={styles.mid}>
                        <input
                            type='text'
                            className={styles.input}
                            name='commentContent'
                            placeholder='댓글입력'
                            onChange={onChangeCommentContent}
                        />
                        <Button
                            className={styles.search}
                            text='등록'
                            width='70px'
                            height='50px'
                            color='#000'
                            background='#D25959'
                            onClick={onCreateHandler}
                        />
                    </div>
                    <div className={styles.comment}>
                    {commentData.map((comment) => (
                        <ul key={comment.comment_id} className={styles.commentli}>
                            <li>
                                <div>
                                    <PersonIconll />
                                    {comment.nickname} 　 {comment.created_at}
                                </div>
                                <div className={styles.commentContent}>
                                    {comment.comment_content}
                                </div>
                            </li>
                        </ul>
                    ))}
                    </div>
                </div>
                <div className={styles.button}>
                    <Button
                        text='목록으로'
                        width='100px'
                        height='50px'
                        color='#000'
                        background='#D25959'
                        onClick={() => navigate('/posts')}
                    />
                </div>
            </div>
        </>
    )
};

export default PostDetail;