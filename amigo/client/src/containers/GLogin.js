import React, {useState} from 'react';
import axios from 'axios';
import LoginImg from '../image/LoginImg.png';
import BlackLogo from '../image/BlackLogo.png';
import {useNavigate} from 'react-router-dom';
import "./GLogin.css";

function Login() {

  let navigate=useNavigate();

  const [Id, SetId] = useState("");
  const [Password, setPassword] = useState("");

  const idHandler = (e) => {
    e.preventDefault();
    SetId(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      id: Id,
      password: Password
    };
    axios
      .post("/teamAuth/login", body)
      .then((res) => console.log(res));
  }

  return (
    <>
    <div id="loginpage">
            <img src={LoginImg} id="LoginImg" alt="LoginImg" />
        <div id="loginInput">
            <img src={BlackLogo} id="BlackLogo" alt="BlackLogo" />
            <p id="loginText">단체 로그인</p>
            <form onSubmit={submitHandler}>
              <div id="id">아이디</div>
              <input type="text" name="id" value={Id} onChange={idHandler} ></input>
              <div id="password">비밀번호</div>
              <input type="password" name="password" value={Password} onChange={passwordHandler} ></input>
              <br />
              <button id="loginButton" type="submit">로그인</button>
            </form>
            <p id="Q">아직 회원이 아닌신가요?<button onClick={()=>{ navigate('/Gsignup') }}>회원가입</button></p>
        </div>
    </div>
    </>
  );
}

export default Login;
