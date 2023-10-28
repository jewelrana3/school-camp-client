import { useEffect, useState } from "react";


const usePayment = () => {
    const [payment,setPayment] = useState([])

    useEffect(() => {
        fetch('https://school-camp-server-rouge.vercel.app/payment')
            .then(res => res.json())
            .then(data => {
                setPayment(data)
            })
    }, [])
   return [payment]
};

export default usePayment;