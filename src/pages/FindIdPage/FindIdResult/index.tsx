import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.scss';

const FindIdResult = () => {
  const location = useLocation();
  const loginId = location.state && location.state.id;

  return (
    <div className={styles.FindIdResult}>
      <div className={styles.FindIdResult__wrap}>
        <h2>아이디 찾기 결과</h2>
        <div className={styles.FindIdResult__wrap__info}>
          회원님의 ID는 <strong>{loginId}</strong> 입니다.
          <br />
          <div className={styles.support}>
            <Link to='/Login' style={{ textDecoration: 'none' }}>
              로그인하기
            </Link>
            <Link to='/findpw' style={{ textDecoration: 'none' }}>
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindIdResult;