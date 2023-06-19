import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import DesktopLogo from '../../../assets/TextLogo';
import Button from '../../../components/styled-components/Button';
import axios from 'axios'
import { useEffect, useState } from 'react';

import {
    ID_REQUIRE_CHECK,
    ID_OVERLAP_CHECK,
    NICKNAME_REQUIRE_CHECK,
    PW_REQUIRE_CHECK,
    PW_VALID_CHECK,
    PWCONFIRM_REQUIRE_CHECK,
    PWCONFIRM_VALID_CHECK,
    EMAIL_REQUIRE_CHECK,
    MBTI_REQUIRE_CHECK,
    EMAIL_VALID_CHECK,
    EMAIL_OVERLAP_CHECK,
} from '../../../contants/message';
import API from '../../../API/API';
import LabelBasicSelect from '../../../components/LabelBasicSelect';
import LabelBasicInput from '../../../components/LabelBasicInput';

const regionList = [
    '선택해주세요',
    '서울특별시',
    '부산광역시',
    '대구광역시',
    '인천광역시',
    '광주광역시',
    '대전광역시',
    '울산광역시',
    '세종특별자치시',
    '경기도',
    '강원특별자치도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
    '제주특별자치도',
]

const SERVER_SIGNUP_URL = 'http://localhost:8080/users/signup'

