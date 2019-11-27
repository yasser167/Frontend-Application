import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AsideMenu extends Component {

    constructor(props) {
        super(props);
        
        this.renderLinks = this.renderLinks.bind(this);

        this.body = document.querySelector('body');
        this.body.classList.add('--loading')
    }

    menu = [
        {
            icon: 'home',
            title: 'Welcome Page',
            isLink: true,
            link: '/',
            active: false
        },
        {
            icon: 'language',
            title: 'Feed',
            isLink: true,
            link: '/feed',
            active: this.props.currentURL.pathname === '/feed' ? true : false
        },
        {
            icon: 'account_box',
            title: 'My Account',
            isLink: true,
            link: '/profile',
            active: this.props.currentURL.pathname === '/profile' ? true : false
        },
        {
            icon: 'apartment',
            title: 'My Company',
            isLink: false,
            link: '',
        },
        {
            icon: 'import_contacts',
            title: 'News',
            isLink: false,
            link: '',
        },
        {
            icon: 'insert_chart',
            title: 'Analytics',
            isLink: false,
            link: '',
            permission: 'dashboard',
        },
        
    ]

    handleClick(event) {
        let current = event.currentTarget;

        current.parentNode.querySelectorAll('.Side-Menu-Nav-Item').forEach(element => {
            if ( element.classList.contains('active') ) {
                element.classList.remove('active');
            }
        });
        current.classList.add('active');

        document.querySelector('body').classList.remove('--side-menu-open');
    }

    renderLinks(item, key) {
        return (
            item.isLink ? 
            <Link to={ item.link }
                className={ item.active ? "Side-Menu-Nav-Item active" : "Side-Menu-Nav-Item"} 
                onClick={ this.handleClick }
                key={key}
            >
                <i className="material-icons" icon={ item.icon }></i>
                <span>{ item.title }</span>
            </Link>
            :
            <div className={ item.active ? "Side-Menu-Nav-Item active" : "Side-Menu-Nav-Item"} key={key}>
                <i className="material-icons" icon={ item.icon }></i>
                <span>{item.title}</span>
            </div>
            
        )
    }

    render() {
        return (
            <div className="App-Side-Menu">
                <div className="Side-Menu-Nav flex direction--column justify--space-between align-start">

                    {this.menu.map(this.renderLinks)}

                </div>
            </div>
        );
    }

}

export default AsideMenu;
