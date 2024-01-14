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
          <span>If you  have an account registered</span>
          <div>You can <span>Login here !</span></div>
        </div>
        {/* <div> */}
          <form className={styles.formContent}>
            <div>
              <label>Email</label>
              <input type="text" name="" id="" placeholder="Enter your email address" required={true} />
            </div>

            <div>
              <label>Username</label>
              <input type="text" name="" id="" placeholder="Enter your password" />
            </div>

            <div>
              <label>Password</label>
              <input type="password" name="" id="" placeholder="Enter your password" />
            </div>

            <div>
              <label>Confirm Password</label>
              <input type="password" name="" id="" placeholder="Enter your password" />
            </div>

            <div>
              <button type="submit">Sign Up</button>
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
