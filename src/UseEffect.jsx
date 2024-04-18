import { useEffect, useState } from "react"

const UseEffect = () => {
    const [count,setCount] =useState(0)
    const [count2,setCount2] =useState(0)
    //type 1 of useeffect on the basic of execution
    // useEffect(()=>{
    //     console.log("hello worls")
    // },[])
    //inside [] has state ehich means the effect is trigeed when the mention state is come

//Type 2 of useeffect on the basis of execution
    // useEffect(()=>{
    //     console.log("Useeffect tigrred")
    // },[count,count2])


    //type 3 
    //  useEffect(()=>{
    //     console.log("Useeffect tigrred")
    // })
  return (
    <div>
        <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    <h1>Count2:{count2}</h1>
    <button onClick={()=>setCount2(count2+1)}>+</button>
     </div>
  )
}

export default UseEffect