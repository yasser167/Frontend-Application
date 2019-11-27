import React, { Component } from 'react';

class Select extends Component {

    constructor(props) {
        super(props);
        this.handleValue = this.handleValue.bind(this);
        this.state = {  }
    }

    componentDidMount() {
        this.handleValue(this.props.item);
    }

    handleValue(item) {
        if ( this.props.inputsStore.inputsStore.user_data !== "" ) {
            Object.keys(this.props.inputsStore.inputsStore.user_data).forEach( element => {
                let value = '';
                if ( item.name === element ) {
                    value = this.props.inputsStore.inputsStore.user_data[element]
                    this.setState({
                        selectOptionKey : value  
                    })
                    return true;
                }
            })
        }
    }

    renderOptions(item) {
        let selected = false;
        console.log( `SelectSTATE: ${this.props.inputsStore.inputsStore.user_data.country}` );
        return (
            item.selectOptions.map( el => {
                if ( el.key === this.props.inputsStore.inputsStore.user_data.country ) {
                    selected = true;
                }
                return <option value={ el.key }  key={ el.key }>{ el.value }</option>
            })
        )
    }

    renderSelects(item) {
        console.log( this.props.inputsStore.inputsStore.user_data );
        return (
            <select name={ item.name } defaultValue={this.props.inputsStore.inputsStore.user_data.country}>
                <option>Choose Country..</option>
                {  this.renderOptions(item) }
                
            </select>
        )
    }

  render() {
    return (
        <div className="selects-wrapper">
            {this.renderSelects(this.props.item)}
        </div>
    );

  }
}

export default Select;
