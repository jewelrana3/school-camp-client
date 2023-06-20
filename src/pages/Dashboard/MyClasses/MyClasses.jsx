
import usePayment from "../../../hooks/usePayment";


const MyClasses = () => {
  const [item] = usePayment();
  // console.log(item)
  // const [classes] = useClasses();
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {
          item.map(item =>
            <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img src={item.image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{item.itemsName[0]}</h2>
                <p>Instructor :{item.instructor}</p>
                <p>Price: ${item.price}</p>
                <p>Enroll Date :{item.date}</p>
              </div>
            </div>)
        }

      </div>
    </div>
  );
};

export default MyClasses;