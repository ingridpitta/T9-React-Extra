import React from "react";
import "./iconText.css";

const IconText = ({ icon, alt, classIcon, children }) => {
  return (
    <div className="icon-text-box">
      <img src={icon} alt={alt} className={classIcon}></img>
      <p className="icon-text">{children}</p>
    </div>
  );
};

export default IconText;
