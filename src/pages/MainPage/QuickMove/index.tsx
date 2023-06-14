import { useNavigate } from 'react-router-dom';
import Button from '../../../components/styled-components/Button';
import styles from './style.module.scss';
import styled from 'styled-components';
import { StyledLogo } from '../../../assets/TextLogo';

const QuickMove = () => {
  const navigate = useNavigate();
  return (
    <header>
      
      <div className={styles.button}>
      <button onClick={() => navigate(`/posts`)}>
        <img 
          src={`${process.env.PUBLIC_URL}/images/button/CButtonGray.png`} 
          className={styles.image}
        />
      </button>
     
      <button onClick={() => navigate(`/analyze`)}>
        <img 
          src={`${process.env.PUBLIC_URL}/images/button/FButtonRed.png`} 
          className={styles.image}
        />
      </button>
      </div>
    </header>
    
  );
};

export default QuickMove;