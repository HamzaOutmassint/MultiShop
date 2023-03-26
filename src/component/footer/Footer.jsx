import './footer.css';
import paymentImg from "../../assets/images/payment.png"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <footer>
        <div className="footer-nav">
            <div className="container">
            <ul className="footer-nav-list">
                <li className="footer-nav-item">
                    <h2 className="nav-title">Categories</h2>
                </li>
                <li className="footer-nav-item">
                    <Link to="/women" className="footer-nav-link">Women</Link>
                </li>
                <li className="footer-nav-item">
                    <Link to="/men" className="footer-nav-link">Men</Link>
                </li>
                <li className="footer-nav-item">
                    <Link to="/accessories" className="footer-nav-link">Accessories</Link>
                </li>
                <li className="footer-nav-item">
                    <Link to="z" className="footer-nav-link">Bags</Link>
                </li>
                <li className="footer-nav-item">
                    <Link to="z" className="footer-nav-link">Glasses</Link>
                </li>
            </ul>

            <ul className="footer-nav-list">
                <li className="footer-nav-item">
                    <h2 className="nav-title">About Us</h2>
                </li>
                <li className="footer-nav-item about-us-content">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Officia architecto
                    dolor sit amet consectetur, 
                    adipisicing elit. Officia archidolor sit amet consectetur, 
                    adipisicing elit. Officia archi incidunt molestias hic laborum!
                </li>
            </ul>

            <ul className="footer-nav-list">
                <li className="footer-nav-item">
                    <h2 className="nav-title">Contact us</h2>
                </li>
                <li className="footer-nav-item flex">
                    <address className="content">ADDRESS : MOROCCO MARRAKECH AIT OURIR 4521</address>
                </li>
                <li className="footer-nav-item flex">
                    <address className="content">PHONE : 0650402456</address>
                </li>
                <li className="footer-nav-item flex">
                    <address className="content">EMAIL : info@gmail.com </address>
                </li>
                <li className="footer-nav-item flex">
                    <span className="content">HOURS : all week from 9 am to 7 pm</span>
                </li>
            </ul>

            <ul className="footer-nav-list">
                <li className="footer-nav-item">
                    <h2 className="nav-title">Follow Us</h2>
                </li>
                <li>
                    <ul className="social-link">
                        <li className="footer-nav-item">
                            <Link to="fd" className="footer-nav-link"><FacebookRoundedIcon/> </Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="fd" className="footer-nav-link"><TwitterIcon/> </Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="fd" className="footer-nav-link"><LinkedInIcon /></Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="fd" className="footer-nav-link"><InstagramIcon /></Link>
                        </li>
                    </ul>
                </li>
            </ul>

            </div>
        </div>

        <div className="footer-bottom">
            <div className="container">
                <img src={paymentImg} alt="payment method" className="payment-img" />
                <p className="copyright">
                    Copyright &copy; hamza outmassint | 2022-2023
                </p>
            </div>
        </div>
    </footer>
  )
}
export default Footer