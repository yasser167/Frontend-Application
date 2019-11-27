import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from  './assets/innoloft_icon.png';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AsideMenu from './components/asideMenu/asideMenu';
import Home from './components/home/home';
import HomeFeed from './components/homefeed/homefeed';
import Profile from './components/profile/profile';
import Notification from './components/notification/notification';

class App extends Component {

  constructor() {
    super();
    
    this.currentURL = new URL(document.URL);
    this.body = document.querySelector('body');
    this.body.classList.add('--loading')
  }

  render() {

    return (
      <div className="App">

        <span className="loading-overlay">
          <img src={logo} alt="logo" className="logo" />
        </span>

        <span className="overlay"></span>

        <Route exact={true} path="/" component={Home} />

        <Header currentURL={ this.currentURL }/>

        <div className="App-Content-Wrapper flex">
          <Notification />

          <AsideMenu currentURL={ this.currentURL }/>

          <Route path="/feed" component={HomeFeed} />

          <Route path="/profile" component={Profile} />
        </div>
        
        <Footer/>
      </div>
    )
  }
}

export default App;
