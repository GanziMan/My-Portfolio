import React from "react";
import styled from "styled-components";
import {Icon} from 'semantic-ui-react';
import {FaUser} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaJava} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaIcons} from "react-icons/fa";
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
class MenuButtonJava extends React.Component{
    render(){
        return <ButtonST color={this.props.color}>
                <FaJava style={{fontSize:"30px"}}></FaJava>
                <br></br>
                <br></br>
                <span>{this.props.text}</span>
               </ButtonST>;
    }
}



export default MenuButtonJava;