import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import StoreInfoPage from "./components/Pages/StoreInfoPage";

function App() {
  return (
    <div>
      <header>
      
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/StoreInfoPage" component={StoreInfoPage} />
        </div>
      </Router>
     
        
      </header>
    </div>
  );
}

export default App;
