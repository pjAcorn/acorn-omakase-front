import styles from './style.module.scss';
import Board from '../../../components/Board';




const CreatePost = () => {
   

    return (
        <>
            <div className={styles.main}>
                <form className={styles.top}>
                    <h1 className={styles.h1}>묻고 답해요</h1>
                    <div className={styles.btext}>맡김차림 회원 사장님들과 소통해봐요</div>
                </form>
            </div>
            <div>
                <Board />
            </div>

            
        </>
    )
};

export default CreatePost;