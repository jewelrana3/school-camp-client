import { useEffect, useState } from "react";

import TitleHeader from "../../../components/TitleHeader";
import { Fade } from "react-awesome-reveal";


const PopularClass = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-jewelrana3.vercel.app/popular')
            .then(res => res.json())
            .then(data => {
               
                const itemsName = data.filter(item => item.category === 'ball')
                setPopular(itemsName)
            })
    }, [])
    return (
        <div className="mt-32 bg-slate-200  py-4">
            <div className="text-center mb-16 ">
                <TitleHeader title='Popular ' sub='Class' des='The truth is that it certainly can be, assuming you are using the right application to help you get there!'></TitleHeader>
            </div>

            <Fade  duration={3000}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {
                        popular.map(item => <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={item.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"> {item.name}</h2>
                               
                                <p>Price: {item.amount}</p>
                                <p>Total Inroll: {item.students}</p>
                                <p>available_seat: {item.available_seat}</p>
                                <p className="text-semibold text-lg">Instructor: {item.instructor}</p>
                            </div>
                        </div>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default PopularClass;