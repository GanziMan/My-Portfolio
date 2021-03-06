import React from "react";
import styled from "styled-components";
import {FaUser} from "react-icons/fa";
const ButtonST=styled.div`
    padding:20px;
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
class MenuButtonUser extends React.Component{
    render(){
        return <ButtonST color={this.props.color}>
                <FaUser style={{fontSize:"30px"}}></FaUser>
                <span>{this.props.text}</span>
                <br />
                <br />
               </ButtonST>
    }
}



export default MenuButtonUser;