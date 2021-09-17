import React from "react";
import "../style.css";

const Tab = ({ selectedContacts, selectedTab, letter, fillSelectedTab }) => {
  const printSelectedContacts = () => {
    // console.log(selectedContacts)
  };
  return (
    <div
      onClick={() => {
        if (selectedContacts.length > 0) {
          fillSelectedTab(letter);
        }
      }}
      className={
        selectedContacts && selectedContacts.length === 0 ? 
        "tab-empty" :
        selectedTab === letter ? 
        "tab-selected"
          : "tab-default"
      }
    >
      <span className="tab-letter">{letter}</span>
      <span>
        <span className="contact-count">
          {selectedContacts ? selectedContacts.length : null}
        </span>
      </span>
    </div>
  );
};

export default Tab;
