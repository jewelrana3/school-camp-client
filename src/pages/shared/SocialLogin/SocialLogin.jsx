import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
const SocialLogin = () => {
  const { signInGoogle } = useContext(AuthContext);


  const navigate = useNavigate()
  const handleGoogleLogin = () => {
    let from = location.state?.from?.pathname || "/";
    signInGoogle()
      .then((result) => {
        const loggedUser = result.user;

        const saveUser = {name : loggedUser.displayName, email : loggedUser.email, image : loggedUser.photoURL, role : 'student'}
          fetch('https://b7a12-summer-camp-server-side-jewelrana3.vercel.app/users',{
            method : "POST",
            headers : {
              'content-type' : 'application/json'
            },
            body : JSON.stringify(saveUser)
          })
          .then(res=>res.json())
          .then((data)=>{
                console.log('data', data);
                navigate(from, { replace: true });
          })


        })
        .catch((err) => {
          console.log(err);
        }); 
  };

  return (
    <div className="mt-6">
      <button onClick={handleGoogleLogin} className="btn  btn-outline">
        <FaGoogle className="h-6 w-6"></FaGoogle>{" "}
        <span>Continue With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;