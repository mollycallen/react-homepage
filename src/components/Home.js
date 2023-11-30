import RightRail from './RightRail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faListAlt,
  faHome,
  faUtensilSpoon
} from '@fortawesome/fontawesome-free-solid'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home w-100'>
      <section className='left-side'>
        <div className='blurb '>
          <div className='blurb-title display-font'>
            <FontAwesomeIcon icon={faHome} /> Welcome
          </div>
          <p className='blurb-text text-muted'>
            This site showcases all my current and past web development
            projects, apps I've created using HTML, CSS, JavaScript, React,
            Bootstrap, and other front-end development technologies. Please take
            a look around. For more about me, visit the{' '}
            <Link to='/website/about'>About Me</Link> page.
          </p>
        </div>
        <div className='blurb '>
          <Link to='/website/news' className='blurb-link'>
            <div className='blurb-title display-font'>
              <FontAwesomeIcon
                className='icon'
                icon={faListAlt}
              ></FontAwesomeIcon>{' '}
              Latest News
            </div>
          </Link>
          <div className='blurb-text text-muted'>
            This website is constantly changing. As I learn new skills, I
            incorporate them here. Sometimes, I'll create a brand new app, and
            other times I'll make changes/improvements to an existing one. To
            see a log of what I've been up to, check out the{' '}
            <Link to='/website/news'>Latest News</Link> page.
          </div>
        </div>
        <div className='blurb '>
          <a
            href='https://mollycallen.github.io/react-8pm/'
            target='_blank'
            rel='noreferrer'
            className='blurb-link'
          >
            <div className='blurb-title display-font'>8pm - eCommerce Site</div>
          </a>
          <div className='blurb-text text-muted'>
            8pm is a mock retail website, modeled loosely after{' '}
            <a href='http://www.6pm.com' target='_blank' rel='noreferrer'>
              www.6pm.com
            </a>
            . This was my first "big" React project. You can browse and search
            for products, add and remove items in your cart, login and view
            order history, and much more. To visit my 8pm app, click{' '}
            <a
              href='https://mollycallen.github.io/react-8pm/'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
            .
          </div>
        </div>
        <div className='blurb '>
          <Link to='/website/plant' className='blurb-link'>
            <div className='blurb-title display-font'>
              <FontAwesomeIcon icon='fa-solid fa-seedling' /> Plant Tracker
            </div>
          </Link>
          <div className='blurb-text text-muted'>
            I love my garden, and I love seeing plants thrive in the perfect
            spot. To learn more about a plant, its likes and dislikes, check out
            the <Link to='/website/plant'>Plant Tracker</Link> app.
          </div>
        </div>
        <div className='blurb '>
          <Link to='/website/recipe' className='blurb-link'>
            <div className='blurb-title display-font'>
              <FontAwesomeIcon
                className='icon'
                icon={faUtensilSpoon}
              ></FontAwesomeIcon>{' '}
              Recipe Search
            </div>
          </Link>
          <div className='blurb-text text-muted'>
            One of my least favorite things of "adulting" is figuring out what
            to cook for dinner EVERY night. It's so easy to get stuck in a rut.
            If you need some inspiration, click around the{' '}
            <Link to='/website/recipe'>Recipe Search</Link> section.
          </div>
        </div>
        <div className='blurb '>
          <Link to='/website/games' className='blurb-link'>
            <div className='blurb-title display-font'>
              <FontAwesomeIcon icon='fa-solid fa-trophy' /> Games
            </div>
          </Link>
          <div className='blurb-text text-muted'>
            When I was first learning web development, I watched a ton of
            tutorials and creating games was a popular topic of these tutorials.
            Many of the games in this section have undergone several versions
            with many upgrades. Want to challenge me to a game of Tic Tac Toe,
            check out the <Link to='/website/games'>Games</Link> section.
          </div>
        </div>
        <div className='blurb '>
          <Link to='/website/tools' className='blurb-link'>
            <div className='blurb-title display-font'>
              <FontAwesomeIcon icon='fa-solid fa-wrench' className='icon' />
              Tools
            </div>
          </Link>
          <div className='blurb-text text-muted'>
            The Tools section contains older utility-style projects that I
            created early in my web development training. I'd probably write
            them a little differently today, and maybe I will someday, but for
            now, I've included them in the{' '}
            <Link to='/website/tools'>Tools</Link> section.
          </div>
        </div>
        <div className='blurb '>
          <Link to='/website/bits' className='blurb-link'>
            <div className='blurb-title display-font'>
              <FontAwesomeIcon icon='fa-solid fa-lightbulb' className='icon' />
              Bits and Pieces
            </div>
          </Link>
          <div className='blurb-text text-muted'>
            This section contains a hodgepodge of small projects and code
            snippets that aren't part of a larger project. I've gathered them
            here so that I can refer to them later. Click here see to see what's
            included in the&nbsp;
            <Link to='/website/bits'>Bits and Pieces</Link> section.
          </div>
        </div>
      </section>
      <section className='right-side'>
        <RightRail />
      </section>
    </div>
  )
}

export default Home
