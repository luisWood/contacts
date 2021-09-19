import React, { useEffect, useRef } from "react";
import "./contact-detail-style.css";
import OtherInfoEnty from './OtherInfoEnty'

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
            <OtherInfoEnty category="City:" value={selectedCard.city} />
            <OtherInfoEnty category="E-mail:" value={selectedCard.email} />
            <OtherInfoEnty category="Phone:" value={selectedCard.phone} />
            <OtherInfoEnty category="Address:" value={selectedCard.street} />
            <OtherInfoEnty category="State:" value={selectedCard.state} />
            <OtherInfoEnty category="Postcode:" value={selectedCard.postcode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
