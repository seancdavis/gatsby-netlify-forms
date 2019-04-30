import React from "react"
import ReCAPTCHA from "react-google-recaptcha"

import Layout from "../components/layout"

class JsxFormGoogleRecaptcha extends React.Component {
  render() {
    return (
      <Layout>
        <h1>JSX Form - Google Recaptcha</h1>

        <form
          name="JSX Form - Google Recaptcha"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <input
            type="hidden"
            name="form-name"
            value="JSX Form - Google Recaptcha"
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
          <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    )
  }
}

export default JsxFormGoogleRecaptcha
