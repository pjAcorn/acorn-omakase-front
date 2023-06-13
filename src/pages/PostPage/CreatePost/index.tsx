import { useState, useEffect } from 'react';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import API from '../../../API/API';
import styles from './style.module.scss';
import Button from '../../../components/styled-components/Button';
import Board from '../../../components/Board';


// category Select option
const categoryList = [
    '카테고리선택',
    '자유게시판',
    '중고거래',
];

const CreatePost = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    const [category, setCategory] = useState<string>(categoryList[0]);
    
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };
    
    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.currentTarget.value);
    };   
    
    const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.currentTarget.value);
    };
    
    const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value);
    
    };

    const onCreateHandler = () => {
        const data = {
          title,
          content,
          userId,
          category,
        };
        const response = API.createPost(data);
        response
          .then((res) => {
            if (res.data.code === 'SignUp') {
              // eslint-disable-next-line no-alert
              alert('게시글이 등록되었습니다.');
              window.location.replace('/post');
            }
          })
      };

    return (
        <>
            <div className={styles.main}>
                <form className={styles.top}>
                    <h1 className={styles.h1}>묻고 답해요</h1>
                    <div className={styles.btext}>맡김차림 회원 사장님들과 소통해봐요</div>
                </form>
            </div>
            <div>
                <Board />
            </div>
            <div className={styles.btn}>
                <Button
                    text='목록으로'
                    width='100px'
                    height='50px'
                    color='#000'
                    background='#737373'
                    onClick={() => navigate('/posts')}
                />
                <Button
                    className={styles.btn2}
                    text='등록'
                    width='100px'
                    height='50px'
                    color='#000'
                    background='#D25959'
                    // onClick={() => navigate('/posts')}
                    onClick={onCreateHandler}
                />
            </div>
            
        </>
    )
};

export default CreatePost;