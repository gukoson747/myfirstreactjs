import React from 'react';
import { Component } from 'react';

class Edit extends Component{
    constructor(props){
        super(props);

        this.editContact = this.editContact.bind(this);
    }

    editContact(){
        const {editContact, id} = this.props;
        editContact(id);
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
                    <button type="button" className="btn btn-info">Edit</button> <button type="button" className="btn btn-danger" onClick={this.editContact}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Edit;