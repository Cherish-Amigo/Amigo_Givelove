import React, {useState} from 'react';
import axios from 'axios';
import divSign from '../image/divSign.png';
import BlackLogo from '../image/BlackLogo.png';
import {useNavigate} from 'react-router-dom';
import "./Signup.css";

function Signup() {

  let navigate=useNavigate();

  const [Id, setId] = useState("");
  const [checkId, setcheckId] = useState(false);
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");

  const idHandler = (e) => {
    e.preventDefault();
    setId(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const numberHandler = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      id: Id,
      password : Password,
      name : Name,
      number: Number
    };

    if (checkId){
      axios
        .post("/userAuth/join", body)
        .then((res) => {
          if(res.data.status===202) {
            alert(res.data.message);
            navigate('/Login');
          } else if(res.data.status===401){
            alert(res.data.message);
          }
        });
    }else {
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
      .post("/userAuth/check", body)
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
    <div id="signupPage">
            <img src={divSign} id="divSign" alt="divSign" />
        <div id="signupInput">
            <img src={BlackLogo} id="BlackLogo" alt="BlackLogo" />
            <p id="signupText">개인 회원가입</p>
            <form onSubmit={submitHandler}>
              <div id="id">아이디</div>
              <input id="idInput" name="id" value={Id} onChange={idHandler}></input>
              {/* <form onSubmit={buttonsubmitHandler}> */}
                <button id="ck" onClick={buttonsubmitHandler} >중복확인</button>  
              {/* </form> */}
              <div id="password">비밀번호</div>
              <input id="inputTxt" type="password" name="password" value={Password} onChange={passwordHandler}></input>
              <div>이름</div>
              <input id="inputTxt" name="name" value={Name} onChange={nameHandler}></input>
              <div>전화번호</div>
              <input id="inputTxt" type="num" placeholder='숫자만 입력' name="number" value={Number} onChange={numberHandler}></input>
              <br />
              <button id="signupButton">회원가입</button>
            </form>
            <p id="Q">이미 회원이신가요?<button onClick={()=>{ navigate('/login') }}>로그인</button></p>
            <p id="Q">단체 회원가입이신가요?<button onClick={()=>{ navigate('/gsignup') }}>단체 회원가입</button></p>
        </div>
    </div>
    </>
  );
}

export default Signup;
