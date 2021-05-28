import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Connecticut, USA</p>
            </div>
            <div className="d-flex">
              <a href="mailto:evaldman@evaldman@yahoo.com">
                evaldman@yahoo.com
              </a>
            </div>
            <div className="d-flex">
              <p>&copy; Yevgeniy Valdman 2021</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">home</a>
                <br />
                <a className="footer-nav">about</a>
                <br />
                <a className="footer-nav">projects</a>
              </div>
              <div className="col">
                <a className="footer-nav">Built with React</a>
                <br />
                <a className="footer-nav">View Source Code</a>
                <br />
                <a className="footer-nav">....</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a
                className="mx-3 icons"
                href="https://github.com/evaldman"
                target="blank"
              >
                <GoMarkGithub />
              </a>
              <a
                className="mx-3 icons"
                href="https://www.linkedin.com/in/yevgeniy-valdman-54894820a"
                target="blank"
              >
                <FaLinkedin />
              </a>
              <a
                className="mx-3 icons"
                href="https://evaldman.medium.com/"
                target="blank"
              >
                <FaMediumM />
              </a>
              <a className="mx-3 icons">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
