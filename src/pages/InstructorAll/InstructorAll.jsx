import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const InstructorAll = () => {

    const instructor = useLoaderData();
    console.log(instructor)
    return (
        <>
            <Helmet>
                <title>Sports Easy - Instructor</title>
            </Helmet>
            <Fade duration={3000}>
                <div className="pt-40 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            instructor?.map(item => <div style={{ width: '23rem' }} key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">

                                <figure><img src={item.image} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <h2 className="card-title"> {item.name}</h2>
                                    <p>{item.email}</p>
                                    <p>Teaching: {item.title}</p>
                                    <p>Student: {item.students}</p>
                                    <p>Number of class Token:{item.class}</p>

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