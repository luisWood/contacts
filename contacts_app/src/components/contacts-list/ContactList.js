import React from "react";
import ContactItem from "./ContactItem";
import "./contact-list-style.css";

const ContactList = ({ selectedContacts, selectCard, selectedCard }) => {
  const renderContacts = selectedContacts.map((contact) => {
    return (
      <ContactItem
        selectCard={selectCard}
        key={contact.phone}
        contact={contact}
      />
    );
  });

  return (
    <div className="contact-list-wrapper">
      <div className="contact-list-container">{renderContacts}</div>
    </div>
  );
};

ContactList.defaultProps = {
  selectedContacts: [],
};
export default ContactList;
