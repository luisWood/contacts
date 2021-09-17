import React from 'react';

const ContactItem = ({ contact }) => {
    return (
        <div className="contact">
            <span className="contact-index-name">{contact.lastName}, {contact.firstName}</span>
            <div className="section-line"></div>
        </div>
    )
}

export default ContactItem;