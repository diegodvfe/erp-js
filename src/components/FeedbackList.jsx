import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import Feedback from "./Feedback"
import { useContext } from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
 
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