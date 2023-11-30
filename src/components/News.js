import { useState } from 'react'
import '../styles/News.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/fontawesome-free-solid'
import { Link } from 'react-router-dom'
import { Collapse } from 'react-bootstrap'
import BreadcrumbNav from './BreadcrumbNav'

const News = () => {
  const [showNews, setShowNews] = useState(true)

  return (
    <div className='news main-container'>
      <BreadcrumbNav currentPage={'Latest News'} />
      <div className='d-flex justify-content-between'>
        <div className='title display-font'>
          <FontAwesomeIcon className='icon' icon={faListAlt}></FontAwesomeIcon>
          Latest News...
        </div>
        <div
          className='news-header text-muted '
          onClick={() => {
            setShowNews(prev => !prev)
          }}
        >
          <FontAwesomeIcon
            className='icon fs-2'
            icon={'fa-solid ' + (showNews ? 'fa-angle-down' : 'fa-angle-up')}
          />
          <span>{showNews ? 'Show All' : 'Show Less'} </span>
        </div>
      </div>
      <div className='container-md'>
        <ul className='list-group list-group-flush news-list container-lg'>
          <li className='list-group-item  news-item'>
            <div className='news-date'>11/29/23</div>
            <div className='news-text'>
              I started a new side hassle training AI models how to code. It's a
              great job with flexible hours, and I have the opportunity to learn
              a bunch of new skills. For example, I have worked on several
              projects using Python and the pandas library to do data analysis.
              I've been wanting to add a section to my website for miscellaneous
              mini projects and code snippets that I could refer to later. I
              created a <Link to='/website/bits'>Bits and Pieces</Link> section
              to house all this.
            </div>
          </li>
          <li className='list-group-item  news-item'>
            <div className='news-date'>9/6/23</div>
            <div className='news-text'>
              I reorganized the <Link to='/website/home'>Home Page</Link>. It
              was in desperate need of a facelift! I added short introductions
              to the different sections of the website and created a breadcrumb
              bar for each section to aid navigation. I think it's much more
              inviting, if I do say so myself. &#128521;
            </div>
          </li>
          <li className='list-group-item  news-item'>
            <div className='news-date'>7/2/23</div>
            <div className='news-text'>
              Turns out I love Bootstrap! BUT, it can be a little tricky with
              React. I'm learning that React has own version of Bootstrap that
              it prefers. Nevertheless, I've been incorporating Bootstrap in
              other areas of the website for further practice and consistency.
            </div>
          </li>
          <li className='list-group-item  news-item'>
            <div className='news-date'>6/9/23</div>
            <div className='news-text'>
              I've been spending some time learning Bootstrap 5 and excited
              about using it in future projects. It promises to greatly simplify
              and standardize styling components. Next up, I'm going to redesign
              the <Link to='/website/plant'>Plant Tracker</Link> using
              Bootstrap. It's the perfect app to practice using Bootstrap
              utilities and components such as cards, modals, alerts, dropdowns,
              etc. Check back to see my progress. &#128518;
            </div>
          </li>
          <li className='list-group-item  news-item'>
            <div className='news-date'>5/18/23</div>
            <div className='news-text'>
              You can now save and remove plants in the "My Garden" section of
              the <Link to='/website/plant'>Plant Tracker</Link>. (Data is
              stored in local storage). Also added functionality to sort your
              saved plants alphabetically by name, either ascendingly or
              descendingly.
            </div>
          </li>
        </ul>
        <Collapse in={!showNews}>
          <ul className='list-group list-group-flush news-list container-lg'>
            <li className='list-group-item  news-item'>
              <div className='news-date'>5/03/23</div>
              <div className='news-text'>
                Added functionality to collapse and expand the right-hand
                section, where the the daily quote, weather, etc. are displayed.
                When collapsed, there is more space for the main content to be
                displayed.
              </div>
            </li>
            <li className='list-group-item  news-item'>
              <div className='news-date'>4/28/23</div>
              <div className='news-text'>
                <div>
                  Started a new <Link to='/website/plant'>plant app</Link>! I'm
                  super excited about this one. Currently, you can enter certain
                  search criteria and a paginated list of plants meeting your
                  criteria will be displayed. The app uses the{' '}
                  <a
                    href='https://www.perenual.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    www.perenual.com
                  </a>{' '}
                  API. I plan to add functionality to save plants to your
                  "garden", by clicking the heart icon. Check back often to see
                  my progress.
                </div>
              </div>
            </li>
            <li className='list-group-item  news-item'>
              <div className='news-date'>4/26/23</div>
              <div className='news-text'>
                Incorporated React useRef hook thoughout website-- behind the
                scenes stuff!
              </div>
            </li>
            <li className='list-group-item  news-item'>
              <div className='news-date'>4/11/23</div>
              <div className='news-text'>
                Added more functionality to the recipe section-- two dropdown
                filters with results displayed in a horizontally scrollable
                list, and a more button at the bottom of the search section to
                display 20 more recipes. Maybe try a{' '}
                <Link to='/website/recipe'>new recipe</Link> for dinner!
              </div>
            </li>
            <li className='list-group-item  news-item'>
              <div className='news-date'>4/04/23</div>
              <div className='news-text'>
                Started a new recipe section. Still working on a few details,
                but the search feature is pretty slick. Check it out{' '}
                <Link to='/website/recipe'>here!</Link>
              </div>
            </li>
            <li className='list-group-item  news-item'>
              <div className='news-date'>3/31/23</div>
              <div className='news-text'>
                Added Todo List in Tools section. Old school todo list with data
                stored in local storage. You can add, delete, mark complete or
                priority, and print todos. Take a look{' '}
                <Link to='/website/tools'>here!</Link>
              </div>
            </li>
            <li className='list-group-item  news-item'>
              <div className='news-date'>3/23/23</div>
              <div className='news-text'>
                Deployed new website on Github. Still working out the bugs,
                please be patient.
              </div>
            </li>
            <li className='list-group-item news-item'>
              <div className='news-date'>3/15/23</div>
              <div className='news-text'>
                Started new personal website using react. Old website will still
                be available from the menu.
              </div>
            </li>
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default News
