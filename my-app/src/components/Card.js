import React, {useState} from "react";

function Card(){
    const[count, useCounter] = useState(0);
    
    function dec(){
      useCounter(count - 1);
    }
    function inc(){
      useCounter(count + 1);
    }
    return(  
            <div className="card">
              <div className='mark'>
                <h1>{count}</h1>
                <div>
                  <button onClick={()=>dec()}>decrement</button>
                  <button onClick={()=>inc()}>increment</button>
                </div>
              </div>
            </div> )
}

 export default Card;


