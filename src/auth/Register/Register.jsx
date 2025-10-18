import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { signUpUser } = useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.state || "/";
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    signUpUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
      })
      .then(() => {
        console.log("Profile updated successfully!");
        e.target.reset();
        navigate(currentPath);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex items-center justify-center max-w-2xl mx-auto min-h-[80vh]">
      <div className="flex flex-col items-center justify-center w-full my-20 shadow p-6 rounded-md">
        <div className="max-w-xl w-full mx-auto pb-8">
          <h4 className="text-center text-3xl font-semibold text-gray-700 pb-6 my-6">
            Register your account
          </h4>

          <form
            onSubmit={handleSignUp}
            className="space-y-4 border-t border-gray-400 pt-8 w-full"
          >
            <div>
              <p className="text-gray-600 font-semibold">Your Name</p>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full py-2 pl-4 border border-gray-400 rounded-md outline-none mt-2"
              />
            </div>

            <div>
              <p className="text-gray-600 font-semibold">Photo URL</p>
              <input
                type="url"
                name="photoURL"
                placeholder="Photo URL"
                required
                className="w-full py-2 pl-4 border border-gray-400 rounded-md outline-none mt-2"
              />
            </div>

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
              <div className="relative">
                <input
                  type={isShow ? "text" : "password"}
                  name="password"
                  placeholder="Your Password"
                  required
                  className="w-full py-2 pl-4 border border-gray-400 rounded-md outline-none mt-2"
                />
                <button
                  onClick={() => setIsShow(!isShow)}
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {isShow ? (
                    <LuEye className="w-6 h-6 text-gray-600 cursor-pointer" />
                  ) : (
                    <FaRegEyeSlash className="w-6 h-6 text-gray-600 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600 font-semibold">
              <input type="checkbox" name="term" required />
              Accept Terms & Conditions
            </div>

            <button
              type="submit"
              className="py-2 w-full bg-gray-700 text-white font-semibold cursor-pointer rounded-sm"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-gray-600 font-medium text-center">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-red-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
