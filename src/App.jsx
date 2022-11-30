import React from 'react';
import Header from './components/Header';
// import FeedbackData from './data/FeedbackData';
// import Feedback from './components/Feedback';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from "./pages/About"
import { useState } from 'react';
import AboutIconLink from "./components/AboutIconLink"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {FeedbackProvider} from "./context/FeedbackContext"


function App() {
    return (
    <FeedbackProvider>
      <Header />
      <Router>
      <div className="container">
        <Routes>
          <Route path="/"
          element={
            <>
            <FeedbackForm  />
            <FeedbackStats  />
            <FeedbackList   />
            </>
          }
          >
          </Route>
         <Route path="/about" element={
              <>
                <About/>
              </>
          }/>
        </Routes>
         <AboutIconLink />
      </div>

      </Router>
    </FeedbackProvider>
  );
}
export default App;
