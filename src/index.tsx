import * as React from "react"
import ReactDOM from "react-dom"
// import styles from "./index.css"
import styles from "./index.css"
// import { Button } from "antd"
// import CC from "./cc"
// console.log(BB)
// console.log(CC)
// import MyForm from "./Form/Form"
import MyForm from "../dist/schemaform"
export default function App() {
  return (
    <div className={styles.main}>
      321
      <MyForm
        formSchema={{
          name: {
            type: "string",
            label: "插件名称",
            placeholder: "请填写插件名称",
            validate: { maxLen: 3, required: true }
          }
        }}
        // formError={{}}
        // formData={{}}
        onSubmit={() => {}}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
