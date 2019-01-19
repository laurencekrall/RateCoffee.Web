import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component<{}, {word: string, list : string[]}> {
  constructor(props : any) {
    super(props);
    this.state = {
      word : "hello world",
      list : ["a", "b"]
    }
  }

  render() {
    axios.get('https://laurenceazure.azurewebsites.net/api/values')
    .then(json => this.setState({
      word : "hello world",
      list : json.data
    }))

    const moves = this.state.list.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>{step}</li>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn {this.state.word}
          </a>
          <ol>{moves}</ol>
        </header>
      </div>
    );
  }
}

export default App;
