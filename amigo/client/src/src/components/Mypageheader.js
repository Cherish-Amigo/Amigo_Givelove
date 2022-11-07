import React from "react";
import "./Mypageheader.css";


function Mypageheader() {
  return (
    <div id="myheaderbox">
        <div id="myheader">
            <p>MY페이지에서<br/>회원정보를 확인하고 수정 할 수 있습니다.</p>
            <button>로그아웃</button>
        </div>
    </div>
  );
}

export default Mypageheader;
