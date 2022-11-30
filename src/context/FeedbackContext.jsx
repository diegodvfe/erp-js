import React from 'react'
import {createContext, useState,  useEffect} from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([ ])

// Estado para editar
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false
    })

    useEffect(() => {
      fetchFeedback
    })

  //Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback?_`)
    const data = await response.json()

    setFeedback(data)
  }

// agregar un nuevo item

     const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

// Eliminar el item
     const deleteFeedback = (id) => {
    // console.log("App", id)
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Editar el item
  const editFeedback = (item) =>{
    setFeedbackEdit({
        item,
        edit: true
    })
  }

  const updateFeedback =(id, upItem) => {
    setFeedback(feedback.map((item) => 
    (item.id === id ? {...item, ...upItem} :item )))
  }
  // Update Data
    
    return (
    <FeedbackContext.Provider value ={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback, 
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext