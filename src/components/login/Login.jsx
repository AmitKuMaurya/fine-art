import { useState } from "react";
import styles from "./login.module.css";
import Img from "../../assets/login_signUp/Group31.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { underlineStyles } from "../../constants/common.constant";
import Logo from "../../assets/shilpasaga.svg";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoadingToast } from "../../hooks/useLoadingToast";
import { useAuth } from "../../hooks/useAuth";
import { useMutation } from "react-query";
import { loginUser } from "../../api/auth";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const { dispatch } = useAuth();
  const loginMutation = useMutation(loginUser, {
    onSuccess: (data) => {
      if (data.status === 201 || data.status === 200) {
        dispatch({
          type: "LOGIN",
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
      console.error("Login unsuccessful", error);
      toast.error(error.message, {
        position: "top-center",
      });
    },
  });
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setUserCredentials({
      email: "",
      password: "",
    });
    if (userCredentials.email === "" || userCredentials.password === "") {
      toast.info("Please fill in both email and password fields", {
        position: "top-center",
      });
      return;
    } else {
      await loginMutation.mutateAsync(userCredentials);
    }
  };

  useLoadingToast(loginMutation.isLoading);
  return (
    <>
      <div className={styles.loginContainer}>
        <div>
          <img src={Logo} alt="Shilpasaga logo" width={224} height={68} />
          <div className={styles.boxofContent}>
            <div>
              <h1>Sign in</h1>
              <span>If you don’t have an account register</span>
              <div>
                You can{" "}
                <span>
                  <Link to="/sign-up">Register here !</Link>
                </span>
              </div>
            </div>
            <div className={styles.formContent}>
              <form onSubmit={handleLogin}>
                <div>
                  <label>Email</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="email"
                    value={userCredentials.email}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label>Password</label>
                  <span>
                    <input
                      onChange={handleInputChange}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={userCredentials.password}
                      placeholder="Enter your password"
                    />
                    <button onClick={handleShowPassword}>
                      {showPassword === true ? (
                        <MdVisibility size={23} />
                      ) : (
                        <MdVisibilityOff size={23} />
                      )}
                    </button>
                  </span>
                </div>

                <div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <label>Remember Me</label>
                  </div>

                  <Link style={underlineStyles}>
                    <div>Forgot Password ?</div>
                  </Link>
                </div>

                <div>
                  <button type="submit">Login</button>
                  <span>or Continue with</span>
                </div>
              </form>
              <div>
                <button>
                  <FcGoogle size={34} />
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Img} alt={Img} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
