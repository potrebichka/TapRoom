import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const render = Component => {
  ReactDOM.render(
      <HashRouter>
        <Component />
      </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);
