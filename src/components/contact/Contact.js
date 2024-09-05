import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { InfoAlert, ErrorAlert } from "../alert/Alert";

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(null);  // Hide the alert after 3000 milliseconds (3 seconds)
    }, 5000);

    // Clear the timer when the component unmounts or when showAlert changes
    return () => clearTimeout(timer);
  }, [alert]);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(`${process.env.SERVICE_FORM}`)
    console.log(`${process.env.TEMPLATE_FORM}`)
    console.log(`${process.env.PUBLIC_KEY}`)
    emailjs.sendForm(`${process.env.SERVICE_FORM}`, `${process.env.TEMPLATE_FORM}`, form.current, {
      publicKey: `${process.env.PUBLIC_KEY}`
    })
      .then(
        () => {
          setAlert(<InfoAlert text='E-mail sent!' />);
        },
        (error) => {
          setAlert(<ErrorAlert text='Something is wrong. Try again later.' />);
        }
      );
  }

  return (
    <section className="section" id="contact">
      <div className="contact-content">
        <div className="contact-summary">
          <h1>Cont<span>ac</span>t</h1>
          <p>Feel free to reach out if you'd like to learn more about me or have any questions!</p>
        </div>
        <div className="contact-form">
          {alert}
          <form ref={form} onSubmit={sendEmail} id="contact-form__action">
            <label>Name*</label>
            <input type="text" placeholder="name" id="name" name="user_name" required />
            <label>E-mail*</label>
            <input type="email" id="email" placeholder="e-mail" name="user_email" required />
            {/**
            <label>Phone</label>
            <input type="tel" id="tel" placeholder="ex: 000-000-0000" name="user_number"
              pattern="\d{3}[\-]\d{3}[\-]\d{4}" /> */}
            <label>Message*</label>
            <textarea placeholder="max 240 characters" maxLength="240" id="message" name="message" rows="4"
              cols="50" required></textarea>
            <button type="submit">Send</button>
          </form>
          <p>* Required fields</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;