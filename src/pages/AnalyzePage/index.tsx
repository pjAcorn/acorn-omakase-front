import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'
import styles from './style.module.scss';
import Button from '../../components/styled-components/Button';
import axios from 'axios'

const AnalyzePage = () => {
    const SERVER_ANALYSIS_URL = "http://localhost:8080/analyze/test"
    // const SERVER_ANALYSIS_URL = "http://localhost:8000/test"

    const sendShopData = async (e) => {
        e.preventDefault();
        const category = e.target.category.value;
        const address = e.target.address.value;
        await axios.post(SERVER_ANALYSIS_URL, { category, address });
        // navigate('/')
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
                            <td className={styles.td__map} rowSpan={4} id="map" style={{width:"500px", height:"400px"}}>
                            </td>
                            <td className={styles.td}>
                                <label>업종</label>
                                <input className={styles.input} name='category' />
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.td}>
                                <label>주소</label>
                                <input className={styles.input} name='address' />
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.td}>
                                <Button
                                    className={styles.memBtn} 
                                    text='검색' 
                                    type='submit'
                                    width='100px'
                                    height='45px'
                                    color='#000'
                                    background='#D25959'
                                />
                            </td>
                        </tr>
                        <tr> 
                            <td className={styles.td}>
                                <div className={styles.Frame}>
                                    oo동의 oo 점포<br/>
                                    유동 인구는 oo이며<br/>
                                    oo 점포 수는 oo개이고<br/>
                                    상권 전체 대비 포화/여유 상태입니다.<br/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default AnalyzePage;