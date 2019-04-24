import React from "react"
import axios from "axios"
import * as qs from "query-string"

import Layout from "../components/layout"

class JsxFormAsync extends React.Component {
  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = { feedbackMsg: null }
  }

  handleSubmit(event) {
    event.preventDefault()
    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    const axiosOptions = {
      url: this.props.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    axios(axiosOptions)
      .then(response => {
        this.setState({
          feedbackMsg: "Form submitted successfully!",
        })
        this.clearForm()
      })
      .catch(err =>
        this.setState({
          feedbackMsg: "Form could not be submitted.",
        })
      )
  }

  clearForm() {
    this.domRef.current.reset()
  }

  render() {
    return (
      <Layout>
        <h1>JSX Form - Async</h1>

        {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}

        <form
          ref={this.domRef}
          name="JSX Form - Async"
          method="POST"
          data-netlify="true"
          onSubmit={event => this.handleSubmit(event)}
        >
          <input
            ref="form-name"
            type="hidden"
            name="form-name"
            value="JSX Form - Async"
          />
          <p>
            <label>
              Your Email: <input ref="email" type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea ref="message" name="message" />
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

export default JsxFormAsync
