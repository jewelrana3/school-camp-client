
import { Fade } from "react-awesome-reveal";
import TitleHeader from "../../components/TitleHeader";
import useInstructor from "../../hooks/useInstructor";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";


const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Instructor = () => {
 
   const [instructor,setInstructor] = useState([])

   useEffect(()=>{
    fetch('http://localhost:4000/instructor')
    .then(res => res.json())
    .then(data =>{
      
      setInstructor(data)
    })
   },[])
    
    return (
        <div className="mb-12">
            <div className="text-center mb-16 px-3 pr-11 pt-32">
               <TitleHeader title='Instructor ' sub='Class' des='The Intructor Classes Men of Best Side Course Instructor'></TitleHeader>
            
            </div>

           <Fade keyframes={customAnimation}>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto gap-16">
                {
                    instructor?.slice(0,6).map(item => <div key={item.id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {item.name}</h2>
                            <p className="text text-gray-700 font-semibold"> {item.email}</p>

                        </div>
                    </div>)
                }
            </div>
           </Fade>
        </div>
    );
};

export default Instructor;