import React, { useEffect } from "react";
import "./contact-detail-style.css";

const ContactDetail = ({ clearSelectedCard, selectedCard }) => {
  useEffect(() => {
    console.log("loaded");
  }, []);
  return (
    <div className="general-data-wrapper">
      <button
        onClick={() => {
          clearSelectedCard();
        }}
        className="close-button"
      >
        X
      </button>
      <div className="data-wrapper">
        <div className="photo-wrapper">
          <img className="contact-photo" alt="photo" src={selectedCard.photo} />
        </div>
        <div className="general-details">
          <span className="name-detail">
            {selectedCard.lastName}, {selectedCard.firstName}
          </span>
          <div className="other-info">
            <span className="info-category">City:</span>
            <span className="info-value">{selectedCard.city}</span>
            <span className="info-category">email: </span>
            <span className="info-value">{selectedCard.email}</span>
            <span className="info-category">phone: </span>
            <span className="info-value">{selectedCard.phone}</span>
            <span className="info-category">street: </span>
            <span className="info-value">{selectedCard.street}</span>
            <span className="info-category">state: </span>
            <span className="info-value">{selectedCard.state}</span>
            <span className="info-category">postcode: </span>
            <span className="info-value">{selectedCard.postcode}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
{
  /* 
 
            <span>phone: "(017)-381-3861"</span>
            <span>photo: "https://randomuser.me/api/portraits/women/21.jpg"</span>
            <span>postcode: 34827</span>
            <span>state: "Kansas"</span>
            <span>street: "1208 Taylor St</span> */
}
