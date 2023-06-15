import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <img className="ml-40 mt-8" style={{height:'550px'}} src="https://i.ibb.co/qp8TfJ1/1.webp" alt="" />
            <Link to='/'><button style={{marginLeft:'500px'}} className="text-2xl mt-2 font-normal btn btn-primary">GO TO HOME PAGE</button></Link>
        </div>
    );
};

export default ErrorPage;