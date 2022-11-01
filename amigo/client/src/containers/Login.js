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
      pass: Password
    };
    axios
      .post("/userAuth/login", body)
      .then((res)=>console.log(res))
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
              <input type="password" name="pass" value={Password} onChange={passwordHandler}></input>
              <br />
              <button id="loginButton" type="submit">로그인</button>
            </form>
            <p id="Q">아직 회원이 아닌신가요?<button onClick={()=>{ navigate('/signup') }}>회원가입</button></p>
        </div>
    </div>
    </>
  );
}

export default Login;
