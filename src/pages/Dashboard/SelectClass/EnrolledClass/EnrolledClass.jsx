
import useCart from "../../../../hooks/useCart";
import { Elements } from "@stripe/react-stripe-js";
import CheakOut from "./CheakOut";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const EnrolledClass = () => {
    const [cart] = useCart();
    return (
        <div>

            <div>
                {
                    cart.map(item => <div key={item._id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img style={{ width: '300px', height:'100%' }} src={item.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-semibold">Inrolled class</h2>
                            <h2 className="card-title">{item.classesId}</h2>
                            <span >Instructor: {item.instructor}</span>
                            <span >Price $: {item.amount}</span>
                            <div style={{width:'450px'}} className="-ml-8">
                                <Elements stripe={stripePromise}>
                                    <CheakOut />
                                </Elements>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default EnrolledClass;