import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

function Contact() {
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_9MeLca51RUURmd5KSEwfg";

  function onSubmit(data, reset) {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    reset.target.reset();
  }

  function sendEmail(serviceID, templateID, variables, userID) {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccess("Your email was sent!");
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  }

  return (
    <div className="contact">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>Please fill out form</p>
        <span className="sent-success">{success}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                    required: "Please enter a name",
                    maxLength: {
                      value: 20,
                      message: "Name is too long!",
                    },
                  })}
                  // ref={register({
                  //   required: "Your name is required",
                  //   maxLength: {
                  //     value: 20,
                  //     message: "Name is too long!",
                  //   },
                  // })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              <div className="text-center">
                <input
                  id="phone"
                  className="form-control"
                  type="text"
                  placeholder="Phone"
                  name="phone"
                />
                <div className="line"></div>
              </div>
              <div className="text-center">
                <input
                  id="email"
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Please enter an email address",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              <div className="text-center">
                <input
                  id="subject"
                  className="form-control"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                />
                <div className="line"></div>
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
