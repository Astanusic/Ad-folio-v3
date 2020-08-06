import React from "react";
import "./VerticalLinks.css";

function VerticalLinks({ url, title, isBlendMode, className }) {
  return (
    <div className="vertical__links">
      <a className={isBlendMode ? className : "vertical__link"} href={url}>
        {title}
      </a>
    </div>
  );
}

export default VerticalLinks;
