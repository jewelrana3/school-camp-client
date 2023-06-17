import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const ClassItem = ({ item }) => {
    const { image, name, instructor, students, amount,available_seat} = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const [,refetch] = useCart();
    const addToCart=item=>{
       
        console.log(item)
        if(user && user?.email){
            const navItem = {classesId:name,instructor,image,amount,email:user?.email}
            fetch('http://localhost:4000/cart',{
                method:'POST',
                headers:
                    {
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(navItem)
                
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your has been add succesfull',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }else{
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login')
                }
              })
        }
       
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl py-6">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>Instructor: {instructor}</p>
                <p>available_seat: {available_seat}</p>
                <p>Students: {students}</p>
                <p>fees:$ {amount}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => addToCart(item)} className="btn btn-outline btn-accent">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassItem;