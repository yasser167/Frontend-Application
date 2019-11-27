import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from  '../../assets/innoloft_icon.png';

class Home extends Component {
    constructor() {
        super();

        this.body = document.querySelector('body');
    }

    componentDidMount() {
        setTimeout( () => {
            this.body.classList.remove('--loading')
            this.body.classList.add('--ready')
        }, 500)
    }

  render() {
    return (
        <div className="homepage flex wrap">
            <div className="homepage-item flex justify--center align-center">
                <img src={logo} alt="logo" className="logo" />
                <h1>Hey <i>Innoloftans</i></h1>
                <h2>Adventure is on, fasten your seatbelt!</h2>
            </div>

            <div className="homepage-item flex justify--center align-center">
                
                <Link to="/feed" className="button --primary flex justify--center align-center">
                    <span>Feed</span>
                    <i className="material-icons" icon="dynamic_feed"></i>
                </Link>

                <br/>

                <Link to="/profile" className="button --primary flex justify--center align-center">
                    <span>Profile</span>
                    <i className="material-icons" icon="person"></i>
                </Link>
            </div>

        </div>
    )
  }
}

export default Home;
