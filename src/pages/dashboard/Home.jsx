import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../assets/wrappers/Home'
import SmallSidebar from '../../components/SmallSidebar'
const Home = () => {
  return (
    <Wrapper>
    <main className='dashboard'>
      <Sidebar />
      <SmallSidebar />
      <div>
        <Navbar />
        <div className='dashboard-page'>
          <h1>Welcome to Panchayat Dashboard</h1>
        </div>
      </div>
    </main>
  </Wrapper>
  )
}

export default Home
