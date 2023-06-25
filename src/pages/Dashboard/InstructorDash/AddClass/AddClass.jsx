
import { useForm } from 'react-hook-form';

import Swal from "sweetalert2";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(dataRes => {
                if (dataRes.success) {
                    const imgUrl = dataRes.data.display_url;
                    const { name, price, category, recipe } = data;
                    const navItem = { name, price: parseFloat(price), category, recipe, image: imgUrl }
                    console.log(navItem);

                    axiosSecure.post('/menu', navItem)
                        .then(data => {
                            console.log('api res right work', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your Item added succesFull',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    }


    return (
        <div className="w-full px-8">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='flex gap-4 my-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true, maxLength: 80 })} placeholder="class name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true, maxLength: 80 })} className="file-input file-input-bordered w-full" />
                </div>
                </div>

                <div className='flex gap-4 my-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true, maxLength: 80 })} placeholder=" name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" {...register("email", { required: true, maxLength: 80 })} placeholder="Email" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className='flex gap-4 my-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="text" {...register("available seats", { required: true, maxLength: 80 })} placeholder="available seats" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" {...register("price", { required: true, maxLength: 80 })} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>

              
                <input className="btn btn-block mt-4" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddClass;