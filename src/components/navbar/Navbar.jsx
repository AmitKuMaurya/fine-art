import React from "react";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { LiaUser } from "react-icons/lia";
import { PiHandbag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import {underlineStyles} from "../../constants/common.constant"
import styles from "./navbar.module.css";

const Navbar = () => {

  return (
    <>
      <div className={styles.box}>
        <nav className={styles.navbar}>
          {/* Logo */}
          <Link style={underlineStyles} to={"/"}><div className={styles.logo}>ShilpSaga</div></Link>
          {/* Navigation Tab */}
          <div className={styles.navTab}>
            <ul>
              <Link style={underlineStyles}>
                <li className={styles.text}>Designs</li>
              </Link>
              <Link style={underlineStyles} to={"/category"}>
                <li className={styles.text}>Categories</li>
              </Link>
              <Link style={underlineStyles} to={'/pricing'}>
                <li className={styles.text}>Pricing</li>
              </Link>
              <Link style={underlineStyles} >
                <li className={styles.text}>Trends</li>
              </Link>
              <Link style={underlineStyles} to={'/about-us'}>
                <li className={styles.text}>About Us</li>
              </Link>
            </ul>
          </div>
          {/* Search options */}

          <div className={styles.searchBox}>
            <span>
              <CiSearch size={22} />
            </span>
            <input
              className={styles.search}
              type="text"
              name=""
              id=""
              placeholder="Search all Prints..."
            />
          </div>
          {/* wishlist, user and cart Logo */}
          <div className={styles.icons}>
            <GrFavorite size={26} color="white" />
            <Link style={underlineStyles} to={'/sign-up'}>
            <LiaUser size={26} color="white" />
            </Link>
            <Link style={underlineStyles} to={'/cart'}>
            <PiHandbag size={26} color="white" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
