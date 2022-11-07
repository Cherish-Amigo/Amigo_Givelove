import footerlogo from "../image/footerlogo.png";
import schoollogo from "../image/school-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <header>
        <div className="main">
          <img src={footerlogo} className="logo" alt="logo" />
          <hr className="hr" />
        </div>
        <br />
        <div className="imformation">
          <div className="developer">
            <p className="title">개발자 이메일</p>
            <p className="name">강보민 gbm5959@gmail.com</p>
            <p className="name">황인영 hwang5375@gmail.com</p>
            <p className="name">이지호 i43915@dgsw.hs.kr</p>
          </div>
          <div className="design">
            <p className="title">디자이너</p>
            <p className="name">김영성 ys_kim0601@dgsw.hs.kr</p>
          </div>
          <div className="mentor">
            <p className="title">멘토</p>
            <p className="name">우효림 imrimee@dgsw.hs.kr</p>
          </div>
          <div className="school">
            <p className="title">학교</p>
            <p>대구소프트웨어마이스터고등학교</p>
            <p>대구광역시 달성군 구지면 창리로11길</p>
            <br />
          </div>
        </div>
        <img src={schoollogo} className="school-logo" alt="logo" />
      </header>
    </div>
  );
};

export default Footer;
