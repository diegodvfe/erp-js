import React from 'react';
import Card from './share/Card';
import { useState } from 'react';

function FeedbackForm() {
  const [text, setText] = useState(' ');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card reverse={false}>
      <form action="">
        <h2> How would you rate our service?</h2>
        {/*  */}
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="write your review"
            value={text}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
