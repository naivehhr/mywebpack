"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
// import styles from "./index.css"
var index_css_1 = require("./index.css"); // 这种方式要写声明文件
// import { Button } from "antd"
// import CC from "./cc"
// console.log(BB)
// console.log(CC)
// import MyForm from "./Form/Form"
// import MyForm from "../dist/schemaform"
var bb_1 = require("./bb");
// import Ba from '../lib/bb'
function App() {
    return (React.createElement("div", { className: index_css_1["default"].bingo },
        "321",
        React.createElement(bb_1["default"], null)));
}
exports["default"] = App;
react_dom_1["default"].render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=index.js.map