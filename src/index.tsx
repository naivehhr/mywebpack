import * as React from "react"
import ReactDOM from "react-dom"
// import styles from "./index.css"
import styles from "./index.css" // 这种方式要写声明文件
// import { Button } from "antd"
// import CC from "./cc"
// console.log(BB)
// console.log(CC)
// import MyForm from "./Form/Form"
// import MyForm from "../dist/schemaform"
// import B from './bb'
// import Ba from '../lib/bb'
export default function App() {
  return (
    <div className={styles.bingo}>
      <div style={{color: 'red'}}>321</div>
      {/* <B /> */}
      {/* <Ba /> */}
      {/* <MyForm
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
      /> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
