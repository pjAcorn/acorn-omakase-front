import { useNavigate } from 'react-router-dom';
import Button from '../../../components/styled-components/Button';
import styles from './style.module.scss';

const QuickMove = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.resultContainer}>
      <Button
        text='내 가게 찾기'
        onClick={() => navigate('/analyze')}
        width='88px'
        height='40px'
        color='#000'
        background='#fff'
      />
      <Button 
        text='커뮤니티' 
        onClick={() => navigate('/post')} 
        width='105px' 
        height='40px' />
    </header>
  );
};

export default QuickMove;