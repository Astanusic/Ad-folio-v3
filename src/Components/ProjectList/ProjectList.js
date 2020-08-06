import React, { useState, useEffect } from "react";
import "./ProjectList.css";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import Image1 from "../../assets/1.jpg";
import Image2 from "../../assets/2.jpg";
import Image3 from "../../assets/3.jpg";
import Image4 from "../../assets/4.jpg";

function ProjectList() {
  return (
    <nav className="projects">
      <ul className="project-list">
        <ProjectListItem imgSrc={Image1} title="Netflix Clone" />
        <ProjectListItem imgSrc={Image2} title="Spotify Clone" />
        <ProjectListItem imgSrc={Image3} title="Ecommerce App" />
        <ProjectListItem imgSrc={Image4} title="Platform Game" />
      </ul>
    </nav>
  );
}

export default ProjectList;
