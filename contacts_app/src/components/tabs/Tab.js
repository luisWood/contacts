import React from "react";

const Tab = ({ selectedContacts, selectedTab, letter, fillSelectedTab }) => {

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
