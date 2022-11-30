import React from 'react';
import Card from './share/Card';
import { useState, useEffect } from 'react';
import Button from './Button';
import RatingSelect from './RatingSelect';
import {useContext} from "react"
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {

  
  const [text, setText] = useState(' ');
  const [rating, setRating] = useState(' ');
  
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

  useEffect(() =>{
    if(feedbackEdit.edit == true){
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit])

  const handleChange = (e) => {
    // validation
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage(' Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10){
      // variable para guardar las guardar
      const newFeedback = {
        text,
        rating
      }
      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {  
        addFeedback(newFeedback)
      }

      setText("")
    }
  }

  return (
    <Card reverse={false}>
      <form onSubmit={handleSubmit}>
        <h2> How would you rate our service?</h2>
        {/*  */}
        <RatingSelect select={(rating)=> setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Write your review, please"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
