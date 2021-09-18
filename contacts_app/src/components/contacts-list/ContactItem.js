import React from 'react';

const ContactItem = ({ contact, selectCard }) => {
    return (
        <div onClick={() => selectCard(contact)} className="contact">
            <span className="contact-index-name">{contact.lastName}, {contact.firstName}</span>
            <div className="section-line"></div>
        </div>
    )
}

export default ContactItem;