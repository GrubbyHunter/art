import React from "react";
import ReactDOM from "react-dom";
import "./webresource/css/common.css";
import Index from "./components/index";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="container">
    <Header />
    <Index />
    <Footer />
  </div>,
  document.getElementById("root")
);
serviceWorker.unregister();
