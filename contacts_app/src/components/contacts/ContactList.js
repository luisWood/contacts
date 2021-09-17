import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ selectedContacts }) => {
  const renderContacts = selectedContacts.map((contact) => {
    return <ContactItem key={contact.phone} contact={contact} />;
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
