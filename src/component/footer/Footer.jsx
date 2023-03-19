import './footer.css';
import paymentImg from "../../assets/images/payment.png"

export const Footer = () => {
  return (
    
    <footer>
        <div class="footer-nav">
            <div class="container">
            <ul class="footer-nav-list">
                <li class="footer-nav-item">
                    <h2 class="nav-title">Categories</h2>
                </li>
                <li class="footer-nav-item">
                    <a href="z" class="footer-nav-link">Women</a>
                </li>
                <li class="footer-nav-item">
                    <a href="z" class="footer-nav-link">Men</a>
                </li>
                <li class="footer-nav-item">
                    <a href="z" class="footer-nav-link">Accessories</a>
                </li>
                <li class="footer-nav-item">
                    <a href="z" class="footer-nav-link">Bags</a>
                </li>
                <li class="footer-nav-item">
                    <a href="z" class="footer-nav-link">Glasses</a>
                </li>
            </ul>

            <ul class="footer-nav-list">
                <li class="footer-nav-item">
                    <h2 class="nav-title">About Us</h2>
                </li>
                <li class="footer-nav-item about-us-content">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Officia architecto
                    dolor sit amet consectetur, 
                    adipisicing elit. Officia archidolor sit amet consectetur, 
                    adipisicing elit. Officia archi incidunt molestias hic laborum!
                </li>
            </ul>

            <ul class="footer-nav-list">
                <li class="footer-nav-item">
                    <h2 class="nav-title">Contact us</h2>
                </li>
                <li class="footer-nav-item flex">
                    <address class="content">ADDRESS : MOROCCO MARRAKECH AIT OURIR 4521</address>
                </li>
                <li class="footer-nav-item flex">
                    <phone class="content">PHONE : 0650402456</phone>
                </li>
                <li class="footer-nav-item flex">
                    <email class="content">EMAIL : info@gmail.com </email>
                </li>
                <li class="footer-nav-item flex">
                    <span class="content">HOURS : all week from 9 am to 7 pm</span>
                </li>
            </ul>

            <ul class="footer-nav-list">
                <li class="footer-nav-item">
                    <h2 class="nav-title">Follow Us</h2>
                </li>
                <li>
                    <ul class="social-link">
                        <li class="footer-nav-item">
                            <a href="fd" class="footer-nav-link"><ion-icon name="logo-facebook"></ion-icon></a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="fd" class="footer-nav-link"><ion-icon name="logo-twitter"></ion-icon></a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="fd" class="footer-nav-link"><ion-icon name="logo-linkedin"></ion-icon></a>
                        </li>
                        <li class="footer-nav-item">
                            <a href="fd" class="footer-nav-link"><ion-icon name="logo-instagram"></ion-icon></a>
                        </li>
                    </ul>
                </li>
            </ul>

            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <img src={paymentImg} alt="payment method" class="payment-img" />
                <p class="copyright">
                    Copyright &copy; hamza outmassint | 2022-2023
                </p>
            </div>
        </div>
    </footer>
  )
}
