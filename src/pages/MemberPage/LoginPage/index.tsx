import { Link, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import styles from './style.module.scss';
import DesktopLogo from '../../../assets/TextLogo';
import Button from '../../../components/styled-components/Button';
import LabelBasicInput from '../../../components/LabelBasicInput';
import { ID_REQUIRE_CHECK, PW_REQUIRE_CHECK, SIGNUP_VALID_CHECK } from '../../../contants/message';
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

    const [isValidLoginId, setIsValidLoginId] = useState<boolean>(false);
    const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
    const [isValidSignUp, setIsValidSignUp] = useState<boolean>(false);
    // Error Message
    const [loginIdErrorMessage] = useState<string>(ID_REQUIRE_CHECK);
    const [passwordErrorMessage] = useState<string>(PW_REQUIRE_CHECK);
    const [signUpErrorMessage] = useState<string>(SIGNUP_VALID_CHECK);
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
    try {
      const response = await API.logIn(data);
      setLocalstorage(response);
      navigate('/');
      } catch (error) {
        setIsValidSignUp(true);
    }
  }
    
    // LoginId onBlur Event
  const onBlurLoginId = () => {
    if (!loginId) setIsValidLoginId(true);
    if (loginId) setIsValidLoginId(false);
  };

  // Password onBlure Event
  const onBlurPassword = () => {
    if (!password) setIsValidPassword(true);
    if (password) setIsValidPassword(false);
  };

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
                      onBlur={onBlurLoginId}
                      hasError={isValidLoginId}
                      placeholder={ID_REQUIRE_CHECK}
                      errorMessage={loginIdErrorMessage}
                    />
                    <LabelBasicInput
                      label='password'
                      text='비밀번호'
                      name='password'
                      id='password'
                      type='password'
                      value={password}
                      onChange={onChange}
                      onBlur={onBlurPassword}
                      hasError={isValidPassword}
                      placeholder={PW_REQUIRE_CHECK}
                      errorMessage={passwordErrorMessage} 
                    />
                    {isValidSignUp && <span className={styles.LoginForm__error}>{signUpErrorMessage}</span>}
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