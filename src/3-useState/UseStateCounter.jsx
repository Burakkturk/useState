import { useState } from "react"


const UseStateCounter = () => {
    const [count, setCount] = useState(0)
    const handleInc = () => {
        setCount(count + 1) 
        console.log(count) 

    }
  return (
    <div>
        <div>
            <h2>USE STATE HOOK</h2>
            <h1>Count:{count}</h1>
            <button onClick={handleInc}>INC</button>
            <button onDoubleClick={() => setCount(0)}>CLR</button>
            <button onClick={() => count > 0 && setCount(count - 1)}>DEC</button>
            
        </div>
    </div>
  )
}

export default UseStateCounter