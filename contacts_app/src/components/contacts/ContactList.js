import React from "react";
import ContactItem from './ContactItem';

const ContactList = ({ selectedContacts }) => {

   const renderContacts = (contacts) => {
    contacts.map(contact => {
        console.log(contact)
        return (
            <ContactItem contact={contact}/>
        )
    });
    }


    const printSelectedContacts = () => {
        // console.log(selectedContacts)
    }

    return (
        <div onClick={() => {printSelectedContacts()}}>
            <div className="contact-list-container">{renderContacts(selectedContacts)}</div>
        </div>
    )
}

export default ContactList;