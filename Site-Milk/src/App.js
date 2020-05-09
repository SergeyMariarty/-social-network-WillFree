import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter> 
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path="/profile" component={Profile}/>
      </div>
    </div>
    </BrowserRouter>
    );
}

export default App;