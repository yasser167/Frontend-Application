import React, { Component } from 'react';
import axios from 'axios';
import Card from '../card/card';

class HomeFeed extends Component {

    constructor() {
        super();

        this.fetchData = this.fetchData.bind(this);
        this.body = document.querySelector('body');
        this.state = {
            posts: []
        };
        this.fetchData();

        this.posts = [];
        
    }

    fetchData() {
      axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.body.classList.add('--loading');
        this.posts = response.data.slice(0, 20);
      }) 
      .then( res => {
        this.setState({
          posts: this.posts
        })
        this.body.classList.remove('--loading');
      })
    }

    componentDidMount() {
      this.body.classList.remove('--loading')
      this.body.classList.add('--ready')
    }

  render() {
    return (
      <div className="HomeFeed flex wrap justify--flex-start align-center">
        
        <Card data={ this.state } />
        
      </div>
    )
  }
}

export default HomeFeed;
