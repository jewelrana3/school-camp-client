import { useEffect, useState } from "react";


const usePayment = () => {
    const [payment,setPayment] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/payment')
            .then(res => res.json())
            .then(data => {
                setPayment(data)
            })
    }, [])
   return [payment]
};

export default usePayment;