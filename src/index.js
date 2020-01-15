import * as React from "react"
import ReactDOM from "react-dom"
import Home from "./components/Home"
// import styles from "./index.css" // 这种方式要写声明文件
import imgSrc from "./1.jpg"
import "./index.css"

export default function App() {
  const changeTheme = () => {
    const ele = document.getElementsByTagName("html")[0]
    const { theme } = ele.dataset
    ele.setAttribute("data-theme", theme === "dark" ? "light" : "dark")
  }
  return (
    <div className="page">
      <button onClick={changeTheme}>切换主题</button>
      {/* <div style={{ color: "red" }}>[name]</div> */}
      {/* <Home /> */}
      <header className="title">新春的祝福</header>
      <div className="content">
        <section>
          央视网消息（新闻联播）：在中华民族传统节日庚子鼠年春节即将到来之际，中共中央总书记、国家主席、中央军委主席习近平14日下午在人民大会堂同各民主党派中央、全国工商联负责人和无党派人士代表欢聚一堂，共迎佳节。习近平代表中共中央，向各民主党派、工商联和无党派人士，向统一战线广大成员，致以诚挚的问候和新春的祝福。
        </section>
        <img src={imgSrc} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
