

import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const { createUser, profileUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    if (data.password !== data.confirmPass) {
      toast.error("Password Does not match!");
      return;
    }

    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          profileUser(data.name, data.photoURL)
            .then(() => {
              const user = {
                name: data.name,
                email: data.email,
                image: data.photoURL,
                role: "student",
              };
              fetch("https://school-camp-server-rouge.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log("user saved", data);
                  if (data.insertedId) {
                    toast("User create Successfully!");
                    navigate('/')
                  }
                });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err)=>{
        console.log(err.message)
      })
  };
  return (
    <>
      <Helmet>
        <title>SpeckEasy | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 py-10">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5 text-orange-600">
              Sign up now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
                {errors.name && <span className="text-red-600">required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                />
                {errors.email && <span className="text-red-600">required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL*</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
                {errors.photoURL && (
                  <span className="text-red-600">required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type={show ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered  w-full"
                  />
                  <span
                    className="absolute right-10 p-2 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password*</span>
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type={show ? "text" : "password"}
                    {...register("confirmPass", { required: true })}
                    placeholder="Confirm Password"
                    className="input input-bordered w-full relative"
                  />
                  <span
                    className="absolute right-10 p-2 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {errors.confirmPass?.type === "required" && (
                  <p className="text-red-600">required</p>
                )}
              </div>
              <div className="form-control mt-6 -mb-20">
                <input style={{width:'370px'}}
                  className="btn text-white bg-orange-700 hover:bg-orange-800 border border-l-8 border-r-8 border-green-800 hover:border-orange-900"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center mb-10">
              <p className="-mb-4">
                Already have an account! Please 
                <Link to="/login" className="hover:underline text-blue-500 ml-2">
                   Login
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  

  );
};

export default SignUp;



