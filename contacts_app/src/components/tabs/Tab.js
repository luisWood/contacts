import React from 'react';
import '../style.css'

const Tab = ( { selectedTab, letter, fillSelectedTab } ) => {
    return (
        
        <div onClick={() => fillSelectedTab(letter)} className={selectedTab === letter ? 'tab-selected' : 'single-tab'} >
            <span className="tab-letter">{letter}</span>
            <span>
                <span className="contact-count">12</span>
            </span>
        </div>
    )
}

export default Tab;