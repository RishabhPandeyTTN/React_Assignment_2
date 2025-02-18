import { useState } from "react";

const IncDec = ()=>{
    const [count , setCount] = useState(0);

    function handleInc(){
        setCount((prev)=>prev + 1)
    }

    function handleDec(){
        if(count <= 0) {
            alert("Count cannot be negative")
            return
        }
        else setCount((prev)=>prev - 1)
    }

    return <div>
        <div>
            {
                count
            }
        </div>
        <div>
            <div>
                <button onClick={handleInc}>Increase</button>
            </div>
            <div>
                <button onClick={handleDec}>Decrease</button>
            </div>
        </div>
    </div>
}

export default IncDec;