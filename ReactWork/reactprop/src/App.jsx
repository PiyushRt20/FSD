import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './component/Student.jsx'

function App() {
  const student = [
    {
      college: 'ABES'
    },
    {
      pic: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Ferrari_LaFerrari_1.jpg',
      name: 'Swapnil',
      roll: '2300321530192',
      branch: 'CSE AIML',
      section: 'B',
      college: 'ABES Engineering College'
    }
  ];

  return (
    <div>
      {/* <Student name="swapnil" roll="2300321530192"  branch="CSE AIML" section="B" college="ABES Engineering College"/> */}
      {/* <Student data={student}/> */}
      {
        student.map((ele,index)=>(
          <Student data = {ele} key={index} />
        ))
      }
    </div>
   
  )
}

export default App