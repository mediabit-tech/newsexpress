// import all libraries and components here for use in Indian News Express
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

// Create a App name arrow function for hold the all pages of the application with return statement
const App = () => {

  // Declare the pageSise of articles that how many articles will be loaded on one page at a time?
  const pageSize = 6;

  // Get API key from .env.local file for security
  const apiKey = process.env.REACT_APP_NEWS_API

  // Declare useState method for initialize and set the value of progress varriable 
  const [progress, setProgress] = useState(0);

  // Return the statement
  return (
    <>
      <div>

      {/* Router Tag */}
        <Router>

        {/* Top Navigation Bar Tag */}
          <Navbar />

          {/* Loading Bar for load the statement on the page, display the top of the page at red color */}
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress} />

            {/* Container Tag for all menu items */}
          <div className="container my-3">

            {/* Switch library for shifting one to another menu whilw clicking on that without loading whole page */}
            <Switch>
              <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
              <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /></Route>
              <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
              <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" /></Route>
              <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /></Route>
              <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
              <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  )
}

//  Export this page for another pages
export default App