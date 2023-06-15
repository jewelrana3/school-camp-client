import { useEffect, useState } from 'react';

const useClasses = () => {
    const [classes,setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/popular')
            .then(res => res.json())
            .then(data => {
               console.log(data)
                setClasses(data)
            })
    }, [])
    return [classes]
};

export default useClasses;