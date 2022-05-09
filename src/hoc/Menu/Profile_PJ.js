import React from "react";
import styled from "styled-components";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


const PJ_li = styled.div`

`;
 
class Profile_PJ extends React.Component {
    render() {
   
        return (
            <div>
                <PJ_li>
                   <ul style={{listStyle:"none"}}>
                       <li>
                           경기도 공공 체육시설 조회 사이트
                       </li>
                       <li>
                           웹 기반 파킨슨병 인지장애 스크리닝 시스템
                       </li>
                       <li>
                           코로나 지역별 간편 확인 사이트
                       </li>

                       <li>
                           대학교 부정입학 필터링 사이트
                           사용 스택: HTML5, CSS3, Srping, JSP, Mysql 
                       </li>

                       <li>
                           React로 개발을 한 웹 개발자 포트폴리오
                       </li>
                     
                   </ul>
                </PJ_li>
            </div>

        )
    }
}

export default Profile_PJ;