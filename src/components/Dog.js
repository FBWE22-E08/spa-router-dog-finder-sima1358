import React from 'react'
 
export default function Dog({dog}) {
  return (
    <div>
       <h1>Name:{dog.name} </h1>
       <h2>Age:{dog.age} </h2>
       <ul>
        {dog.facts.map((fact, i) => <li key={i}>{fact} </li> )}
       </ul>
        </div>
  
  )
}