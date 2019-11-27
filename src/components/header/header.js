import React, { Component } from 'react';
import logo from  '../../assets/logo_innoloft.png';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.body = document.querySelector('body');
        this.body.classList.add('--loading')

        this.matchMedia = {
            tablet: window.matchMedia('(max-width:1024px)').matches,
            mobile: window.matchMedia('(max-width:480px)').matches
        }

        console.log( this.matchMedia );

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let current = event.currentTarget;

        if ( this.matchMedia.tablet ) {
            event.preventDefault() ;
            event.stopPropagation();
            if ( current.classList.contains('side-menu-logo') ) {
                this.body.classList.toggle('--side-menu-open');
                this.body.classList.remove('--header-open');
            }
            if ( current.classList.contains('header-nave-logo') ) {
                this.body.classList.toggle('--header-open');
                this.body.classList.remove('--side-menu-open');
            }
            return;
        }
    }

    render() {
        return (
            <div className="App-header">
                <div className="header-wrapper flex justify--space-between align-center full-width">

                    {
                        this.matchMedia.tablet || this.matchMedia.mobile

                        ?

                        <React.Fragment>
                            <span className="header-nav-item side-menu-logo flex align-center" onClick={ this.handleClick.bind(this) }>
                                <span className="logo"></span>
                                <i className="material-icons mobile-only" icon="menu"></i>
                            </span>

                        
                            <span to="/" className="header-nav-item header-nave-logo flex align-center" onClick={ this.handleClick.bind(this) }>
                                <i className="material-icons mobile-only" icon="expand_more"></i>
                            </span>
                        </React.Fragment>

                        :

                        <Link to="/" className="header-nav-item side-menu-logo flex align-center">
                            <span className="logo"></span>
                        </Link>
                    }
                    

                        
                    <div className="header-nav flex justify--space-between align-center">
                        <div className="header-nav-item">
                            <i className="material-icons" icon="language"></i>
                            <span>EN</span>
                        </div>

                        <div className="header-nav-item">
                            <i className="material-icons" icon="email"></i>
                            <span className="notification-icon"></span>
                        </div>

                        <div className="header-nav-item">
                            <i className="material-icons" icon="notifications"></i>
                            <span className="notification-icon"></span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default Header;
