import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Dashboard from "../../layout/Dashboard";
import { Fade } from "react-awesome-reveal";



const ClassItem = ({ item }) => {
    const { image, name, instructor, students, amount, available_seat, _id } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const [, refetch] = useCart();
    const [hide, setHide] = useState(false)


    useEffect((() => {
        if (item?.available_seat === 0) {
            setHide(true)
        } Dashboard
    }), [])



    const addToCart = item => {

        console.log(item)
        if (user && user?.email) {
            const navItem = { classesId: _id, name, instructor, image, amount, email: user?.email }
            fetch(`https://b7a12-summer-camp-server-side-jewelrana3.vercel.app/carts`, {
                method: 'POST',
                headers:
                {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(navItem)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        navigate('/dashboard/selectclass')
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            if (data.message) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: "Already Select this course. check your dashboard!",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!',
                customClass: {
                    confirmButton: 'btn btn-red',
                    cancelButton:'btn btn-blue' // Add a custom class for the Confirm button
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }

    }
    return (
        <>
            <Helmet>
                <title>Sports Easy - Classes</title>
            </Helmet>
            <Fade duration={4000}>
                <div style={{ width: '21rem' }} className="card w-96 bg-base-100 shadow-xl ">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className={`card-body ${available_seat === 0 ? 'bg-red-500' : ''}`}>
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <p>Instructor: {instructor}</p>
                        <p>available_seat: {available_seat}</p>
                        <p>Total Inroll: {students}</p>
                        <p>fees:$ {amount}</p>
                        <div className="card-actions justify-end">
                            <button disabled={hide} onClick={() => addToCart(item)} className="btn btn-outline btn-accent">Select</button>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default ClassItem;