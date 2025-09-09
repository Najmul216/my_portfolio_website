import React from 'react'

const TeamDetailsPage = async ({ params }) => {
    
    const name = (await params).name;
  return (
      <div className='text-white text-4xl'>Team Member Details Page {name}</div>
  )
}

export default TeamDetailsPage