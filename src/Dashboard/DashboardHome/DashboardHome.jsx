import { useContext } from "react";
import useUser from "../../hooks/useUser";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const DashBoardHome = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUser();
  const currentUser = users.find((item) => item.email === user.email);

  return (
    <div className="my-20">
      <h3 className="text-sm text-center my-8 text-red-500">
        More Details Commign soon.........
      </h3>
      <div className="text-center mb-5">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-2 uppercase">
          {user?.displayName}
        </h3>
        <h3 className="text-md mt-2 lowercase">{user?.email}</h3>
      </div>
      <div className="text-center space-x-5">
        {currentUser?.role === "instructor" && (
          <>
            <NavLink to="/dashboard/addClass">
              <button className="btn btn-info btn-outline">Add A Class</button>
            </NavLink>
            <NavLink to="/dashboard/myClass">
              <button className="btn btn-primary btn-outline">My Class</button>
            </NavLink>
          </>
        )}
        {currentUser?.role === "student" && (
          <>
            <NavLink to="/dashboard/selectclass">
              <button className="btn btn-info btn-outline">
                My Selected Class
              </button>
            </NavLink>
            <NavLink to="/dashboard/elrollClass">
              <button className="btn btn-primary btn-outline">
                My Enrolled Classes
              </button>
            </NavLink>
          </>
        )}
        {currentUser?.role === "admin" && (
          <>
            <NavLink to="/dashboard/manageUser">
              <button className="btn btn-info btn-outline">Manage Users</button>
            </NavLink>
            <NavLink to="/dashboard/manageClass">
              <button className="btn btn-primary btn-outline">
                Manage Classes
              </button>
            </NavLink>
          </>
        )}
      </div>
 
    </div>
  );
};

export default DashBoardHome;