import useClasses from "../../hooks/useClasses";


const Classes = () => {
    const [classes] = useClasses();
    // const {image,name,instructor,email,amount} = classes
    return (
       
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-40 mb-28 ">
                {
                    classes.slice(0, 9).map(item => <div key={item.id} className="card w-96 bg-base-100 shadow-xl py-6">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold">{item.name}</h2>
                            <p>Instructor: {item.instructor}</p>
                            <p>available_seat: {item.available_seat}</p>
                            <p>Students: {item.students}</p>
                            <p>fees:$ {item.amount}</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-accent">Select</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
       
    );
};

export default Classes;