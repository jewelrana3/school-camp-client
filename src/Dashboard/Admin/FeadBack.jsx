import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import useClass from "../../hooks/useClass";
import { AuthContext } from "../../provider/AuthProvider";
import useUser from "../../hooks/useUser";
import { Helmet } from "react-helmet-async";


const FeadBack = () => {
    const { id } = useParams()
    const [classes] = useClass()
    const { user } = useContext(AuthContext)
    const [users] = useUser()
    const currentUser = users.find(item => item?.email === user?.email)
   
    const data = classes.find(item => item._id === id);
    const handleFeadbackSubmit = (e) => {
        e.preventDefault();

        const feadbackData = { name: data.name, email: data.email, instructor: data.instructor, image: data.image }

        const feadbackText = e.target.feadback.value
        feadbackData.feadback = feadbackText
        feadbackData.role = currentUser?.role

       



        fetch('https://school-camp-server-rouge.vercel.app/feadbackCollection', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feadbackData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'feadback collected succesfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <>
           <Helmet>
                <title>Sports Easy - Dashboard -Feadback</title>
            </Helmet>
            <div className="w-full flex justify-center py-20 rounded-xl">
                <form onSubmit={handleFeadbackSubmit} className="border max-w-xl w-full p-20 shadow-xl rounded-md">
                    <h2 className="text-lg md:text-3xl font-bold mb-4">Enter Your FeadBack</h2>
                    <textarea placeholder="Enter Your Feadback" name="feadback" className="textarea w-full textarea-bordered text-sm md:text-lg textarea-lg max-w-lg" ></textarea>
                    <input type='submit' value='Submit' className="btn btn-outline my-5"></input>
                </form>
            </div>
        </>
    );
};

export default FeadBack;