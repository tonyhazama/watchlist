import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './screens';

const Page = () => {
  return <h2>Hello World !</h2>
}

const Main = () => {
  return(
    <header className="App-header">
      <p>Edit <code>src/App.tsx</code> and save to reload.</p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  )
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter basename="/">
          <Switch>
            <Route path="/" exact component={Page} />
            <Route path="/home/" component={Home} />
            <Route path="/about/" component={Page} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
