import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import CloseIcon from '../../assets/CloseIcon';

const SidebarLogout = () => {
    return (
        <>
            <div className={styles.Sidebar__background} />
            <div className={styles.Sidebar}>
                <div className={styles.Sidebar__CloseIcon}>
                    <CloseIcon />
                </div>
                <ul className={styles.Sidebar__content}>
                    <li className={styles.Sidebar__content__letter1}>로그인 해주세요</li>
                    <li className={styles.Sidebar__content__letter2}>
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            로그인 {'>'}
                        </Link>
                    </li>
                    <li className={styles.Sidebar__content__line}>
                        <hr />
                    </li>
                    <li className={styles.Sidebar__content__letter3}>
                        <Link to='/signup' style={{ textDecoration: 'none' }}>
                            회원가입
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SidebarLogout;