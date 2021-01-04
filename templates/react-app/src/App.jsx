import React from 'react';
import { hot } from 'react-hot-loader/root';
import './app.css';

class App extends React.PureComponent {
  render() {
    return (
      <main>
        <header className="app__header">
          <h1>
            <span className="app__header__name">{'<nmw />'}</span> React
            Template Project
          </h1>
        </header>
      </main>
    );
  }
}

export default hot(App);
