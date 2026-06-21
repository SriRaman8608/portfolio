import "../styles/contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="container py-5 contact-section reveal">
      
      <div className="contact-wrapper text-center">

        <h2 className="section-heading mb-4">Contact</h2>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:sriram2528.sr@gmail.com" className="contact-text" target="_blank">sriram2528.sr@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+918608205304" className="contact-text">8608205304</a>
        </div>

      </div>

    </section>
  );
}

export default Contact;