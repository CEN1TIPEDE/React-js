// ~ you need to import something from react here, but what? ~
import React,{useState,useRef} from 'react'
// ~ import your style from app.css in this line ~
import './App.css'

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  // ~ declare result state here ~
  const [result,setResult] = useState(0);
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	//add the code for minus function here
    e.preventDefault();
    setResult((result)=> result - Number(inputRef.current.value));
  };
 
  function multiply(e) { 
    //add the code for multiply function here 
    e.preventDefault();
    setResult((result)=> result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    //add the code for divide function here 
    e.preventDefault();
    setResult((result)=> result / Number(inputRef.current.value));
  };
 
  function resetInput(e) {
   //add the code for resetInput function here 
   inputRef.current.value =' ';
  }; 
 
  function resetResult(e) { 
    //add the code for resetResult function here 
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> {/* add the value of the current total */}{result} </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Add</button> 
        {/* Add the subtract button */}
        <button onClick={minus}>Minus</button> 
        {/* Add the multiply button */}
        <button onClick={multiply}>Multiply</button> 
        {/* Add the divide button */}
        <button onClick={divide}>Divide</button> 
        {/* Add the resetInput button */}
        <button onClick={resetInput}>Reset value</button> 
        {/* Add the resetResult button */}
        <button onClick={resetResult}>Reset result</button> 
        
      </form> 
    </div> 
  ); 
} 
 
//~ You have to export the file here ~
export default App
