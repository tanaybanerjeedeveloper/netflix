import { validate } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = () => {
    const message = validate(email.current.value, password.current.value);

    setErrorMsg(message);

    if (message) return;

    if (!isLoginForm) {
      //.....sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      //.....sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg')`,
      }}
    >
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="my-32 mx-auto w-3/12 bg-black text-white py-10 px-8 rounded-lg bg-opacity-80"
      >
        <h3 className="font-bold text-xl mb-2">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h3>
        {!isLoginForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full my-2 p-2 rounded-sm bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full my-2 p-2 rounded-sm bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full my-2 p-2 rounded-sm bg-gray-700"
        />
        <p className="text-sm text-red-500">{errorMsg}</p>
        <button
          className="w-full bg-red-700 my-4 p-2 rounded-sm"
          onClick={handleSubmit}
        >
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="my-5 cursor-pointer text-sm" onClick={handleClick}>
          {isLoginForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
