import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import "./styles/Contact.css";

const SERVICE_ID = "service_hf8zjya";
const TEMPLATE_ID = "template_zg4dm8i";
const PUBLIC_KEY = "D30WUv_2i6zT_hhLq";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus("idle");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h1 className="contact-heading">Get In Touch</h1>
        <p className="contact-subtitle">
          Have a question or want to work together? Fill out the form below or
          reach out directly through my contact information.
        </p>
        <div className="contact-grid">
          <div className="contact-form-card">
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="from_name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="from_email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-send-btn" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="form-status success">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="form-status error">Failed to send. Please try again.</p>
              )}
            </form>
          </div>
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <MdEmail />
                </span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:akhilsingh8113@gmail.com" data-cursor="disable">
                    akhilsingh8113@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <MdPhone />
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8112345678</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <FaLinkedinIn />
                </span>
                <div>
                  <h4>LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/akhil82"
                    target="_blank"
                    data-cursor="disable"
                  >
                    linkedin.com/in/akhil82
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <FaGithub />
                </span>
                <div>
                  <h4>GitHub</h4>
                  <a
                    href="https://github.com/akhil8112"
                    target="_blank"
                    data-cursor="disable"
                  >
                    github.com/akhil8112
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-follow">
              <h4>Follow Me</h4>
              <div className="contact-follow-icons">
                <a
                  href="https://github.com/akhil8112"
                  target="_blank"
                  data-cursor="disable"
                  className="follow-icon"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/akhil82"
                  target="_blank"
                  data-cursor="disable"
                  className="follow-icon"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://x.com/AkhilSi8112"
                  target="_blank"
                  data-cursor="disable"
                  className="follow-icon"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/akhilsin74"
                  target="_blank"
                  data-cursor="disable"
                  className="follow-icon"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
