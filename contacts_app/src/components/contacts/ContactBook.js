import React from 'react';
import '../style.css'
import TabNavigation from '../tabs/TabNavigation';
import ContactList from './ContactList';
import { useState, useEffect } from 'react';

const ContactBook = (userContacts) => {
    const [selectedTab, setSelectedTab] = useState("A")
    const [selectedContacts, setSelectedContacts] = useState([{}])

    useEffect(() => {
        selectContactData();
    }, [selectedTab])

    const selectTab = (selTab) => {
        setSelectedTab(selTab)
    }

    const selectContactData = () => {
        if(userContacts) {
            //2 - fix replication of userContacts
            var contacts = userContacts.userContacts.filter((contact) => contact.lastName[0] === selectedTab)
            setSelectedContacts(contacts)
            }
        }

    return (
    <div>
        <div className="container">
            <TabNavigation selectedContacts={selectedContacts} selectedTab={selectedTab} fillSelectedTab={selectTab}/>
            <ContactList selectedContacts={selectedContacts}/>
        </div>
    </div>
    )
}

export default ContactBook;