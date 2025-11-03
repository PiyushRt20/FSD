import React from 'react'

function Student({data}) {
  return (
    <div>
        <h1>student Info</h1>
        <img src={data.pic} height={200} width={200} alt="profile image"></img>
        <h2>Name:{data.name}</h2>
        <h2>Roll:{data.roll}</h2>
        <h2>Branch:{data.branch}</h2>
        <h2>Section:{data.section}</h2>
        <h2>College:{data.college}</h2>
    </div>
  )
}

export default Student