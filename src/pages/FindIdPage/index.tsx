import styles from './style.module.scss';
import FindIdForm from '../../components/FindIdForm';

const FindIdPage = () => {
  return (
    <div className={styles.FindIdPage}>
      <FindIdForm />
    </div>
  );
};

export default FindIdPage;