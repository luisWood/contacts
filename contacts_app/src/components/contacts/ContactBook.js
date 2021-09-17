import React from "react";
import "../style.css";
import TabNavigation from "../tabs/TabNavigation";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";

const ContactBook = ({ userContacts }) => {
  const [selectedTab, setSelectedTab] = useState("A");
  const [selectedContacts, setSelectedContacts] = useState(userContacts["A"]);

  useEffect(() => {
    if (userContacts) {
      console.log(userContacts)
      setSelectedContacts(userContacts[selectedTab]);
    }
  }, [selectedTab, userContacts]);

  const selectTab = (selTab) => {
    setSelectedTab(selTab);
  };

  return (
    <div>
      <div className="container">
        <TabNavigation
          selectedContacts={userContacts}
          selectedTab={selectedTab}
          fillSelectedTab={selectTab}
        />
        <ContactList selectedContacts={selectedContacts} />
      </div>
    </div>
  );
};

export default ContactBook;
