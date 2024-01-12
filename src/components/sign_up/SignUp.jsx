import React from 'react'
import styles from "./signup.module.css"
import Img from "../../assets/login_signUp/Group31.png"
export default function SignUp() {
  return (
    <>
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

              {/* <Link style={underlineStyles}> */}
            <div>
              Forgot Password ?
            </div>
              {/* </Link> */}
            </div>

            <div>
              <button type="submit">Login</button>
              <span>or Continue with</span>
            </div>
          </form>
        {/* </div> */}
      </div>
      <div>
        <img src={Img} alt={Img} />
      </div>
    </div>
    </>
  )
}
