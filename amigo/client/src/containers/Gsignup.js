import React, {useState} from 'react';
import axios from 'axios';
import BlackLogo from '../image/BlackLogo.png';
import {useNavigate} from 'react-router-dom';
import "./Gsignup.css";

function Gsignup() {

  let navigate=useNavigate();

  const [Kname, setKname] = useState("");
  const [Ename, setEname] = useState("");
  const [Number, setNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Name, setName] = useState("");
  const [Businessnum, setBusinessnum] = useState("");
  const [Id, setId] = useState("");
  const [checkId, setcheckId] = useState(false);
  const [Password, setPassword] = useState("");

  const knameHandler = (e) => {
    e.preventDefault();
    setKname(e.target.value);
  }

  const EnameHandler = (e) => {
    e.preventDefault();
    setEname(e.target.value);
  }

  const numberHandler = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  }

  const addressHandler = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  }

  const address2Handler = (e) => {
    e.preventDefault();
    setAddress2(e.target.value);
  }

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const businessnumHandler = (e) => {
    e.preventDefault();
    setBusinessnum(e.target.value);
  }

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
      kname : Kname,
      ename: Ename,
      number: Number,
      address : Address,
      address2: Address2,
      name: Name,
      businessnum : Businessnum,
      id: Id,
      password: Password
    };
    if(checkId){
      axios
        .post("/teamAuth/join", body)
        .then((res) => {
          if(res.data.status===202) {
            alert(res.data.message);
            navigate('/GLogin');
          } else {
            alert(res.data.message);
          }
        });
    }else{
      alert("ID ??????????????? ????????????");
    }
  }

  const buttonsubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      id: Id
    };
    console.log("ID ?????? ??????");
    axios
      .post("/teamAuth/check", body)
      .then((res)=> {
        console.log(res.data.status);
        if (res.data.status === 201){
          setcheckId(true);
          alert("?????? ????????? ID ?????????.");
        }else {
          setcheckId(false);
          alert("?????? ???????????? ID ?????????.");
        }
      });
  }

  return (
    <>
      <div id="gsignup">
        <div id="ginput">
          <img src={BlackLogo} id="BlackLogo" alt="BlackLogo" />
          <p id="gsignupText">?????? ????????????</p>
          <form onSubmit={submitHandler}>
            <div id="kname">?????? ?????????</div>
            <input name="kname" value={Kname} onChange={knameHandler}></input>
            <div id="ename">?????? ?????????</div>
            <input name="ename" value={Ename} onChange={EnameHandler}></input>
            <div id='number'>?????????</div>
            <input placeholder="'-'???????????? ??????" name='number' value={Number} onChange={numberHandler}></input>
            <div id='address'>??????</div>
            <input id="addressInput" name="address" value={Address} onChange={addressHandler}></input>
            <button className="ckbutton">????????????</button> <br />
            <input placeholder='????????????' className='address2' name="address2" value={Address2} onChange={address2Handler}></input>
            <div id="name">????????????</div>
            <input placeholder="???????????? ???????????? ??????" name="name" value={Name} onChange={nameHandler}></input>
            <div id="businessNum">????????? ????????????</div>
            <input placeholder="'-'???????????? ??????" name="businessnum" value={Businessnum} onChange={businessnumHandler}></input>
            <div id="gid">?????????</div>
            <input id="idInput" name="id" value={Id} onChange={idHandler}></input>
            {/* <form onSubmit={buttonsubmitHandler}> */}
              {/* <button className="ckbutton" name="id" value={Id} onChange={idHandler} >????????????</button> */}
              <button className="ckbutton" onClick={buttonsubmitHandler} >????????????</button>  
            {/* </form> */}
            <div id="gpw">????????????</div>
            <input type="password" name="password" value={Password} onChange={passwordHandler}></input>
            <br />
            <button id="signup">????????????</button>
          </form>
          <p id="Q">?????? ???????????????????<button onClick={()=>{ navigate('/login') }}>?????????</button></p>
          <p id="Q">?????? ?????????????????????????<button onClick={()=>{ navigate('/signup') }}>?????? ????????????</button></p>
        </div>
      </div>
    </>
  );
}

export default Gsignup;
