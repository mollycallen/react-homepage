import "../styles/About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/fontawesome-free-solid'
import BreadcrumbNav from './BreadcrumbNav';
const path = process.env.PUBLIC_URL;

const About = () => {

    return (
        <div className="main-container">
            <BreadcrumbNav currentPage={"About Me"} />
            <div className="title display-font"> <FontAwesomeIcon className='icon' icon={faUser}></FontAwesomeIcon>
                About Me...</div>
            <div className='about container-lg'  >

                <div className="box-content">
                    <div className='cat welcome-cat'>
                        <div className='avatar '>
                            <img src={`${path}/images/molly-avatar-cropped.png`} alt="Molly's avatar"></img>
                        </div>
                        <p className="welcome"><span className="lead">Thank you for visiting my website!</span>  This is where I showcase my latest projects in web development.  Some projects are simple apps created with <span className="standout">HTML/CSS/JS</span>, while others are more sophisticated using <span className="standout">React</span> and <span className="standout">Bootstrap</span>, all developed with the help of <span className="standout">Git</span> and <span className="standout">Github</span>. Please take a look around, and if you'd like to contact me, please send me an email at <a href="mailto:mollyallen153@gmail.com">mollyallen153@gmail.com</a>!</p>
                    </div>
                    <div className='cat'>
                        <p className='cat-title'>Skills</p>
                        <div className='cat-detail skills'>
                            <div className="skill border rounded">
                                <span className="standout">              Javascript</span>
                                <p className='ms-3'> Vanilla js, jQuery, DOM manipulation, async/await, API fetch, json, high-level array methods (map, filter, sort)</p>
                            </div>
                            <div className="skill border rounded">
                                <span className="standout">React</span>
                                <p className='ms-3'>useState, useEffect, useRef, useContext hooks, custom hooks, Browser Router, Route, NavLink, custom components</p>
                            </div>
                            <div className="skill border rounded">
                                <span className="standout">CSS</span>
                                <p className='ms-3'>Bootstrap 5, flexbox and grid design, media queries, animation, variables, SASS</p>
                            </div>
                            <div className="skill border rounded">
                                <span className="standout">Others</span>
                                <p className='ms-3'>HTML, SQL and relational DBs, Git and Github</p>
                            </div>

                        </div>
                    </div>
                    <div className='cat'>
                        <p className='cat-title'>Education</p>
                        <div className='d-flex align-items-center mb-3'>
                            <div>
                                <a href='http://www.osu.edu'><img alt="The Ohio State University icon" className="school-icon" src={`${path}/images/ohio-state.png`}></img></a>
                            </div>

                            <div className='cat-detail'>
                                The Ohio State University - <span className='fw-bolder'>B.S. in Computer and Information Systems Engineering</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div >
                                <a href="http://www.etsu.edu"><img alt="East Tennessee State University icon" className="school-icon" src={`${path}/images/etsu.png`}></img></a>
                            </div>

                            <div className='cat-detail'>
                                East Tennessee State University - <span className='fw-bolder'>M.S. in Computer Science</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default About
