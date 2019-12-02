import React, { Component } from 'react';
import Home from './components/Home';
import Form from './components/Form';
import Error from './components/Error';
import NavBar from './components/NavBar';
<<<<<<< HEAD
import AdminPanel from './components/AdminPanel';
import News from './components/News'
=======
>>>>>>> parent of 4c63aef... Merge pull request #28 from CEN3031-4E-F19/dev
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() { 
    const App = () => (
          <div>
            <NavBar/>
                <Switch> 
                  <Route exact path="/">
                        <Home/>
                  </Route>

                  <Route path="/Contact">
                        <Form/>
                  </Route>
<<<<<<< HEAD

                  <Route path="/Admin">
                        <AdminPanel/>
                  </Route>

                  <Route path="/News">
                    <News/>
                  </Route>

=======
>>>>>>> parent of 4c63aef... Merge pull request #28 from CEN3031-4E-F19/dev
                  <Route>
                        <Error/>
                  </Route>
                </Switch>

          </div>

    )
    
    return (  
      <Switch>
        <App/>
      </Switch>
    );
  }
}
 
export default App;
