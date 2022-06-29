import React from "react";
import styled from 'styled-components';
import { SiNetlify, SiSpring, SiDjango, SiMysql,SiHeroku } from "react-icons/si";
import { FaHtml5, FaCss3, FaPaperclip, FaJs, FaReact } from "react-icons/fa";
export const Stack_List = () => {
    const AC = styled.div`
    .wrapper{
       
        width:100vw;
        position:relative;
        left:50%;
        transform:translateX(-50%);
        
      
    }
    .accordion{
      
       display:inline-block;
    }
    .accordion:hover{
       
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
    }
    table{
        position:relative;
        text-align:center;
        margin-left: auto; 
        margin-right: auto;
        border-spacing:60px;
        
    }
    table h1{
        font-size:60px;
      
    }
    .Stack{
        box-shadow:8px 6px 6px 6px rgba(0,0,0,0.1);
        background:white;
        height:40%;
        width:100%;
        padding:20px;
        border-radius:5em;
        
        
       
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
                <section style={{position:"relative", background:"#ffc107",color:"BLACK",width:"100%",textAlign:"center" }}>
       
         
       <table>
           <caption>    <h1>사용스택 <FaPaperclip></FaPaperclip> </h1> </caption>
           <tr>
               <td><div className="Stack"><h1 style={{color:"#ffc107"}}>Front-end</h1>
       <h1><FaHtml5></FaHtml5> <FaCss3></FaCss3> <FaJs></FaJs> <FaReact></FaReact> </h1></div>
</td>
               <td><div className="Stack"><h1 style={{color:"#ffc107"}}>Back-end</h1>
       <h1> <SiDjango></SiDjango> <SiSpring></SiSpring> <SiMysql></SiMysql>  </h1></div>
</td>
               <td><div  className="Stack"><h1 style={{color:"#ffc107"}}>Deployment</h1>
       <h1><SiNetlify></SiNetlify> </h1></div>
    
       </td>
           </tr>
        

       </table>
      
       
       
       
       
   </section>
                </div>
            </AC>
        </div>
    )
}