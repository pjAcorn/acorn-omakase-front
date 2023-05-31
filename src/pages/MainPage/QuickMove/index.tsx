import { useNavigate } from 'react-router-dom';
import Button from '../../../components/styled-components/Button';
import styles from './style.module.scss';

const QuickMove = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className={styles.Button}>
      <Button
        text='내 가게 찾기'
        onClick={() => navigate('/analyze')}
        width='200px'
        height='85px'
        color='#000'
        background='#d25959'
      />
      </div>
      <div className={styles.Button2}>
      <Button 
        text='커뮤니티' 
        onClick={() => navigate('/post')} 
        width='200px'
        height='85px'
        color='#000'
        background='#d25959'
      />
      </div>
    </header>
  );
};

export default QuickMove;