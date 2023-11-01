import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import useInstructor from "../../hooks/useInstructor";
import { useEffect, useState } from "react";


const InstructorAll = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch('https://school-camp-server-rouge.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {
                ('dddd',data)
               setPopular(data)
            })
    }, [])
    return (
        <>
            <Helmet>
                <title>Sports Easy - Instructor</title>
            </Helmet>
            <Fade duration={3000}>
                <div className="pt-40 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            popular?.map(item => <div style={{ width: '23rem' }} key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">

                                <figure><img src={item.image} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <h2 className="card-title"> {item.name}</h2>
                                    <p>{item.email}</p>
                                   

                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </Fade>

        </>
    );
};

export default InstructorAll;