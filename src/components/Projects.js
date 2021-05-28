import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

function Projects() {
  return (
    <div id="projects" className="project-wrapper">
      <h1 className="heading text-uppercase text-center py-5">projects</h1>
      <div className="video-wrapper">
        <div className="project-card">
          <div>
            <YoutubeEmbed embedId="rHD64saG0Mw" />
            <div className="project-info">
              <h3 className="project-title">Small Jobs</h3>
              <span className="project-language">ReactJs</span>
              <span className="project-language">Rails API</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div>
            <YoutubeEmbed embedId="aK3UCzlKYzw" />
            <div className="project-info">
              <h3 className="project-title">Obscurities</h3>
              <span>ReactJs</span>
              <span>Rails API</span>
            </div>
          </div>
        </div>
        {/* <div className="project-card">
          <div>
            <YoutubeEmbed embedId="s978-pfGNpg" />
            <div className="project-info">
              <h3 className="project-title">Comedian FindR</h3>
              <span>VanillaJs</span>
              <span>Rails API</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
