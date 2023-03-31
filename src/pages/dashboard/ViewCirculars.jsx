import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../assets/wrappers/Home'
import SmallSidebar from '../../components/SmallSidebar'
const ViewCirculars = () => {
  return (
    <Wrapper>
    <main className='dashboard'>
      <Sidebar />
      <SmallSidebar />
      <div>
        <Navbar />
        <div className='dashboard-page'>
          <h1>Welcome to View Circular</h1>
        </div>
      </div>
    </main>
  </Wrapper>
  )
}

export default ViewCirculars
