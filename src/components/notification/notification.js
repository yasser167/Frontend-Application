import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// actions
import {clear_message} from '../../actions/actions'

export class Notification extends Component {

  constructor(props) {
    super(props)

    this.clearMessage = this.clearMessage.bind(this)
    this.state = { }
  }

  clearMessage() {
    this.props.clear_message();
  }

  render() {
    return (
      <div onClick={() => { this.clearMessage() }} className={`notification ${ this.props.message ? '--open' : ''} ${this.props.message ? '--info' : '--error'} `}>
        {`${this.props.message} ☻`}
      </div>
    );
  }
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({
    clear_message
  }, dispatch);
}

function mapStateToProps(message) {
  return {
    message: message.notification
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Notification);
