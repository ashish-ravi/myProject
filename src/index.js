import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chat from "./containers/chat";
import CodeCollab from "./containers/codeCollab";
import Users from "./containers/users";
import {createStore} from "redux";
import reducer from "./redux/reducers";
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = createStore(reducer);


const app = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path={"/"} component={App} />
        <Route exact path={"/chat"} component={Chat} />
        <Route exact path={"/codecollab"} component={CodeCollab} />
        <Route exact path={"/user"} component={Users} />

        
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
