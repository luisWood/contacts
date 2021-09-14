import React from "react";
import ContactItem from './ContactItem';

const ContactList = () => {
    return (
        <div>
            <div className="contact-list-container">
                <div className="contact-column">
                    <ContactItem lastName="Doe" firstName="John"/>
                    <ContactItem lastName="Morgan" firstName="William"/>
                </div>
                <div className="contact-column">
                    <ContactItem lastName="Doe" firstName="Jane"/>
                    <ContactItem lastName="Meyer" firstName="Stephen"/>
                </div>

            </div>
        </div>
    )
}

export default ContactList;