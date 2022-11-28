import React from "react";
import "./Dmypage.css";

import Mypageheader from "../components/Mypageheader";

function Dmypage() {
  return (
    <>
      <Mypageheader />
        <div id="dmypage">
            <div id="information">
                <p>회원정보</p>
            </div>
            <div id="indivinfo">
                <div id="infoId">
                    <div className="text">아이디</div>
                    <div className="info">test2</div>
                </div> <br /> <br />
                <div id="infoPw">
                    <div className="text">비밀번호</div>
                    <div className="info">test2</div>
                    <button>비밀번호 변경</button>
                </div> <br />
                <div id="infoName">
                    <div className="text">이름</div>
                    <div className="info">홍길동</div>
                    <button>이름 수정</button>
                </div> <br />
                <div id="infoNum">
                    <div className="text">전화번호</div>
                    <div className="info">givelove@naver.com</div>
                    <button>전화번호 변경</button>
                </div> <br />
            </div>
        </div>
    </>
  );
}

export default Dmypage;
