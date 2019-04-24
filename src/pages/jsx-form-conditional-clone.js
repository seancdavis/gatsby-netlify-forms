import React from "react"

import Layout from "../components/layout"

class JsxFormConditionalClone extends React.Component {
  constructor(props) {
    super(props)
    this.state = { formName: "JSX Form - Conditional Clone" }
  }

  handleChange = event => {
    this.setState({ formName: event.target.value })
  }

  render() {
    return (
      <Layout>
        <h1>JSX Form - Conditional Clone</h1>

        <form name={this.state.formName} method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value={this.state.formName} />
          <p>
            <select
              onChange={this.handleChange}
              defaultValue="JSX Form - Conditional Clone"
            >
              <option value="JSX Form - Conditional Clone">
                JSX Form - Conditional Clone
              </option>
              <option value="JSX Form - Conditional Clone #2">
                JSX Form - Conditional Clone #2
              </option>
              <option value="JSX Form - Conditional Clone #3">
                JSX Form - Conditional Clone #3
              </option>
            </select>
          </p>
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
  }
}

export default JsxFormConditionalClone
