
import useClass from "../../../hooks/useClass";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import SetPageTitle from "../../../components/SetPageTitle";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
  const [classes] = useClass();
  const { user } = useContext(AuthContext);

  
  // TODO : pending class not showing
 
  return (
    <>
     <Helmet>
        <title>Sports - Dashboard - My Class</title>
      </Helmet>
    <SetPageTitle title='My Class'></SetPageTitle>
    <div className="my-20">
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="md:text-sm">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>status</th>
              <th>Total Enrolled</th>
              <th>Price</th>
              <th>Feadback</th>

            </tr>
          </thead>
          <tbody>
            {classes.map((item, idx) => (
              <tr key={item._id} className="hover md:text-md">
                <td>
                  <label>{idx + 1}</label>
                </td>
                <td>
                  <img
                    className="w-8 md:w-20 h-8 md:h-20 bg-cover bg-center rounded"
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td className={`${item.status === "approved"
                    ? "text-green-500"
                    : "text-red-600"
                  } text-lg`}>{item.status}
                </td>
                <td className="text-center">{item.enrolled}</td>
                <td className="text-right">${item.price}</td>
                <td>{item.status === 'denied' &&
                  <Link to={`/dashboard/feadback/${item._id}`}>
                    <button
                      type="text"
                      className="bg-sky-600 hover:bg-sky-800 text-white font-bold rounded"
                    >
                      feadback
                    </button>
                  </Link>}
                </td>
                {/* <td>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  >
                    update
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default MyClass;