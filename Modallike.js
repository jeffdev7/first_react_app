import React from 'react'
import Ticket from './Ticket'

export default function Modallike({tasks, toggleTasks}) {
    return (
        tasks.map(task => {
            return <Ticket key={task.id} toggleTasks={toggleTasks} task={task}/>
        })
    )
}
