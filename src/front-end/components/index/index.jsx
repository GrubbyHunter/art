import React from "react"
import logo from "./../../resource/svg/logo.svg"

import "antd/dist/antd.css"
import "./../../resource/css/common.less"
import "./../../resource/css/index.less"

class Index extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    )
  }
}

export default Index
