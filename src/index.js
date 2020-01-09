import * as React from "react"
import ReactDOM from "react-dom"
import Home from "./components/Home"
// import styles from "./index.css" // 这种方式要写声明文件
import "./index.css"

export default function App() {
  return (
    <div className={"styles-bingo"}>
      <div style={{ color: "red" }}>[name]</div>
      <div>122s1s3</div>
      <Home />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
