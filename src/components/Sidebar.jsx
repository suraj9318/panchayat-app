import React from 'react'
import Wrapper from '../assets/wrappers/Sidebar'
import Logo from '../components/Logo';
import NavLinks from './Navlinks';
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks/>
        </div>
      </div>
    </Wrapper>
  )
}

export default Sidebar
