import React from "react"

import "../styles/contact.scss"
import Layout from "../components/layout"
const contact = () => {
  return (
    <Layout>
      <section className="contactbanner"></section>
      <section className="contact">
        <section className="contactFirstSection">
          <div className="mb-4 d-flex">
            <div>
              <span>Get </span>
              <div className="line"></div>
            </div>
            <span className="ml-2">inTouch</span>
          </div>
          <div>
            <p>
              You can contact us any way that is convenient for you. We are
              available 24/7 via <br /> fax or email. You can also use a quick
              contact form below or visit our office <br /> personally. Email us
              with any questions or inquires or use our contact data. We <br />
              would be happy to answer your questions.
            </p>
          </div>
        </section>

        <section className="contactContactForm">
          <h5>Contact Form</h5>
          <form>
            <div className="userDetails mb-4">
              <input
                className="formControl"
                type="text"
                placeholder="Your First Name"
              />
              <input
                className="formControl"
                type="text"
                placeholder="Your Last Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="formControl"
                type="text"
                placeholder="Your First Name"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="formControl"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit">Submit Message</button>
          </form>
        </section>
      </section>
    </Layout>
  )
}

export default contact
