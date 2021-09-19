import React from "react";
import TabNavigation from "../tabs/TabNavigation";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import ContactDetail from "../contact-detail/ContactDetail";
import "../general-style.css";

const ContactBook = ({ userContacts }) => {
  const [selectedTab, setSelectedTab] = useState("A");
  const [selectedContacts, setSelectedContacts] = useState(userContacts["A"]);
  const [selectedCard, setSelectedCard] = useState(undefined);

  useEffect(() => {
  }, [selectedCard])

  useEffect(() => {
    if (userContacts) {
      setSelectedContacts(userContacts[selectedTab]);
    }
  }, [selectedTab, userContacts]);

  const selectNewDetail = (contact) => {
    setSelectedCard(contact)
  }

  const selectTab = (selTab) => {
    setSelectedTab(selTab);
  };

  const clearSelectedCard = () => {
    setSelectedCard()
  }

  return (
    <div>
      <div className="container">
        <TabNavigation
          selectedContacts={userContacts}
          selectedTab={selectedTab}
          fillSelectedTab={selectTab}
        />
        <div>{selectedCard && <ContactDetail clearSelectedCard={clearSelectedCard} selectedCard={selectedCard}/>}</div>
        <ContactList selectedContacts={selectedContacts} selectedCard={selectedCard} selectCard={selectNewDetail}/>
      </div>
    </div>
  );
};

export default ContactBook;
