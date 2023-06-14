import { useState, useEffect, SetStateAction, SyntheticEvent, ChangeEvent } from 'react';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import API from '../../API/API';
import Button from '../styled-components/Button';
import LabelBasicSelect from '../LabelBasicSelect';


// category Select option
const categoryList = [
    '카테고리선택',
    '자유게시판',
    '중고거래',
];

const Board = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [category, setCategory] = useState<string>(categoryList[0]);

    const [isValidCategory, setIsValidCategory] = useState<boolean>(false);

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const onChangeContent = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.currentTarget.value);
    };


    const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value);
        if (e.currentTarget.value !== '1') {
          setIsValidCategory(false);
        }
      };

    const onCreateHandler = () => {
        const data = {
            title,
            content,
            category,
        };
        const response = API.createPost(data);
        console.log(data);
        response
            .then((res) => {
                if (res.data.code === 'Created') {
                    // eslint-disable-next-line no-alert
                    alert('게시글이 등록되었습니다.');
                    window.location.replace('/post');
                }
            })
            .catch((error) => {
                if (error.code === 'ERR_BAD_REQUEST') {
                    error.message = '게시글 등록에 실패하였습니다.';
                    // eslint-disable-next-line no-alert
                    alert(error.message);
                }
            });
    };



    return (
        <div className={styles.all}>
            <div className={styles.Mains}>
                <div className={styles.left}>
                </div>

                <div className={styles.Write}>

                    <div>
                        <input
                            type='text'
                            className={styles.title_txt}
                            name='title'
                            placeholder='제목'
                            onChange={onChangeTitle}
                        />
                    </div>

                    <div>
                        <textarea
                            onChange={onChangeContent}
                            id='content'
                            className={styles.content_txt}
                            name='content'
                            placeholder='내용을 입력하세요.'>
                            
                        </textarea>
                    </div>

                </div>

                <div className={styles.right}>
                </div>

            </div>
            <div className={styles.btn}>
                <LabelBasicSelect
                    text='카테고리'
                    name='category'
                    id='category'
                    options={categoryList}
                    value={category}
                    hasError={isValidCategory}
                    onChange={onChangeCategory}
                />
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
                    onClick={onCreateHandler}
                />
            </div>

        </div>
    );
};

export default Board;