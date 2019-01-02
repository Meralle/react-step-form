import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
    state = {
        step : 1,
        firstName :'',
        lastName :'',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    // proceed to next step
    nextStep = () => {
        const{ step } = this.step;
        this.setState({
            step: step + 1
        });
    }

    // proceed to prev step
    prevtStep = () => {
        const{ step } = this.step;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({ input: e.target.value })
    }

    render() {
        const { step } =this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }
        
        return (
        <div>
            
        </div>
    )
  }
}

export default UserForm
