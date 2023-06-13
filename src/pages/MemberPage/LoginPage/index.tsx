import { Link, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import styles from './style.module.scss';
import DesktopLogo from '../../../assets/TextLogo';
import Button from '../../../components/styled-components/Button';
import LabelBasicInput from '../../../components/LabelBasicInput';
import API from '../../../API/API';
import { AxiosResponse } from 'axios'

interface UserData {
    accessToken: string;
    accessTokenExpiresIn: number;
    id: number;
    nickname: string;
    refreshToken: string;
  }

// const SERVER_LOGIN_URL = 'http://localhost:8080/users/login'

const LoginPage = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        loginId: '',
        password: '',
      });
      const { loginId, password } = inputs;


    // LoginId, password Change Event
  const onChange = useCallback(
    (e: { target: { name: string; value: string } }) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
    // const sendLoginData = async (e) => {
    //     e.preventDefault();
    //     const loginId = e.target.id.value;
    //     const password = e.target.password.value;
    //     await axios.post(SERVER_LOGIN_URL, { loginId, password });
    //     navigate('/main')
    // }

     // login action
  const onClickLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  // handleSubmit
  const handleSubmit = async () => {
    const data = { loginId, password };
      const response = await API.logIn(data);
      setLocalstorage(response);
      navigate('/');
    }
  

    // Set localstorage
    const setLocalstorage = (response: AxiosResponse<UserData>) => {
        const { accessToken, accessTokenExpiresIn, id, nickname, refreshToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('accessTokenExpiresIn', String(accessTokenExpiresIn));
        localStorage.setItem('id', String(id));
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('refreshToken', refreshToken);
    };

    return (
        <div className={styles.Container}>
            <div className={styles.Frame}>
                <DesktopLogo />
                <div>
                   {/* <form onSubmit={onClickLogin}>
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
                    </form>  */}
                    <form>
                    <LabelBasicInput
                      label='loginId'
                      text='아이디'
                      name='loginId'
                      id='loginId'
                      type='text'
                      value={loginId}
                      onChange={onChange}

                    />
                    <LabelBasicInput
                      label='password'
                      text='비밀번호'
                      name='password'
                      id='password'
                      type='password'
                      value={password}
                      onChange={onChange}

                    />
                    <Button text='로그인' onClick={onClickLogin} />
                    <div className={styles.support}>
                      <Link to='/findid' style={{ textDecoration: 'none' }}>
                        아이디 찾기
                      </Link>
                      <Link to='/findpw' style={{ textDecoration: 'none' }}>
                        비밀번호 찾기
                      </Link>
                      <Link to='/signup' style={{ textDecoration: 'none' }}>
                        회원가입 하기
                      </Link>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;