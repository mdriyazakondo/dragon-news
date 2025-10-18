import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <h3 className="font-bold text-xl ">Login With</h3>
      <div className="space-y-2 mt-4">
        <button
          onClick={handleSignInWithGoogle}
          className="w-full cursor-pointer border border-red-400  bg-base-200 text-red-400 px-6 py-2 rounded-md font-semibold flex items-center gap-2 justify-center hover:bg-red-400 hover:text-white transition-all duration-300"
        >
          <FcGoogle size={24} /> Google
        </button>
        <button className="w-full cursor-pointer border border-gray-400  bg-base-200 text-gray-600 px-6 py-2 rounded-md font-semibold flex items-center gap-2 justify-center hover:bg-gray-700 hover:text-white transition-all duration-300">
          <FaGithub size={24} /> Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
