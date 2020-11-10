import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import RecipePage from './pages/RecipePage'
import Footer from './components/Footer/Footer'

function App() {
  return (
<div>
  <Router>
    <div>
    <Route exact path="/" component={LandingPage} />
    </div>
  </Router>
</div>

  )
}

export default App;
