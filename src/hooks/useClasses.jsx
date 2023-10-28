import { useEffect, useState } from 'react';

const useClasses = () => {
    const [classes,setClasses] = useState([])
    useEffect(() => {
        fetch('https://school-camp-server-rouge.vercel.app/popular')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])
    return [classes]
};

export default useClasses;