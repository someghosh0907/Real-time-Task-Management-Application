//import { getDoc } from 'firebase/firestore'
import { addDoc ,collection} from 'firebase/firestore'
import { db } from '../firebase'
import React, { useState } from 'react'

const collectionRef=collection( db,'tasks')
const Createtask = () => {
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  const[duedate,setDuedate]=useState("")
  
  //Create the tasks with given title,description,duedate
  const putTask = async(e) => {  
    e.preventDefault()
    try{
      await addDoc(collectionRef,{
        title:title,
        description:description,
        duedate:duedate
      })
      alert("Data Send")
    }catch(err){
      console.log(err)
    }  
  }
  //Delete the tasks by clicking the button
  /*const deleteTask=async(id)=>{
    try{
      window.confirm('You Sure You Wanna Delete?')
      console.log(id)
      await deleteDoc()
    }catch(err){
      console.log(err)
    }
  }*/
  return (
    <>
      <div className='task'>
        <form onSubmit={putTask}>
        <input type='text' value={title} placeholder='Enter Task Title' onChange={(e) => setTitle(e.target.value)}></input>
        <input type='text' value={description} placeholder='Enter Task Description' onChange={(e) => setDescription(e.target.value)}></input>
        <input type='text' value={duedate} placeholder='Enter Task Due-Date' onChange={(e) => setDuedate(e.target.value)}></input>
        <button type='submit'>Add task +</button>
        </form>
      </div>
      <div className='showtask'>
        <div className='title'>{title}</div>
      </div>
    </>
  )
}

export default Createtask

/*const Task=()=>{
const collectionRef=collection(db,'tasks')
    useEffect=()=>{
      const getTasks= async()=>{
        await getDoc(collectionRef).then((task)=>{
          let taskData= task.docs.map((doc)=>({...doc.data(), id:doc.id)})
        })
      }
      getTasks()
    }
  }*/