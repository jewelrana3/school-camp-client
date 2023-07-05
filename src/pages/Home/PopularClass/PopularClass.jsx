import { useEffect, useState } from "react";

import TitleHeader from "../../../components/TitleHeader";
import { Fade } from "react-awesome-reveal";


const PopularClass = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-jewelrana3.vercel.app/popular')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const itemsName = data.filter(item => item.category === 'ball')
                setPopular(itemsName)
            })
    }, [])
    return (
        <div className="mt-32 bg-slate-200 px-2  pr-11 py-4 ">
            <div className="text-center  mb-16">
                <TitleHeader title='Popular ' sub='Class' des='The truth is that it certainly can be, assuming you are using the right application to help you get there!'></TitleHeader>
            </div>

            <Fade  duration={3000}>
                <div className="grid grid-cols-1 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {
                        popular.map(item => <div key={item._id} style={{ width: '22rem' }} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={item.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"> {item.name}</h2>
                                <p>Instructor: {item.instructor}</p>

                            </div>
                        </div>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default PopularClass;