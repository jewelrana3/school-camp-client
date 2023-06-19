import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const CheakOut = ({ price,cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [proccess, setProccess] = useState(false);
    const [transactionId,setTransactionId] = useState('')



    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {

                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setError(error.message)
        } else {
            setError('')
            // console.log('payment Method', paymentMethod)
        }
        setProccess(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                },
            },
        }
        )
        if (confirmError) {
            console.log(confirmError)
        }
        console.log('payment intent', paymentIntent)
        setProccess(false)
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: transactionId.id,
                price,
                quantity: cart.length,
                date: new Date(),
                cartItems: cart.map(item => item._id),
                menuItem: cart.map(item => item.menuItem),
                itemsName: cart.map(item => item.name),
                // status: 'service pending'
            }
            axiosSecure.post('/payment',payment)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    // d
                }
            })
        }
    }

    return (
        <>
            <form className="m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary  border mt-4 btn-sm ml-80" type="submit"
                    disabled={!stripe || !clientSecret || proccess}>
                    Pay
                </button>
            </form>
            {error && <p className="text-red-400 ml-8">{error}</p>}
            {/* {transactionId && <p className="text-green-600 ml-8">Transaction Id Compelete:{transactionId}</p>} */}
        </>
    );
};

export default CheakOut;