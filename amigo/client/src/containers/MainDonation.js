import story1 from '../image/story1.png';
import story2 from '../image/story2.png';
import story3 from '../image/story3.png';
import story4 from '../image/story4.png';
import { useNavigate } from 'react-router-dom';
import './MainDonation.css';

const MainDonation = () => {
    
    let navigate=useNavigate();

    return (
        <div className='MainDonation'>
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
        </div>
    )
}

export default MainDonation;