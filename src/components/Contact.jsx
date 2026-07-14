import React, { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyVXcENJZBhosgD2Lx6b5KNv4L7bIREGBcGEANNIWv8fNNd05YyTgrqWZffYbcEGuQ8Ig/exec";

export default function Contact() {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    fetch(SCRIPT_URL, { method: "POST", body: formData })
      .then(() => {
        setMsg("✅ Message sent successfully!");
        setForm({ Name: "", Email: "", Subject: "", Message: "" });
        setTimeout(() => setMsg(""), 5000);
      })
      .catch((error) => {
        setMsg("❌ Something went wrong!");
        console.error("Error!", error.message);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Contact Details</div>
            <p>Get in touch</p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Venkat Mothukuri</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Ongole, Andhra Pradesh, India</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">mvn1063@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="links">
              <a href="https://www.linkedin.com/in/Venkat063/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/Venkat063" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="column right">
            <div className="text">
              Message me <i className="fas fa-paper-plane"></i>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={form.Name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={form.Email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  value={form.Subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="5"
                  name="Message"
                  placeholder="Message"
                  value={form.Message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send Message</button>
              </div>
            </form>

            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
