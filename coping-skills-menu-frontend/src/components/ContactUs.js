import React from "react";
import "./cStyles/contact.css";

function Contact() {
  function handleSubmit(e) {
    return alert("Your message was sent successfully, have a nice day!");
  }

  return (
    <div className="contactCont">
      <h2>We would love to hear from you:</h2>
      <div className="Contact">
        <p>
          Fill out the section below with any questions, comments, or concerns.
        </p>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="First Name" required />
          <br />
          <input type="text" placeholder="Last Name" required />
          <br />
          <input type="email" placeholder="Email" required />
          <br />
          <textarea
            rows="10"
            cols="40"
            placeholder="Type your message here..."
            required
          />
          <br />
          <button className="btn btn-primary" id="formSub" type="submit" value="Send Message">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
