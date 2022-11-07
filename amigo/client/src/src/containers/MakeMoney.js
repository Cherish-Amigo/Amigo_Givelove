import {useNavigate} from 'react-router-dom';
import Checkbox from './Checkbox';
import './MakeMoney.css';

const banks = ['은행선택', 'NH농협', '국민은행', '기업은행', '신한은행', '우리은행', '하나은행', '카카오뱅크', '케이뱅크', '토스뱅크', 'SC제일', '경남은행', '광주은행', '대구은행', '부산은행', '산업은행', '수협은행', '전북은행', '제주은행', '한국씨티은행', '새마을금고', '신협', '상호저축은행', '산림조합', '우체국']

const MakeMoney = () => {
    let navigate=useNavigate();

    let strtmp = banks.map((bank, index) => {
        return (
            <option>{bank}</option>
        );
    });

    return (
        <div className='MakeMoney'>
            <haeder>
                <div className='main_text'>
                    <form action="http://localhost:5000/" method="" >
                        <p className='text'>기부 설명</p>
                        <textarea className='explanation' />
                        <div className='under_text'>
                            <div className='text_left'>
                                <p className='text'>최소 기부 금액</p>
                                <input className='text_box' type="text" />
                                <p className='text'>은행명</p>
                                <select className="bank">{strtmp}</select>
                                <p className='text'>계좌 번호</p>
                                <input className='text_box' type="text" />
                                <p className='text'>예금주</p>
                                <input className='text_box' type="text" />
                            </div>
                            <div className='text_right'>
                                <p className='cartagori_text'>카테고리 선택</p>
                                <Checkbox />
                                <p className='text'>이미지<p className='detail_text'>최대 3개까지 등록 가능합니다.</p></p>
                                <div className='pictures'>
                                    <label className='image' for='image1'>
                                    </label>
                                    <input id='image1' type='file' style={{display: "none"}} />
                                    <label className='image' for='image2'>
                                    </label>
                                    <input id='image2' type='file' style={{display: "none"}} />
                                    <label className='image' for='image3'>
                                    </label>
                                    <input id='image3' type='file' style={{display: "none"}} />
                                </div>
                                <div className='button'>
                                    <button className='back' onClick={()=>{ navigate('/MoneyDetail') }}>뒤로가기</button>
                                    <button className='make_donation'>기부 만들기</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </haeder>
        </div>
    )
}

export default MakeMoney;