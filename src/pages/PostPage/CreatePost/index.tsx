import { useState, useEffect } from 'react';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import API from '../../../API/API';
import styles from './style.module.scss';
import Button from '../../../components/styled-components/Button';
import Board from '../../../components/Board';


const CreatePost = () => {
    const navigate = useNavigate();

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
                    onClick={() => alert('게시물이 등록되었습니다.')}
                />
            </div>
            
        </>
    )
};

export default CreatePost;