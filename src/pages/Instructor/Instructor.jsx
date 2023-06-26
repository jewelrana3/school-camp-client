
import useInstructor from "../../hooks/useInstructor";


const Instructor = () => {
    const [instructor] = useInstructor();
    console.log(instructor)
    return (
        <div className="mt-16 mb-16">
            <div className="text-center mb-16 px-3 pr-11">
                <h2 className="text-3xl font-bold  text-slate-900"><span className="text-emerald-500">Instructor</span> Class</h2>
                <p>The Intructor Classes Men of Best Side Course Instructor</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    instructor.slice(0,6).map(item => <div style={{ width: '21rem' }}  key={item.id} className="card card-compact w-96 bg-base-100 shadow-xl">
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