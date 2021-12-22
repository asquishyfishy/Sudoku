import React, { Component } from "react"
import generator from "sudoku"
import "./App.css"

window.generator = generator

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Liam's Nuts
          </h1>
        </header>
      </div>
    )
  }
}

export default App
