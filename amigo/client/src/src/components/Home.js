import React from 'react';
import homeExp from '../image/homeExp.png';
import "./Home.css";

function Home() {

  return (
    <>
      <div id="home">
        <img src={homeExp} id="homeExp" alt='homeExp' />
      </div>
    </>
  );
}

export default Home;
