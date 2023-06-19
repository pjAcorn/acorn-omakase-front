import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import styles from './style.module.scss';
import Button from '../../components/styled-components/Button';
import axios from 'axios'
import LabelBasicSelect from '../../components/LabelBasicSelect';
import json from './region.json';

// 지역 JSON 데이터
const region = JSON.parse(JSON.stringify(json));
// 시/도 목록 추출
const sidoList = Object.keys(region);

const AnalyzePage = () => {
    // const [현재 상태, Setter 함수] = 상태관리함수(기본값)
    const [sido, setSido] = useState<string>(sidoList[0]);
    const [isValidSido, setIsValidSido] = useState<boolean>(false);

    const [sigunguList, setSigunguList] = useState<string[]>(['시/군/구 선택', ]);
    const [sigungu, setSigungu] = useState<string>(null);
    const [isValidSigungu, setIsValidSigungu] = useState<boolean>(false);
    
    // sido 데이터 변경 핸들러
    // sido = 현재 선택한 값
    // 현재 선택한 값이 1이 아니면 사용 불가능하도록 함
    const onChangeSido = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSido(e.currentTarget.value);
        // if (e.currentTarget.value !== '1') {
        //     setIsValidSido(false);
        // }
        
        // sidoList: [ "서울특별시", "경기도", ... ]
        // sidoList: region.keys = 제이슨 데이터의 키
        // region.서울특별시 = [중구, 종로구, 강남구, ...]

        // const selectedValue = e.currentTarget.value;

        console.log(e.currentTarget.value); // 뭐뭐광역시
        
        // e.currentTarget.value = 인덱스?
        for (const s in sidoList) {
            const currentSido = sidoList[s]

            if (e.currentTarget.value == currentSido) {
                setSigunguList(region[currentSido])
            }
        }
    };

    const onChangeSigungu = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // setSigungu(e.currentTarget.value);
    //     if (e.currentTarget.value !== '1') {
    //         setIsValidSigungu(false);
    //     }
    };







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
                                <label>지역</label>
                                <LabelBasicSelect
                                    text='시/도 선택'
                                    name='selectSido'
                                    id='selectSido'
                                    options={sidoList}
                                    value={sido}
                                    hasError={isValidSido}
                                    onChange={onChangeSido}
                                />
                                <LabelBasicSelect
                                    text='시/군/구 선택'
                                    name='selectSigungu'
                                    id='selectSigungu'
                                    options={sigunguList}
                                    value={sigungu}
                                    hasError={isValidSigungu}
                                    onChange={onChangeSigungu}
                                />
                                {/* <input className={styles.input} name='category' /> */}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.td}>
                                <label>업종</label>
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