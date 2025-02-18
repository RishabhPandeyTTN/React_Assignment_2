import { useRef, useState } from "react"

const Counter = ()=>{

    const [count , setCount] = useState(0)
    //const [timerId , setTimerId] = useState(null)
    const timerId =useRef()

    function handleStart(){
        if(timerId.current) return;

        const id = setInterval(()=>{
            setCount((prev)=>prev + 1)
        },1000)

        //setTimerId(id)
        timerId.current = id;
    }

    function handlePause(){
        clearInterval(timerId.current)
        timerId.current = null
        //setTimerId(null)
    }

    function handleStop(){
        clearInterval(timerId.current)
        //setTimerId(null)
        timerId.current = null
        setCount(0)
    }
    return <div>
        <div>
            {count}
            {console.log("renders")}
        </div>
        <div>
            <div>
                <button onClick={()=>{handleStart()}}>
                    start
                </button>
            </div>
            <div>
                <button onClick={()=>{handlePause()}}>
                    pause
                </button>
            </div>
            <div>
                <button onClick={()=>{handleStop()}}>
                    stop
                </button>
            </div>
        </div>
    </div>
}

export default Counter