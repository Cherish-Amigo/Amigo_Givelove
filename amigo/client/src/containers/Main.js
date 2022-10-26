import React, { useState } from 'react';
import picture1 from '../image/main-picture1.png';
import story1 from '../image/story1.png';
import story2 from '../image/story2.png';
import story3 from '../image/story3.png';
import story4 from '../image/story4.png';
import './Main.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    let navigate=useNavigate();

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className='Main'>
            <header>
                <div className='header'>
                    <img src={picture1} className="picture1" alt="picture1" />
                    <input type="serarch" placeholder="검색어를 입력해 주세요" />
                </div>
                <div className='contents'>
                    <p className='select'>전체 / 금액 기부 / 물품 기부</p>
                    <div className='donation'>
                        <div className='add'>
                            <img src={story1} className="story" alt="story" onClick={()=>{ navigate('/MoneyDetail') }}/>
                            <p className='agency'>굿네이버스</p>
                            <p className='tag'>#다문화 가정</p>
                        </div>
                        <div className='add'>
                            <img src={story2} className="story" alt="story" />
                            <p className='agency'>굿네이버스</p>
                            <p className='tag'>#다문화 가정</p>
                        </div>
                        <div className='add'>
                            <img src={story3} className="story" alt="story" />
                            <p className='agency'>굿네이버스</p>
                            <p className='tag'>#다문화 가정</p>
                        </div>
                        <div className='add'>
                            <img src={story4} className="story" alt="story" />
                            <p className='agency'>굿네이버스</p>
                            <p className='tag'>#다문화 가정</p>
                        </div>
                    </div>
                    <button className='more'>더보기</button>
                </div>
            </header>
        </div>
    );
};

export default Main;