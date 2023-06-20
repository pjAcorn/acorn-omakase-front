import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react'
import styles from './style.module.scss';
import Button from '../../components/styled-components/Button';
import LabelBasicSelect from '../../components/LabelBasicSelect';
import regionJsonFile from './region.json';
import categoryJsonFile from './category.json';
import API from '../../API/API';

// 지역 JSON 데이터 및 시/도 목록 추출
const regionJson = JSON.parse(JSON.stringify(regionJsonFile));
const sidoList = Object.keys(regionJson);

// 업종 JSON 데이터 및 업종대분류 목록 추출
const categoryJson = JSON.parse(JSON.stringify(categoryJsonFile));
const cateLList = Object.keys(categoryJson);

// 전송할 가게 데이터 인터페이스
interface ShopData {
    addressSido: '',
    addressSigungu: '',
    category: ''
}

const AnalyzePage = () => {
    /* 지역 선택 SelectBox */
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
        if (e.currentTarget.value !== '1') {
            setIsValidSido(false);
        }
        
        for (const s in sidoList) {
            const currentSido = sidoList[s]

            if (e.currentTarget.value == currentSido) {
                setSigunguList(regionJson[currentSido])
            }
        }

        onSBChange(e);
    };

    const onChangeSigungu = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSigungu(e.currentTarget.value);
        if (e.currentTarget.value !== '1') {
            setIsValidSigungu(false);
        }

        onSBChange(e);
    };



    /* 업종 선택 SelectBox */
    const [categoryL, setCategoryL] = useState<string>(cateLList[0]);
    const [isValidCateL, setIsValidCateL] = useState<boolean>(false);

    const [cateAList, setCateAList] = useState<string[]>(['학원분류 선택', ]);
    const [categoryA, setCategoryA] = useState<string>(null);
    const [isValidCateA, setIsValidCateA] = useState<boolean>(false);

    const [cateMList, setCateMList] = useState<string[]>(['업종소분류 선택', ]);
    const [categoryM, setCategoryM] = useState<string>(null);
    const [isValidCateM, setIsValidCateM] = useState<boolean>(false);

    // const [currentCateL, setCurrentCateL] = useState<any>();
    const [currentCateA, setCurrentCateA] = useState<any>();

    let currentCateL = "";

    const onChangeCateL = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryL(e.currentTarget.value);
        if (e.currentTarget.value !== '1') {
            setIsValidCateL(false);
        }
        
        for (const c in cateLList) {
            // setCurrentCateL(cateLList[c])
            currentCateL = cateLList[c]
            console.log(currentCateL)
            if (e.currentTarget.value == currentCateL) {
                setCateAList(Object.keys(categoryJson[currentCateL][0]))
                console.log("일치")
            }
        }

        // onSBChange(e);
    };

    const onChangeCateA = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryA(e.currentTarget.value);
        if (e.currentTarget.value !== '1') {
            setIsValidCateA(false);
        }

        // if (e.currentTarget.value !== '업종대분류 선택') {
            // for (const c in cateAList) {
            //     setCurrentCateA(cateLList[c])
    
            //     if (e.currentTarget.value == currentCateA) {
            //         setCateMList(Object.keys(categoryJson[currentCateL][0]));
            //     }
            // }
        // }

        // onSBChange(e);
    };

    const onChangeCateM = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryM(e.currentTarget.value);
        if (e.currentTarget.value !== '1') {
            setIsValidCateM(false);
        }

        // onSBChange(e);
    };



    /* 데이터 전송 */
    const [shopData, setshopData] = useState<ShopData>({
        addressSido: '',
        addressSigungu: '',
        category: ''
    });
    
    const { addressSido, addressSigungu, category } = shopData;

    const onSBChange = useCallback(
        (e: { target: { name: string; value: string } }) => {
            const { name, value } = e.target;
            setshopData({
            ...shopData,
            [name]: value,
            });
        },
        [shopData]
    );

    const onAnalyzeHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleSubmit();
    }

    const handleSubmit = async () => {
        const data = { addressSido, addressSigungu, category };
        const response = await API.sendShopData(data);
        console.log(response)
    }



    /* 카카오맵 */
    useEffect(()=>{
        const kakao = (window as any).kakao;
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 3
        };
        var map = new kakao.maps.Map(container, options);
    }, [])

    return (
    <div className={styles.Container}>
            <div>
                <form>
                    <table className={styles.inputTable}>
                        <tr> 
                            <td className={styles.td__map} rowSpan={4} id="map" style={{width:"500px", height:"400px"}}>
                            </td>
                            <td className={styles.td}>
                                <label>지역</label>
                                <LabelBasicSelect
                                    text='시/도 선택'
                                    name='addressSido'
                                    id='addressSido'
                                    options={sidoList}
                                    value={sido}
                                    hasError={isValidSido}
                                    onChange={onChangeSido}
                                />
                                <LabelBasicSelect
                                    text='시/군/구 선택'
                                    name='addressSigungu'
                                    id='addressSigungu'
                                    options={sigunguList}
                                    value={sigungu}
                                    hasError={isValidSigungu}
                                    onChange={onChangeSigungu}
                                />
                            </td>
                        </tr>
                        <tr>
                            {/* <td className={styles.td}>
                                <label>업종</label>
                                <input 
                                    className={styles.input} 
                                    name='category' 
                                    onChange={onSBChange} 
                                />
                            </td> */}
                            <td className={styles.td}>
                                <label>업종</label>
                                <LabelBasicSelect
                                    text='업종대분류 선택'
                                    name='categoryL'
                                    id='categoryL'
                                    options={cateLList}
                                    value={categoryL}
                                    hasError={isValidCateL}
                                    onChange={onChangeCateL}
                                />
                                <LabelBasicSelect
                                    text='학원분류 선택'
                                    name='categoryA'
                                    id='categoryA'
                                    options={cateAList}
                                    value={categoryA}
                                    hasError={isValidCateA}
                                    onChange={onChangeCateA}
                                />
                                <LabelBasicSelect
                                    text='업종중분류 선택'
                                    name='categoryM'
                                    id='categoryM'
                                    options={cateMList}
                                    value={categoryM}
                                    hasError={isValidCateM}
                                    onChange={onChangeCateM}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.td}>
                                <Button
                                    className={styles.memBtn} 
                                    text='검색' 
                                    width='100px'
                                    height='45px'
                                    color='#000'
                                    background='#D25959'
                                    onClick={onAnalyzeHandler}
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