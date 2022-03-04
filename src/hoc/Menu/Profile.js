import React from "react";
import styled from "styled-components";
import img from './bumsu.jpeg';
import Menubar from "./Menubar";

const Profilebox= styled.div`
        position:fixed;
        width:800px;
        height:500px;
        bottom:40%;
        left:50%;
        transform:translateX(-50%);
        border:1px solid black;
        border-radius:4em;
        li{
            margin:15px 0px;
        }
      
     
`;

class Profile extends React.Component{
    render(){
        return <div>
                <Profilebox>
                <h2 style={{textAlign:"center"}}>Web Developer Portfolio</h2>
                    <img style={{width:"300px",border:"1px solid black",borderRadius:"8em",margin:"10px"}} src={img}></img>
                     <ul style={{listStyle:"none",float:"right"}}>
                         <hr></hr>
                         <br></br>
                        <li>
                            <strong>Programming Language</strong>: Java, HTML, CSS, Python
                        </li>
                        <li>
                            <strong>Frameworks</strong>: Spring, React.js, Django, JSP
                        </li>
                        <li>
                            <strong>Name</strong>: Bumsu Kim  
                        </li>
                        <li>
                            <strong>Email</strong>: qjatn50089@gmail.com    
                        </li>
                        <li>
                            <strong>Phone</strong>: 010-2784-0955
                        </li>
                        <li>
                            <strong>School</strong>: Hallym University
                        </li>
                        <h2>About Me</h2>
                        Hello I'm handsome Web Developer
                     </ul>
                  
                </Profilebox>
                <Menubar></Menubar>
               </div> 
    }
}

export default Profile;