import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import DesktopLogo from '../../assets/TextLogo';
import Button from '../../components/styled-components/Button';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.Container}>
            <div className={styles.Frame}>
                <DesktopLogo />
                <div>
                    <form>
                        <table className={styles.inputTable}>
                            <tr>
                                <td className={styles.td}>
                                    <label>아이디</label>
                                </td>
                                <td className={styles.td}>
                                    <input name='id' />
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.td}>
                                    <label>비밀번호</label>
                                </td>
                                <td className={styles.td}>
                                    <input name='password' type='password' />
                                </td>
                            </tr>
                        </table>
                        <span className={styles.findBtn}>아이디 찾기 </span> | <span className={styles.findBtn}>비밀번호 찾기</span><br/>
                        <Button
                            text='로그인' 
                            /* 로그인 데이터 전송 구현 */
                            onClick={() => navigate('/main')} 
                            width='100px'
                            height='45px'
                            color='#000'
                            background='#D25959'
                        />
                        <Button
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

export default Login;