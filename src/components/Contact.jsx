import { useState } from "react";
import emailjs from "@emailjs/browser";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const statusInitial = { type: "idle", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState(statusInitial);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateOwnerId = import.meta.env.VITE_EMAILJS_TEMPLATE_OWNER;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const ownerEmail = import.meta.env.VITE_CONTACT_OWNER_EMAIL;

  const isConfigured =
    serviceId && templateOwnerId && publicKey && ownerEmail;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type !== "idle") {
      setStatus(statusInitial);
    }
  };

  const validate = () => {
    if (!formData.name.trim()) {
      return "Please enter your name.";
    }
    if (!formData.email.trim()) {
      return "Please enter your email.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please provide a valid email address.";
    }
    if (!formData.message.trim()) {
      return "Please include a message.";
    }
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isConfigured) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please set the required environment variables.",
      });
      return;
    }

    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setStatus({ type: "loading", message: "Sending your message..." });

    const templateParamsOwner = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: ownerEmail,
    };

    try {
      await emailjs.send(serviceId, templateOwnerId, templateParamsOwner, {
        publicKey,
      });

      setStatus({
        type: "success",
        message: "Sent successfully! I will get back to you as soon as possible.",
      });
      setFormData(initialForm);
    } catch (sendError) {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again in a moment.",
      });
      // eslint-disable-next-line no-console
      console.error("Email send failed:", sendError);
    }
  };

  return (
    <section className="page-section contact-section">
      <span className="page-badge">CONTACT</span>
      <h1 className="page-heading">Get in Touch</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="contact-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          disabled={status.type === "loading"}
          required
          autoComplete="name"
          style={{width: '850px'}}
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="contact-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          disabled={status.type === "loading"}
          required
          autoComplete="email"
          style={{width: '850px'}}
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="contact-input contact-textarea"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          disabled={status.type === "loading"}
          rows={6}
          required
          style={{width: '850px'}}
        />

        {status.message && (
          <div
            className={`contact-status contact-status--${status.type}`}
            role="status"
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          className="contact-submit"
          disabled={status.type === "loading"}
        >
          {status.type === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {!isConfigured && (
        <p className="contact-config-warning">
          Email delivery is currently disabled because the EmailJS environment variables are not
          configured.
        </p>
      )}
    </section>
  );
}