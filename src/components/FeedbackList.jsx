import React from 'react'
import Feedback from "./Feedback"

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback </p>
  }

  return (
    <div className="feedback-list">
        {feedback.map((item) => (
          // <div>{item.rating}</div>
          <Feedback key={item} item={item} />
        ))}
    </div>
  )
  
}

export default FeedbackList