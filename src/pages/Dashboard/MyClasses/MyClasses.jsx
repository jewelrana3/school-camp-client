

import { Helmet } from "react-helmet-async";
import SetPageTitle from "../../../components/SetPageTitle";
import usePayment from "../../../hooks/usePayment";



const MyClasses = () => {
  const [item] = usePayment();

  return (
    <>
       <Helmet>
        <title>Sports Easy - Dashboard - My Inroll Class</title>
      </Helmet>
      <SetPageTitle title='My Enroll Classes'></SetPageTitle> 
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {
          item.map(item => <div key={item._id} className="card card-side h-64 bg-base-100 shadow-xl">
            <figure className="w-1/2"><img src={item?.image} alt="Movie" /></figure>
            <div className="card-body w-1/2">
              <h2 className="card-title">{item.itemsName[0]}</h2>
              <p>Instructor : {item.instructor}</p>
              <div className="card-actions justify-end">
                <button onClick={() => Swal.fire('this button is not working right now!')} className="btn btn-primary">Continue Learning</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </>
  );
};

export default MyClasses;