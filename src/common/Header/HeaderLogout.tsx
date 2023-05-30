import { useNavigate } from 'react-router-dom';
import Button from '../../components/styled-components/Button';
import styles from './style.module.scss';

const HeaderLogout = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.HeaderLogout}>
      <Button
        text='로그인'
        onClick={() => navigate('/login')}
        width='88px'
        height='40px'
        color='#000'
        background='#fff'
      />
      <Button text='회원가입' onClick={() => navigate('/signup')} width='105px' height='40px' />
    </header>
  );
};

export default HeaderLogout;