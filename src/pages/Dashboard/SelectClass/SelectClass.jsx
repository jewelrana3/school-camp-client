import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
// import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const SelectClass = () => {
    const [cart,refetch] = useCart();
    console.log(cart)
    const total = cart.reduce((sum, item) => sum + item.amount, 0)

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
               fetch(`http://localhost:4000/cart/${item._id}`,{
                method:'DELETE'
               })
               .then(res=>res.json())
               .then(data =>{
               if(data.deletedCount > 0){
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
            {/* <Helmet>
            <title>Bistro Boss | My Cart</title>
        </Helmet> */}
            <div className="flex gap-64 mb-4">
                <h3 className="text-xl">cart items:{cart.length}</h3>
                <h3 className="text-xl">Total:{total}</h3>
                <Link to='/dashboard/payment'><button className="btn btn-error">PAY</button></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                {
                    cart.map(item => <div key={item._id} className="overflow-x-auto w-full py-4">
                        <div className="card w-96 bg-base-100 shadow-xl ml-4">
                            <figure><img src={item.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.classesId}</h2>
                                <p>Instructor: {item.instructor}</p>
                                <p>fees:${item.amount}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleDelete(item)} className="btn btn-error">delete</button>
                                    <button className="btn btn-primary">Enroll</button>
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