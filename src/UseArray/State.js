import React, { useState } from 'react'

function State() {
  // let [count,setCount]=useState(0);
  const [count,setCount]=useState(["cricket","Chess"])
  const [name,setName]=useState('')

  function addEle(){
    setCount([...count,name])
    document.getElementById('one').value='' //it refreshes the text
  }

  return (
    <> 
      <input type='text' id='one' onChange={e=>setName(e.target.value)}/>
      <br></br>
      <button onClick={()=>addEle()}> ADD ELEMENTS</button>
      <ul>
        {
          count.map((x,y)=>{return <li key={y}>{x}</li>})
        }
      </ul>

      {/* <h2 class='text-center'>{count}</h2>
      <button class='text-center bg-primary' onClick={()=>setCount(count +1)}> Increment </button>
      <button class='text-center bg-warning ' onClick={()=>setCount(count -1)}> Decrement </button>
      <button class='text-center bg-success' onClick={()=>setCount(count = 0)}> Reset</button> */}
    </>
  )
}

export default State