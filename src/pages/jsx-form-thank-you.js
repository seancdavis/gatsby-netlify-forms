import React from "react"

import Layout from "../components/layout"

const JsxFormThankYou = () => (
  <Layout>
    <h1>JSX Form - Thank You</h1>

    <form
      name="JSX Form - Thank You"
      method="POST"
      data-netlify="true"
      action="/thank-you"
    >
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default JsxFormThankYou
