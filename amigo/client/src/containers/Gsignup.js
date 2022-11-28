import React, {useState} from 'react';
import axios from 'axios';
import BlackLogo from '../image/BlackLogo.png';
import {useNavigate} from 'react-router-dom';
import "./Gsignup.css";

function Gsignup() {

  let navigate=useNavigate();

  const [Kname, setKname] = useState("");
  const [Ename, setEname] = useState("");
  const [Number, setNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Name, setName] = useState("");
  const [Businessnum, setBusinessnum] = useState("");
  const [Id, setId] = useState("");
  const [checkId, setcheckId] = useState(false);
  const [Password, setPassword] = useState("");

  const knameHandler = (e) => {
    e.preventDefault();
    setKname(e.target.value);
  }

  const EnameHandler = (e) => {
    e.preventDefault();
    setEname(e.target.value);
  }

  const numberHandler = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  }

  const addressHandler = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  }

  const address2Handler = (e) => {
    e.preventDefault();
    setAddress2(e.target.value);
  }

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const businessnumHandler = (e) => {
    e.preventDefault();
    setBusinessnum(e.target.value);
  }

  const idHandler = (e) => {
    e.preventDefault();
    setId(e.target.value);
  }

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      kname : Kname,
      ename: Ename,
      number: Number,
      address : Address,
      address2: Address2,
      name: Name,
      businessnum : Businessnum,
      id: Id,
      password: Password
    };
    if(checkId){
      axios
        .post("/teamAuth/join", body)
        .then((res) => {
          if(res.data.status===202) {
            alert(res.data.message);
            navigate('/GLogin');
          } else {
            alert(res.data.message);
          }
        });
    }else{
      alert("ID 중복체크를 해주세요");
    }
  }

  const buttonsubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      id: Id
    };
    console.log("ID 중복 확인");
    axios
      .post("/teamAuth/check", body)
      .then((res)=> {
        console.log(res.data.status);
        if (res.data.status === 201){
          setcheckId(true);
          alert("사용 가능한 ID 입니다.");
        }else {
          setcheckId(false);
          alert("사용 불가능한 ID 입니다.");
        }
      });
  }

  return (
    <>
      <div id="gsignup">
        <div id="ginput">
          <img src={BlackLogo} id="BlackLogo" alt="BlackLogo" />
          <p id="gsignupText">단체 회원가입</p>
          <form onSubmit={submitHandler}>
            <div id="kname">기업 한국명</div>
            <input name="kname" value={Kname} onChange={knameHandler}></input>
            <div id="ename">기업 영문명</div>
            <input name="ename" value={Ename} onChange={EnameHandler}></input>
            <div id='number'>연락처</div>
            <input placeholder="'-'포함하여 작성" name='number' value={Number} onChange={numberHandler}></input>
            <div id='address'>주소</div>
            <input id="addressInput" name="address" value={Address} onChange={addressHandler}></input>
            <button className="ckbutton">주소찾기</button> <br />
            <input placeholder='상세주소' className='address2' name="address2" value={Address2} onChange={address2Handler}></input>
            <div id="name">대표자명</div>
            <input placeholder="한국지사 대표자명 입력" name="name" value={Name} onChange={nameHandler}></input>
            <div id="businessNum">사업자 등록번호</div>
            <input placeholder="'-'포함하여 작성" name="businessnum" value={Businessnum} onChange={businessnumHandler}></input>
            <div id="gid">아이디</div>
            <input id="idInput" name="id" value={Id} onChange={idHandler}></input>
            {/* <form onSubmit={buttonsubmitHandler}> */}
              {/* <button className="ckbutton" name="id" value={Id} onChange={idHandler} >중복확인</button> */}
              <button className="ckbutton" onClick={buttonsubmitHandler} >중복확인</button>  
            {/* </form> */}
            <div id="gpw">비밀번호</div>
            <input type="password" name="password" value={Password} onChange={passwordHandler}></input>
            <br />
            <button id="signup">회원가입</button>
          </form>
          <p id="Q">이미 회원이신가요?<button onClick={()=>{ navigate('/login') }}>로그인</button></p>
          <p id="Q">개인 회원가입이신가요?<button onClick={()=>{ navigate('/signup') }}>개인 회원가입</button></p>
        </div>
      </div>
    </>
  );
}

export default Gsignup;
