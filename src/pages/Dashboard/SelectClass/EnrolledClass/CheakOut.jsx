import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheakOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error);
            setError(error.message)
        }
        else {
            setError('')
            console.log('m',paymentMethod)
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
                    disabled={!stripe}>
                    Pay
                </button>
            </form>
            {error && <p className="text-red-400 ml-8">{error}</p> }
        </>
    );
};

export default CheakOut;