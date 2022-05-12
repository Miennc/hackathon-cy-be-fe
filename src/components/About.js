import React from 'react'
export default function About() {
  const hand = (e)=>{
    e.preventDefault()
    alert(e.target.value)
  }
  return (
    <div >
         this is about
         <button onClick={hand} value="test">click</button>
    </div>
  )
}
