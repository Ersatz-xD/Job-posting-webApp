import React from 'react'
import JobPost from './components/job-post/JobPost'
import { jobPosts } from '../testData'
import AddJobComp from './components/add-job-comp/AddJobComp'


export const App = () => {
  return (
    <div className='appParent'>

      <AddJobComp/>
      {
        jobPosts.map((item) => (
          <JobPost title = {item.title} desc={item.desc} role={item.role} email={item.email}/>

        ))
      }
    </div>
  )
}

export default App