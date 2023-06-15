import { useEffect, useState } from "react";


const useInstructor = () => {
    const [instructor,setInstructor] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/instructor')
            .then(res => res.json())
            .then(data => {
               console.log(data)
                setInstructor(data)
            })
    }, [])
    return [instructor]
};

export default useInstructor;