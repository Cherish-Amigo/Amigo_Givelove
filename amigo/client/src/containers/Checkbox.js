import "./Checkbox.css";

function Checkbox() {
  const fields = ['교육', '아동복지', '환경 • 기후', '노인 복지', '한부모 가정', '장애인', '새터민', '이혼가정', '청소년 복지', '다문화 가정', '병원 시설', '기타']
  const checkbox = document.getElementById('content_checkbox');
  const is_checked = checkbox.checked;
  return (
    <div className="checkbox-tool">
        {
            fields.map((field, index) => {
                return (
                    <div className="check-container">
                      {/* <input className="checkbox" type="checkbox"/>
                      <p className="cartagori">{element}</p> */}
                      <label for={index}><input className="checkbox" type="checkbox" id="content_checkbox" name={index} onClick={is_checked()}/>{field}</label>
                    </div>
                )
            })
        }
    </div>
  );
}

export default Checkbox;