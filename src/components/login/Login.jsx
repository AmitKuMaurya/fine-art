import React from "react";
import styles from "./login.module.css";
import Img from "../../assets/login_signUp/Group31.png";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { underlineStyles } from "../../constants/common.constant";
export const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.boxofContent}>
        <div >
          <h1>Sign In</h1>
          <span>If you don’t have an account register</span>
          <div>You can <span>Register here !</span></div>
        </div>
        {/* <div> */}
          <form className={styles.formContent}>
            <div>
              <label>Email</label>
              <input type="text" name="" id="" placeholder="Enter your email address" required={true} />
            </div>

            <div>
              <label>Password</label>
              <input type="text" name="" id="" placeholder="Enter your password" />
            </div>

            <div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Remember Me</label>
            </div>

              <Link style={underlineStyles}>
            <div>
              Forgot Password ?
            </div>
              </Link>
            </div>

            <div>
              <button type="submit">Login</button>
              <span>or Continue with</span>
            </div>

            <div>
              {/* <div> */}
              <FcGoogle size={34} />
              <GrApple size={34} />
              <FaFacebook size={34} color={"rgb(11,129,237)"} />
              {/* </div> */}
            </div>
          </form>
        {/* </div> */}
      </div>
      <div>
        <img src={Img} alt={Img} />
      </div>
    </div>
  );
};
