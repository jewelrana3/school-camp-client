
import useInstructor from "../../hooks/useInstructor";


const Instructor = () => {
  const [instructor] = useInstructor();
    return (
        <div className="mt-32 mb-16">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Instructor Class</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {
                    instructor.slice(0,6).map(item => <div key={item.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {item.name}</h2>
                            <p className="text text-gray-700 font-semibold">Student: {item.students}</p>
                           
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;