import * as React from "react"
import ReactDOM from "react-dom"
import Btn from "./component"
// import styles from "./index.css"
import styles from "./index.css"

export default function App() {
  return (
    <div className={styles.main}>
      321
      <Btn />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
