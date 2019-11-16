import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Form from './components/Form'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const routing =(
    <Router>
        <div>
           <Switch> 
           <Route exact path="/">
               <App/>
           </Route>
           <Route path="/Contact">
               <Form/>
           </Route>
           </Switch>
        
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Hi this is a comment! - Damien
