import { useEffect, useState } from "react";


const PopularClass = () => {
    const [popular, setPopular] = useState([])
   
    useEffect(() => {
        fetch('popularclass.json')
            .then(res => res.json())
            .then(data => {
                const itemsName = data.filter(item=> item.category === 'ball')
                setPopular(itemsName)
            })
    }, [])
    return (
        <div className="mt-32">
            <h2 className="text-3xl font-bold text-center mb-16">Popular Class</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {
                    popular.map(item => <div key={item.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {item.name}</h2>
                            <p>Instructor: {item.instructor}</p>
                           
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClass;