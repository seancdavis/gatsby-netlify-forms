import React from "react"

import Layout from "../components/layout"

const JsxForm = () => (
  <Layout>
    <h1>JSX Form</h1>

    <form name="JSX Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="JSX Form" />
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

export default JsxForm
