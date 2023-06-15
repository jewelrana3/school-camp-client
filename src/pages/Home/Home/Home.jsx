import Instructor from "../../Instructor/Instructor";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;