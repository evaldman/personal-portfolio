import React from "react";
import Typed from "react-typed";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>full-stack software engineer</h1>
        <Typed
          className="typed-text"
          strings={["Javascript", "React", "Ruby on rails", "Ruby"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
}

export default Header;
