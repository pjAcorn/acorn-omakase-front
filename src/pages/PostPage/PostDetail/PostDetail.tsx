import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import API from '../../../API/API';
import styles from './style.module.scss';
import Button from '../../../components/styled-components/Button';



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
    console.log(postId);

    const [postData, setPostData] = useState<PostDetailData>({
        title: '',
        content: '',
        createdAt: '',
        category: '',
        nickname: '',
    });

    useEffect(() => {

        const getPost = async () => {
            const response = await API.postDetail({ postId });
            setPostData(response.data);
            console.log(response.data);
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
                        <label>{postData.nickname}</label>
                    </div>

                    <div className={styles.content}>
                        <div>
                            {
                                postData.content
                            }
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
            </div>
        </>
    )
};

export default PostDetail;