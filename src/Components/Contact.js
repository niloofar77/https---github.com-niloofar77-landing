import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have you have a quastion in minde?</h1>
      <h1 className="primary-heading">Let us help you?</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourEmail@gmail.com"></input>
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
