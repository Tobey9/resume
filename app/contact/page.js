"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_REPLY, // Template #1
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          console.log(error.text);
          alert("Something went wrong.");
        }
      );

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID_NOTIFY, // Template #2
      form.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );
  };

  return (
    <div className={styles.contact}>
      <div className={styles.left}>
        <h1>Contact</h1>
        <p>Looking forward to hearing from you</p>

        <h3>Email</h3>
        <p>latebloomerguy99@gmail.com</p>
      </div>

      <div className={styles.right}>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
