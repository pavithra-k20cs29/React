import React from 'react'

// function Propes({name,age,rol}) {
//   return (
//     <div>
//         <h1>{name}</h1>
//         <h1>{age}{rol}</h1>
//     </div>
//   )
// }


const temporary={
  name:"ammu",
  age:"26"
}
function Propes({details=temporary}){
  const{name,age}=details
  return(
    <>
    <div>
      <h1> {name} </h1>
      <h1> {age} </h1>
    </div>
    </>
  )

}

export default Propes