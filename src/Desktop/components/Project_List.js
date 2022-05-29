import React from "react";
import styled from 'styled-components';
import { SiSpring, SiDjango, SiMysql } from "react-icons/si";
import { FaHtml5, FaCss3, FaPaperclip, FaJs, FaPython, FaJava, FaReact } from "react-icons/fa";
import kmong from './kmong.png';
import KDBC from './KDBC웹.png';
import corona from './Corona.png';
import facility from './체육시설.png';
import college from './입학전형.png'
import pf from './profile.png'


export const Project_List = () => {
    const AC = styled.div`
    .wrapper{
        width:100vw;
        top:50px;
      
    }
    .accordion{
  
    }
   
    .ac1:hover{
        transform:scale(1.1);
        transition:all .5s;
        
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
        text-align:left;
    }
   
    .Stack{
        box-shadow:8px 6px 6px 6px rgba(0,0,0,0.1);
        background:white;
        height:400px;
        padding:20px;
        border-radius:5em;
        
        
       
    }
    .Stack:hover{
        transform:scale(1.1);
        transition:all .5s;
        
    }
    
    h1{
        font-size:40px;
    }
    table{
        text-align:left;
        margin-Left:20%;
    }
    table td{
        width:50%;
    }
    strong{
        float:left;
    }
    img{
        float:left;
    }
    hr{
        border-top: 1px dotted #8c8b8b;
    }
    `;
    return (
        <div>
            <AC>
                <div className="wrapper">
                    <section style={{ position: "relative", background: "black", color: "white", width: "100%" }}>
                        <div style={{ marginRight: "20px" }}>
                            <h1 style={{ paddingTop: "30px", fontSize: "60px" }}>Project_LIST <FaPaperclip /> </h1>
                            <div className="accordion">

                                <table>

                                    <h1>웹 개발자 프리랜서 <FaHtml5 /> <FaCss3 /> <FaJs /> <FaJava /> <FaPython /><FaReact /> <SiDjango></SiDjango> <SiSpring></SiSpring> <SiMysql /> </h1>
                                    <tr>
                                        <td>
                                            <strong> 활동기간 : 2022.03.02 ~ ing <br />
                                                주요 업무 : 웹 사이트 기능추가, 수정 등 작업  <br />
                                                필수 마인드 : 소통 <br />
                                                리뷰 수 : 7건 <br />
                                                작업 수 : 9건 <br />
                                                Freelancer Site: <a href="https://kmong.com/gig/372693">https://kmong.com/gig/372693</a>
                                            </strong>
                                        </td>
                                        <td>
                                            <img style={{ width: "400px", height:"250px", border: "1px solid black", borderRadius: "2em", float: "left" }} alt="profile" src={kmong}></img>
                                        </td>

                                    </tr>
                                    <hr />

                                    <h1>로지스틱 회귀모델을 활용한 웹 기반의 인지장애 스크리닝 시스템 <FaHtml5 /> <FaCss3 /> <FaJs /> <FaJava /> <SiMysql /> </h1>


                                    <tr>
                                        <td>
                                            <strong>
                                                주요 기능 : 환자들의 데이터를 넣으면 기준 값에 의해 정상인지 비정상인지 결과가 나오고 DB에 저장된다. <br></br>DB의 저장된 환자들의 데이터로
                                                차트와 그래프를 나타내주고 환자들의 정보 검색을 할 수 있다. <br />
                                                GitHub  : <a href=" https://github.com/GanziMan/Thesis-web-project"> https://github.com/GanziMan/Thesis-web-project</a><br />
                                                Frontend : HTML5, CSS3, Javascript <br />
                                                Backend : Java, JSP <br />
                                                DataBase: Mysql <br />

                                            </strong>

                                        </td>
                                        <td>
                                            <img style={{ width: "400px",height:"250px", border: "1px solid black", borderRadius: "2em", float: "left" }} alt="profile" src={KDBC}></img>

                                        </td>
                                    </tr>
                                    <hr />

                                    <h1>대학입학 부정입학 필터링 <FaHtml5 /> <FaCss3 /> <FaJava /> <SiSpring></SiSpring> <SiMysql /> </h1>

                                    <tr>
                                        <td>
                                            <strong>                                             주요 기능 : 각 입학 전형을 선택하여 기준에 맞는 정보를 입력받아 부정입학인지 아닌지 필터링하는 시스템  <br />
                                                GitHub  : <a href="https://github.com/GanziMan/University-Admission-Filter-System"> https://github.com/GanziMan/University-Admission-Filter-System</a> <br />
                                                Frontend : HTML5, CSS3 <br />
                                                Backend  : Spring Framework <br />
                                                DataBase: Mysql
                                            </strong>
                                        </td>
                                        <td>
                                            <img style={{ width: "400px",height:"250px", border: "1px solid black", borderRadius: "2em", float: "left" }} alt="profile" src={college}></img>

                                        </td>
                                    </tr>
                                    <hr />


                                    <h1>코로나19 통합 정보제공  <FaHtml5 /> <FaCss3 /> <FaPython /> <SiDjango></SiDjango> <SiMysql /></h1>


                                    <tr>
                                        <td>
                                            <strong>
                                                주요 기능 : 코로나19에 대한 통합적인 정보 제공 홈페이지를 제작. <br></br>사용자 위치에 따라 지역 확진자 수 업데이트, 지역 뉴스, 정부 뉴스 제공 <br />
                                                GitHub : <a href="https://github.com/GanziMan/Corona_korea_keep-distance">https://github.com/GanziMan/Corona_korea_keep-distance</a> <br />
                                                Frontend: HTML5, CSS3, Javascript <br />
                                                Backend : Django Framework <br />
                                                DataBase : Mysql
                                            </strong>

                                        </td>
                                        <td>  <img style={{ width: "400px", height:"250px",border: "1px solid black", borderRadius: "2em", float: "left" }} alt="profile" src={corona}></img>
                                        </td>
                                    </tr>
                                    <hr />

                                    <h1>웹 개발자 포트폴리오 사이트<FaReact /></h1>

                                    <tr>
                                        <td>
                                            <strong>주요 기능 : 웹 개발자 포트폴리오 사이트 입니다. <br />
                                                Github :  <a href="https://github.com/GanziMan/My-Portfolio">https://github.com/GanziMan/My-Portfolio</a> <br />
                                                Frontend : React.js <br />
                                                Backend :
                                            </strong>
                                        </td>

                                        <td>
                                        <img style={{ width: "400px",height:"250px", border: "1px solid black", borderRadius: "2em", float: "left" }} alt="profile" src={pf}></img>
                                        </td>
                                    </tr>
                                    <hr />
                                    <h1>경기도 공공 체육시설 조회 <FaHtml5 /> <FaCss3 /> <FaJs /> <FaJava /> <SiMysql /> </h1>
                                    <tr>
                                        <td>
                                            <strong>
                                                주요 기능 : 경기도에 있는 공공 체육시설들을 조회 할 수 있으며, 위치, 바닥 재질, 시설크기 등을 알 수 있고 검색하여 찾을 수 도 있다.<br></br>
                                                Github :  <a href="https://github.com/GanziMan/Gyeonggi-do-sports-facility-inquiry-system">https://github.com/GanziMan/Gyeonggi-do-sports-facility-inquiry-system</a><br />
                                                Frontend : HTML5, CSS3, Javascript<br></br>
                                                Backend : Java, JSP <br />
                                                DataBase : Mysql
                                            </strong>
                                        </td>
                                        <td>
                                            <img style={{ height:"250px",width: "400px", border: "1px solid black", borderRadius: "2em", float: "left" }} alt="profile" src={facility}></img>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </AC>
        </div>
    )
}

