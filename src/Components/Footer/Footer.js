import './Footer.css';
import {Phone, Mail, CircleLetterC} from 'lucide-react'
import {FaFacebook} from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
                <div className='links'>
                <div className="link">
                    <h3>Links</h3>
                    <ul>
                        <li><a  href="https://scu.eg/en/e-services/e-learning-platform/" target='_blank' rel="noreferrer">Official e-Learning Platform </a></li>
                        <li><a  href="https://dmu.edu.eg/electronic-services/electronic-services/" target='_blank' rel="noreferrer">Digital Services Site</a></li>
                        <li><a  href="https://dmu.edu.eg/landing/" target='_blank' rel="noreferrer">Damanhour University</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><Phone size={18}/> Phone: (000) 123-456</li>
                        <li><Mail size={18}/> <a  href="support@dmu.edu.eg">Email: support@dmu.edu.eg</a></li>
                    </ul>
                </div>
                <div className="follow">
                    <h3>Follow Us</h3>
                    <a href='https://www.facebook.com/profile.php?id=61576114501852' target='_blank' rel="noreferrer"><FaFacebook className="faceicon"/></a>
                </div>
            </div>
            <div className='copywrite'><CircleLetterC className='copy'/> All Rights Reserved 2027</div>    
        </div>    
)}

export default Footer
