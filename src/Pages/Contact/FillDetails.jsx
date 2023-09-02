import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RiMessageLine } from "react-icons/ri";

const FillDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_blloa91",
        "template_614xnr9",
        form.current,
        "7Nic5rXYcV1pnA-9t"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    //
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <div className="contact_heading">
        <h1>Contact me</h1>
        <RiMessageLine style={{ fontSize: "1.6rem" }} />
      </div>
      <form className="contact_form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          className="input_field"
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          className="input_field"
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Your message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input className="contact_submit_btn" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default FillDetails;
