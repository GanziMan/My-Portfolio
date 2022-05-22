import React from "react";
import styled from "styled-components";
import img from './bumsu2.JPG';
import Menubar from "./Menubar";
import { useState } from 'react';
import { lightTheme, darkTheme } from '../../theme';
import { GlobalStyles } from "../../global";
import Toggle from "../../Toggle";
import { ThemeProvider } from "styled-components";
import { Stack_List } from "../components/Stack_List";
import { Project_List } from "../components/Project_List";
import { useMediaQuery } from "react-responsive";




const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : Tablet
}
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}


const Profilebox = styled.div`
position:relative;
height:85vh;
width:100vw;
border:4px solid;
border-radius:4em;
li{
    margin:15px 0px;
}
box-shadow:6px 5px 5px 5px rgba(0,0,0,0.2);
`;

function Profile() {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        // if the theme is not light, then set it to dark
        if (theme === 'light') {
            setTheme('dark');
            // otherwise, it should be light
        } else {
            setTheme('light');
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <Profilebox>

                <h2 style={{}}>Web Developer Portfolio</h2>
                <img style={{ width: "300px", border: "1px solid black", borderRadius: "8em" }} alt="profile" src={img}></img>
                <ul style={{ listStyle: "none", textAlign: "left", float: "right", marginLeft: "-30%", marginRight: "27%" }}>
                    <div>
                        <Toggle theme={theme} toggleTheme={toggleTheme} />
                        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                    </div>
                    <hr></hr>
                    <br></br>
                    <li>
                        <strong>Programming Language</strong>: HTML, Js, CSS, Python, Java
                    </li>
                    <li>
                        <strong>Frameworks</strong>: Spring, React.js, Django, JSP
                    </li>
                    <li>
                        <strong>Name</strong>: Bumsu Kim
                    </li>
                    <li>
                        <strong>Email</strong>:qjatn50089@gmail.com
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
                <Menubar></Menubar>
                <br />
                <br />
                <br />
                <Project_List></Project_List>
                <Stack_List></Stack_List>
              
              
            </Profilebox>

            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles ></GlobalStyles>
            </ThemeProvider>
        </div>
    );
};

export default Profile;