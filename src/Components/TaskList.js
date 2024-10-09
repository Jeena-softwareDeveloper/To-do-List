import React from "react";
import TaskItem from './TaskForm';
const TaskList = ({tasks,deleteTask,togglecomplete,editTask})=>{
    return (
        <ul>
            {
                tasks.map(task => (
                    <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    togglecomplete={togglecomplete}
                    editTask={editTask}
                    />
                ))}
                </ul>
    );

};
export default TaskList;