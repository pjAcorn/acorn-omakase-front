import LabelBasicInput from '../../components/LabelBasicInput';
import styles from './style.module.scss';

const PostPage = () => {
    return (
        <div className={styles.PostForm}>
            <h2>게시판</h2>
            <form>
                <LabelBasicInput
                 label={''}
                 text={''} 
                 name={''} 
                 id={''} 
                 type={''} 
                 value={''} 
                />
            </form>
        </div>
    );
};

export default PostPage;