import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faHome,
  faUtensilSpoon,
  faList
} from '@fortawesome/fontawesome-free-solid'

const VerticalNavBar = ({ setMenuOpen }) => {
  const path = process.env.PUBLIC_URL
  return (
    <nav className='navbar bg-dark navbar-dark'>
      <div className='container-fluid '>
        <ul className='navbar-nav fs-5'>
          <li className='nav-item  px-2 py-1'>
            <Link
              className='nav-link'
              onClick={() => setMenuOpen(false)}
              to='/website'
            >
              {' '}
              <FontAwesomeIcon
                className='icon'
                icon={faHome}
              ></FontAwesomeIcon>{' '}
              Home
            </Link>
          </li>
          <li className='nav-item  px-2 py-1'>
            <Link
              className='nav-link'
              onClick={() => setMenuOpen(false)}
              to='/website/about'
            >
              {' '}
              <FontAwesomeIcon
                className='icon'
                icon={faUser}
              ></FontAwesomeIcon>{' '}
              About Me
            </Link>
          </li>
          <li className='nav-item  px-2 py-1'>
            <Link
              className='nav-link'
              onClick={() => setMenuOpen(false)}
              to='/website/news'
            >
              {' '}
              <FontAwesomeIcon
                className='icon'
                icon={faList}
              ></FontAwesomeIcon>{' '}
              Latest News
            </Link>
          </li>
          <li className='nav-item px-2 py-1'>
            <Link
              className='nav-link'
              onClick={() => setMenuOpen(false)}
              to='/website/plant'
            >
              <FontAwesomeIcon icon='fa-solid fa-seedling' className='icon' />{' '}
              Plant Tracker
            </Link>
          </li>
          <li className='nav-item px-2 py-1'>
            <Link
              className='nav-link'
              onClick={() => setMenuOpen(false)}
              to='/website/recipe'
            >
              <FontAwesomeIcon
                className='icon'
                icon={faUtensilSpoon}
              ></FontAwesomeIcon>{' '}
              Recipe Search{' '}
            </Link>
          </li>
          <li className='nav-item px-2 py-1'>
            <Link
              className='nav-link'
              onClick={() => setMenuOpen(false)}
              to='/website/games'
            >
              <FontAwesomeIcon icon='fa-solid fa-trophy' className='icon' />{' '}
              Games
            </Link>
          </li>
          <li className='nav-item px-2 py-1'>
            <Link
              className='nav-link'
              onClick={() => setMenuOpen(false)}
              to='/website/tools'
            >
              <FontAwesomeIcon icon='fa-solid fa-wrench' className='icon' />{' '}
              Tools
            </Link>
          </li>
          <li className='nav-item px-2 py-1'>
            <Link
              className='nav-link'
              onClick={() => setMenuOpen(false)}
              to='/website/bits'
            >
              <FontAwesomeIcon icon='fa-solid fa-lightbulb' className='icon' />{' '}
              Bits and Pieces
            </Link>
          </li>
          <li className='border-top my-4'></li>
          <li className='nav-item px-2 py-1'>
            <Link
              className='nav-link'
              onClick={() => setMenuOpen(false)}
              to='https://mollycallen.github.io/react-8pm/'
              target='_blank'
            >
              8pm<span className='fs-6'> - eCommerce Site</span>
            </Link>
          </li>
          <li className='nav-item px-2 py-1'>
            <Link
              className='nav-link'
              onClick={() => setMenuOpen(false)}
              to='https://mollycallen.github.io/practice/'
              target='_blank'
            >
              <img
                className='pb-2'
                style={{ width: '30px' }}
                src={`${path}/images/natureicon.png`}
                alt='Nature icon'
              ></img>{' '}
              Original Site
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default VerticalNavBar
