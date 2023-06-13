import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import API from '../../API/API';


const Board = () => {


    return (
        <div className={styles.Mains}>
            <div className={styles.left}>
            </div>

            <div className={styles.Write}>
                <div>
                    <input type='text'
                        className={styles.title_txt}
                        name='title'
                        placeholder='제목' />
                </div>

                <div>
                    <textarea
                        className={styles.content_txt}
                        name='content'
                        placeholder='내용을 입력하세요.'>
                    </textarea>
                </div>

            </div>

            <div className={styles.right}>
            </div>
        </div>
    );
};

export default Board;