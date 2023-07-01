
import useCart from "../../../../hooks/useCart";
import { Elements } from "@stripe/react-stripe-js";
import CheakOut from "./CheakOut";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigate } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const EnrolledClass = () => {
    const [cart] = useCart();
    
    const navigate = useNavigate();
    const items = useLoaderData();
    const total = cart.reduce((sum, item) => sum + item.amount, 0)
    const price = parseFloat(total.toFixed(2))
    console.log(total)
    const { image, classesId, instructor, amount } = items;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mt-12">
                <figure><img style={{ width: '300px', height: '100%' }} src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-semibold">Inrolled class</h2>
                    <h2 className="card-title">{classesId}</h2>
                    <span >Instructor: {instructor}</span>
                    <span >Price $: {amount}</span>
                    <div style={{ width: '450px' }} className="-ml-8">
                        <Elements stripe={stripePromise}>
                            <CheakOut price={price} cart={cart} image={image} instructor={instructor}/>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClass;