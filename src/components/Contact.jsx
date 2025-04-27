import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact({ activeTab }) {
  const form = useRef();
  const contactMessageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (contactMessageRef.current) {
      contactMessageRef.current.textContent = "Sending message...";
    }

    emailjs
      .sendForm(
        "service_jbyjsvc",
        "template_bwplhpy",
        form.current,
        "UDsMXVhauNgA51Xqm"
      )
      .then(
        () => {
          contactMessageRef.current.textContent =
            "Message sent successfully ✅";
          setTimeout(() => {
            contactMessageRef.current.textContent = "";
          }, 3000);
          form.current.reset();
        },
        () => {
          contactMessageRef.current.textContent =
            "Message not sent (service error) ❌";
        }
      );
  };

  return (
    <section
      className={`section tab-content contact-tab ${
        activeTab === "contact" ? "active" : ""
      }`}
      data-tab-content="contact"
    >
      <div className="container">
        <div className="contact-info">
          <h4 className="section-title title-small">Contact info</h4>
          <ul className="contact-info-list">
            <li className="contact-info-item">
              <div className="icon-box">
                <span className="material-symbols-outlined" aria-hidden="true">
                  mail
                </span>
              </div>
              <div className="info-content">
                <p className="label-large info-title">Mail Me</p>
                <a
                  href="mailto:delonpratama1009@gmail.com"
                  className="label-large info-text"
                >
                  delonpratama1009@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-info-item">
              <div className="icon-box">
                <span className="material-symbols-outlined" aria-hidden="true">
                  location_on
                </span>
              </div>
              <div className="info-content">
                <p className="label-large info-title">Address</p>
                <a
                  href="https://maps.app.goo.gl/xUdHTXVNtcTuLiF89"
                  className="label-large info-text"
                  target="_blank"
                >
                  Kota Bekasi, Indonesia
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h3 className="title-large">Let's Work Together.</h3>
          <form
            action=""
            ref={form}
            className="input-wrapper"
            id="contact-form"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="input-field"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="input-field"
            />
            <textarea
              name="user_message"
              placeholder="Message"
              required
              className="textarea"
            ></textarea>
            <button type="submit" className="btn">
              <span className="label-large">Send Message</span>
              <div className="state-layer"></div>
            </button>
            <p
              ref={contactMessageRef}
              className="contact-message"
              id="contact-message"
            ></p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
