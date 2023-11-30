import { SocialIcon } from 'react-social-icons';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <SocialIcon style={{ width: '35px', height: '35px' }} url="https://www.facebook.com/molly.allen.378537/" />
                <SocialIcon style={{ width: '35px', height: '35px' }} url='https://twitter.com/Mollyal60327623' />
                <SocialIcon style={{ width: '35px', height: '35px' }} url='https://www.instagram.com/mollyallen153/' />
                <SocialIcon style={{ width: '35px', height: '35px' }} url='https://github.com/mollycallen' />
            </div>
        </div>
    )
}

export default Footer
