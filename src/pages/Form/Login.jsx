import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from '../../assets/google.svg';
import { AuthContext } from "../../contexts/AuthProvider";
import { addUser } from "../../Utilities/AddUser";
import { getToken } from "../../Utilities/GetToken";

const Login = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { emailLogin, googleSignIn,user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // login function here
  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    emailLogin(email, password)
      .then(result => {
        const profile = result.user;
        getToken(profile.email)
        const userInfo = {
          name: profile.displayName,
            role:"Buyer",
            email: profile.email,
            isVerified:false
        }
        addUser(userInfo)
        navigate(from, { replace: true });
      })
    .catch(err=>toast.error(err.message))
  };
    // google signIn function
    const handleGoogleSignIn = () => {
      googleSignIn()
        .then(result => {
          const profile = result.user;
          toast.success('Sign In Successfully');
          const userInfo = {
            name: profile.displayName,
            role:"Buyer",
            email: profile.email,
            isVerified:false
          }
          getToken(profile?.email);
          addUser(userInfo);          
      })
  }
  useEffect(() => {
    if (user) {
      navigate(from,{replace:true})
    }
  },[user,from,navigate])
  return (
    <div className="flex justify-center items-center my-12">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleLogin)}>
      <div className="">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("email")}
        />
        <p>{errors.firstName?.message}</p>
      </div>
      <div className="">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
              <input
                type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </div>
        <button type="submit" className="w-full text-white transition bg-gray-900 pointer hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
      
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          to="/register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 pointer"
        >
          Sign up
        </Link>
      </p>
          </form>
          <div className="text-center">
          <button onClick={handleGoogleSignIn} type="button" className="text-white transition bg-gray-900  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 flex  justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-full">             
              <img className="h-6 mr-2" src={googleLogo} alt="" />
  Sign in with Google
</button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Login;
