import * as React from "react"
import ReactDOM from "react-dom"
import Home from "./components/Home"
// import styles from "./index.css" // 这种方式要写声明文件
import "./index.css"

export default function App() {
  return (
    <div className={"aran"}>
      <div style={{ color: "red" }}>[name]</div>
      <div>122s1s3</div>
      {/* <Home /> */}
    <div className="a_b">qqq</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
