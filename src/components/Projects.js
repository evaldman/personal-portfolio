import React from "react";
import project from "../projectsample.png";
import YoutubeEmbed from "./YoutubeEmbed";

function Projects() {
  return (
    <div id="projects" className="project-wrapper">
      <h1 className="text-uppercase text-center py-5">projects</h1>
      <div className="video-wrapper">
        <div>
          <YoutubeEmbed embedId="s978-pfGNpg" />
        </div>
        <div>
          <YoutubeEmbed embedId="s978-pfGNpg" />
        </div>
        <div>
          <YoutubeEmbed embedId="s978-pfGNpg" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
