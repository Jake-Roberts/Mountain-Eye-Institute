"use client";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <section className='contact component'>
      <h2>Contact Us</h2>
      <div className='contact-details'>
        <p>
          This contact form is for <strong>general questions</strong> and should
          not be used for immediate help, scheduling appointments, or canceling
          appointments.
        </p>
        <strong className='contact-questions'>
          <p>Have medical questions for a doctor or nurse?</p>
          <p>Need to schedule or cancel an appointment?</p>
          <p className='cta'>It&apos;s easy. Call now!</p>
          <Link className='link-large' href='tel:4355861131'>
            (435) 586-1131
          </Link>
        </strong>
      </div>
      <div className='contact-container'>
        <div className='ourInfo'>
          <div>
            <h3>Address</h3>{" "}
            <Link href='https://maps.google.com/?q=1811%20W%20Royal%20Hunte%20Dr%20%23%201%2C%20Cedar%20City%2C%20UT%2C%2084720'>
              1811 W. Royal Hunte Dr., Suite 1 Cedar City, UT 84720
            </Link>
          </div>
          <div>
            <h3>Phone</h3> <Link href='tel:4355861131'>(435) 586-1131</Link>
          </div>
          <div>
            <h3>Hours</h3>{" "}
            <p>
              <strong>Mon - Fri:</strong>
              <span> 8:00 AM - 5:00 PM</span>
            </p>
            <p>
              <strong>Sat - Sun:</strong>
              <span> Closed</span>
            </p>
          </div>
        </div>
        <div className='formContainer'>
          <form>
            <input type='text' placeholder='Name' required />
            <input type='email' placeholder='Email' required />
            <input type='tel' placeholder='Phone' required />
            <textarea placeholder='Questions' required></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
