import React from 'react';
import Card from './share/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import {useContext} from "react"
import FeedbackContext from "../context/FeedbackContext"

function Feedback({ item }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button className="close" onClick={()=> deleteFeedback(item.id)}>
        <FaTimes color="black" />
      </button>
     <button onClick={()=> editFeedback(item)} className="edit">
      <FaEdit color="black" />
     </button>
      {/* añadimos onClick y le pasamos la funcion */}
      {/* <button onClick={handleClick}>Change</button> */}
    </Card>
  );
}


export default Feedback;



// import { useState } from 'react';
// Feedback.propTypes = {
  // item: PropTypes.object.isRequired,
  // }
  // const [rating, setRating] = useState(10);
  // const [text, setText] = useState(' This is an example');
  
  //Se crea una funcion para el manejo de estado
  // const handleClick = () => {
  //     setRating((prev)=>{
  //         return prev + 1
  //     })
  // }