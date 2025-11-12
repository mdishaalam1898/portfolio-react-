import React, { useState } from "react";
import "./Contact.css";
import { Mail, Phone, MapPin } from "lucide-react"; // using lucide-react icons

const Contact = () => {
  const [reselt, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "bf086ab3-d708-4f1e-bcb7-71d131f6238e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Sent Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <h3>Let's Talk</h3>
          <p>
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <Mail className="icon" />
              <span>mdishaalam560@gmail.com</span>
            </div>
            <div className="info-item">
              <Phone className="icon" />
              <span>+91 9311426102</span>
            </div>
            <div className="info-item">
              <MapPin className="icon" />
              <span>Bengaluru, India</span>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
          <span>{reselt}</span>
        </form>
      </div>

      <div className="footer-socials">
        <a
          href="https://github.com/mdishaalam1898"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mdishaalam8340/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:mdishaalam560@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a href="tel:+919876543210">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
