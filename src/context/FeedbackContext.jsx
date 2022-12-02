import React from 'react'
import {createContext, useState,  useEffect} from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  //const [isLoading, setIsLoading] = useState(true)
 
    const [feedback, setFeedback] = useState([ ])

// Estado para editar
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false
    })

    useEffect(() => {
      fetchFeedback()
    }, [])

  //Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
   // setIsLoading(false)
  }

// agregar un nuevo item

     const addFeedback = async (newFeedback) => {

      const response = await fetch("/feedback",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        // body
      }) 

    // newFeedback.id = uuidv4()
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

  const updateFeedback = (id, upItem) => {

      // const response = await fetch( )
    setFeedback(feedback.map((item) => 
    (item.id === id ? {...item, ...upItem} :item )))
  }
  // Update Data
    
    return (
    <FeedbackContext.Provider value ={{
        feedback,
        deleteFeedback,
        feedbackEdit,
        addFeedback,
        editFeedback, 
        updateFeedback,
        //isLoading,
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext