/**
 * 关于我们页控制器组件
 * @Component AboutController
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import ReactDOM from "react-dom"
import Header from "../components/common/header"
import Footer from "../components/common/footer"
import * as serviceWorker from "../serviceWorker"

ReactDOM.render(
  <div className="container">
    <Header />
    <div>关于我们</div>
    <Footer />
  </div>,
  document.getElementById("root")
)
serviceWorker.unregister()
