import React from "react";
import styled from "styled-components";
import MenuButtonInsta from "./MenuButtonInsta";
import MenuButtonUser from "./MenuButtonUser";
import MenuButtonGithub from "./MenuButtonGithub";
import MenuButtonQnA from "./MenuButtonQnA";

import { Link } from "react-router-dom";



const Menu = styled.div`
position:relative;   
display:flex;
justify-content:space-between;
bottom:0;
width:40%;
top:50px;
left:50%;
padding:15px 30px;
padding-bottom:10px;
transform:translateX(-50%);
border-top-left-radius:25px;
border-top-right-radius:25px;

    
`;





class Menubar extends React.Component {
    render() {
        return <div>
            <Menu>
                <a href="https://www.instagram.com/kbs_uu/"><MenuButtonInsta text="Instagram" color="#3f279b"></MenuButtonInsta></a>
                <a href="https://github.com/GanziMan"><MenuButtonGithub text="Github" color="#171515"></MenuButtonGithub></a>
                <a href="https://nutritious-bun-953.notion.site/edcd0ed97c8c43fc9e98062a75966631?v=8ddb8160aaef4b5990035138c6ad3b3a"><MenuButtonQnA text="QnA" color="#171515"></MenuButtonQnA></a>
            </Menu>

        </div>

    }
}

export default Menubar;