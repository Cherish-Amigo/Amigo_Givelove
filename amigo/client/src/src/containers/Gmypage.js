import React from "react";
import "./Gmypage.css";

import Mypageheader from "../components/Mypageheader";

function Gmypage() {
  return (
    <>
      <Mypageheader />
        <div id="gmypage">
            <div id="information">
                <p>단체정보</p>
            </div>
            <div id="Groupinfo">
                <div id="infoId">
                    <div className="text">아이디</div>
                    <div className="info">test2</div>
                </div> <br /> <br />
                <div id="infopw">
                    <div className="text">비밀번호</div>
                    <div className="info">test2</div>
                    <button>비밀번호 변경</button>
                </div> <br />
                <div id="infoKnam">
                    <div className="text">한국명</div>
                    <div className="info">test2</div>
                    <button>변경</button>
                </div> <br />
                <div id="infoEnam">
                    <div className="text">영문명</div>
                    <div className="info">test2</div>
                    <button>변경</button>
                </div> <br />
                <div id="infoNum">
                    <div className="text">연락처</div>
                    <div className="info">test2</div>
                    <button>연락처 변경</button>
                </div> <br />
                <div id="infoAdrs">
                    <div className="text">주소</div>
                    <div className="info">test2</div>
                    <button>주소 변경</button>
                </div> <br />
                <div id="infoCeo">
                    <div className="text">대표자명</div>
                    <div className="info">test2</div>
                    <button>대표자명 변경</button>
                </div> <br />
                <div id="infoBnum">
                    <div className="text">사업자등록번호</div>
                    <div className="info">test2</div>
                    <button>변경</button>
                </div> <br />
            </div>
        </div>
    </>
  );
}

export default Gmypage;