import React from "react";
import styled from 'styled-components';
import { SiNetlify, SiSpring, SiDjango, SiMysql } from "react-icons/si";
import { FaHtml5, FaCss3, FaPaperclip, FaJs, FaReact } from "react-icons/fa";
export const Stack_List = () => {
    const AC = styled.div`
    .wrapper{
     
        background: #ffc107;
  
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
    .Stack{
        box-shadow:8px 6px 6px 6px rgba(0,0,0,0.1);
        background:white;
        height:150px;
        padding:10px;
        border-radius:5em;    
        margin:20px;
    }
    .Stack:hover{
        transform:scale(1.1);
        transition:all .5s;
        
    }  
    `;
    return (
        <div>
            <AC>
                <div className="wrapper">
                    <section style={{ position: "relative", color: "BLACK"}}>
                        <br />
                        <h1>사용스택 <FaPaperclip></FaPaperclip> </h1>
                        <br />
                        <div className="Stack"><h1 style={{ color: "#ffc107" }}>Front-end</h1>
                                    <h1><FaHtml5></FaHtml5> <FaCss3></FaCss3> <FaJs></FaJs> <FaReact></FaReact> </h1></div>
                                    <div className="Stack"><h1 style={{ color: "#ffc107" }}>Back-end</h1>
                                    <h1> <SiDjango></SiDjango> <SiSpring></SiSpring> <SiMysql></SiMysql>  </h1></div>
                                    <div className="Stack"><h1 style={{ color: "#ffc107" }}>Deployment</h1>
                                    <h1><SiNetlify></SiNetlify> </h1></div>
                                    <br />
                    </section>
                </div>
            </AC>
        </div>
    )
}