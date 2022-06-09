import React, { useState } from "react";
import styled from 'styled-components';
import { SiSpring, SiDjango, SiMysql, SiFlask } from "react-icons/si";
import { FaHtml5, FaCss3, FaPaperclip, FaJs, FaPython, FaJava, FaReact } from "react-icons/fa";
import university from './입학전형.png'
import sportfacility from './체육시설.png'
import Corona from './Corona.png'
import KDBC from './KDBC웹.png'
import kmong from './kmong.png'
import profile from './profile.png'
import Modalkmong from 'react-modal';
import ModalKDBC from 'react-modal';
import ModalSchool from 'react-modal';
export const Project_List = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const [modalIsOpen4, setModalIsOpen4] = useState(false);
    const [modalIsOpen5, setModalIsOpen5] = useState(false);
    const [modalIsOpen6, setModalIsOpen6] = useState(false);
    const Modalst = styled.div
        `overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.45)",
        zIndex: 10,
    },
    content: { 
        justifyContent: "center",
        background: "black",
        color:"balck",
        overflow: "auto",
        top: "10vh",
        left: "10vw",
        right: "10vw",
        bottom: "10vh",
        WebkitOverflowScrolling: "touch",
        borderRadius: "14px",
        outline: "none",
        zIndex: 10,
    }
    `;
    const AC = styled.div`
    .wrapper{
        width:100vw;
    }
    .accordion{
       margin-left:5%;
       display:inline-block;
       text-align:left;
    }
    .accordion:hover{
       
    }
    .item{
        background:Black;
        margin-bottom:5px;
        padding:10px 20px; 
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
    strong{
        font-size:11px;
       
    }
    h1{
        font-size:20px;
    }
    
    `;
    return (
        <div>
            <AC>
                <div className="wrapper">
                    <section style={{ background: "black", color: "white", width: "100%" }}>
                        <div style={{ marginRight: "20px" }}>
                            <h1 style={{ paddingTop: "30px" }}>Project_LIST <FaPaperclip /> </h1>
                            <div className="accordion">
                                <summary><h1>웹 개발자 프리랜서 <FaHtml5 /> <FaCss3 /> <FaJs /> <FaJava /> <FaPython /><FaReact /> <SiDjango></SiDjango> <SiSpring></SiSpring> <SiMysql />  </h1>
                                </summary>
                                <strong> 활동기간 : 2022.03.02 ~ ing <br />
                                    주요 업무 : 웹 사이트 기능추가, 수정 등 작업  <br />
                                    필수 마인드 : 소통 <br />
                                    리뷰 수 : 7건 <br />
                                    작업 수 : 9건 <br />
                                    <strong> Freelancer Site: <a href="https://kmong.com/gig/372693">https://kmong.com/gig/372693</a> </strong> <br />
                                    <button onClick={() => setModalIsOpen(true)}>자세히 보기</button>
                                </strong>
                               

                                <Modalst>
                                    <Modalkmong isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                        <h2>크몽 웹 개발자 프리랜서</h2>
                                        <hr />
                                        <table>
                                            <tr>
                                                <td><strong> 크몽 프리랜서 활동 URL : </strong>   <a href="https://kmong.com/gig/372693">https://kmong.com/gig/372693</a></td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td> <strong> 활동 내용</strong>: HTML 제작된 웹사이트 유지보수, 수정, 개선, 기능추가를 하고 있습니다. <br /><strong>작업기술 </strong> : <FaHtml5></FaHtml5>  <FaCss3></FaCss3> <SiSpring></SiSpring> <SiDjango></SiDjango><SiFlask></SiFlask> </td>
                                            </tr>
                                            <tr>
                                                <td> <h3>서비스 제공 절차</h3>
                                                    <strong> 요청 </strong> : 내용을 말씀해주시면 서로 소통 후 방안과 견적에 대해 상의합니다. <br />
                                                    <strong> 작업 </strong>: 상담 후 작업을 진행합니다. <br />
                                                    <strong> 검토</strong>: 작업 내용물을 의뢰인분과 소통을 하고 수정합니다. (검토 후 작업을 진행하면서 서로 원활한 소통을 하겠습니다.) <br />
                                                    <strong> 종료</strong>: 검토 완료 후 의뢰인 분께 구매 확정 후 종료됩니다. <br />
                                                    <img src={kmong} style={{ width: "280px" }} alt="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><button onClick={() => setModalIsOpen(false)}>닫기</button></td>
                                            </tr>
                                        </table>

                                    </Modalkmong>
                                </Modalst>
                                <br />
                                <hr />
                                <summary>
                                    <h1>로지스틱 회귀모델을 활용한 웹 기반의 인지장애 스크리닝 시스템 <FaHtml5 /> <FaCss3 /> <FaJs /> <FaJava /> <SiMysql /> </h1>
                                </summary>
                                <strong> 주요 기능 : 환자들의 데이터를 넣으면 기준 값에 의해 정상인지 비정상인지 결과가 나오고 DB에 저장된다. <br></br>DB의 저장된 환자들의 데이터로
                                    차트와 그래프를 나타내주고 환자들의 정보 검색을 할 수 있다. 2021KDBC 논문</strong> <br />
                                <strong> GitHub  : <a href="https://github.com/GanziMan/Thesis-web-project"> https://github.com/GanziMan/Thesis-web-project</a></strong> <br />
                                <strong> Frontend </strong>: HTML5, CSS3, Javascript <br />
                                <strong> Backend </strong>: Java, JSP <br />
                                <strong>DataBase</strong>  : Mysql <br />
                                <button onClick={() => setModalIsOpen2(true)}>자세히 보기</button>
                                <ModalKDBC isOpen={modalIsOpen2} onRequestClose={() => setModalIsOpen2(false)}>
                                    <Modalst>
                                        <h2>로지스틱 회귀모델을 활용한 웹 기반의 인지장애 스크리닝 시스템</h2>
                                        <hr />
                                        <table>
                                            <tr>
                                                <td><strong> Github : </strong>   <a href="https://github.com/GanziMan/Thesis-web-project">https://github.com/GanziMan/Thesis-web-project</a></td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td>
                                                    <strong>프로젝트 만든 이유 : </strong> 연구실 활동 중 병원에서 의사들이 사용할 수 있는 웹 기반의 K-MMSE, K-Moca표를 이용한 인지장애 스크리닝 시스템을 사용하기 위한 의뢰를 받음
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong> 활동 내용</strong>: 환자가 인지장애 인지 확인하는 시스템. K-MMSE, K-Moca 테이블이 있으며, 시스템에 있는 기준 점수의 미달일 경우 인지장애 판별을 한다.
                                                </td>
                                            </tr>


                                            <tr>
                                                <td><strong>작업기술 </strong> : <FaHtml5></FaHtml5> <FaJs></FaJs> <FaCss3></FaCss3> <FaJava></FaJava> <SiMysql></SiMysql></td>
                                            </tr>
                                            <tr>
                                                <td> <h3>사용했던 중요 기술들</h3>
                                                    <strong> 사용자 계정 </strong> : 로그인과 회원가입을 구현, 회원정보 DB에서 관리  <br />
                                                    <strong> 이메일 인증 </strong>: 비밀번호를 잊었거나 변경을 위해서는 이메일 인증으로 변경 가능  <br />
                                                    <strong> 세션관리</strong>: 로그인 후 60분동안 접속 유지 <br />
                                                    <strong> 종료</strong>: 검토 완료 후 의뢰인 분께 구매 확정 후 종료됩니다. <br />
                                                    <strong> DB </strong>: Mysql 사용, 환자번호 암호화 <br />
                                                    <strong>그래프, 차트 라이브러리 사용</strong><br />
                                                    <img src={KDBC} style={{ width: "280px" }} alt="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                            </tr>
                                            <tfoot>
                                                <td><button onClick={() => setModalIsOpen2(false)}>닫기</button></td>
                                            </tfoot>
                                        </table>
                                    </Modalst>
                                </ModalKDBC>
                                <br />
                                <hr />

                                <summary> <h1>대학입학 부정입학 필터링 <FaHtml5 /> <FaCss3 /> <FaJava /> <SiSpring></SiSpring> <SiMysql /> </h1>
                                </summary>
                                <strong>주요 기능 : 각 입학 전형을 선택하여 기준에 맞는 정보를 입력받아 부정입학인지 아닌지 필터링하는 시스템 </strong>  <br />
                                <strong> GitHub  : <a href="https://github.com/GanziMan/University-Admission-Filter-System"> https://github.com/GanziMan/University-Admission-Filter-System</a></strong> <br />
                                <strong> Frontend </strong>: HTML5, CSS3 <br />
                                <strong> Backend </strong> : Spring Framework <br />
                                <strong> DataBase </strong>: Mysql <br />
                                <button onClick={() => setModalIsOpen3(true)}>자세히 보기</button>
                                <ModalKDBC isOpen={modalIsOpen3} onRequestClose={() => setModalIsOpen3(false)}>
                                    <Modalst>
                                        <h2>대학입학 부정입학 필터링</h2>
                                        <hr />
                                        <table>
                                            <tr>
                                                <td><strong> Github : </strong><a href="https://github.com/GanziMan/University-Admission-Filter-System"> https://github.com/GanziMan/University-Admission-Filter-System</a></td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td>
                                                    <strong>프로젝트 만든 이유 : </strong> 대학입시의 부정입학을 막기 위한 과제 수행. 대학 입학 전형을 조사하고 각 전형마다 가지고 있는 기준 라인을 가지고 부정입학 판별.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong> 활동 내용</strong>: 학생부교과 전형,학생부종합 전형, 재외국민3년 특별전형, 재외국민12년 특별전형, 장애인등 대상자 특별전형, 농어촌 특별전형, 특성화고졸 재직자 특별전형이 있음.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>작업기술 </strong> :<FaHtml5 /> <FaCss3 /> <FaJava /> <SiSpring></SiSpring> <SiMysql /></td>
                                            </tr>
                                            <tr>
                                                <td> <h3>사용했던 중요 기술들</h3>
                                                    <strong> Framework </strong> : Spring 사용  <br />
                                                    <strong> DB </strong>: Mysql 사용 <br />
                                                    <img src={university} style={{ width: "280px" }} alt="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                            </tr>
                                            <tfoot>
                                                <td><button onClick={() => setModalIsOpen3(false)}>닫기</button></td>
                                            </tfoot>
                                        </table>
                                    </Modalst>
                                </ModalKDBC>

                                <br />
                                <br />
                                <hr />

                                <summary><h1>코로나19 통합 정보제공  <FaHtml5 /> <FaCss3 /> <FaPython /> <SiDjango></SiDjango> <SiMysql /></h1>
                                </summary>
                                <strong> 주요 기능 : 코로나19에 대한 통합적인 정보 제공 홈페이지를 제작. <br></br>사용자 위치에 따라 지역 확진자 수 업데이트, 지역 뉴스, 정부 뉴스 제공 </strong> <br />
                                <strong> GitHub : <a href="https://github.com/GanziMan/Corona_korea_keep-distance">https://github.com/GanziMan/Corona_korea_keep-distance</a> </strong> <br />
                                <strong>Frontend </strong> : HTML5, CSS3, Javascript <br />
                                <strong>Backend </strong>: Django Framework <br />
                                <strong> DataBase </strong>: Mysql <br />
                                <button onClick={() => setModalIsOpen4(true)}>자세히 보기</button>
                                <ModalKDBC isOpen={modalIsOpen4} onRequestClose={() => setModalIsOpen4(false)}>
                                    <Modalst>
                                        <h2>코로나19 통합 정보제공</h2>
                                        <hr />
                                        <table>
                                            <tr>
                                                <td><strong> Github : </strong> <a href="https://github.com/GanziMan/Corona_korea_keep-distance">https://github.com/GanziMan/Corona_korea_keep-distance</a></td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td>
                                                    <strong>프로젝트 만든 이유 : </strong> 코로나19로 인해 야외활동이 적어지고 집에만 있는 경우가 많음. 휴양지를 가려면 코로나 감염자가 덜 발생한 곳으로 가는 분들이 많음. 이를 위한 프로젝트 제작
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong> 활동 내용</strong>: 전국 코로나 감염자 수는 물론 전날에 비해 몇 명이 감염이 되는지 알 수 있고 GPS 기능이 있어 사용자가 위치한 지역에 감염자 수와 전날 감염자 수도 알 수 있다. 최근 오미크론이 유행하면서 오미크론 감염자 수까지 확인 가능.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>작업기술 </strong> :<FaHtml5 /> <FaCss3 /> <FaPython /> <SiDjango></SiDjango> <SiMysql /> </td>
                                            </tr>
                                            <tr>
                                                <td> <h3>사용했던 중요 기술들</h3>
                                                    <strong> Framework </strong> : Django 사용  <br />
                                                    <strong> DB </strong>: Mysql 사용 <br />
                                                    <strong> API </strong> : GPS기능  <br />
                                                    <strong> crawling </strong> : 코로나 감염자 수 기능 <br />
                                                    <strong> 로그인, 회원가입 </strong> : 사용자 계정 <br />
                                                 
                                                    <img src={Corona} style={{ width: "280px" }} alt="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                            </tr>
                                            <tfoot>
                                                <td><button onClick={() => setModalIsOpen4(false)}>닫기</button></td>
                                            </tfoot>
                                        </table>
                                    </Modalst>
                                </ModalKDBC>
                                <br />
                                <br />
                                <hr />

                                <summary> <h1>웹 개발자 포트폴리오 사이트<FaReact /></h1></summary>
                                <strong>  주요 기능 : 웹 개발자 포트폴리오 사이트 입니다.</strong> <br />
                                <strong> Github :  <a href="https://github.com/GanziMan/My-Portfolio">https://github.com/GanziMan/My-Portfolio</a> </strong><br />
                                <strong> Frontend </strong> : React.js <br />
                                <strong> Backend </strong> : <br />
                                <button onClick={() => setModalIsOpen5(true)}>자세히 보기</button>
                                <ModalKDBC isOpen={modalIsOpen5} onRequestClose={() => setModalIsOpen5(false)}>
                                    <Modalst>
                                        <h2>웹 개발자 포트폴리오 사이트</h2>
                                        <hr />
                                        <table>
                                            <tr>
                                                <td><strong> Github : </strong><a href="https://github.com/GanziMan/My-Portfolio">https://github.com/GanziMan/My-Portfolio</a></td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td>
                                                    <strong> 프로젝트 만든 이유 : </strong> 웹 개발자로써 포트폴리오를 pdf, 문서 등이 아닌 웹 기반 포트폴리오로 구현하고 싶었음.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong> 활동 내용</strong>: 나에 대한 간략한 소개와 Github, Instagram으로 Contact을 할 수 있고 나에 대한 궁금한 점이 있다면 QnA 게시판(현재 구현 중)에 글을 남기도록 구현. 또한 나의 웹 프로젝트와 사용 스택들을 소개
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong> 작업기술 </strong> :<FaReact></FaReact> </td>
                                            </tr>
                                            <tr>
                                                <td> <h3>사용했던 중요 기술</h3>
                                                    <strong> Framework </strong> : React.js 사용  <br />
                                                   
                                                    <img src={profile} style={{ width: "280px" }} alt="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                            </tr>
                                            <tfoot>
                                                <td><button onClick={() => setModalIsOpen5(false)}>닫기</button></td>
                                            </tfoot>
                                        </table>
                                    </Modalst>
                                </ModalKDBC>
                                <br />
                                <br />
                                <hr />

                                <summary>
                                    <h1>경기도 공공 체육시설 조회 <FaHtml5 /> <FaCss3 /> <FaJs /> <FaJava /> <SiMysql /> </h1>
                                </summary>
                                <strong>주요 기능 : 경기도에 있는 공공 체육시설들을 조회 할 수 있으며, 위치, 바닥 재질, 시설크기 등을 알 수 있고 검색하여 찾을 수 도 있다.</strong> <br></br>
                                <strong> Github :  <a href="https://github.com/GanziMan/Gyeonggi-do-sports-facility-inquiry-system">https://github.com/GanziMan/Gyeonggi-do-sports-facility-inquiry-system</a> </strong><br />
                                <strong> Frontend </strong>: HTML5, CSS3, Javascript<br></br>
                                <strong> Backend </strong>: Java, JSP <br />
                                <strong> DataBase </strong>: Mysql <br />
                                <button onClick={() => setModalIsOpen6(true)}>자세히 보기</button>
                                <ModalKDBC isOpen={modalIsOpen6} onRequestClose={() => setModalIsOpen6(false)}>
                                    <Modalst>
                                        <h2>경기도 공공 체육시설 조회</h2>
                                        <hr />
                                        <table>
                                            <tr>
                                                <td><strong> Github : </strong><a href="https://github.com/GanziMan/Gyeonggi-do-sports-facility-inquiry-system">https://github.com/GanziMan/Gyeonggi-do-sports-facility-inquiry-system</a> </td>
                                            </tr>
                                            <br />
                                            <tr>
                                                <td>
                                                    <strong> 프로젝트 만든 이유 : </strong> 공공데이터로 활용할 수 있는 웹 기반의 시스템을 만들고 싶었음.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong> 활동 내용</strong>: 공공데이터 포털 사이트에서 경기도에 있는 공공체육시설 데이터를 json 형식으로 가져와서 Java parsing을 이용하여 시설 데이터를 스포츠 종목으로 분류하여 DB에 저장. 스포츠 시설 데이터가 저장된 DB에 데이터를 불러와 웹 table에 스포츠 종목별로 분류. 각 항목에 1차원적인 검색 기능을 구현하여 원하는 지역, 환경의 공공스포츠 시설을 찾을 수 있음.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong> 작업기술 </strong> :<FaHtml5 /> <FaCss3 /> <FaJs /> <FaJava /> <SiMysql /></td>
                                            </tr>
                                            <tr>
                                                <td> <h3>사용했던 중요 기술</h3>
                                                    <strong> DB </strong> : Mysql 사용  <br />
                                                    <strong> Java </strong> : Parsing 사용 <br />
                                                   
                                                    <img src={sportfacility} style={{ width: "280px" }} alt="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                            </tr>
                                            <tfoot>
                                                <td><button onClick={() => setModalIsOpen6(false)}>닫기</button></td>
                                            </tfoot>
                                        </table>
                                    </Modalst>
                                </ModalKDBC>
                                <br />
                                <br />
                                <br />

                            </div>
                        </div>
                    </section>
                    <br /><br />
                </div>
            </AC>
        </div>
    )
}

