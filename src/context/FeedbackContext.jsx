import React from 'react'
import {createContext, useState} from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is item",
            rating:10
        },
         {
            id: 2,
            text: "This is item",
            rating:8
        }, 
        {
            id: 3,
            text: "This is item",
            rating:7
        }
    ])

// Estado para editar
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false
    })

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