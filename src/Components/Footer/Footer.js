import React from "react";
import "./Footer.css";
import VerticalLinks from "../../Layout/VerticalLinks/VerticalLinks";

function Footer() {
  return (
    <div className="footer">
      <VerticalLinks
        url="https://www.linkedin.com/in/adrien-stanusic-316a4b1a1/"
        title="Linkdin"
      />
      <VerticalLinks url="https://github.com/Astanusic" title="Github" />
      <VerticalLinks url="https://twitter.com/StanusicA" title="Twitter" />
      <VerticalLinks url="" title="Contact" />
    </div>
  );
}

export default Footer;
