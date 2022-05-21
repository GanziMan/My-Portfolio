import React from "react";
import styled from "styled-components";
import {FaInstagram} from "react-icons/fa";
const ButtonST=styled.div`
    padding:40px;
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
class MenuButtonInsta extends React.Component{
    render(){
        return <ButtonST color={this.props.color}>
                
                <FaInstagram style={{fontSize:"30px"}}></FaInstagram>
                <br></br>
                <br></br>
                <span>{this.props.text}</span>
               </ButtonST>;
    }
}



export default MenuButtonInsta;