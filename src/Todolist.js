import { useState } from "react";


const ToDo = ()=>{

    const [task, setTask] = useState(["make dinner", "homework", "go to gym"])
    const [inputText, setInputText] = useState("")

    const handleClick = ()=>{
        setTask([...task, inputText])
        setInputText("")
    }
    const handleRemove = (index) => {
        setTask(task.filter((v, i) => i !== index))
    }
    return (
        <div>
            <h1>To Do List</h1>
            <ul>
                {task.map((value, index)=>{
                    return <li key={index}>{value} <button onClick={()=>handleRemove(index)}>Remove</button></li>
                })}
            </ul>
            <input type="text" onChange={(e)=>{setInputText(e.target.value)}} value={inputText}/>
            <button onClick={handleClick}>Add Task</button>
        </div>
    )
}

export default ToDo