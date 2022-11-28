import React, { useCallback, useRef, useState } from "react";
import "./MakeArticle.css";
import { useNavigate } from "react-router-dom";
import Checkbox from "./Checkbox";
import CollectionMethod from "./CollectionMethod";
import Post from "../components/Post";
import axios from "axios";

const MakeArticle = () => {
  const [save, setSave] = useState("");

  const [word, setWord] = useState(0);

  const [Explanation, setExplanation] = useState("");

  const nextId = useRef(1);

  const onInsert = useCallback(
    (text) => {
      const saves = {
        id: nextId.current,
        text,
      };
      setSave(save.concat(saves));
      nextId.current += 1;
    },
    [save]
  );
  const [text, setText] = useState("");

  const onChange = useCallback((e) => {
    setWord(1);
    setText(e.target.vale);
  });

  const onSubmit = useCallback(
    (e) => {
      onInsert(text);
      setText("");
      e.preventDefault();
    },
    [onInsert, text]
  );

  let navigate = useNavigate();

  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = (data) => {
    setPopup(!popup);
  };

  const explanationHandler = (e) => {
    e.preventDefault();
    setExplanation(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      //   teamId: 1,
      //   name: "B 기부단체",
      //   donationType: "item",
      //   donationDescription: Explanation,
      //   listItems: "사과,포도,바나나",
      //   address: enroll_company.address,
      //   donationCollectionMethod: "직접수거",
      //   category: "1,2,3,4",
      //   firstImage: "1",
      //   secondImage: "2",
      //   thirdImage: "3"
      teamId: 1,
      name: "J 기부단체",
      donationType: "item",
      donationDescription: "J 기부단체에서 진행하는 물품 기부입니다.",
      listItems: "목도리,장갑,종이,연필",
      address: "대구소프트웨어고등학교",
      donationCollectionMethod: "직접수거",
      category: "기부,노인,어린이,아동,글로벌",
      firstImage: "1",
      secondImage: "2",
      thirdImage: "3",
    };

    axios.post("/donationItem/register", body).then((res) => {
      if (res.data.status === 202) {
        alert(res.data.message);
      } else if (res.data.status === 401) {
        alert(res.data.message);
      }
    });
  };

  // const [fileImage, setFileImage] = useState("");

  // // 파일 저장
  // const saveFileImage = (e) => {
  //     setFileImage(URL.createObjectURL(e.target.files[0]));
  // };

  // // 파일 삭제
  // const deleteFileImage = () => {
  //     URL.revokeObjectURL(fileImage);
  //     setFileImage("");
  // };
  return (
    <div className="MakeArticle">
      <header>
        <div className="main_text">
          <form
            action="http://localhost:5000/donationItem/register"
            method="post"
          >
            <p className="text">기부 설명</p>
            <textarea
              className="explanation"
              value={Explanation}
              onChange={explanationHandler}
            />
            <p className="text">기부 받고 싶은 물품 목록</p>
            <div className="give_thing" onSubmit={onSubmit}>
              <input className="thing" onChange={onChange} value={text} />
              <button className="add">추가</button>
              {word === 1 ? (
                <div>
                  <p>{save}</p>
                </div>
              ) : null}
            </div>
            <p className="text">주소</p>
            <div className="juso">
              <input
                className="address"
                type="text"
                required={true}
                name="address"
                onChange={handleInput}
                value={enroll_company.address}
              />
              <button className="find" onClick={handleComplete}>
                찾기
              </button>
              {popup && (
                <Post
                  company={enroll_company}
                  setcompany={setEnroll_company}
                ></Post>
              )}
            </div>
            <input className="address2" />
            <div className="cartagori">
              <div className="check-container2">
                <p className="cartagori_text">기부 수거 방법</p>
                <CollectionMethod />
              </div>
              <div>
                <p className="cartagori_text">카테고리 선택</p>
                <Checkbox />
              </div>
            </div>
            <p className="text">
              이미지<p className="detail_text">최대 3개까지 등록 가능합니다.</p>
            </p>
            <div className="under_text">
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
          </form>
        </div>
      </header>
    </div>
  );
};

export default MakeArticle;
