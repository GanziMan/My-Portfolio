import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from './pages';
import Menubar from './hoc/Menu/Menubar';
import Profile from './hoc/Menu/Profile';
import Profile_PJ from './hoc/Menu/Profile_PJ';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import { dark } from './theme';
import { light } from './theme';
import useTheme from './useTheme';
import { useState } from 'react';
import Switch1 from './Switch';
function App() {
    const [themeMode, toggleTheme] = useTheme(); // hook 함수 하용
    const theme = themeMode === 'light' ? light : dark; // 테마 환경에 맞는 테마 컬러 가져오기.
    const [value, setValue] = useState(false);
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Profile} />
                <Route path="/Profile_PJ" component={Profile_PJ} />
            </Switch>

        </div>
    );

}

export default App;
const S = {};
S.Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.bgColor};
`;