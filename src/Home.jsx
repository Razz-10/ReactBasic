import React from "react";
import Button from "./Button";
import { useState } from "react";
//rafce
//this is component
const Home = () => {
  // const state = useState(0)  //[0,function]
  // const state1 =state[0]//initial valuse
  // const state2 =state[1] // function

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    console.log("hello world")
  };
  return (
    <div>
      {/* <h1>{state1}</h1> */}
      <h1>{count}</h1>
      <h2>Hello</h2>
      
      {/* <button onClick={()=>state2(state1+1)}>+</button> */}

      <button onClick={increaseCount}>+</button>
      {/* <h1> Im raj tuladhar</h1>
   <h1> hello how are you</h1>
   //passing props
   <Button textInsideButton ="Home" bgColor="red"/> */}
    </div>
  );
};

export default Home;
