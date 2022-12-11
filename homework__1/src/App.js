import {useState} from "react";

function App() {
  
  const [counter, setCounter] = useState(0)
  const [incrementer, setIncremente] = useState(1)

  const incrementCounter = () => {
    let incrementCounter = counter +  incrementer
    setCounter(incrementCounter)
  }

  const decrementCounter = () =>{
    let decrementCounter = counter - incrementer 
    setCounter(decrementCounter)
  }
  const changeIncrementer = (value) =>{
    setIncremente(parseInt(value))
  }

  return (
    <div className="App">
      <button onClick={decrementCounter} >-</button>
      {counter}
      <button onClick={incrementCounter} >+</button>
      <input  type="number" placeholder="Enter"  onKeyUp={(event) =>{
        if(event.key === "Enter"){
          changeIncrementer(event.target.value)
        }
      }}/>
    </div>
  );
}

export default App;
