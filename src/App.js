import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menubar from './hoc/Menu/Menubar';
import Profile from './hoc/Menu/Profile';
import Profile_PJ from './hoc/Menu/Profile_PJ';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './Toggle';
function App() {
    // App.js
   
    return (
        <div>

           
            <Switch>
                    <Route exact path="/" component={Profile} />
                    <Route path="/Profile_PJ" component={Profile_PJ} />
                </Switch>



            {/*<Switch2 value={value} onChange={value => setValue(value)} /> */}
            {/*   <ThemeProvider theme={theme}>
                <S.Main>
              
                    <Button title={theme === 'light' ? '일반모드로 테마 변경하기' : '다크모드로 테마 변경하기'}
                        click={toggleTheme} />
                        
                </S.Main>
             
               
    </ThemeProvider>
            */}


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