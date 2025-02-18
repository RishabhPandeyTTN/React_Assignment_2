import { useState } from "react"

const ToDoList = ()=>{

    const [todo , setTodo] = useState([]);
    const [task , setTask] = useState('')

    function handleInput(e){
        setTask(e.target.value)
    }

    function handleAdd(){
            setTodo((prev)=>[...prev , task])
            setTask("")
    }
    
    return <div>
        <div>
            <input type="text" name="" id="" placeholder="Enter your task" value={task} onChange={handleInput} />
            <button onClick={()=>handleAdd()}>Add</button>
        </div>

        <div>
            {
                todo?.map((item)=>(
                    <div>
                        {item}
                    </div>
                ))
            }
        </div>
    </div>
}

export default ToDoList;