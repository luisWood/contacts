import React from "react";
import "./contact-detail-style.css";

const OtherInfoEnty = ({ category, value}) => {

    return (
        <div>
            <span className="info-category">{category}</span>
            <span className="info-value">{value}</span>
        </div>
    )
}

export default OtherInfoEnty;