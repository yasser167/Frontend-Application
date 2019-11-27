import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Form from '../form/form';

// actions
import {userLoginsAction, userLoginsActionAPI, userInfoAction, userInfoActionAPI, set_message} from '../../actions/actions'

class Profile extends Component {

    constructor() {
        super();

        this.body = document.querySelector('body');
        this.state = { };
    }

    fields = [
        [
            {
                tag: 'input',
                type: 'text',
                name: 'username',
                icon: 'person',
                required: true,
                title: 'Username',
                placeholder: 'Username',
                error: 'Please enter a proper email',
                reducer: 'user_logins'
            },
            {
                tag: 'input',
                type: 'email',
                name: 'email',
                icon: 'person',
                required: true,
                title: 'Email',
                placeholder: 'Change email address',
                error: 'Please enter a proper email',
                reducer: 'user_logins'
            },
            {
                tag: 'input',
                type: 'password',
                name: 'password',
                icon: 'lock',
                required: true,
                title: 'Password',
                placeholder: 'Change password',
                error: 'Please a valid password that mathes the rules',
                reducer: 'user_logins'
            },
            {
                tag: 'input',
                type: 'password',
                name: 'confirm_password',
                icon: 'lock',
                required: true,
                title: 'Confirm password',
                placeholder: 'Confirm password',
                error: 'Paswords are not identical',
                reducer: 'user_logins'
            },
            {
                tag: 'input',
                type: 'button',
                name: 'save_data',
                icon: 'lock',
                title: 'Save Data',
                // class: '--secondary',
                readOnly: true,
                action: (e) => {
                    let current = e.target;
                    let form = current.parentNode.parentNode.parentNode.parentNode;
                    let formData = new FormData(form)
                    
                    this.props.userLoginsActionAPI(formData)
                    .then( (res) => {
                        this.props.set_message(res.value.data.message);
                        this.setState({
                            formData
                        })
                    })
                    .catch( (error) => {
                        console.log(`Error: ${error}`)
                    });
                    

                    let formInputs = {}
                    form.querySelectorAll('input[name]').forEach(element => {
                        formInputs[element.name] = element.value;
                    });
                    this.props.userLoginsAction(formInputs)
                    
                }
            },
        ],
        [
            {
                tag: 'input',
                type: 'text',
                name: 'first_name',
                icon: 'person',
                required: true,
                title: 'First Name',
                placeholder: 'Change first name',
                error: 'Please enter your first name',
                reducer: 'user_info'
            },
            {
                tag: 'input',
                type: 'text',
                name: 'last_name',
                icon: 'person',
                required: true,
                title: 'Last Name',
                placeholder: 'Change last name',
                error: 'Please enter your last name',
                reducer: 'user_info'
            },
            {
                tag: 'input',
                type: 'text',
                name: 'address',
                icon: 'location',
                required: true,
                title: 'Address',
                placeholder: 'Street, house number, postal code',
                error: 'Please enter your address',
                reducer: 'user_info'
            },
            {
                tag: 'select',
                type: 'text',
                name: 'country',
                icon: 'location',
                required: true,
                title: 'Country',
                placeholder: 'Select country',
                error: 'Please select your country',
                reducer: 'user_info',
                selectOptions: [
                    { key: 1, value: "Germany"},
                    { key: 2, value: "Austria"},
                    { key: 3, value: "Switzerland"},
                ]
            },
            {
                tag: 'input',
                type: 'button',
                name: 'save_data',
                icon: 'lock',
                title: 'Save Data',
                // class: '--secondary',
                readOnly: true,
                action: (e) => {
                    let current = e.target;
                    let form = current.parentNode.parentNode.parentNode.parentNode;
                    let formData = new FormData(form)
                    this.props.userInfoActionAPI(formData)
                    .then( (res) => {
                        this.props.set_message(res.value.data.message);
                        this.setState({
                            formData
                        })
                    })
                    .catch( (error) => {
                        console.log(`Error: ${error}`)
                    });
                    
                    let formInputs = {}
                    form.querySelectorAll('input[name], select').forEach(element => {
                        switch (element.tagName) {
                            case 'SELECT':
                                formInputs[element.name] = element.selectedIndex;
                                break;
                            default:
                                formInputs[element.name] = element.value;
                                break;
                        }
                    });
                    this.props.userInfoAction(formInputs)
                }
            },
        ]
    ]


    componentDidMount() {
      this.body.classList.remove('--loading')
      this.body.classList.add('--ready')
    }

  render() {
    //   console.log( this.props );
    //   console.log( this.state );
    return (
      <div className="Profile">
          <Form  
            fields={ this.fields } 
            inputsStore={this.props}
            set_message={this.props.set_message}
           />
      </div>
    )
  };
};

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        userLoginsAction,
        userLoginsActionAPI,
        userInfoAction,
        userInfoActionAPI,
        set_message
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        user_logins: state.userLogins,
        user_data: state.userData
    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Profile);