const SignupPage = () => {
    const [loginId, setLoginId] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [region, setRegion] = useState<string>(regionList[0]);
    // Valid
    const [isValidLoginId, setIsValidLoginId] = useState<boolean>(false);
    const [isValidNickname, setIsValidNickname] = useState<boolean>(false);
    const [isValidName, setIsValidName] = useState<boolean>(false);
    const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
    const [isValidPasswordConfirm, setIsValidPasswordConfirm] = useState<boolean>(false);
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
    const [isValidRegion, setIsValidRegion] = useState<boolean>(false);
    // Error Message
    const [loginIdErrorMessage, setLoginIdErrorMessage] = useState<string>(ID_REQUIRE_CHECK);
    const [nicknameErrorMessage] = useState<string>(NICKNAME_REQUIRE_CHECK);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>(PW_REQUIRE_CHECK);
    const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] =
        useState<string>(PWCONFIRM_REQUIRE_CHECK);
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>(EMAIL_REQUIRE_CHECK);
    const [regionErrorMessage] = useState<string>(MBTI_REQUIRE_CHECK);

    // LoginId onChange Event
    const onChangeLoginId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginId(e.currentTarget.value);
        setIsValidLoginId(false);
    };

    // Nickname onChange Event
    const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.currentTarget.value);
        setIsValidNickname(false);
    };

    // Nickname onChange Event
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        setIsValidName(false);
    };

    // Password onChange Event
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        setIsValidPassword(false);
    };

    // PasswordConfirm onChange Event
    const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.currentTarget.value);
        setIsValidPasswordConfirm(false);
    };

    // Email onChange Event
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        setIsValidEmail(false);
    };

    // Region onChange Event select
    const onChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRegion(e.currentTarget.value);
        if (e.currentTarget.value !== '1') {
            setIsValidRegion(false);
        }
    };

    // LoginId onBlur Event
    const onBlurLoginId = () => {
        if (!loginId) {
            setIsValidLoginId(true);
            setLoginIdErrorMessage(ID_REQUIRE_CHECK);
        }
    };

    // Nickname onBlur Event
    const onBlurNickname = () => {
        if (!nickname) {
            setIsValidNickname(true);
        }
    };

    // Name onBlur Event
    const onBlurName = () => {
        if (!name) {
            setIsValidName(true);
        }
    };

    // Password onBlure Event
    const onBlurPassword = () => {
        if (!password) {
            setIsValidPassword(true);
            setPasswordErrorMessage(PW_REQUIRE_CHECK);
            return;
        }
        if (password.length < 8) {
            setIsValidPassword(true);
            setPasswordErrorMessage(PW_VALID_CHECK);
        }
    };

    // PasswordConfirm onBlur Event
    const onBlurPasswordConfirm = () => {
        if (!passwordConfirm) {
            setIsValidPasswordConfirm(true);
            setPasswordConfirmErrorMessage(PWCONFIRM_REQUIRE_CHECK);
            return;
        }

        // 비밀번호가 일치하지 않다면
        if (password !== passwordConfirm) {
            setIsValidPasswordConfirm(true);
            setPasswordConfirmErrorMessage(PWCONFIRM_VALID_CHECK);
        }
    };

    // Email onBlur Event
    const onBlurEmail = () => {
        if (!email) {
            setIsValidEmail(true);
            setEmailErrorMessage(EMAIL_REQUIRE_CHECK);
        }

        // if (!regEmail.test(email)) {
        // setIsValidEmail(true);
        // setEmailErrorMessage(EMAIL_VALID_CHECK);
        // }
    };

    // MBTI onBlur Event
    const onBlurRegion = () => {
        if (region === regionList[0]) {
            setIsValidRegion(true);
        }
    };

    // 회원가입 api
    const onSignUpHandler = () => {
        const data = {
            loginId,
            nickname,
            password,
            email,
            name,
            region,
        };
        const response = API.signUp(data);
        response
            .then((res) => {
                if (res.data.code === 'SignUp') {
                    // eslint-disable-next-line no-alert
                    alert('회원가입이 완료되었습니다.');
                    window.location.replace('/login');
                }
            })
            .catch((error) => {
                if (error.code === 'ERR_BAD_REQUEST') {
                    error.message = '회원가입에 실패하였습니다.';
                    // eslint-disable-next-line no-alert
                    alert(error.message);
                }
            });
        };

        // form sign up Check button
    const handleLastCheckClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (isValidLoginId === false && !loginId) {
            setIsValidLoginId(true);
        } else if (isValidNickname === false && !nickname) {
            setIsValidNickname(true);
        } else if (isValidName === false && !name) {
            setIsValidName(true);
        } else if (isValidPassword === false && !password) {
            setIsValidPassword(true);
        } else if (
            (isValidPasswordConfirm === false && !passwordConfirm) ||
            password !== passwordConfirm
        ) {
            setIsValidPasswordConfirm(true);
        } else if (isValidEmail === false && !email) {
            setIsValidEmail(true);
        } else if (isValidRegion === false && region === regionList[0]) {
            setIsValidRegion(true);
        } else {
            onSignUpHandler();
        }
    };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const loginIdOverlapCheck = () => {
            const data = { loginId };
            const response = API.checkId(data);
            response
                .then((res) => {
                    // eslint-disable-next-line no-console
                    console.log(res);
                })
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.log(error);
                    setIsValidLoginId(true);
                    setLoginIdErrorMessage(ID_OVERLAP_CHECK);
                });
        };

        const emailOverlapCheck = () => {
            const data = { email };
            const response = API.checkEmail(data);
            response
                .then((res) => {
                    // eslint-disable-next-line no-console
                    console.log(res);
                })
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.log(error);
                    setIsValidEmail(true);
                    setEmailErrorMessage(EMAIL_OVERLAP_CHECK);
                });
        };

        // loginId 중복 체크 useEffect, 디바운스 추가
        useEffect(() => {
            const timer = setTimeout(() => {
                if (loginId) {
                    loginIdOverlapCheck();
                }
            }, 500);

            return () => clearTimeout(timer);
        }, [loginId, loginIdOverlapCheck]);

        // Email 유효성 체크 및 중복 체크, useEffect, 디바운스 추가
        useEffect(() => {
            const timer = setTimeout(() => {
                if (email) {
                    emailOverlapCheck();
                }
            }, 500);

            return () => clearTimeout(timer);
        }, [email, emailOverlapCheck]);

        const navigate = useNavigate();
    return (
            <div className={styles.main}>                      
            <div className={styles.SignUpForm}>
            <DesktopLogo />
                <form>
                    <LabelBasicInput
                        label='loginId'
                        text='아이디'
                        name='loginId'
                        id='loginId'
                        type='text'
                        value={loginId}
                        onChange={onChangeLoginId}
                        onBlur={onBlurLoginId}
                        hasError={isValidLoginId}
                        placeholder={ID_REQUIRE_CHECK}
                        errorMessage={loginIdErrorMessage}
                    />
                    <LabelBasicInput
                        label='nickname'
                        text='닉네임'
                        name='nickname'
                        id='nickname'
                        type='text'
                        value={nickname}
                        onChange={onChangeNickname}
                        onBlur={onBlurNickname}
                        hasError={isValidNickname}
                        placeholder={NICKNAME_REQUIRE_CHECK}
                        errorMessage={nicknameErrorMessage}
                    />
                    <LabelBasicInput
                        label='password'
                        text='비밀번호'
                        name='password'
                        id='password'
                        type='password'
                        value={password}
                        onChange={onChangePassword}
                        onBlur={onBlurPassword}
                        hasError={isValidPassword}
                        placeholder={PW_VALID_CHECK}
                        errorMessage={passwordErrorMessage}
                    />
                    <LabelBasicInput
                        label='passwordConfirm'
                        text='비밀번호 재확인'
                        name='passwordConfirm'
                        id='passwordConfirm'
                        type='password'
                        value={passwordConfirm}
                        onChange={onChangePasswordConfirm}
                        onBlur={onBlurPasswordConfirm}
                        hasError={isValidPasswordConfirm}
                        placeholder={PWCONFIRM_REQUIRE_CHECK}
                        errorMessage={passwordConfirmErrorMessage}
                    />
                    <LabelBasicInput
                        label='email'
                        text='이메일'
                        name='email'
                        id='email'
                        type='email'
                        value={email}
                        onChange={onChangeEmail}
                        onBlur={onBlurEmail}
                        hasError={isValidEmail}
                        placeholder='ex)email@naver.com'
                        errorMessage={emailErrorMessage}
                    />
                    <LabelBasicSelect
                        text='REGION'
                        name='region'
                        id='region'
                        options={regionList}
                        value={region}
                        onChange={onChangeRegion}
                        onBlur={onBlurRegion}
                        hasError={isValidRegion}
                        errorMessage={regionErrorMessage}
                    />

                    <div className={styles.signup__btn}>
                        <Button text='회원가입' onClick={handleLastCheckClick} />
                        <Button text='로그인' onClick={() => navigate('/login')} />
                        {/* <Link to='/login' className={styles.signup__btn__prev}>
                            로그인
                        </Link> */}
                    </div>
                </form>
            </div>  
            </div>     
    )
}

export default SignupPage;