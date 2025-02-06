import { useRef, useEffect,useState } from "react";


const Timer = () => {
    const [count,setCount] = useState(0)
    const iintervalRef = useRef(null)

    useEffect(()=>{
        iintervalRef.current = setInterval(()=>{
            setCount((prevCount) => prevCount +1)
        },1000)
        return ()=>{
            clearInterval(iintervalRef)
        }
    })
  return (
    <div>
        <h1>Timer : {count} seconds</h1>
        <button onClick={()=>clearInterval(iintervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer