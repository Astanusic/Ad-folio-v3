import React from "react";
import "./ProjectListItem.css";
import { Link } from "react-router-dom";

function ProjectListItem({ title, imgSrc }) {
  return (
    <li className="project-list__item">
      <Link className="project__link" to="/">
        {title}
      </Link>
      <div className="project-list__img">
        <img src={imgSrc} alt="" />
      </div>
    </li>
  );
}

export default ProjectListItem;
