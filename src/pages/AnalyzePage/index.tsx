import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'
import styles from './style.module.scss';
import Button from '../../components/styled-components/Button';
import axios from 'axios'

const AnalyzePage = () => {
        
    const sendShopData = async (e) => {
        e.preventDefault();
        // const loginId = e.target.id.value;
        // const password = e.target.password.value;
        // const passwordConf = e.target.passwordConf.value;
        // const name = e.target.name.value;
        // const nickname = e.target.nickname.value;
        // const email = e.target.email.value;
        // const region = e.target.region.value;
        // await axios.post(SERVER_SIGNUP_URL, { loginId, password, passwordConf, name, nickname, email, region });
        navigate('/')
    }

    useEffect(()=>{
        const kakao = (window as any).kakao;
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 3
        };
        var map = new kakao.maps.Map(container, options);
    }, [])

    const navigate = useNavigate();
    return (
    <div className={styles.Container}>
            <div>
                <form onSubmit={sendShopData}>
                    <table className={styles.inputTable}>
                        <tr> 
                            <td rowSpan={4}>
                                <div id="map" style={{width:"500px", height:"400px"}}></div> 
                            </td>
                            <td className={styles.td}>
                                <label>아이디</label>
                            </td>
                            <td className={styles.td}>
                                <input className={styles.input} name='id' />
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.td}>
                                <label>비밀번호</label>
                            </td>
                            <td className={styles.td}>
                                <input className={styles.input} name='password' type='password' />
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.td}>
                                <label>비밀번호 확인</label>
                            </td>
                            <td className={styles.td}>
                                <input className={styles.input} name='passwordConf' type='password' />
                            </td>
                        </tr>
                        <tr> 
                            <td className={styles.td}>
                                <label>이름</label>
                            </td>
                            <td className={styles.td}>
                                <input className={styles.input} name='name' />
                            </td>
                        </tr>
                    </table>

                    <Button
                        className={styles.memBtn} 
                        text='회원가입' 
                        type='submit'
                        width='100px'
                        height='45px'
                        color='#000'
                        background='#D25959'
                    />
                    <Button
                        className={styles.memBtn}
                        text='로그인' 
                        onClick={() => navigate('/login')} 
                        width='100px'
                        height='45px'
                        color='#000'
                        background='#D25959'
                    />
                </form>
            </div>
        </div>
    )
}

export default AnalyzePage;