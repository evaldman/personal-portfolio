import React from "react";
import profile from "../profile-pic.jpg";

function About() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={profile} alt="profile picture" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Full stack web developer with experience in Ruby on Rails,
            Javascript and React. Interested in designing creative and engaging
            user experiences. With a background in auditing, hospitality and a
            passion for puzzles, I bring strong skills in client relations,
            attention to detail and problem solving.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
