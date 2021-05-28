import React from "react";
import profile from "../profile-pic.jpg";

function About() {
  return (
    <div id="about" className="container py-5">
      <h1 className="heading text-uppercase text-center py-5">about me</h1>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={profile} alt="profile pic..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <p>
            Full stack web developer with experience in Ruby on Rails,
            Javascript and React. Interested in designing creative and engaging
            user experiences. With a background in auditing, hospitality and a
            passion for puzzles, I bring strong skills in client relations,
            attention to detail and problem solving.
          </p>
          <p>
            While away from the computer, I enjoy spending time with my family,
            going on long hikes and camping trips, puzzles, cars. I have a new
            found appreciation for working with wood, and am currently
            experimenting with small builds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
