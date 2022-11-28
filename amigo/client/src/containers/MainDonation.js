import story1 from '../image/story1.png';
import story2 from '../image/story2.png';
import story3 from '../image/story3.png';
import story4 from '../image/story4.png';
import { useNavigate } from 'react-router-dom';
import './MainDonation.css';
import { useEffect, useState } from 'react';

const MainDonation = ({post}) => {
    
    let navigate=useNavigate();

    const [data,setData] = useState([{}])
    const detailPage = (e) => {
        if (e === "money"){
            navigate('/MoneyDetail');
        }else if (e === "item"){
            navigate('/ArticleDetail');
        }else {
            navigate('/Main');
        }
    }

    const image = [story1, story2, story3, story4];

    // useEffect(()=>{
    //     setData(post)
    //     console.log(data)
    // },[post])

    return (
        <div className='MainDonation'>
            <div className='donation'>
                <div className='add'>
                    <img src={story1} className="story" alt="story" onClick={()=>{ navigate('/MoneyDetail') }}/>
                    <p className='agency'>굿네이버스</p>
                    <p className='tag'>#다문화 가정</p>
                </div>
                <div className='add'>
                    <img src={story2} className="story" alt="story" onClick={() => { navigate('/ArticleDetail')}} />
                    <p className='agency'>월드비전</p>
                    <p className='tag'>#전쟁 #고아</p>
                </div>
                <div className='add'>
                    <img src={story3} className="story" alt="story" onClick={() => { navigate('/MoneyDetail')}} />
                    <p className='agency'>대한적십자</p>
                    <p className='tag'>#어린이</p>
                </div>
                <div className='add'>
                    <img src={story4} className="story" alt="story" onClick={() => { navigate('/ArticleDetail')}} />
                    <p className='agency'>초록우산</p>
                    <p className='tag'>#한부모가정</p>
                </div>
                {
                    post.map((i) => (
                        <div className='add' key={i.idx + "," + i.donationType} id={i.idx + "," + i.donationType}>
                            <img src={image[i.idx%4]} className="story" alt='story' onClick={() => detailPage(i.donationType)} />
                            <div className='agency'>{i.name}</div>
                            <div className='tag'>{i.TeamId}</div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default MainDonation;