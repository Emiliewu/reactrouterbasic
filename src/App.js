import React from 'react';
import Hello from './components/Hello';
import Number from './components/Number';
import Word from './components/Word';
import All from './components/All';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        // display welcome
        <Route exact path="/">
          <Hello />
          </Route>
          // display the word with color and background color
          <Route path="/:word/:color/:bgcolor"  >
           <All />
          </Route>
        // display the number
        <Route path="/:num"  >
          <Number />
        </Route>
        // display the word, actually this one is not going to work
        // <Route path="/:word"  >
        // <Word />
        </Route>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
