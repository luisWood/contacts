import React from "react";
import "./contact-detail-style.css";

const OtherInfoEntry = ({ category, value}) => {

    return (
        <div>
            <span className="info-category">{category}</span>
            <span className="info-value">{value}</span>
        </div>
    )
}

export default OtherInfoEntry;