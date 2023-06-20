import { useEffect, useState } from 'react';
import LabelBasicInput from '../LabelBasicInput';
import {
  EMAIL_REQUIRE_CHECK,
  EMAIL_VALID_CHECK,
  CODE_REQUIRE_CHECK,
  CODE_VALID_CHECK,
} from '../../contants/message';
import styles from './style.module.scss';
import Button from '../styled-components/Button';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../API/API';
import Loading from '../../assets/Loading';
import { regEmail } from '../../contants/regEx';

const FindIdForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    code: '',
  });
  const { email, code } = inputs;
  const [loginId, setLoginId] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidCode, setIsValidCode] = useState<boolean>(false);
  const [isCode, setIsCode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>(EMAIL_REQUIRE_CHECK);
  const [codeErrorMessage, setCodeErrorMessage] = useState<string>(CODE_REQUIRE_CHECK);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlurEmail = (e: React.FocusEvent<HTMLElement>) => {
    if (!email) {
      setIsValidEmail(true);
      setEmailErrorMessage(EMAIL_REQUIRE_CHECK);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlurCode = (e: React.FocusEvent<HTMLElement>) => {
    if (!code) {
      setIsValidCode(true);
      setCodeErrorMessage(CODE_REQUIRE_CHECK);
    }
  };

  useEffect(() => {
    if (email && !regEmail.test(email)) {
      setIsValidEmail(true);
      setEmailErrorMessage(EMAIL_VALID_CHECK);
    }
    if (email && regEmail.test(email)) setIsValidEmail(false);
    if (email) setIsCode(false);
  }, [email]);

  useEffect(() => {
    if (loginId) {
      navigate('/findIdResult', { state: { id: loginId } });
    }
  }, [loginId, navigate]);

  useEffect(() => {
    if (code) {
      setIsValidCode(false);
    }
  }, [code]);

  const handleFindIdClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email) {
      setIsValidEmail(true);
      setEmailErrorMessage(EMAIL_REQUIRE_CHECK);
    }

    if (!isValidEmail && email && !isCode) {
      setIsLoading(true);
      checkEmailHandler();
    }

    if (isCode && code) {
      findIdHandler();
    }
  };

  const checkEmailHandler = async () => {
    await API.checkEmailCode({ email });
    setIsLoading(false);
    setIsCode(true);
    setIsValidCode(true);
  };

  const findIdHandler = async () => {
    const data = { email, code };
    try {
      const response = await API.getLoginId(data);
      setLoginId(response.data);
      console.log(response.data);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('인증코드 에러 또는 등록되지 않은 이메일 입니다.');
      setIsValidCode(true);
      setCodeErrorMessage(CODE_VALID_CHECK);
    }
  };

  return (
    <div className={styles.FindIdForm}>
      <h2>아이디 찾기</h2>
      <form>
        <LabelBasicInput
          label='email'
          text='이메일'
          name='email'
          id='email'
          type='text'
          value={email}
          onChange={onChange}
          onBlur={onBlurEmail}
          hasError={isValidEmail}
          placeholder='ex)email@naver.com'
          errorMessage={emailErrorMessage}
        />
        {isLoading && (
          <div className={styles.findid__loading}>
            <Loading />
          </div>
        )}
        {isCode && (
          <LabelBasicInput
            label='code'
            text='인증코드'
            name='code'
            id='code'
            type='text'
            value={code}
            onChange={onChange}
            onBlur={onBlurCode}
            hasError={isValidCode}
            placeholder={CODE_REQUIRE_CHECK}
            errorMessage={codeErrorMessage}
          />
        )}
        <div className={styles.findid__btn}>
          <Link to='/login' className={styles.findid__btn__prev} style={{ textDecoration: 'none' }}>
            로그인
          </Link>
          <Button text='확인' width='50%' onClick={handleFindIdClick} />
        </div>
      </form>
    </div>
  );
};

export default FindIdForm;