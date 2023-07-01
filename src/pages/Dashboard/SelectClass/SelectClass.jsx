import { Link, } from "react-router-dom";
import useCart from "../../../hooks/useCart";
// import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import SetPageTitle from "../../../components/SetPageTitle";
import { Helmet } from "react-helmet-async";


const SelectClass = () => {
    const [cart, refetch] = useCart();
    console.log(cart)

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/cart/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className="w-full">
            <Helmet>
                <title>Sports Easy - Dashboard - Select Class</title>
            </Helmet>
            <SetPageTitle title='My Selected Page'></SetPageTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {
                    cart.map(item => <div key={item._id} className="overflow-x-auto w-full py-4">
                        <div className="card w-96 bg-base-100 shadow-xl ml-4">
                            <figure><img src={item.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>Instructor: {item.instructor}</p>
                                <p>fees:${item.amount}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleDelete(item)} className="btn btn-error">delete</button>
                                    <Link to={`/dashboard/inrollclass/${item.classesId}`}> <button className="btn btn-primary">Enroll</button></Link>

                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );

};

export default SelectClass;