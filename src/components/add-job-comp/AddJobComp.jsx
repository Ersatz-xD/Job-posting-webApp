import React from 'react'
import "./AddJobComp.css"

const AddJobComp = () => {
  return (
    <div className='addjobParent'>

      
    <h1>Post a job</h1>
    <div className="parentInput">
      <input type="text" placeholder='Title' />
      <input type="text" placeholder='Role' />
      <input type="text" placeholder='Email' />

    </div>
    <textarea name="desc" id="desc"></textarea>
    <button className='btn'>Post</button>
    </div>
  )
}

export default AddJobComp