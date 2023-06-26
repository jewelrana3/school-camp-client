
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';



const image_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddClass = () => {

    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token }`;

    
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
                            console.log(data.data.insertedId);
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
        // <div className="w-full px-8">
        //     <form onSubmit={handleSubmit(onSubmit)}>

        //         <div className='flex gap-4 my-4'>
        //             <div className="form-control w-full ">
        //                 <label className="label">
        //                     <span className="label-text">Class Name</span>
        //                 </label>
        //                 <input type="text" {...register("className", { required: true, maxLength: 80 })} placeholder="class name" className="input input-bordered w-full " />
        //             </div>
        //             <div className="form-control w-full">
        //             <label className="label">
        //                 <span className="label-text">Image</span>
        //             </label>
        //             <input type="file" {...register("image", { required: true, maxLength: 80 })} className="file-input file-input-bordered w-full" />
        //         </div>
        //         </div>

        //         <div className='flex gap-4 my-4'>
        //             <div className="form-control w-full ">
        //                 <label className="label">
        //                     <span className="label-text">Instructor Name</span>
        //                 </label>
        //                 <input type="text" readOnly defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 80 })} placeholder=" name" className="input input-bordered w-full " />
        //             </div>
        //             <div className="form-control w-full ">
        //                 <label className="label">
        //                     <span className="label-text">Instructor Email</span>
        //                 </label>
        //                 <input type="text" readOnly defaultValue={user?.email} {...register("email", { required: true, maxLength: 80 })} placeholder="Email" className="input input-bordered w-full " />
        //             </div>
        //         </div>

        //         <div className='flex gap-4 my-4'>
        //             <div className="form-control w-full ">
        //                 <label className="label">
        //                     <span className="label-text">Available seats</span>
        //                 </label>
        //                 <input type="text" {...register("seats", { required: true, maxLength: 80 })} placeholder="available seats" className="input input-bordered w-full " />
        //             </div>
        //             <div className="form-control w-full ">
        //                 <label className="label">
        //                     <span className="label-text">Price</span>
        //                 </label>
        //                 <input type="text" {...register("price", { required: true, maxLength: 80 })} placeholder="Price" className="input input-bordered w-full " />
        //             </div>
        //         </div>


        //         <input className="btn btn-block btn-warning mt-4" type="submit" value="Add" />
        //     </form>
        // </div>
        <div className="my-10 md:my-20">


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
    );
};

export default AddClass;