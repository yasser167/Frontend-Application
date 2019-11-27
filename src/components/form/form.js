import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Input from './input/input';
import Select from './select/select';
import { set_message } from '../../actions/actions'



class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.body = document.querySelector('body');
        this.renderTabsList  = this.renderTabsList.bind(this);
        this.renderTabsPanel  = this.renderTabsPanel.bind(this);
        this.renderFields  = this.renderFields.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    tabsList = [
        {
            title: 'Main Information',
            icon: 'home'
        },
        {
            title: 'Additional Information',
            icon: 'home'
        }
    ]

    renderTabsList( item, key ) {
        return (
            <Tab key={key}>
                { item.title }
            </Tab>
        )
    }

    renderTabsPanel( item, key ) {
        return (
            <TabPanel key={key}>
                { item.map(this.renderFields) }
            </TabPanel>
        )
    }

    renderFields( item, key ) { 
        switch (item.tag) {
            case 'input':
                return <Input inputsStore={ this.props } item={ item } key={key} />

            case 'select':
                return <Select inputsStore={ this.props }item={ item } key={key} />

            default:
            break;
        }
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
    }

    componentDidMount() {
      this.body.classList.remove('--loading')
      this.body.classList.add('--ready')
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="flex wrap justify--flex-start align-center">
            <Tabs>
                <TabList>
                    { this.tabsList.map(this.renderTabsList) }
                </TabList>

                { this.props.fields.map(this.renderTabsPanel) }
            </Tabs>
            {/* <button type="submit" className="button">Submit From</button> */}
        </form>
    )
  };
};

export default Form;