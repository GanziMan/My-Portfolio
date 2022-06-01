import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './Mobile/Menu/Profile';
import Profile_PJ from './Mobile/Menu/Profile_PJ';

import Profile_PC from './Desktop/Menu/Profile';
import Profile_PJ_PC from './Desktop/Menu/Profile_PJ';
import { useMediaQuery } from "react-responsive";
import BoardList from './Desktop/components/BoardList';
import Container from './Desktop/container/Container'
import css from './App.css'

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
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }

function App() {
    return (

        <div style={{ width: "100%" }}>
            <Mobile>
            <Switch>
                <Route exact path="/" component={Profile} />
                <Route path="/Profile_PJ" component={Profile_PJ} />

                
            </Switch>
            </Mobile>

            <Desktop>
            
            <Switch>
           
                <Route exact path="/" component={Profile_PC} />
                <Route path="/Profile_PJ" component={Profile_PJ_PC} />
                
            </Switch>
            
            </Desktop>
           
        </div>
    );
}


export default App;
