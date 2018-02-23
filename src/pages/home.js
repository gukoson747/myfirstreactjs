import React from 'react';
import { Component } from 'react';
import Contact from '../crud/contact';

const contacts = [
    {
        id: 1,
        name: 'Ariel Almelda',
        number: '09103546296',
        email: 'arielalmelda858@gmail.com'
    },
    {
        id: 2,
        name: 'Zak Almelda',
        number: '09101234567',
        email: 'gukoson747@gmail.com'
    },
    {
        id: 3,
        name: 'Del Almelda',
        number: '09107456123',
        email: 'gukoson@gmail.com'
    }
];

localStorage.setItem('contacts', JSON.stringify(contacts));

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: JSON.parse(localStorage.getItem('contacts'))
        }
        this.deleteContact = this.deleteContact.bind(this);

    }
    componentWillMount(){
        const contacts = this.getContacts();
        this.setState({ contacts });
    }

    getContacts(){
       return this.state.contacts;
    }

    deleteContact(id){
        const contacts = this.getContacts();

        const findContact = contacts.filter( contact => {
            return contact.id !== id;
        } );

        this.setState({ contacts: findContact });
    }

    render(){
        return(
            <div>
                <h1>Contact List</h1>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        {
                            this.state.contacts.map(
                                contact => {
                                    return (
                                        <Contact 
                                            key={contact.id}
                                            //name={contact.name}
                                            //number={contact.number}
                                            //email={contact.email}
                                            {...contact}
                                            deleteContact={this.deleteContact}
                                        />
                                    );
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;