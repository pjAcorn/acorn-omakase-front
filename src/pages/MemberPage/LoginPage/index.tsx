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
                    <form>
                    <LabelBasicInput
                      label='loginId'
                      text='아이디'
                      name='loginId'
                      id='loginId'
                      type='text'
                      value={loginId}
                      onChange={onChange}
                      placeholder='아이디'
                    />
                    <LabelBasicInput
                      label='password'
                      text='비밀번호'
                      name='password'
                      id='password'
                      type='password'
                      value={password}
                      onChange={onChange}
                      placeholder='비밀번호'
                    />
                    <div className={styles.button}>
                    <Button text='로그인' onClick={onClickLogin} 
                            background='#D25959'
                            width='100px' />
                    <Button text='회원가입' onClick={() => navigate('/signup')}  
                            background='#737373'
                            width='100px' />
                    </div>
                    <div className={styles.support}>
                      <Link to='/findid' style={{ textDecoration: 'none' }}>
                        아이디 찾기　
                      </Link>
                      <Link to='/findpw' style={{ textDecoration: 'none' }}>
                         비밀번호 찾기
                      </Link>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;