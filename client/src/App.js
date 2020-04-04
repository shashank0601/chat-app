import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AppJoin from './components/AppJoin.js';
import Chat from './components/Chat.js';

const App = () => (
    <Router>
        <Route path="/" exact component={AppJoin}></Route>
        <Route path="/chat" component={Chat}></Route>
    </Router>
)

export default App;