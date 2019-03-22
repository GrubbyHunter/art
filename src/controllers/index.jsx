/**
 * 首页控制器组件
 * @Component IndexController
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import ReactDOM from "react-dom"

import Index from "../components/index/index"
import Header from "../components/common/header"
import Footer from "../components/common/footer"
import * as serviceWorker from "../serviceWorker"

ReactDOM.render(
  <div className="container">
    <Header />
    <Index />
    <Footer />
  </div>,
  document.getElementById("root")
)
serviceWorker.unregister()
