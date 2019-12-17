import React, { Component } from "react"
import { Button } from "antd"
// import "antd/dist/antd.css"
import Test from '../dist/test'
export default class Index extends Component {
  render() {
    console.log(Test)
    return (
      <div>
        <Test />
        <Button type="primary">Primary</Button>
      </div>
    )
  }
}
