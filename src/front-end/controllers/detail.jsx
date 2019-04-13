/**
 * 详情控制器组件
 * @Component DetailController
 * @copyright art
 * @author  shenbo<grubbyhunter@gmail.com>
 */
import React from "react"
import ReactDOM from "react-dom"

import Detail from "../components/detail"
import Header from "../components/common/header"
import Footer from "../components/common/footer"
import * as serviceWorker from "../serviceWorker"

ReactDOM.render(
  <div className='container'>
    <Header />
    <Detail />
    <Footer />
  </div>,
  document.getElementById("root")
)
serviceWorker.unregister()
