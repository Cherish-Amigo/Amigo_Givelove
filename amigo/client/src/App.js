import axios from "axios";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import Header from "./containers/Header";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import Main from "./containers/Main";
import Signup from "./containers/Signup";
import Gsignup from "./containers/Gsignup";
import Home from "./components/Home";
import Dmypage from "./containers/Dmypage";
import Gmypage from "./containers/Gmypage";
import MoneyDetail from "./containers/MoneyDetail";
import ArticleDetail from './containers/ArticleDetail';
import DonateMoney from './containers/DonateMoney';
import DonateGoods from './containers/DonateGoods';
import MakeDonate from './containers/MakeDonate';
import GLogin from './containers/GLogin';

function App() {
  const callApi = async () => {
    axios.get("/api").then((res) => {
      console.log(res.data.test);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="Gsignup" element={<Gsignup />} />
          <Route path="/Dmypage" element={<Dmypage />} />
          <Route path="/Gmypage" element={<Gmypage />} />
          <Route path="/Moneydetail" element={<MoneyDetail />} />
          <Route path="/Articledetail" element={<ArticleDetail />} />
          <Route path="/Makedonate" element={<MakeDonate />} />
          <Route path="/Donatemoney" element={<DonateMoney />} />
          <Route path="DonateGoods" element={<DonateGoods />} />
          <Route path="GLogin" element={<GLogin />} />
        </Routes>

      <Footer />
    </div>
  )
}

export default App;