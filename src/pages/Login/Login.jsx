
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";



const Login = () => {
  const [show, setShow] = useState(false);
  const { singIn } = useContext(AuthContext);
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    singIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        reset();
        toast.success('login successfully')
        // Swal.fire({
        //   position: 'top-center',
        //   icon: 'success',
        //   title: 'Login successfully',
        //   showConfirmButton: false,
        //   timer: 1500

        // })
        navigate(from, { replace: true });

      })
      .catch((err) => {
        (err);
        toast.error(err.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Sport Easy | Login</title>
      </Helmet>
      <div className="hero pr-6">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold  text-orange-600">
              Please Login!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm bg-slate-100 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control -mb-8">
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
                  <span className="label-text">Password*</span>
                </label>
                <div className="flex items-center -mb-6">
                  <input
                    type={show ? "text" : "password"}
                    {...register("password", {
                      required: true,
                    })}
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  <span
                    className="absolute right-10 p-2 cursor-pointer mr-2"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>

              </div>
              <div className="form-control mt-6 -mb-20">
                <input style={{ width: '380px' }}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center ">
              <p className="-mb-4">
                New to this site! Please{" "}
                <Link to="/signup" className="hover:underline text-blue-500">
                  Register
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

export default Login; 
