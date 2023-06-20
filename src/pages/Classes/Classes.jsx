import useClasses from "../../hooks/useClasses";
import ClassItem from "./ClassItem";


const Classes = () => {
    const [classes] = useClasses();
    
    return (
       
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16  mb-28 ">
                {
                classes.slice(0,9).map(item => <ClassItem
                key={item._id}
                item={item}
                ></ClassItem>)
                }
            </div>
       
    );
};

export default Classes;