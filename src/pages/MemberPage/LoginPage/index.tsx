import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import DesktopLogo from '../../../assets/TextLogo';
import Button from '../../../components/styled-components/Button';
import axios from 'axios'

const SERVER_LOGIN_URL = 'http://localhost:8080/users/login'

const LoginPage = () => {
    const sendLoginData = async (e) => {
        e.preventDefault();
        const loginId = e.target.id.value;
        const password = e.target.password.value;
        await axios.post(SERVER_LOGIN_URL, { loginId, password });
        navigate('/main')
    }

    const navigate = useNavigate();
    return (
        <div className={styles.Container}>
            <div className={styles.Frame}>
                <DesktopLogo />
                <div>
                    <form onSubmit={sendLoginData}>
                        <table className={styles.inputTable}>
                            <tr> 
                                <td className={styles.td}>
                                    <label>아이디</label>
                                </td>
                                <td className={styles.td}>
                                    <input className={styles.input} name='id' />
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.td}>
                                    <label>비밀번호</label>
                                </td>
                                <td className={styles.td}>
                                    <input className={styles.input} name='password' type='password' />
                                </td>
                            </tr>
                        </table>
                        
                        <div className={styles.find}>
                            <Button
                                className={styles.find__btn}
                                onClick={() => navigate('/findId')}
                                text='아이디 찾기'
                                width='110px'
                                height='40px'
                                color='#000'
                                background='none'
                            /> | 
                            <Button
                                className={styles.find__btn}
                                text='비밀번호 찾기'
                                onClick={() => navigate('/findPwd')}
                                width='120px'
                                height='40px'
                                color='#000'
                                background='#none'
                            />
                        </div>

                        <Button
                            className={styles.memBtn} 
                            text='로그인' 
                            type='submit'
                            width='100px'
                            height='45px'
                            color='#000'
                            background='#D25959'
                        />
                        <Button
                            className={styles.memBtn}
                            text='회원가입' 
                            onClick={() => navigate('/signup')} 
                            width='100px'
                            height='45px'
                            color='#000'
                            background='#D25959'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;