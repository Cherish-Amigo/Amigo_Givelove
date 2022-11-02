import React, { useState }  from "react";
import axios from 'axios';
import "./DonateGoods.css";
// import DaumPostcode from 'react-daum-postcode';
import Donateheader from "../components/Donateheader";
import Inventory from "./Inventory";
import Post from '../components/Post';

function DonateGoods() {
  const [enroll_company, setEnroll_company] = useState({
    address:'',
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
      setEnroll_company({
          ...enroll_company,
          [e.target.name]:e.target.value,
      })
      e.preventDefault();
      setEnroll_company(e.target.value);
  }

  const handleComplete = (data) => {
      setPopup(!popup);
  }

  const [Donatename, SetDonatename] = useState("");
  const [Birthday, SetBirthday] = useState("");
  const [Phonenumber, SetPhonenumber] = useState("");
  const [Address2, SetAddress2] = useState("");

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

  const address2Handler = (e) => {
    e.preventDefault();
    SetAddress2(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      donatename: Donatename,
      birthday : Birthday,
      phonenumber: Phonenumber,
      address : enroll_company,
      address2: Address2
    };
    axios
      .post("/item/register", body)
      .then((res)=>console.log(res));
  }

  return (
    <>
        <Donateheader />
        <div id="donategoods">
          <form onSubmit={submitHandler}>
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
                <input placeholder="ex) 01012345678" name="phonenumber" value={Phonenumber} onChange={phonenumberHandler}></input> 
                <p id="numtext">‘-’ 를 제외한 숫자만 입력해 주세요.</p>
              </div>
            </div>
            <div id="donation">
              <div id="text">물품 기증</div>
              <p class="exp">기부할 물품 목록(1개 이상)</p>
              <Inventory />
              <p class="exp" id="adrstext">주소</p>
              <input id='address' type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                          <button id='find' onClick={handleComplete}>찾기</button><br />
                          {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
              <input type="text" id="detailaddress" name="address2" value={Address2} onChange={address2Handler} ></input>
            </div>
          </form>
          <button id="donate">기부하기</button>
          <p id="warnning">※ 단체의 상황과 물건상태에 따라 거부될 수 도 있습니다. ※</p>
        </div>
    </>
  );
}

export default DonateGoods;