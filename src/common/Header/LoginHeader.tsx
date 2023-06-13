import styles from './style.module.scss';
import UpIcon from '../../assets/UpIcon';
import DownIcon from '../../assets/DownIcon';
import { useState } from 'react';
import ToggleHeader from './ToggleHeader';
import PersonIcon from '../../assets/PersonIcon';

const HeaderLogin = () => {
  const userNickname = localStorage.getItem('nickname');
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.HeaderLogin}>
      <button type='button' className={styles.HeaderLogin__box} onClick={() => toggle()}>
        <PersonIcon />
        <div className={styles.HeaderLogin__box__username}>{userNickname}</div>
        {isOpen ? <UpIcon /> : <DownIcon />}
      </button>
      {isOpen && <ToggleHeader />}
    </header>
  );
};

export default HeaderLogin;