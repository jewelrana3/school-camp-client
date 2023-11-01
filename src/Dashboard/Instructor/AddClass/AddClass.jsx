
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import SetPageTitle from '../../../components/SetPageTitle';
import { Helmet } from 'react-helmet-async';



const image_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddClass = () => {

    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;


    const onSubmit = (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "you can update and delete after confirm",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm!",
        }).then((result) => {
            if (result.isConfirmed) {
                const formData = new FormData();
                formData.append("image", data.image[0]);

                fetch(img_hosting_url, {
                    method: "POST",
                    body: formData,
                })
                    .then((res) => res.json())
                    .then((imageResponse) => {
                        (imageResponse)
                        const imageURL = imageResponse.data.display_url;
                        const classData = {

                            name: data.name,
                            instructor: user.displayName,
                            email: user.email,

                            seats: parseInt(data.seats),
                            price: parseFloat(data.price),
                            status: "pending",
                            image: imageURL,
                            enrolled: 0,
                        };
                        axiosSecure.post("/addClass", classData).then((data) => {
                            (data.data.insertedId);
                            if (data) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Added Successfully",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                                navigate('/dashboard/ins-myClass')
                            }
                        });
                    });
            }
        });
    };

    return (

        <>
            <Helmet>
                <title>Sports - Dashboard - Add Class</title>
            </Helmet>
            <div className="my-10 md:my-20">

                <SetPageTitle title='Add Class'></SetPageTitle>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-lg mx-auto p-6 space-y-6 border-2  rounded bg-slate-50 shadow-md"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="className"
                        >
                            Class Name:
                        </label>
                        <input
                            {...register("name")}
                            type="text"

                            required
                            placeholder="Enter Class Name"
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="classImage"
                        >
                            Class Image:
                        </label>
                        <input
                            {...register("image")}
                            type="file"
                            required
                            className="w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="instructorName"
                        >
                            Instructor Name:
                        </label>
                        <input
                            {...register("instructor")}
                            type="text"
                            readOnly
                            defaultValue={user.displayName}
                            className="w-full px-3 py-2 border rounded bg-gray-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="instructorEmail"
                        >
                            Instructor Email:
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            readOnly
                            defaultValue={user.email}
                            className="w-full px-3 py-2 border rounded bg-gray-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="availableSeats"
                        >
                            Available Seats:
                        </label>
                        <input
                            {...register("seats")}
                            type="number"
                            placeholder="Available seats"
                            required
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                            Price:
                        </label>
                        <input
                            {...register("price")}
                            type="number"
                            placeholder="Price"
                            required
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 btn btn-block text-white font-bold py-2 px-4 rounded"
                    >
                        Add
                    </button>
                </form>

            </div>

        </>
    );
};

export default AddClass;