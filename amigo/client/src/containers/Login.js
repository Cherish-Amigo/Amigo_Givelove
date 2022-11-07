import React, { useState } from 'react';
import axios from 'axios';
import LoginImg from '../image/LoginImg.png';
import BlackLogo from '../image/BlackLogo.png';
import {useNavigate} from 'react-router-dom';
import "./Login.css";

function Login() {
  
  let navigate=useNavigate();

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

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
      id: Id,
      password: Password
    };
    axios
      .post("/userAuth/login", body)
      .then((res) => {
        if(res.status===203) {
          alert("로그인 성공");
        } else if(res.status===402){
          alert("아이디 또는 비밀번호가 틀렸습니다.");
        }
      });
  };

  return (
    <>
    <div id="loginpage">
            <img src={LoginImg} id="LoginImg" alt="LoginImg" />
        <div id="loginInput">
            <img src={BlackLogo} id="BlackLogo" alt="BlackLogo" />
            <p id="loginText">로그인</p>
            <form onSubmit={submitHandler}>
              <div id="id">아이디</div>
              <input type="text" name="id" value={Id} onChange={idHandler}></input>
              <div id="password">비밀번호</div>
              <input type="password" name="password" value={Password} onChange={passwordHandler}></input>
              <br />
              <button id="loginButton" type="submit">로그인</button>
            </form>
            <p id="Q">아직 회원이 아닌신가요?<button onClick={()=>{ navigate('/Signup') }}>회원가입</button></p>
            <p id="G">단체 회원 이신가요?<button className="Group_login" onClick={()=>{ navigate('/Glogin') }}>단체 로그인</button></p>
        </div>
    </div>
    </>
  );
}

export default Login;
