import React, {useRef, useState} from 'react';
import picture1 from '../image/main-picture1.png';
import story1 from '../image/story1.png';
import story2 from '../image/story2.png';
import story3 from '../image/story3.png';
import story4 from '../image/story4.png';
import './Main.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {

    let navigate=useNavigate();

    const nextcnt = useRef(1);

    const [Search, setSearch] = useState('');
    const [Cartagori, setCartagori] = useState('');

    const searchHandler = (e) => {
        e.prevateDefault();
        setSearch(e.target.value);
    }

    const cartagoriHandler = (e) => {
        e.prevateDefault();
        setCartagori(e.target.value);
    }

    const submitHandler = (e) => {
        e.prevateDefault();
        let body = {
            search: Search,
            cartagori: Cartagori,
            nextcnt
        };
        let url = '/page/main/' + Search + '/' + Cartagori + '/' + nextcnt;
        axios
            .get(url, body)
            .then((res) => console.log(res));
    }

    return (
        <div className='Main'>
            <header>
                <form onChange={submitHandler}>
                    <div className='header'>
                        <img src={picture1} className="picture1" alt="picture1" />
                        <input type="serarch" placeholder="검색어를 입력해 주세요" name="Search" value={Search} onChange={searchHandler} /> {/*아무것도 안적히면 : all, 적혀있으면 적혀있는값*/}
                    </div>
                    <div className='contents'>
                        <div className='select'>
                            <button className='cartegori_all' name="cartagori" value={Cartagori} onChange={cartagoriHandler}>전체&nbsp;&nbsp;&nbsp;/</button>
                            <button className='cartegori_money' name="cartagori" value={Cartagori} onChange={cartagoriHandler}>금액 기부&nbsp;&nbsp;/</button>
                            <button className='cartegori_item' name="cartagori" value={Cartagori} onChange={cartagoriHandler}>물품 기부</button>
                        </div> {/* cartegory : money, item, all*/}
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
                        <button className='more' onClick={nextcnt.current += 1}>더보기</button>
                    </div>
                </form>
            </header>
        </div>
    );
};

export default Main;