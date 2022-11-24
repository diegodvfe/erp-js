import React from 'react';
import Card from "./share/Card"
// import { useState } from 'react';

function Feedback({ item }) {
  // const [rating, setRating] = useState(10);
  // const [text, setText] = useState(' This is an example');

  //Se crea una funcion para el manejo de estado
  // const handleClick = () => {
  //     setRating((prev)=>{
  //         return prev + 1
  //     })
  // }

  return (
    <Card reverse={true} >
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      {/* añadimos onClick y le pasamos la funcion */}
      {/* <button onClick={handleClick}>Change</button> */}
    </Card>
  );
}

export default Feedback;
