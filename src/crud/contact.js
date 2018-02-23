import React from 'react';
import { Component } from 'react';

class Contact extends Component{
    constructor(props){
        super(props);

        this.deleteContact = this.deleteContact.bind(this);
    }

    deleteContact(){
        const {deleteContact, id} = this.props;
        deleteContact(id);
    }

    render(){    
       const { id, name, number, email } = this.props;

        return(
            <tr>
                <td>{ id }</td>
                <td>{ name }</td>
                <td>{ number }</td>
                <td>{ email }</td>
                <td>
                    <button type="button" className="btn btn-info">Edit</button> <button type="button" className="btn btn-danger" onClick={this.deleteContact}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Contact;