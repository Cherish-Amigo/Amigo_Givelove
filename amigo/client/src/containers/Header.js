import React from 'react';
import NavLogo from '../image/BlackLogo.png';
import "./Header.css";
import {useNavigate} from 'react-router-dom';

function Header() {

  let navigate=useNavigate();
  //https://url.kr/d6bhjl
  
  return (
    <div id='Header'>
      <div id='nav-container'>
        <div id='logo'>
          <img src={NavLogo} id='BlackLogo' alt="BlackLogo" />
        </div>
        <div id='MenuBar'>
          <p className='menu' onClick={()=>{ navigate('/home') }}>홈</p>
          <p className='menu' onClick={()=>{ navigate('/Main') }}>기부</p>
          <p className='menus' onClick={()=>{ navigate('/MakeDonate') }}>기부만들기</p>
          <p id='login' onClick={()=>{ navigate('/login') }}>로그인</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
