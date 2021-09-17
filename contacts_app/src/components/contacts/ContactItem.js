import React from 'react';

const ContactItem = ({ contact }) => {
    return (
        <div>
            <span>{contact.lastName}, {contact.firstName}</span>
            <div className="section-line"></div>
        </div>
    )
}

export default ContactItem;