import { CiGift } from "react-icons/ci";
import { IoTrophyOutline } from "react-icons/io5";
import { MdOutlineGppGood, MdOutlineSupportAgent } from "react-icons/md";

const Footer=() => {
  return (
    <>
      <div className="service-features">
        <div className="feature-item">
          <i className="fas fa-trophy"></i>
          <h4 className="font-bold"><IoTrophyOutline/>High Quality</h4>
          <p>Crafted from top materials</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-headset"></i>  
          <h4 className="font-bold"><MdOutlineSupportAgent />24/7 Support</h4>
          <p>Dedicated support</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-shield-alt"></i>
          <h4 className="font-bold"><MdOutlineGppGood />Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-shipping-fast"></i>
          <h4 className="font-bold"><CiGift />Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
      </div>
      {/* foter */}
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h3>
              <span className="logo">
                <img src="image/logo.png" width="50px" height="50px" />
                Furniro
              </span>
            </h3>
            <p>
              400 University Drive Suite 200 <br /> Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="footer-column">
            <h4>Sitemap</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Location</h4>
            <p>
              <a href="mailto:support@euphoria.in">support@euphoria.in</a>
            </p>
            <p>
              Ahmedabad Main Road
              <br /> Udaipur, India - 313002
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 code ecma web. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
