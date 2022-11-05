import React, {useState} from "react";
import axios from 'axios';
import "./DonateMoney.css";
import {useNavigate} from 'react-router-dom';
import Donateheader from "../components/Donateheader";

function DonateMoney() {
  
  let navigate=useNavigate();

  const [Donatename, SetDonatename] = useState("");
  const [Birthday, SetBirthday] = useState("");
  const [Phonenumber, SetPhonenumber] = useState("");
  const [Money, SetMoney] = useState("");
  const [Bank, SetBank] = useState("");
  const [Banknumber, SetBanknumber] = useState("");
  const [Ohtername, SetOthername] = useState("");
  const [Otherbirthday, SetOtherbirthday] = useState("");
  const [Button, SetButton] = useState("");

  const donatenameHandler = (e) => {
    e.preventDefault();
    SetDonatename(e.target.value);
  }

  const birthdayHandler = (e) => {
    e.preventDefault();
    SetBirthday(e.target.value);
  }

  const phonenumberHandler = (e) => {
    e.preventDefault();
    SetPhonenumber(e.target.value);
  }

  const moneyHandler = (e) => {
    e.preventDefault();
    SetMoney(e.target.value);
  }

  const bankHandler = (e) => {
    e.preventDefault();
    SetBank(e.target.value);
  }

  const banknumberHandler = (e) => {
    e.preventDefault();
    SetBanknumber(e.target.value);
  }

  const othernameHandler = (e) => {
    e.preventDefault();
    SetOthername(e.target.value);
  }

  const otherbirthdayHandler = (e) => {
    e.preventDefault();
    SetOtherbirthday(e.target.value);
  }
  
  const buttonHandler = (e) => {
    e.preventDefault();
    SetButton(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      donatename : Donatename,
      birthday : Birthday,
      phonenumber: Phonenumber,
      money: Money,
      bank: Bank,
      othernmae: Ohtername,
      Otherbirthday: Otherbirthday,
      button : Button
    }
    axios
      .post("/money/register", body)
      .then((res)=>console.log(res));
  }

  return (
    <>
      <Donateheader />
      <div id="donatemoney">
        <form onSubmit={submitHandler} >
          <div id="userinfo">
            <div id="text">기부자 정보</div>
            <div class="info">
              <div>기부자명 </div>
              <input name="donatename" value={Donatename} onChange={donatenameHandler} ></input> 
            </div> 
            <div class="info">
              <div>생년월일 </div>
              <input placeholder="ex) 19980101" name="birthday" value={Birthday} onChange={birthdayHandler} ></input> 
            </div>
            <div class="info">
              <div>전화번호 </div>
              <input placeholder="ex) 01012345678" name="phonenumber" value={Phonenumber} onChange={phonenumberHandler} ></input> 
              <p id="numtext">‘-’ 를 제외한 숫자만 입력해 주세요.</p>
            </div>
          </div>
          <div id="payment">
            <div id="text">기부금 결제</div>
            <div class="info">
              <div>기부금액 </div>
              <input name="money" value={Money} onChange={moneyHandler} ></input>
              <p id="amounttext">원</p>
            </div>
            <div class="info">
              <div>은행명 </div>
              <select>
                <option>은행선택</option>
                <optgroup class="text" label="국내은행" />
                <option value={Bank} name="bank" onChange={bankHandler} >기업은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >농협은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >신한은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >산업은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >우리은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >한국씨티은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >하나은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >SC제일은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >경남은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >광주은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >대구은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >부산은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >새마을금고</option>
                <option value={Bank} name="bank" onChange={bankHandler} >신협중앙회</option>
                <option value={Bank} name="bank" onChange={bankHandler} >우체국</option>
                <option value={Bank} name="bank" onChange={bankHandler} >전북은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >제주은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >케이뱅크</option>
                <option value={Bank} name="bank" onChange={bankHandler} >토스뱅크</option>
                <optgroup />
                <optgroup class="text" label="해외은행" />
                <option value={Bank} name="bank" onChange={bankHandler} >도이치은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >뱅크오브아메리카</option>
                <option value={Bank} name="bank" onChange={bankHandler} >중국건설은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >중국공상은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >중국은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >BNP파리바은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >HSBC은행</option>
                <option value={Bank} name="bank" onChange={bankHandler} >JP모간체이스은행</option>
                <optgroup />
              </select>
            </div>
            <div class="info">
              <div>계좌번호 </div>
              <input name="banknumber" value={Banknumber} onChange={banknumberHandler} ></input> 
              <p id="acnumtext">※ 기호 “-”없이 숫자만 입력하세요.<br/>휴대폰 번호로 된 계좌는 자동이체 되지 않습니다.</p>
            </div>
            <div class="info">
              <div>예금주 성명 </div>
              <input name="othername" value={Ohtername} onChange={othernameHandler} ></input> 
            </div>
            <div class="info">
              <div>예금주 생년월일 </div>
              <input placeholder="ex) oooo.oo.oo" name="otherbirthday" value={Otherbirthday} onChange={otherbirthdayHandler} ></input> 
            </div>
          </div>
          <button name="button" value={Button} onChange={buttonHandler} >기부하기</button>
        </form>
      </div>
    </>
  );
}

export default DonateMoney;