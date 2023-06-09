import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import DesktopLogo from '../../../assets/TextLogo';
import Button from '../../../components/styled-components/Button';
import axios from 'axios'

const SERVER_SIGNUP_URL = 'http://localhost:8080/users/signup'

const SignupPage = () => {
    const sendSignupData = async (e) => {
        e.preventDefault();
        const loginId = e.target.id.value;
        const password = e.target.password.value;
        const passwordConf = e.target.passwordConf.value;
        const name = e.target.name.value;
        const nickname = e.target.nickname.value;
        const email = e.target.email.value;
        const region = e.target.region.value;
        await axios.post(SERVER_SIGNUP_URL, { loginId, password, passwordConf, name, nickname, email, region });
        // navigate('/login')
    }

    const navigate = useNavigate();
    return (
        <div className={styles.Container}>
            <div className={styles.Frame}>
                <DesktopLogo />
                <div>
                    <form onSubmit={sendSignupData}>
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
                            <tr>
                                <td className={styles.td}>
                                    <label>비밀번호 확인</label>
                                </td>
                                <td className={styles.td}>
                                    <input className={styles.input} name='passwordConf' type='password' />
                                </td>
                            </tr>
                            <tr> 
                                <td className={styles.td}>
                                    <label>이름</label>
                                </td>
                                <td className={styles.td}>
                                    <input className={styles.input} name='name' />
                                </td>
                            </tr>
                            <tr> 
                                <td className={styles.td}>
                                    <label>닉네임</label>
                                </td>
                                <td className={styles.td}>
                                    <input className={styles.input} name='nickname' />
                                </td>
                            </tr>
                            <tr> 
                                <td className={styles.td}>
                                    <label>이메일</label>
                                </td>
                                <td className={styles.td}>
                                    <input className={styles.input} name='email' />
                                </td>
                            </tr>
                            <tr> 
                                <td className={styles.td}>
                                    <label>지역</label>
                                </td>
                                <td className={styles.td}>
                                    <input className={styles.input} name='region' />
                                </td>
                            </tr>
                        </table>

                        <Button
                            className={styles.memBtn} 
                            text='회원가입' 
                            type='submit'
                            width='100px'
                            height='45px'
                            color='#000'
                            background='#D25959'
                        />
                        <Button
                            className={styles.memBtn}
                            text='로그인' 
                            onClick={() => navigate('/login')} 
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

export default SignupPage;