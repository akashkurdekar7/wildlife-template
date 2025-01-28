import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userSubject: "",
    userMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission can go here
    console.log("Form Submitted:", formData);
    // You can use email API or any backend service to send the message
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container grid">
        <div className="contact__data">
          <h2 className="section__title-2">
            <span>Subscribe Me.</span>
          </h2>
          <p className="contact__description-1">
            I will read all emails. Send me any message you want and I'll get
            back to you.
          </p>
          <p className="contact__description-2">
            I need your <b>Name</b> and <b>Email Address</b>, but you won't
            receive anything other than your reply.
          </p>

          <div className="geometric-box"></div>
        </div>

        <div className="contact__mail">
          <h2 className="contact__title">Send Me A Message</h2>

          <form
            className="contact__form"
            id="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact__group">
              <div className="contact__box">
                <input
                  type="text"
                  name="userName"
                  className="contact__input"
                  id="name"
                  required
                  placeholder="First Name"
                  value={formData.userName}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="contact__label">
                  First Name
                </label>
              </div>

              <div className="contact__box">
                <input
                  type="email"
                  name="userEmail"
                  className="contact__input"
                  id="email"
                  required
                  placeholder="Email Address"
                  value={formData.userEmail}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="contact__label">
                  Email Address
                </label>
              </div>
            </div>

            <div className="contact__box">
              <input
                type="text"
                name="userSubject"
                className="contact__input"
                id="subject"
                required
                placeholder="Subject"
                value={formData.userSubject}
                onChange={handleChange}
              />
              <label htmlFor="subject" className="contact__label">
                Subject
              </label>
            </div>

            <div className="contact__box contact__area">
              <textarea
                name="userMessage"
                id="message"
                className="contact__input"
                required
                placeholder="Message"
                value={formData.userMessage}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="message" className="contact__label">
                Message
              </label>
            </div>

            <p className="contact__message" id="contact-message"></p>

            <button type="submit" className="contact__button button">
              <i className="ri-send-plane-line"></i>Send Message
            </button>
          </form>
        </div>

        <div className="contact__social">
          <img
            src="images/curved-arrow.svg"
            alt=""
            className="contact__social-arrow"
          />
          <div className="contact__social-data">
            <div>
              <p className="contact__social-description-1">
                Does not send emails
              </p>
              <p className="contact__social-description-2">
                Write me on my social networks
              </p>
            </div>

            <div className="contact__social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100008575723501"
                className="contact__social-link"
              >
                <i className="ri-facebook-box-line"></i>
              </a>
              <a
                href="https://www.instagram.com/unlikeakash_"
                className="contact__social-link"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/akashkurdekar"
                className="contact__social-link"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
