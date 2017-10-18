import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import Main from './modules/Main'
import Food from './modules/Food'
import Living from './modules/Living'
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/index" component={Main}/>
      <Route path="/food" component={Food}/>
      <Route path="/living" component={Living}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
