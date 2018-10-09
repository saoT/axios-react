import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {

  state = {starwars: []}

  // Documents says it's unsafe
  componentWillMount () {
    console.log('Should log first');
  }

  componentDidMount () {

    axios.get('https://swapi.co/api/people')
    .then( data => {
      this.setState({
        starwars: data.data.results 
      });
    });

    console.log('Should log third');
  }

  componentWillUpdate () {
    console.log('Should log fourth');
  }

  componentDidUpdate () {
    console.log('Should log sixth');
  }

  render() {
    console.log('Should log second and fifth');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {
              this.state.starwars[0] &&
              this.state.starwars.map(
                perso => perso.name
              )
            }
            Edit <code>src/App.js</code> and save to reload.
            
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
