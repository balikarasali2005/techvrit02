import React, { useEffect, useState } from "react";
import {Button,Card,CardBody,CardFooter,CardHeader} from "react-bootstrap";

const Counter = () => {
  const [color, setColor] = useState("red");
    //usestate
  let [count, setCount] = useState(0);
  let [count1,setCount1]=useState(0)
  let [count2,setCount2]=useState(0)
  const [calculation, setCalculation] = useState(0);

  // side effect for h1
  useEffect(() => {
    setTimeout(() => {
      setCount1((count1) => count1 + 1);
    }, 1000);
  });
// for increment,decrement,reset {CARDS}
// useEffect(()=>{
//   setTimeout(()=>{
// setCount(count + 1);
//   },1000)
// })

// for calculation
useEffect(() => {
  setCalculation(() => count2 * 2);
}, [count2]); // <- add the count variable here


  // Component first render/every render
  //no dependency array
  // useEffect(()=>{
  //   console.log("counter component(every render or load)")
  //     })

  // an empty array
  // useEffect(()=>{
  //   console.log("counter component(first page render or load)")
  //     },[])

  // props and state values
      // useEffect(()=>{
      //   console.log("specific state change( render or load)")
      //     },[count])

    
  // let count = 0;
  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decrement=(event)=>{
    event.preventDefault();
    setCount(count - 1);
    
  }
const reset=(e)=>{
e.preventDefault()
setCount(0)
}
  return (
    <>
    <h1>My favorite color is {color}!</h1>
    <button
      type="button"
      onClick={() => setColor("blue")}
    >Blue</button>
    <button
      type="button"
      onClick={() => setColor("red")}
    >Red</button>
    <button
      type="button"
      onClick={() => setColor("pink")}
    >Pink</button>
    <button
      type="button"
      onClick={() => setColor("green")}
    >Green</button>
    <Card className="mt-5">
      <CardHeader>
        <h1>Counter</h1>
      </CardHeader>
      <CardBody>
        <h4>{count}</h4>
      </CardBody>
      <CardFooter>
        <Button variant="success" className="me-2" onClick={increment}>
          Increment
        </Button>
        <Button variant="warning" className="me-2" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="danger" onClick={reset}>Reset</Button>
      </CardFooter>
    </Card>
   <h1 className="mt-3">I've rendered {count1} times!</h1>;
      <p>Count: {count2}</p>
      <button onClick={() => setCount2((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
};
export default Counter;