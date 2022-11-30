import React from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import Feedback from './components/Feedback';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid'
import About from "./pages/About"
import { useState } from 'react';
import AboutIconLink from "./components/AboutIconLink"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }


  const deleteFeedback = (id) => {
    // console.log("App", id)
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };


  return (
    <>
      <Header />
      <Router>
      <div className="container">
        <Routes>
          <Route path="/"
          element={
            <>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} deleteHandle={deleteFeedback} />
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
    </>
  );
}
export default App;
