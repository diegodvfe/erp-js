import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import Feedback from "./Feedback"

function FeedbackList({ feedback, deleteHandle }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback </p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
      {feedback.map((item) => (
          // <div>{item.rating}</div>
          <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <Feedback key={item.id} item={item} 
              deleteHandle={deleteHandle}
              />
          </motion.div>
        ))}
      </AnimatePresence>
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