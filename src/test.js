import React, { Component } from "react"
import ReactDOM from "react-dom"
import A from "../dist/test"
class Test extends Component {
  render() {
    console.log('123')
    return <div>123</div>
  }
}

ReactDOM.render(<Test />, document.getElementById("root"))


