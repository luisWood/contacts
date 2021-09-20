import React, { useEffect, useRef } from "react";
import "./contact-detail-style.css";
import OtherInfoEntry from './OtherInfoEntry'

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
          <img
            className="contact-photo"
            alt="contact"
            src={selectedCard.photo}
          />
        </div>
        <div className="general-details">
          <span className="name-detail">
            {selectedCard.lastName}, {selectedCard.firstName}
          </span>
          <div className="other-info">
            <OtherInfoEntry category="City:" value={selectedCard.city} />
            <OtherInfoEntry category="E-mail:" value={selectedCard.email} />
            <OtherInfoEntry category="Phone:" value={selectedCard.phone} />
            <OtherInfoEntry category="Address:" value={selectedCard.street} />
            <OtherInfoEntry category="State:" value={selectedCard.state} />
            <OtherInfoEntry category="Postcode:" value={selectedCard.postcode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
