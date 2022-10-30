import money from '../image/money.png';
import article from '../image/article.png';
import {useNavigate} from 'react-router-dom';
import Checkbox from './Checkbox';
import './MakeMoney.css';

const banks = ['', 'NH농협', '국민은행', '기업은행', '신한은행', '우리은행', '하나은행', '카카오뱅크', '케이뱅크', '토스뱅크', 'SC제일', '경남은행', '광주은행', '대구은행', '부산은행', '산업은행', '수협은행', '전북은행', '제주은행', '한국씨티은행', '새마을금고', '신협', '상호저축은행', '산림조합', '우체국']

const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName('method')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
  }

const MakeMoney = () => {
    let navigate=useNavigate();

    let strtmp = banks.map((bank, index) => {
        return (
            bank
            );
      });
      console.log(strtmp);

    return (
        <div className='MakeMoney'>
            <haeder>
                <div className='name'>
                    <p className='title'>기부 만들기</p>
                </div>
                <div className='choose'>
                    <p className='choose_name'>당신이 만들 기부의 종류를 선택해 주세요</p>
                    <div className='button'>
                        <div className='check_money'>
                            <label for="money"><input className="checkbox" type="checkbox" id="money" name="method" onChange={(e) => checkOnlyOne(e.target)}/><img src={money} className="money" alt="money" />금액 기부</label>
                        </div>
                        <div className='check_article'>
                            <label for="article"><input className="checkbox" type="checkbox" id="article" name="method" onChange={(e) => checkOnlyOne(e.target)}/><img src={article} className="article" alt="article" />물품 기부</label>
                        </div>
                    </div>
                </div>
                <hr className='hr' />
                <div className='main_text'>
                    <form action="" method="" >
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