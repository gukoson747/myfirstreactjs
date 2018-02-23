import React from 'react';
import { Component } from 'react';

class Add extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();

        this.props.addContact(
            this.props.lastid + 1, 
            this.nameInput.value, 
            this.numberInput.value, 
            this.emailInput.value);
        
        this.nameInput.value = '';
        this.numberInput.value = '';
        this.emailInput.value = '';
    }
    render(){    
       
        return(
            <form onSubmit={this.onSubmit}>    
                <input type="text" ref={ nameInput => this.nameInput = nameInput} />
                <input type="text" ref={ numberInput => this.numberInput = numberInput} />
                <input type="email"  ref={ emailInput => this.emailInput = emailInput} />
                <input type="submit" value="Add" />
            </form>    
        );
    }
}

export default Add;