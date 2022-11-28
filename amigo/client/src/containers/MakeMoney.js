import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "./Checkbox";
import "./MakeMoney.css";
import axios from "axios";

const banks = [
  "은행선택",
  "NH농협",
  "국민은행",
  "기업은행",
  "신한은행",
  "우리은행",
  "하나은행",
  "카카오뱅크",
  "케이뱅크",
  "토스뱅크",
  "SC제일",
  "경남은행",
  "광주은행",
  "대구은행",
  "부산은행",
  "산업은행",
  "수협은행",
  "전북은행",
  "제주은행",
  "한국씨티은행",
  "새마을금고",
  "신협",
  "상호저축은행",
  "산림조합",
  "우체국",
];

const MakeMoney = () => {
  const [Explanation, setExplanation] = useState("");
  const [Minmoney, setMinmoney] = useState("");
  const [Bank, setBank] = useState("");
  const [Account, setAccount] = useState("");
  const [Owner, setOwner] = useState("");
  const [Category, setCategory] = useState("");

  const explanationHandler = (e) => {
    e.preventDefault();
    setExplanation(e.target.value);
  };

  const minmoneyHandler = (e) => {
    e.preventDefault();
    setMinmoney(e.target.value);
  };

  const bankHandler = (e) => {
    e.preventDefault();
    setBank(e.target.value);
  };

  const accountHandler = (e) => {
    e.preventDefault();
    setAccount(e.target.value);
  };

  const ownerHandler = (e) => {
    e.preventDefault();
    setOwner(e.target.value);
  };

  const categoryHandler = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  let navigate = useNavigate();

  let strtmp = banks.map((bank, index) => {
    return <option>{bank}</option>;
  });

  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      //   teamId: 1,
      //   name: "A 기부 단체",
      //   donationType: "money",
      //   donationDescription: Explanation,
      //   minimumContributionAmount: Minmoney,
      //   nameBank: Bank,
      //   bankAccountNumber: Account,
      //   accountHolder: Owner,
      //   category: "category1,category2",
      //   firstImage: "1",
      //   secondImage: "2",
      //   thirdImage: "3",
      teamId: 1,
      name: "E 기부 단체",
      donationType: "money",
      donationDescription:
        "E 기부 단체에서 진행하는 금액 기부 소개 페이지입니다.",
      minimumContributionAmount: 10000,
      nameBank: "농협",
      bankAccountNumber: 12345678,
      accountHolder: "이지호",
      category: "노인,빈곤,아이,복지",
      firstImage: "1.jpg",
      secondImage: "2.jpg",
      thirdImage: "3.jpg",
    };

    axios.post("/donationMoney/register", body).then((res) => {
      if (res.data.status === 202) {
        alert(res.data.message);
      } else if (res.data.status === 401) {
        alert(res.data.message);
      }
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="MakeMoney">
        <header>
          <div className="main_text">
            <p className="text">기부 설명</p>
            <textarea
              className="explanation"
              value={Explanation}
              onChange={explanationHandler}
            />
            <div className="under_text">
              <div className="text_left">
                <p className="text">최소 기부 금액</p>
                <input
                  className="minmoney"
                  type="text"
                  value={Minmoney}
                  onChange={minmoneyHandler}
                />
                <p className="text">은행명</p>
                <select className="bank" value={Bank} onChange={bankHandler}>
                  {strtmp}
                </select>
                <p className="text">계좌 번호</p>
                <input
                  className="account"
                  value={Account}
                  onChange={accountHandler}
                  type="text"
                />
                <p className="text">예금주</p>
                <input
                  className="owner"
                  value={Owner}
                  onChange={ownerHandler}
                  type="text"
                />
              </div>
              <div className="text_right">
                <p className="cartagori_text">카테고리 선택</p>
                <Checkbox />
                <p className="text">
                  이미지
                  <p className="detail_text">최대 3개까지 등록 가능합니다.</p>
                </p>
                <div className="pictures">
                  <label className="image" for="image1"></label>
                  <input id="image1" type="file" style={{ display: "none" }} />
                  <label className="image" for="image2"></label>
                  <input id="image2" type="file" style={{ display: "none" }} />
                  <label className="image" for="image3"></label>
                  <input id="image3" type="file" style={{ display: "none" }} />
                </div>
                <div className="button">
                  <button
                    className="back"
                    onClick={() => {
                      navigate("/MoneyDetail");
                    }}
                  >
                    뒤로가기
                  </button>
                  <button className="make_donation" onClick={submitHandler}>
                    기부 만들기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </form>
  );
};

export default MakeMoney;
