import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ContactBook from './components/contacts/ContactBook';
import TabNavigation from './components/tabs/TabNavigation';
import axios from 'axios';

const App = () => {
const [data, setData] = useState('')

useEffect(() => {
    async function fetchData () {
        const response = await axios.get("https://randomuser.me/api/");
        setData(response)
        console.log("done")
    }
    fetchData()
    console.log("final")
    console.log(data)
},[])

    return (
        <div>
            <TabNavigation />
            <ContactBook />
        </div>
        );
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)