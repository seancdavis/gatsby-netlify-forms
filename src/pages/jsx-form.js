import React from "react"

import Layout from "../components/layout"

const JsxForm = () => (
  <Layout>
    <h1>JSX Form</h1>

    <form
      name="JSX Form"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
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
      <div data-netlify-recaptcha="true" />
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default JsxForm
