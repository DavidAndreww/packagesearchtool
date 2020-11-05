import React, { Component } from "react";
import "../index.css";
import Card from 'react-bootstrap/Card';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: "",
      language: "",
      searchResults:[]
    };
  }
  handleSearchInput = event => {
      this.setState({keyword:event.target.value})
  };
  handleLangInput = event => {
      this.setState({language:event.target.value})
  };
  handleSubmit = event => {
    {
      event.preventDefault()
      const lang=this.state.language
      const keyword=this.state.keyword
      const searchValue= event.target.value;
      fetch("https://api.github.com/search/repositories?q="+keyword+"language:"+lang+"&sort=stars&order=desc").then
      (res=>{return res.json()}).then(data=>this.setState({searchResults:data.items}));
    }
  };

  render() {
    return (
      <section>
        <header className="header">
          <h1>Search Package</h1>
          <form>
            <div>
                <input
                  placeholder="Language"
                  autoFocus
                  onChange={event=>this.handleLangInput(event)}
                />
              </div>
              <div>
                <input
                  placeholder="Search"
                  autoFocus
                  onChange={event=>this.handleSearchInput(event)}
                />
                <input type="submit" value="Search" onClick={event=>this.handleSubmit(event)}></input>
              </div>
          </form>
          
        </header>    
        <div>
          {
            this.state.searchResults.map(el=>{return <Card className="jumbotron" key={Math.random()}><a href={el.downloads_url}>{el.downloads_url}</a></Card>})
          }
        </div>
      </section>
    );
  }
}

export default App;
