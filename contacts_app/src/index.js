import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ContactBook from "./components/contacts-list/ContactBook";

const App = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    axios.get("https://randomuser.me/api/?results=1000").then((response) => {
      var alphaberMapping = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        L: [],
        M: [],
        N: [],
        O: [],
        P: [],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: [],
      };

      response.data.results.forEach((element) => {
        if (/[A-Z]/.test(element.name.last[0])) {
          alphaberMapping[element.name.last[0]].push({
            firstName: element.name.first,
            lastName: element.name.last,
            email: element.email,
            phone: element.phone,
            street:
              element.location.street.number +
              " " +
              element.location.street.name,
            city: element.location.city,
            state: element.location.state,
            postcode: element.location.postcode,
            photo: element.picture.large,
          });
        }
      });

      setUserData(alphaberMapping);
    });
  }

  return (
    <div>
      <ContactBook userContacts={userData} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
