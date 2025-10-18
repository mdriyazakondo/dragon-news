import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { singInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const newUser = { email, password };
    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err.message));
    console.log(newUser);
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] max-w-2xl mx-auto">
      <div className="flex items-center justify-center max-w-2xl mx-auto w-full flex-col my-20 shadow p-6 rounded-md ">
        <div className="max-w-xl w-full mx-auto pb-8 ">
          <h4 className=" text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 my-6 pb-6">
            Login your account
          </h4>
          <form
            onSubmit={handleSignIn}
            className="w-full space-y-4 border-t border-gray-400 pt-8"
          >
            <div>
              <p className="text-gray-600 font-semibold">Your Email</p>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full py-2 pl-4 border border-gray-400 rounded-md outline-none mt-2"
              />
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Your Password</p>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                required
                className="w-full py-2 pl-4 border border-gray-400 rounded-md outline-none mt-2"
              />
            </div>
            <button
              type="submit"
              className="py-2 w-full bg-gray-700 text-white font-semibold cursor-pointer rounded-sm"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-gray-600 font-medium text-center">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-red-500 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
