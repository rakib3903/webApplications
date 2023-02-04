// import React from 'react';
// import ReactDOM from 'react-dom';
var varr = 0;
const bt1= ()=>{
  varr = varr-1;
  ReactDOM.render(varr,
    document.getElementById('aa')
  );
  }
  
  const bt2 = ()=>{
    varr = varr+1;
    ReactDOM.render(varr,
    document.getElementById('aa')
  );
  }

function Card(){  
  return  <div className="card">
            <div className='mark'>
            <h1 id='aa'>0</h1>
            <div>
              <button onClick={bt1}>decrement</button>
              <button onClick={bt2} >increment</button>
            </div>
            </div>
          </div> 
}