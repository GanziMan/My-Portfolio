import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from './pages';
import Menubar from './hoc/Menu/Menubar';
import Profile from './hoc/Menu/Profile';
import {Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
            <Profile></Profile>
            <Menubar></Menubar>
            </div>
        );
    }
}

export default App;