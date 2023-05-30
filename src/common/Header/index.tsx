import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import DesktopLogo from '../../assets/TextLogo';
import ListIcon from '../../assets/ListIcon';
// import SidebarLogin from '../../components/Sidebar/SidebarLogin';
import SidebarLogout from '../../components/Sidebar/SidebarLogout';
import HeaderLogout from './HeaderLogout';
// import HeaderLogin from './HeaderLogin';

const Header = () => {
  const navigate = useNavigate();
  const [isLoginUser, setIsLoginUser] = useState(false);
  const localLength = localStorage.length;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (localLength) {
      setIsLoginUser(true);
    } else {
      setIsLoginUser(false);
    }
  }, [localLength]);

  return (
    <header className={styles.Header}>
      <section className={styles.Header__nav}>
        <button type='button' className={styles.Header__nav__logo} onClick={() => navigate('/')}>
          <DesktopLogo />
        </button>
        <button type='button' className={styles.Header__nav__ListIcon} onClick={() => toggleMenu()}>
          {!isOpen ? <ListIcon /> : ''}
          {/* {isOpen && isLoginUser ? <SidebarLogin /> : ''} */}
          {isOpen && !isLoginUser ? <SidebarLogout /> : ''}
        </button>
        <div className={styles.Header__nav__right}>
          {/* <ModeToggle /> */}
          {/* {isLoginUser ? <HeaderLogin /> : ''} */}
          {!isLoginUser ? <HeaderLogout /> : ''}
        </div>
      </section>
    </header>
  );
};

export default Header;