import React from "react"
import ReactDOM from "react-dom"
import "./webresource/css/common.css"
import Index from "./components/index"
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter, Route } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route path="/" component={Index} />
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
)
serviceWorker.unregister()
