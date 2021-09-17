import React, { useEffect } from 'react';
import '../style.css';
import Tab from './Tab';

const TabNavigation = ({ selectedContacts, selectedTab, fillSelectedTab }) => {
    
    useEffect(() => {
    }, [selectedTab])

    return (
        <div className="tabs-wrapper">
            <Tab selectedTab={selectedTab} letter="A" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="B" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="C"fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="D" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="E" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="F" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="G" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="H" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="I" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="J" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="K" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="L" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="M" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="N" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="O" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="P" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="Q" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="R" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="S" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="T" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="U" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="V" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="W" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="X" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="Y" fillSelectedTab={fillSelectedTab} />
            <Tab selectedTab={selectedTab} letter="Z" fillSelectedTab={fillSelectedTab} />
        </div>
    )
}

export default TabNavigation;