import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons';
import { faBars, } from "@fortawesome/free-solid-svg-icons"
import VerticalNavBar from './VerticalNavBar';
import Time from './Time';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const path = process.env.PUBLIC_URL;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header container-fluid" style={{ backgroundImage: `url(${path}/images/Mountain-background.jpg)`, backgroundSize: "cover" }}>
            <div className='d-flex align-items-center justify-content-between w-100 p-2 header-content'>
                <div className="d-flex align-items-center">
                    <div className='menu-icon pe-4'>

                        <FontAwesomeIcon className='menu-icon' icon={faBars} onClick={() => setMenuOpen(true)}></FontAwesomeIcon>

                        <Offcanvas show={menuOpen} onHide={() => setMenuOpen(false)} className='bg-dark'>
                            <Offcanvas.Header className="d-flex justify-content-end" >
                                <button type="button" className="btn-close btn-close-white" onClick={() => { setMenuOpen(false) }}></button>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <VerticalNavBar setMenuOpen={setMenuOpen}></VerticalNavBar>
                            </Offcanvas.Body>
                        </Offcanvas>

                    </div>
                    <div className="title">
                        <Link className='name text-decoration-none' to='/website'>Molly Allen</Link>
                        <div className='email'>mollyallen153@gmail.com</div>
                    </div>

                </div>
                <div className='justify-self-end '>
                    <div className='social mb-3'>
                        <SocialIcon style={{ width: '35px', height: '35px' }} url="https://www.facebook.com/molly.allen.378537/" />
                        <SocialIcon style={{ width: '35px', height: '35px' }} url='https://twitter.com/Mollyal60327623' />
                        <SocialIcon style={{ width: '35px', height: '35px' }} url='https://www.instagram.com/mollyallen153/' />
                        <SocialIcon style={{ width: '35px', height: '35px' }} url='https://github.com/mollycallen' />
                    </div>
                    <div className='mt-2'>
                        <Time />
                    </div>

                </div>
            </div >

        </div >
    )
}

export default Header
