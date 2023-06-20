import Image from "../../Image/Image";
import Instructor from "../../Instructor/Instructor";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
            <Image></Image>
        </div>
    );
};

export default Home;