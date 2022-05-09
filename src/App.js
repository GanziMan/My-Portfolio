import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './hoc/Menu/Profile';
import Profile_PJ from './hoc/Menu/Profile_PJ';
import styled from 'styled-components';

 

import {FaDatabase,FaHtml5,FaCss3,FaPaperclip,FaJs, FaPython, FaJava, FaReact} from "react-icons/fa";


const AC = styled.div`
.wrapper{
    height:100vh;
    width:100vw;
    position:relative;
    top:400px;
    left:50%;
    transform:translateX(-50%);

}
.accordion{
    width:2000px;
}
.item{
    background:Black;
    margin-bottom:5px;
    padding:10px 20px;
    margin:20px;
   
}
.title{
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ccursor:pointer;
    
}
.content{
   
    color:white;
    max-height:0;
    overflow:hidden;
    transition: all 0.5s cubic-bezier(0,1,0,1);
  
}
summary{
    cursor:pointer;
    display:flex;
}
.content.show{
    color:white;
    height:auto;
  
    transition:all 0.5s cubic-bezier(1,0,1,0);
}
details{
    margin:40px;
}
table{
    position:relative;
     left:50%;
    transform:translateX(50%);
}
`;
function App() {
    
        
    return (
       
        <div>
            <Switch>
                    <Route exact path="/" component={Profile} />
                    <Route path="/Profile_PJ" component={Profile_PJ}/>
                    
            </Switch>
            <AC>
                        <div className='wrapper'>
                 
                    <section style={{position:"relative", background:"black",color:"white" }}>
                    
                    <h1>Project_LIST <FaPaperclip/> </h1>
      <div className="accordion">
        <details>
            <summary>
            <h1>경기도 공공 체육시설 조회 <FaHtml5/> <FaCss3/> <FaJs/> <FaJava/> <FaDatabase/> </h1>
            </summary>
        <strong>주요 기능 : 경기도에 있는 공공 체육시설들을 조회 할 수 있으며, 위치, 바닥 재질, 시설크기 등을 알 수 있고 검색하여 찾을 수 도 있다.</strong> <br></br>
       <strong> Frontend </strong>: HTML5, CSS3, Javascript<br></br>
       <strong> Backend </strong>: Java, JSP <br />
        <strong> DataBase </strong>: Mysql
        </details>

        <details>
           <summary>
           <h1>로지스틱 회귀모델을 활용한 웹 기반의 인지장애 스크리닝 시스템 <FaHtml5/> <FaCss3/> <FaJs/> <FaJava/> <FaDatabase/> </h1>
           </summary>
           <strong> 주요 기능 : 환자들의 데이터를 넣으면 기준 값에 의해 정상인지 비정상인지 결과가 나오고 DB에 저장된다. DB의 저장된 환자들의 데이터로
        차트와 그래프를 나타내주고 환자들의 정보 검색을 할 수 있다.</strong> <br />
        <strong> GitHub  </strong>: <a href=" https://github.com/GanziMan/Thesis-web-project"> https://github.com/GanziMan/Thesis-web-project</a> <br />
        <strong> Frontend </strong>: HTML5, CSS3, Javascript <br />
        <strong> Backend </strong>: Java, JSP <br />
        <strong>DataBase</strong>  : Mysql <br />
       </details>
       <details>
              <summary> <h1>대학입학 부정입학 필터링 <FaHtml5/> <FaCss3/> <FaJava/> <FaDatabase/> </h1>
        </summary>
        <strong>주요 기능 : 각 입학 전형을 선택하여 기준에 맞는 정보를 입력받아 부정입학인지 아닌지 필터링하는 시스템 </strong>  <br />
        <strong> Frontend </strong>: HTML5, CSS3 <br />
        <strong> Backend </strong> : Spring Framework <br />
        <strong> DataBase </strong>: Mysql
          </details>

          <details>
            <summary><h1>코로나19 통합 정보제공  <FaHtml5/> <FaCss3/> <FaPython/> <FaDatabase/></h1>
       </summary>
       <strong> 주요 기능 : 코로나19에 대한 통합적인 정보 제공 홈페이지를 제작. 사용자 위치에 따라 지역 확진자 수 업데이트, 지역 뉴스, 정부 뉴스 제공 </strong> <br />
       <strong> GitHub </strong>: <a href="https://github.com/GanziMan/Corona_korea_keep-distance">https://github.com/GanziMan/Corona_korea_keep-distance</a>  <br />
       <strong>Frontend </strong> : HTML5, CSS3, Javascript <br />
        <strong>Backend </strong>: Django Framework <br />
       <strong> DataBase </strong>: Mysql
        </details>

        <details>
            <summary> <h1>웹 개발자 포트폴리오 사이트<FaReact/></h1></summary>
          <strong>  주요 기능 : 웹 개발자 포트폴리오 사이트 입니다.</strong> <br />
        <strong> Github </strong>:  <a href="https://github.com/GanziMan/My-Portfolio">https://github.com/GanziMan/My-Portfolio</a>  <br />
       <strong> Frontend </strong> : React.js <br />
       <strong> Backend </strong> :  
           
        </details>

        <details>
            <summary><h1>웹 개발자 프리랜서 <FaHtml5/> <FaCss3/> <FaJs/> <FaJava/> <FaPython/><FaReact/><FaDatabase/>  </h1>
      </summary>
        <strong> 활동기간 : 2022.03.02 ~ ing <br />
        주요 업무 : 웹 사이트 기능추가, 수정 등 작업  <br />
        필수 마인드 : 소통 <br />
        리뷰 수 : 7건 <br />
        작업 수 : 9건 <br />
        <strong> Freelancer Site </strong>: <a href="https://kmong.com/gig/372693">https://kmong.com/gig/372693</a>  <br />
        </strong>
        </details>
      </div>
      </section>

      <section style={{position:"relative", background:"#FFDA6B",color:"BLACK" }}>
       
          
          <table>
              <caption>    <h1>사용스택 <FaPaperclip></FaPaperclip> </h1> </caption>
              <tr>
                  <td><h1>Front-end</h1></td>
              </tr>
              <tr>
                  <td><h1><FaHtml5></FaHtml5> <FaCss3></FaCss3> <FaJs></FaJs> <FaReact></FaReact> </h1></td>
              </tr>
             
              <tr>
                 <td><h1>Back-end</h1></td>
              </tr>
              <tr>
                  <td><h1><FaHtml5></FaHtml5> <FaCss3></FaCss3> <FaJs></FaJs> <FaReact></FaReact> </h1></td>
              </tr>

              <tr>
              <td><h1>Deployment</h1></td>
              </tr>

              <tr>
                  <td><h1><FaHtml5></FaHtml5> <FaCss3></FaCss3> <FaJs></FaJs> <FaReact></FaReact> </h1></td>
              </tr>
              

              <tr><td></td></tr>
          </table>
      </section>
   
      </div>
    
      </AC>

            {/*<Switch2 value={value} onChange={value => setValue(value)} /> */}
            {/*   <ThemeProvider theme={theme}>
                <S.Main>
              
                    <Button title={theme === 'light' ? '일반모드로 테마 변경하기' : '다크모드로 테마 변경하기'}
                        click={toggleTheme} />
                        
                </S.Main>
             
               
    </ThemeProvider>
            */}
         
        </div>
       
    );

}



export default App;
const S = {};
S.Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.bgColor};
`;