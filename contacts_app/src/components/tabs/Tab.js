import React from "react";

const Tab = ({ contacts, tabTag, letter, fillSelectedTab }) => {
  return (
    <div
      onClick={() => {
        if (contacts.length > 0) {
          fillSelectedTab(letter);
        }
      }}
      className={
        contacts && contacts.length === 0
          ? "tab-empty" : tabTag === letter
          ? "tab-selected" : "tab-default"
      }
    >
      <span className="tab-letter">{letter}</span>
      <span>
        <span className="contact-count">
          {contacts ? contacts.length : null}
        </span>
      </span>
    </div>
  );
};

export default Tab;
