import React from "react";
import backgroundImage from "../assets/contact.png";
import "../styles/Contact.css";
import {Link} from "@material-ui/core";

function Contact() {
  return (
    <div className="contact">
      <div
    className="leftSide"
    style={{backgroundImage: `url(${backgroundImage})`}}
    />
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
          rows="6"
          placeholder="Enter message..."
          name="message"
          required
          />
          <Link to="/contact">
            <button> Send Message</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Contact;
