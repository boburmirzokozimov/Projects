import React from 'react'
import './style.css'

function Person({person}) {
return (
    <div>
      <h1 className='text-color'>My name is {person.name}.I know {person.skils}</h1>
    </div>
  )
}

export default Person
