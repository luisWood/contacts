import React from 'react';

const ContactItem = ({firstName, lastName}) => {
    return (
        <div>
            <span>{lastName}, {firstName}</span>
            <div className="section-line"></div>
        </div>
    )
}

export default ContactItem;