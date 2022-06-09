import React from "react";
import styled from "styled-components";
import {SiNotion } from "react-icons/si";
import {} from "react-icons/fa";

const ButtonST=styled.div`
    padding:30px;
    background-color:#fff;
    border-radius:10px;
    border:3px solid ${props => props.color};
    transition:all .3s;
    position:relative;
    color:${props => props.color};
    cursor:pointer;
    &:hover{
        transform:scale(1.1);
    }
    span{
       position:absolute;
       bottom:10%;
       left:50%;
       transform:translateX(-50%);   
    }
`;
class MenuButtonQnA extends React.Component{
    render(){
        return <ButtonST color={this.props.color}>
                <SiNotion style={{fontSize:"30px"}}></SiNotion>
                <br></br>
                <br></br>
                <span>{this.props.text}</span>
                
               </ButtonST>;
    }
}



export default MenuButtonQnA;