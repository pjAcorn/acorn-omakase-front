import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import Modal from '../../components/styled-components/Modal';
import { useState } from 'react';
import Button from '../../components/styled-components/Button';

const HeaderToggle = () => {
  const navigate = useNavigate();
  const userNickname = localStorage.getItem('nickname');
  const [modalOpen, setModalOpen] = useState(false);
  const userId = localStorage.getItem('id');

  const logout = () => {
    localStorage.clear();
    setModalOpen(true);
  };
  const onClickCloseModal = () => {
    setModalOpen(false);
    navigate('/');
    window.location.reload();
  };
  const windowReload = () => {
    navigate(`/users/${userId}`);
    window.location.reload();
  };
  return (
    <>
      <div className={styles.HeaderToggle}>
        <div className={styles.HeaderToggle__box}>
          <div className={styles.HeaderToggle__box__username}>{userNickname} 님</div>
          <div className={styles.HeaderToggle__box__mypage}>
            <div onClick={windowReload} role='presentation'>
              마이페이지
            </div>
          </div>
        </div>
        <div className={styles.HeaderToggle__logout} onClick={logout} role='presentation'>
          로그아웃
        </div>
      </div>
      {modalOpen && (
        <Modal>
          <p className={styles.modal__text}>로그아웃 되었습니다.</p>
          <Button text='확인' onClick={onClickCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default HeaderToggle;