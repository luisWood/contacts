import React from 'react';
import '../style.css'
import ContactList from './ContactList';

const ContactBook = ({ selectedTab, useEffect }) => {

    return (
    <div>
        <div className="container">
        <ContactList />

        </div>
    </div>
    )
}

export default ContactBook;