import React, { useEffect, useRef } from "react";
import "./contact-detail-style.css";

const ContactDetail = ({ clearSelectedCard, selectedCard }) => {
  const wrapperRef = useRef(null);
  useOutsideClickClose(wrapperRef);

  function useOutsideClickClose(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          clearSelectedCard();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div ref={wrapperRef} className="general-data-wrapper">
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
          <img className="contact-photo" alt="contact" src={selectedCard.photo} />
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