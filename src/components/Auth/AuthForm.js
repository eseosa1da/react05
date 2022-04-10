import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const API_KEY = "AIzaSyBZhqx5oie7C_Pc4U_4TcHNE3Yuok0GLlU";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = userEmailRef.current.value;
    const enteredPassword = userPasswordRef.current.value;

    setIsLoading(true);

    let url;

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(
            //error modal
            (data) => {
              let errorMessage = "Authentication failed";
              if (data && data.error & data.error.message) {
                errorMessage = data.error.message;
              }

              throw new Error(errorMessage);
            }
          );
        }
      })
      .then((data) => {
        const expirationTime = +data.expiresIn * 1000;
        console.log(data);
        authCtx.login(data.idToken, expirationTime);
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={userEmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={userPasswordRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <button>Sending Request</button>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
