import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Fib from "./Fib";
import OtherPage from "./OtherPage";

function App() {
  return (
    <Router className="App">
        <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/other">Other Page</Link>
      </header>
      <div>
        <Route exact path="/" component={Fib}/>
        <Route exact path="/other" component={OtherPage}/>
      </div>
            </>
    </Router>
  );
}

export default App;
