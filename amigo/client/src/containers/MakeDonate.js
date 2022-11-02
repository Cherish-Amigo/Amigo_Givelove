import React, {useState} from 'react';
import money from '../image/money.png';
import article from '../image/article.png';
import MakeMoney from './MakeMoney';
import MakeArticle from './MakeArticle';
import './MakeDonate.css';

const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName('method')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
  }

const MakeDonate = () => {

    const [check, setCheck] = useState(0)

    return (
        <div className='MakeDonate'>
            <haeder>
                <div className='name'>
                    <p className='title'>기부 만들기</p>
                </div>
                <div className='choose'>
                    <p className='choose_name'>당신이 만들 기부의 종류를 선택해 주세요</p>
                    <div className='button'>
                        <div className='check_money'>
                            <label for="money"><input className="checkbox" type="radio" id="money" name="method" checked="checked" onChange={(e) => checkOnlyOne(e.target)} onClick={() => {setCheck(0)}}/><img src={money} className="money" alt="money" />금액 기부</label>
                        </div>
                        <div className='check_article'>
                            <label for="article"><input className="checkbox" type="radio" id="article" name="method" onChange={(e) => checkOnlyOne(e.target)} onClick={() => {setCheck(1)}}/><img src={article} className="article" alt="article" />물품 기부</label>
                        </div>
                    </div>
                </div>
                <hr className='hr' />
                {
                    check==0 ? <MakeMoney /> : <MakeArticle />
                }
            </haeder>
        </div>
    )
}

export default MakeDonate;