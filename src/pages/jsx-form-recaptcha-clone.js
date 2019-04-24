import React from "react"

import Layout from "../components/layout"

const JsxFormRecaptcha = () => (
  <Layout>
    <h1>JSX Form - Recaptcha Clone</h1>

    <form
      name="JSX Form - Recaptcha Clone"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <input
        type="hidden"
        name="form-name"
        value="JSX Form - Recaptcha Clone"
      />
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

export default JsxFormRecaptcha
