import React,{useState} from 'react'
function StateHandling(){
    const [count,setCount]= useState(20);
    function increaseValue(){
        // alert("hii");
        setCount(count+10);
    }
    return (
        <div>StateHandling
            <h2>Counter value={count}</h2>
            <button onClick={increaseValue}> Increament value</button>
            <button onClick={()=> setCount(count-10)}> Decrease Value</button>
        </div>
    
    )
}

export default StateHandling