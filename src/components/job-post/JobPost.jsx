import React from 'react'
import "./jobpost.css"

const JobPost = ({title, desc, role, email}) => {
  return (
    <div className='jobpostParent'>
         <div className="above">
            <h1>{title}</h1>
            <span>{role}</span>
         </div>

         <p>
            {desc}
         </p>

         <h3>{email}</h3>
    </div>
  )
}

export default JobPost