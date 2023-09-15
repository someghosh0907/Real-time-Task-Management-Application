import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './showtask.css'
import TaskCard from './TaskCard'
import './showtask.css'

const Showtask = () => {
    const navi = useNavigate()
    const [tasks, setTasks] = useState([])
    //FUNCTION TO DELETE TASK
    const deleteTask = async () => {
        try {
            window.confirm('You Sure You Wanna Delete?')
            const documentReference = doc(db, 'tasks', tasks.id)
            await deleteDoc(documentReference)
            setTasks(null)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }
    //FUNCTION TO UPDATE TASK
    const updateTask = () => {
        navi('./edit')
    }
    const collectionRef = collection(db, 'tasks')
    useEffect(() => {
        const getTask = async () => {
            await getDocs(collectionRef).then((task) => {
                let taskData = task.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setTasks(taskData)
            })
        }
        getTask()
    }, [])
    console.log(tasks)
    return (
        <div className='showtask'>
            <div className='box0'>
                <button onClick={(e) => navi('./create')}><b>+ Create Task</b> </button>
                <div className='box01'>
                    {tasks.map((task) => {
                        return (
                            <div className='display'>

                                <TaskCard
                                    key={task.id}
                                    title={task.title}
                                    description={task.description}
                                    duedate={task.duedate} />
                                    <div className='elements'>
                                        <button onClick={deleteTask}>Delete</button>
                                        <button onClick={updateTask}>Update</button>
                                    </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default Showtask