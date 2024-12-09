import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleClick = () => {
    setIsLoginForm(!isLoginForm);
  };
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg')`,
      }}
    >
      <Header />
      <form className="my-32 mx-auto w-3/12 bg-black text-white py-10 px-8 rounded-lg bg-opacity-80">
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
          type="text"
          placeholder="Email Address"
          className="w-full my-2 p-2 rounded-sm bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full my-2 p-2 rounded-sm bg-gray-700"
        />
        <button className="w-full bg-red-700 my-4 p-2 rounded-sm">
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
