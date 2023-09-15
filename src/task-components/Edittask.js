import { updateDoc ,doc} from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase'

const Edittask = ({ id, title, description, duedate }) => {
    const [updatedTitle, setUpdateTitle] = useState(title)
    const [updatedDescription, setUpdatedDescription] = useState(description)
    const [updatedDuedate, setUpdatedDuedate] = useState(duedate)

    const updateTask = async (e) => {
        e.preventDefault()
        try {
            const taskDocument = doc(db, 'tasks', id)
            await updateDoc(taskDocument, {
                title: updatedTitle,
                description: updatedDescription,
                duedate: updatedDuedate
            })
            
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='updatetask'>
            <div className='input'>
                <input type='text' className='inputtitle' placeholder='Add title' defaultValue={updateTask} onChange={e => setUpdateTitle(e.target.value)}></input>
                <input type='text' className='inputdesc' placeholder='Add description' defaultValue={updateTask} onChange={e => setUpdatedDescription(e.target.value)}></input>
                <input type='text' className='inputtitle' placeholder='Add title' defaultValue={updateTask} onChange={e => setUpdatedDuedate(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Edittask