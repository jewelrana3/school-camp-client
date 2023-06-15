import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";


const Banner = () => {

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img style={{height:'600px'}} className=" w-full" src="https://i.ibb.co/c1sLRDr/ayelt-van-veen-Ff-Dkx-G-0-Z7w-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{height:'600px'}} className=" w-full" src="https://i.ibb.co/w4YtCpc/omar-ram-e-Eh-Oy-Et-BGMQ-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{height:'600px'}} className=" w-full" src="https://i.ibb.co/QbPH9fp/alliance-football-club-z-Lz8k5i-Q1-ZU-unsplash.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;