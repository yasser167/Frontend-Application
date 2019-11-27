import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
// actions
import {userInput} from '../../../actions/actions'

class Input extends Component {

    constructor(props) {
        super(props);
        this.validateInputs = this.validateInputs.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.calculateStrength = this.calculateStrength.bind(this);
        this.state = { 
            password: {
                strength: {
                    percentage: 0
                }
            }
        }
        this.passwordFields = {}
    }

    componentDidMount() {
        this.handleValue(this.props.item);

        setTimeout( () => {
            this.formInput = document.querySelectorAll('input')
            if (this.formInput !== []) {

                this.formInput.forEach(element => {
                    if (element.value.length === 0) {
                        element.classList.add('--empty');
                    } else {
                        element.classList.add('--not-empty');
                    }
                });
            }
        }, 1)
    }
    
    // componentDidUpdate(prevProps, prevState) {
    // }
    // componentWillUpdate(nextProps, nextState) {
    // }

    calculateStrength(current, inputVlaidation) {
        let keys = [];
        // let totalItems = Object.keys(this.passwordFields).length;
        let progressTextNum = 0;


        // for (const el in inputVlaidation.password.validity) {
        //     if (inputVlaidation.password.validity.hasOwnProperty(el)) {
        //         const element = inputVlaidation.password.validity[el];
        //     }
        // }

        Object.keys(this.passwordFields).forEach(key => {
            if (this.passwordFields[key] === true) {
                keys.push(key);
            }
        })
        
        if (keys.length !== 0) {
            progressTextNum = Math.round((100 / 4) * keys.length);
        }

        if( progressTextNum === 0 || progressTextNum === 100 ) {
            current.classList.remove('--invalid');
        }

        switch( progressTextNum ) {
            case 25:
                current.parentNode.classList.add('--red')
                current.parentNode.classList.remove('--yellow')
                current.parentNode.classList.remove('--blue')
                current.parentNode.classList.remove('--green')
                break;

            case 50:
                current.parentNode.classList.add('--yellow')
                current.parentNode.classList.remove('--red')
                current.parentNode.classList.remove('--blue')
                current.parentNode.classList.remove('--green')
                break;

            case 75:
                current.parentNode.classList.add('--blue')
                current.parentNode.classList.remove('--yellow')
                current.parentNode.classList.remove('--red')
                current.parentNode.classList.remove('--green')
                break;

            case 100:
                current.parentNode.classList.add('--green')
                current.parentNode.classList.remove('--red')
                current.parentNode.classList.remove('--yellow')
                current.parentNode.classList.remove('--blue')
                break;
            default:
                break;
        }

        this.setState({
            password: {
                strength: {
                    percentage: progressTextNum
                }
            }
        })
    }

