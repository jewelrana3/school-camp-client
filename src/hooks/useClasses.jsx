import { useEffect, useState } from 'react';

const useClasses = () => {
    const [classes,setClasses] = useState([])
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-jewelrana3.vercel.app/popular')
            .then(res => res.json())
            .then(data => {
               console.log(data)
                setClasses(data)
            })
    }, [])
    return [classes]
};

export default useClasses;