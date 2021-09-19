import React from "react";
import "./tabs-style.css";
import Tab from "./Tab";

const TabNavigation = ({ selectedContacts, selectedTab, fillSelectedTab }) => {
  const renderTabs = () => {
    const tabs = ["A","B","C", "D", "E", "F", "G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map(element => {
      return <Tab
       key={element}
        tabTag={selectedTab}
        letter={element}
        fillSelectedTab={fillSelectedTab}
        contacts={selectedContacts[element]}
      />
    })

    return tabs
  }


  return (
    <div className="tabs-wrapper tabs-columns">
      {renderTabs()}

    </div>
  );
};

export default TabNavigation;