    validateInputs(current) {
        const emailRegExp = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
        let inputVlaidation = {
            emailValid: emailRegExp.test(current.value),
            password: {
                hasLower:  current.value.match(/[a-z]/),
                hasUpper:  current.value.match(/[A-Z]/),
                hasNumber: current.value.match(/[0-9]/),
                hasSpChar: current.value.match(/[!@#$%^&*(),.?":{}|<>]/),
                validity: {
                    lowerCase: false,
                    upperCase: false,
                    number: false,
                    spChar: false,
                },
                strength: {
                    status: '',
                    percentage: 0
                }
            }
        }

        switch( current.type ) {
            case 'email':
                if ( current.value.length >= 6 ) {
                    if( inputVlaidation.emailValid && current.validity.valid ){
                        current.classList.remove('--invalid');
                    } else {
                        current.classList.add('--invalid');
                    }
                } else {
                    current.classList.remove('--invalid');
                }
                break;
            case 'password':

                if ( current.name !== 'confirm_password') {

                    if ( inputVlaidation.password.hasLower !== null && inputVlaidation.password.hasLower.length !== 0 ) {
                        current.classList.add('--invalid');
                        current.parentNode.querySelector('.validityError li.lowerCase').classList.add('--hidden');
                        this.passwordFields['lowerCase'] = true;

                    } else {
                        current.parentNode.querySelector('.validityError li.lowerCase').classList.remove('--hidden');
                        this.passwordFields['lowerCase'] = false;
                    }
                    
                    
                    if ( inputVlaidation.password.hasUpper !== null && inputVlaidation.password.hasUpper.length  !== 0 ) {
                        current.classList.add('--invalid');
                        current.parentNode.querySelector('.validityError li.upperCase').classList.add('--hidden');
                        this.passwordFields['upperCase'] = true;

                    } else {
                        current.parentNode.querySelector('.validityError li.upperCase').classList.remove('--hidden');
                        this.passwordFields['upperCase'] = false;
                    }
                    
                    
                    if ( inputVlaidation.password.hasNumber !== null &&  inputVlaidation.password.hasNumber.length !== 0 ) {
                        current.classList.add('--invalid');
                        current.parentNode.querySelector('.validityError li.number').classList.add('--hidden');
                        this.passwordFields['number'] = true;

                    } else {
                        current.parentNode.querySelector('.validityError li.number').classList.remove('--hidden');
                        this.passwordFields['number'] = false;
                    }
                    
                    
                    if ( inputVlaidation.password.hasSpChar !== null && inputVlaidation.password.hasSpChar.length !== 0 ) {
                        current.classList.add('--invalid');
                        current.parentNode.querySelector('.validityError li.specialChar').classList.add('--hidden');
                        this.passwordFields['spChar'] = true;

                    } else {
                        current.parentNode.querySelector('.validityError li.specialChar').classList.remove('--hidden');
                        this.passwordFields['spChar'] = false;
                    }
                    
                    if (  inputVlaidation.password.validity.lowerCase && inputVlaidation.password.validity.upperCase &&
                          inputVlaidation.password.validity.number    && inputVlaidation.password.validity.spChar
                        ) {
                            debugger
                            current.classList.remove('--invalid');
                    }
                    
                    this.calculateStrength(current, inputVlaidation);
                    
                }

                
                break;
                
            default: 
                break;
        }

        

        switch ( current.name ) {
            case "confirm_password":
                if ( current.value !== document.querySelector('input[name="password"]').value ) {
                    current.classList.add('--invalid')
                } else {
                    current.classList.remove('--invalid')
                }
                break;

            default:
            break
        }
    }

    handleChange(e) {
        let current = e.target;
        // this.props.userInput(current.name , current.value)

        if ( current.value !== '' ) {
            current.classList.add('--not-empty')

            if( current.name === 'password' ) {
                current.parentNode.querySelector('.progress-bar').classList.remove('--hidden')
            }
        } else {
            current.classList.remove('--not-empty')
            
            if( current.name === 'password' ) {
                current.parentNode.querySelector('.progress-bar').classList.add('--hidden')
            }
        }
        this.validateInputs(current)
    }

    handleFocus(e) {
        let current = e.target;
        if ( current.type !== 'button' ) {
            current.classList.add('--touched')
        }
    }

    handleBlur(e) {
        let current = e.target;
        current.classList.remove('--touched')
    }

    handleValue(item) {
        if ( this.props.inputsStore.inputsStore.user_logins !== "" ) {
            Object.keys(this.props.inputsStore.inputsStore.user_logins).forEach( element => {
                let value = '';
                if ( item.name === element ) {
                    value = this.props.inputsStore.inputsStore.user_logins[element]
                    this.setState({
                        inputValue_logins : value  
                    })
                    return value;
                }
            })
        }


        if ( this.props.inputsStore.inputsStore.user_data !== "" ) {
            Object.keys(this.props.inputsStore.inputsStore.user_data).forEach( element => {
                let value = '';
                if ( item.name === element ) {
                    value = this.props.inputsStore.inputsStore.user_data[element]
                    this.setState({
                        inputValue_info : value  
                    })
                    return value;
                }
            })
        }
    }

    renderInputs(item) {
        let specialCahr1 = `! "#$%&'()*+,-./:;<>?@[]^`;
        let specialCahr2 = "`{|}~";
        let specialCharacters = specialCahr1 + specialCahr2;

        // console.log( this.state );
        
        switch (item.type) {
            case 'button':
                return (
                    <input type={ item.type }
                        required={ item.required } 
                        onBlur={ this.handleBlur.bind(this) } 
                        onFocus={ this.handleFocus.bind(this) } 
                        onChange={ this.handleChange.bind(this) } 
                        onClick={ item.action ? item.action : null }
                        value={ item.title } 
                        className={ item.class !== undefined &&  item.class ? `button ${item.class}` : 'button' }
                        readOnly={ item.readOnly !== undefined &&  item.readOnly ? true : false }
                    />
                )
            default:
                return (
                    <label>
                        <input type={ item.type }
                            name={ item.name } 
                            required={ item.required } 
                            onBlur={ this.handleBlur.bind(this) } 
                            onFocus={ this.handleFocus.bind(this) } 
                            onChange={ item.onChangeAction ? item.onChangeAction : this.handleChange.bind(this) } 
                            defaultValue= { item.reducer === 'user_logins' ? this.state.inputValue_logins : this.state.inputValue_info }
                            className={ item.class !== undefined &&  item.class ? item.class : '' }
                            readOnly={ item.readOnly !== undefined &&  item.readOnly ? true : false }
                        />
        
                        <span>{ item.title }</span>

                        { item.name === 'password' 
                            ?
                            <span className="flex direction--column justify--flex-start align-start validityError">
                                <i>Password should have:</i>
                                <ul className="flex direction--column justify--flex-start align-start">
                                    <li className="lowerCase">Lowercase letter</li>
                                    <li className="upperCase">Uppercase letter</li>
                                    <li className="number">Number</li>
                                    <li className="specialChar">Special character such as: <b>{ specialCharacters }</b></li>
                                </ul>
                            </span>
                            :
                            <span className="validityError">{ item.error }</span>
                        }

                        { item.name === 'password'
                            ?
                            <div className="progress-bar flex direction--column justify--center items-center --hidden">
                                {/* <p className="progress-bar-text">{ `${this.state.password.strength.percentage}%` }</p> */}
                                <span className="progress-bar-visual" >
                                    <span style={{width: `${this.state.password.strength.percentage}%`}}></span>
                                </span>
                            </div>
                            :
                            ""
                        }
                    </label>
                )
        }

        
    }

  render() {
    return (
        <div className="inputs-wrapper">
            {this.renderInputs(this.props.item)}
        </div>
    );

  }
}


function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        userInput
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        inputValue: state.inputValue,
    };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Input);