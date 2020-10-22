import React, { Component } from "react";
import "../index.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults:[]
    };
  }
  
  handleInput = event => {
    if (event.key === "Enter") {
      const searchValue= event.target.value;
      fetch("https://api.github.com/search/repositories?q="+searchValue+"language:node.js&sort=stars&order=desc").then
      (res=>{return res.json()}).then(data=>this.setState({searchResults:data.items}));
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
            onKeyDown={event=>this.handleInput(event)}
          />
        </header>    
        <div>
          {
            this.state.searchResults.map(el=>{return <div class="jumbotron"><a>{el.downloads_url}</a></div>})
          }
        </div>
      </section>
    );
  }
}

export default App;
