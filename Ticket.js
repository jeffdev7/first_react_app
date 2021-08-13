import React from 'react'

export default function ticket({task, toggleTasks}) {
    function handleCarsClick(){
        toggleTasks(task.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={task.complete} onChange={handleCarsClick} />
                {task.name}
            </label>
        </div>
    )
}
