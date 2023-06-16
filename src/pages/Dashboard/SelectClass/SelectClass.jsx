import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";


const SelectClass = () => {
    const [cart] = useCart();
    console.log(cart)
    const total = cart.reduce((sum,item)=> sum + item.amount,0)
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
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Food</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item,index) =>  <tr
                        key={item._id}
                        >
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <th>
                                <button onClick={()=>handleDelete(item)} className="btn btn-ghost text-white bg-red-400"><FaTrash></FaTrash></button>
                            </th>
                        </tr>)
                    }
                   
                </tbody>
                {/* foot */}
            </table>
        </div>
    </div>
);
    
};

export default SelectClass;