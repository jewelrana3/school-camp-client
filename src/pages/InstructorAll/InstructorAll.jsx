import useInstructor from "../../hooks/useInstructor";


const InstructorAll = () => {
    const [instructor] = useInstructor([]);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-40 mb-28">
                {
                    instructor.map(item => <div key={item.id} className="card card-compact w-96 bg-base-100 shadow-xl">
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
    );
};

export default InstructorAll;