import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1iuqkxe",
        "template_wcgrgxo",
        form.current,
        "V2-Hgl0H7Tc41LMyP"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log("Message Sent");
        },
        (error) => {
          console.log("Error Sending Message");
        }
      );
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className="contact__details">
            Don't like forms? Send me an email at alopezfernandez@gmail.com
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="user_name"
                className="contact__form-input name"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="user_email"
                className="contact__form-input email"
                placeholder="Insert your email"
              />
            </div>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input message"
              placeholder="Write your message here!!!"
            ></textarea>
          </div>

          <input type="submit" value="Send" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default contact;
