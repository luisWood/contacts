import React from "react";

const ContactDetail = () => {
  return (
    <div className="general-data-wrapper">
        <div>
            <button>X</button>
        </div>
      <div className="data-wrapper">
        <div className="photo-wrapper">
        <img
            // ref=""
            alt="photo" 
            src="https://randomuser.me/api/portraits/women/21.jpg"
            />
        </div>
        <div className="general-details">
          <div className="name-detail">Bessie, Austin</div>
          <div className="other-info">
          <span className="info-category">City:</span>
          <span className="info-value">Mesquite</span>
          <span className="info-category">email: </span>
          <span className="info-value">bessie.austin@example.com</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
{/* 
            <span>email: "bessie.austin@example.com"</span>
            <span>firstName: "Bessie"</span>
            <span>lastName: "Austin"</span>
            <span>phone: "(017)-381-3861"</span>
            <span>photo: "https://randomuser.me/api/portraits/women/21.jpg"</span>
            <span>postcode: 34827</span>
            <span>state: "Kansas"</span>
            <span>street: "1208 Taylor St</span> */}