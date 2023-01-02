import React, { useState } from 'react';

export default function CounterHook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(7);

const saveOnSubmit = (e)=>{    
        console.log("count",e)
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count -1)}>
        decrement
      </button>
      <p>
      <button type="submit" onClick={() => saveOnSubmit({count})} >
        save               
        </button>
      </p>
    </div>
    
  );
  
}
