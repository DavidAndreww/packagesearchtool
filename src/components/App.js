import React, { Component } from "react";
import "../index.css";

class App extends Component {
  state = {
    searchResults:[]
  };
  handleClearCompleted = event => {
    const myCopy = this.state.todos.slice();
    const modifiedCopy = myCopy.filter(element => element.completed === false);
    this.setState({ todos: modifiedCopy });
  };
  handleInput = event => {
    if (event.key === "Enter") {
      const searchValue= event.target.value;
      fetch("https://api.github.com/search/repositories?q="+searchValue+"language:node.js&sort=stars&order=desc").then
      (res=>{return res.json()}).then(response=>console.log(response));
      //todoItem["completed"] = false;
      //const todoListCopy = this.state.todos.slice();
      //todoListCopy.push(todoItem);
      //this.setState({ todos: todoListCopy });
      event.target.value = "";
    }
  };

  render() {
    return (
      <section>
        <header className="header">
          <h1>Search Package</h1>
          <input
            placeholder="Search"
            autofocus
            onKeyDown={this.handleInput}
          />
        </header>      
  
      </section>
    );
  }
}

export default App;
