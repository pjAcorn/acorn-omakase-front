import styled from './style.module.scss';
import MainImage from '../../assets/MainImage';
import QuickMove from './QuickMove/index';

const MainPage = () => {
    return (
        <>
            <div className={styled.MainPage}>
                <MainImage />
            </div>
            <div className={styled.Button}>
                <QuickMove />
            </div>
        </>
    )
}

export default MainPage;