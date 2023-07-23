import { useEffect, useState } from "react";


const usePayment = () => {
    const [payment,setPayment] = useState([])

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-jewelrana3.vercel.app/payment')
            .then(res => res.json())
            .then(data => {
                setPayment(data)
            })
    }, [])
   return [payment]
};

export default usePayment;