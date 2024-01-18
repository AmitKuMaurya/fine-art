import { useState } from "react";
import styles from "./signup.module.css";
import Img from "../../assets/login_signUp/Group31.png";
import Logo from "../../assets/shilpasaga.svg";
import { Link } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import { useMutation } from "react-query";
import { signupUser } from "../../api/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoadingToast } from "../../hooks/useLoadingToast";

export default function SignUp() {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{7,}$/;
  const [checkValidEmail, setCheckValidEmail] = useState(null);
  const [checkValidPassword, setCheckValidPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };
  const { dispatch } = useAuth();
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    if (emailRegex.test(userData.email)) {
      setCheckValidEmail(null);
    } else {
      setCheckValidEmail("Please enter a valid email address");
    }
    if (passwordRegex.test(userData.password)) {
      setCheckValidPassword(null);
    } else {
      setCheckValidPassword(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and must be at least 7 characters long"
      );
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setUserData({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.confirmPassword === ""
    ) {
      toast.info("Please fill all the fields", {
        position: "top-center",
      });
      return;
    }
    if (checkValidEmail) {
      toast.warning(checkValidEmail, {
        position: "top-center",
      });
      return;
    }
    if (checkValidPassword) {
      toast.warning(checkValidPassword, {
        position: "top-center",
      });
      return;
    }
    if (userData.password !== userData.confirmPassword) {
      toast.warning("Passwords do not match", {
        position: "top-center",
      });
      return;
    } else {
      await signupMutation.mutateAsync({
        email: userData.email,
        username: userData.username,
        password: userData.password,
      });
    }
  };

  const signupMutation = useMutation(signupUser, {
    onSuccess: (data) => {
      if (data.status === 201 || data.status === 200) {
        dispatch({
          type: "SIGNUP",
          payload: { token: data.access_token },
        });
        toast.success(data.message, {
          position: "top-center",
        });
      } else if (data.status === 501 || data.status === 500) {
        toast.error(data.message, {
          position: "top-center",
        });
      } else {
        toast.warning(data.message, {
          position: "top-center",
        });
      }
    },
    onError: (error) => {
      console.error("Signup unsuccessful", error);
      toast.error(error.message, {
        position: "top-center",
      });
    },
  });
  useLoadingToast(signupMutation.isLoading);
  return (
    <>
      <div className={styles.loginContainer}>
        <div>
          <img src={Logo} alt="Shilpasaga logo" width={224} height={68} />
          <div className={styles.boxofContent}>
            <div>
              <h1>Sign up</h1>
              <span>If you have an account registered</span>
              <div>
                You can{" "}
                <span>
                  <Link to="/log-in">Login here !</Link>
                </span>
              </div>
            </div>
          </div>
          <form className={styles.formContent} onSubmit={handleSignup}>
            <div>
              <label>Email</label>
              <input
                onChange={handleInputChange}
                type="text"
                name="email"
                value={userData.email}
                placeholder="Enter your email address"
                required={true}
              />
            </div>

            <div>
              <label>Username</label>
              <input
                onChange={handleInputChange}
                type="text"
                name="username"
                value={userData.username}
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label>Password</label>
              <span>
                <input
                  onChange={handleInputChange}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={userData.password}
                  placeholder="Enter your password"
                />
                <button onClick={handleShowPassword}>
                  {showPassword ? (
                    <MdVisibility size={23} />
                  ) : (
                    <MdVisibilityOff size={23} />
                  )}
                </button>
              </span>
            </div>

            <div>
              <label>Confirm Password</label>
              <span>
                <input
                  onChange={handleInputChange}
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  placeholder="Confirm your password"
                />
                <button onClick={handleShowConfirmPassword}>
                  {showConfirmPassword ? (
                    <MdVisibility size={23} />
                  ) : (
                    <MdVisibilityOff size={23} />
                  )}
                </button>
              </span>
            </div>

            <div>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
        <div>
          <img src={Img} alt={Img} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
