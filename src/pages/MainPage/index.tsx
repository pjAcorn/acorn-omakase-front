import styled from './style.module.scss';
import MainImage from '../../assets/MainImage';
import QuickMove from './QuickMove/index';

const MainPage = () => {
    return(
        <div className={styled.MainPage}>
             <MainImage />
             <QuickMove />
        </div>
    )
}

export default MainPage;