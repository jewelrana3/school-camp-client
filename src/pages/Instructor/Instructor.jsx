import { useEffect, useState } from "react";


const Instructor = () => {
    const [instructor,setInstructor] = useState([])
    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => {
               console.log(data)
                setInstructor(data)
            })
    }, [])
    return (
        <div className="mt-32 mb-16">
            <h2 className="text-3xl font-bold text-center mb-16">Popular Class</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {
                    instructor.map(item => <div key={item.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {item.name}</h2>
                            <p>Instructor: {item.students}</p>
                           
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;