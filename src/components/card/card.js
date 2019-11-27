import React, { Component } from 'react';
import logo from  '../../assets/user-placeholder.png';
// import axios from 'axios';

class Card extends Component {

    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    // }

    renderCards(data) {
        if (data !== undefined && data !== null ) {
            return data.posts.map( (item, key) => {
                return  (
                    <div className="card" key={ key }>
                        <div className="flex wrap justify--flex-start align-center">
                            <img src={logo} alt={ item.userId }/>
                            <h3>{ item.title }</h3>  
                        </div>
                        <p>{ item.body }</p>  
                    </div>
                )
            });
        }
    }

  render() {
      const { data } = this.props;
    return (
        <div className="cards-wrapper">
            {this.renderCards(data)}
        </div>
    );

  }
}

export default Card;
