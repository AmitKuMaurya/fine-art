import React from "react";
import Logo from "../../assets/footer/ShilpSaga.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { underlineStyles } from "../../constants/common.constant";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styles.footContainer}>
        {/* top white section */}
        <div className={styles.topHeader}>
          {/* top  logo section*/}
          <div>
            <div>
              <img src={Logo} alt={Logo} />
            </div>
            <div>
              <ul className={styles.left_list}>
                <li>INFORMATION</li>


                <Link style={underlineStyles} to={"/privacy-policy"}>
                  <li className={styles.text}>
                    Privacy
                  </li>
                </Link>

                <Link style={underlineStyles}>
                  <li className={styles.text}>
                    FAQ
                  </li >
                </Link>

                <Link style={underlineStyles}>
                  <li className={styles.text}>
                    About Us
                  </li>
                </Link>

                <Link style={underlineStyles}>
                  <li className={styles.text}>
                    Blog
                  </li>
                </Link>

                <Link style={underlineStyles} to={"/contact-us"}>
                  <li className={styles.text}>
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className={styles.left_list}>
                <li>MENU</li>
                <li className={styles.text}>Category One</li>
                <li className={styles.text}>Category Two</li>
                <li className={styles.text}>Category Three</li>
              </ul>
            </div>
            <div className={styles.details}>
              <button>Request a Call</button>
              <h5>+91-9711512707</h5>
              <h5>info@shilpsaga.com</h5>
            </div>
          </div>
          {/* icons section with address */}
          <div>
            <div>
              <IoLogoWhatsapp size={35} />
              <BsTelegram size={33} />
              <RxLinkedinLogo size={33} />
              <FaSquareInstagram size={33} />
            </div>
            <h5>ABC Township, XYZ House Jodhpur, Rajasthan</h5>
          </div>
        </div>
        {/* bottom sectoin */}
        <div className={styles.bottom_header}>
          <div>
            If you didn’t find the products you are interested in or have
            questions?
          </div>
          <div>
            <div>Just send us your contact email and we will contact you.</div>
            <input type="text" value={"youremail.ema|"} />
          </div>
        </div>
        {/* copy right tag */}
        <div>© ShiplSaga 2023 — Copyright</div>
      </footer>
    </>
  );
};

export default Footer;

// 100vh -- 1080px;
// 80vh?😏 -- 880px
