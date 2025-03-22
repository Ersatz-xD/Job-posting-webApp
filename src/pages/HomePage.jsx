import React from 'react'
import AddJobComp from '../components/add-job-comp/AddJobComp'
import { jobPosts } from '../../testData'
import JobPost from '../components/job-post/JobPost'


export const HomePage = () => {
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

export default HomePage