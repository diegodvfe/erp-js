import React from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import Feedback from './components/Feedback';
import FeedbackList from './components/FeedbackList';

import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="App">
        {/* <h1>Hola</h1> */}
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}
export default App;
