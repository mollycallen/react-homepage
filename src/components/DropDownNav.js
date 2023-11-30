import React from 'react'
import '../styles/DropDownNav.css'

const DropDownNav = () => {
  return (
    <div className='page'>
      <nav className='navbar w-100 '>
        <ul className='nav-list'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li className='dropdown'>
            <a href='#about' className='dropbtn'>
              About
            </a>
            <div className='dropdown-content'>
              <a href='#team'>Our Team</a>
              <a href='#company'>Our Company</a>
            </div>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li className='dropdown'>
            <a href='#projects' className='dropbtn'>
              Projects
            </a>
            <div className='dropdown-content'>
              <a href='#project1'>Project 1</a>
              <a href='#project2'>Project 2</a>
              <a href='#project3'>Project 3</a>
            </div>
          </li>
        </ul>
      </nav>
      <div className='p-3'>
        This menu is responsive! Try shrinking the page.
      </div>
    </div>
  )
}

export default DropDownNav
