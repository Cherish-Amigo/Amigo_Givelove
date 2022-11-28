import React, { useRef, useState } from "react";
import picture1 from "../image/main-picture1.png";
import "./Main.css";
import axios from "axios";
import MainDonation from "./MainDonation";

const Main = () => {
  const nextcnt = useRef(0);

  const [Search, setSearch] = useState("all");
  const [Cartagori, setCartagori] = useState("all");

  const [Reset, setReset] = useState(false);

  const [post, setPost] = useState([]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const cartagoriHandler = (e) => {
    setCartagori(e.target.value);
    setReset(true);
    nextcnt.current = 1;
    submitHandler();
  };

  const removeButton = (e) => {
    const moreButton = document.getElementById("more");
    console.log(e);
    if (e) {
      // moreButton.style.display = 'none';
      moreButton.disabled = true;
    } else {
      // moreButton.style.display = 'block';
      moreButton.disabled = false;
    }
  };

  const addPage = (e) => {
    nextcnt.current += 1;
    submitHandler();
  };

  const submitHandler = () => {
    console.log(nextcnt.current);
    let url = `/page/main/${Search}/${Cartagori}/${nextcnt.current}`;
    axios.get(url).then((res) => {
      if (res.data.status === 200) {
        if (Reset) {
          setPost([...res.data.data]);
        } else {
          setPost((prev) => [...prev, ...res.data.data]);
        }
        // 로컬스토리지 불러오기
        // const value = localStorage.getItem("is_login");

        // setPost([...res.data.data])
        removeButton(res.data.end);
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <div className="Main">
      <header>
        {/* <form onChange={submitHandler}> */}
        {/* <form onSubmit={submitHandlerSa` mple}> */}
        <div className="header">
          <img src={picture1} className="picture1" alt="picture1" />
          <input
            type="serarch"
            placeholder="검색어를 입력해 주세요"
            name="Search"
            value={Search}
            onChange={searchHandler}
          />
        </div>
        <div className="contents">
          <div className="select">
            <button
              className="cartegori_all"
              name="cartagori"
              value={"all"}
              onClick={cartagoriHandler}
            >
              전체&nbsp;&nbsp;&nbsp;/
            </button>
            <button
              className="cartegori_money"
              name="cartagori"
              value={"money"}
              onClick={cartagoriHandler}
            >
              금액 기부&nbsp;&nbsp;/
            </button>
            <button
              className="cartegori_item"
              name="cartagori"
              value={"item"}
              onClick={cartagoriHandler}
            >
              물품 기부
            </button>
          </div>{" "}
          {/* cartegory : money, item, all*/}
          <div className="things">
            <MainDonation post={post} />
          </div>
        </div>
        <button className="more" id="more" onClick={addPage}>
          더보기
        </button>
        {/* </form> */}
      </header>
    </div>
  );
};

export default Main;
