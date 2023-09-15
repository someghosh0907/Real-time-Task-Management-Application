import React from 'react'
import './taskcard.css'

const TaskCard = ({title, description, duedate }) => {
    return (
        <div className='top'>
            <div className='top1'>
                <div className='title'><b>{title}</b></div>
                <div className='description'>{description}</div>
            </div>
            <div className='bottom'>{duedate}</div>
        </div>
    )
}

export default TaskCard