import { Helmet } from "react-helmet-async";
import Image from "../../Image/Image";
import Instructor from "../../Instructor/Instructor";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import Blog from "../../Blog/Blog";
import Team from "../../Team/Team";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports Easy - Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
            <Blog></Blog>
            <Image></Image>
            <About></About>
            <Team></Team>
        </div>
    )
};

export default Home;