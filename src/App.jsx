import React from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import Feedback from './components/Feedback';
import FeedbackList from './components/FeedbackList';

import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback =(id) => {
    // console.log("App", id)
    if(window.confirm('Are you sure you want to delete')){

      setFeedback(feedback.filter((item)=> (item.id !== id)));
    }
  }

  return (
    <>
      <Header />
      <div className="App">
        {/* <h1>Hola</h1> */}
        <FeedbackList feedback={feedback}
        deleteHandle={deleteFeedback}
        />
      </div>
    </>
  );
}
export default App;
