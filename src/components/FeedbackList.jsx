import React from 'react'
import Feedback from "./Feedback"

function FeedbackList({ feedback, deleteHandle }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback </p>
  }

  return (
    <div className="feedback-list">
        {feedback.map((item) => (
          // <div>{item.rating}</div>
          <Feedback key={item.id} item={item} 
          deleteHandle={deleteHandle}
          />
        ))}
    </div>
  )
  
}
// FeedbackList.propTypes = {
  // feedback: Proptypes.arrayOf(
    // Proptypes.shape({
      // id: PropTypes.string.isRequired,
      // text: PropTypes.string.isRequired,
      // rating: PropTypes.string.isRequired,
    // })
  // )
// }

export default FeedbackList