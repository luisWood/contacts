import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ContactBook from './components/contacts/ContactBook';
import TabNavigation from './components/tabs/TabNavigation';


const App = () => {
const [userData, setUserData] = useState([])

useEffect(() => {
    fetchData();
},[])

async function fetchData() {
    const response = axios.get('https://randomuser.me/api/?results=100')
    .then((response) => {
        var resultsArray = []

        response.data.results.map(element => {
            resultsArray.push({
                "firstName": element.name.first, 
                "lastName": element.name.last,
                "email": element.email,
                "phone":element.phone,
                "street":element.location.street.number + " " + element.location.street.name,
                "city":element.location.city,
                "state":element.location.state,
                "postcode":element.location.postcode,
                "photo":element.picture.large,
            })
        })
        setUserData(resultsArray)
    })
}

    return (
        <div>
            <ContactBook userContacts={userData}/>
        </div>
        );
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)