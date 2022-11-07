import './ArticleDetail.css';
import article1 from '../image/article1.png';

const ArticleDetail = () => {
    return (
        <div className='ArticleDetail'>
            <header>
                <div className='header'>
                    <img src={article1} className='article1' alt='article' />
                </div>
                <div className='imformation'>
                    <p className='select'>물품 기부</p>
                    <p className='agency'>굿네이버스&nbsp;<p className='categories'>#카테고리 #카테고리 #카테고리</p></p>
                    <p className='introduce'>굿네이버스는 우리나라 아동보호체계가 마련되기 전인 1996년 민간단체 최초로 아동학대상담센터를 운영하여 아동학대 문제의 심각성을 인식하고 아동보호와 아동학대예방을 위한 다양한 활동을 전개해왔다. 아동보호를 위한 제도 마련의 필요성을 지속적으로 제기하여 2000년 아동복지법 개정을 이끌었으며, 아동보호전문기관의 설치 및 법적 근거를 마련하고 국가차원의 아동학대예방사업이 본격적으로 추진될 수 있는 기반을 마련 및 2014년 아동학대범죄의 처벌 등에 관한 특례법이 시행되면서 아동보호전문기관의 업무 수행 변화에 따라 굿네이버스는 아동복지전문 NGO로서 국내 아동학대예방체계와 관련한 제도･연구･실천 전 분야에서 선도적인 역할을 수행하고 있다.</p>
                </div>
                <div className='donated_items'>
                    <p className='article'>기부 받고 싶은 물품 목록                    <p className='items'>휴지 양말 옷 양말</p></p>
                </div>
                <div className='button'>
                    <button className='donation'>기부하기</button>
                </div>
            </header>
        </div>
    )
}

export default ArticleDetail;