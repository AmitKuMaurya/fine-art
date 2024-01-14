import React from "react";
import styles from "./contactUs.module.css";

export const ContactUs = () => {
  return (
    <>
      <div className={styles.contactUsContainer}>
        <div></div>
        <div></div>
        <div className={styles.contactUs_content}>
          <div>
            <h1>Contact Us</h1>
          </div>
          <div>
            <span>
              For further questions, including partnership opportunities, please
              email info@shilpsaga.com or contact using our contact form.
            </span>
          </div>
          {/* <div> */}
          <form className={styles.contactForm}>
            <div>
              <div>
              <label>Full Name</label>
              <br />
              <input type="text" name="" id="" placeholder="Full Name" />
              </div>
              <div>

              <label>Email</label> <br />
              <input type="text" name="" id="" placeholder="Email" />
              </div>
            </div>

            <div>
            <label>How can we help you?</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Describe your problem in at least 250 characters"
              ></textarea>
              </div>
              <div>
            <button type="submit">Send Message</button>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};
