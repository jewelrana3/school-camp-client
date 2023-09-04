import React from 'react';

const Photo = () => {
    return (
        <div>
            <div>
                <h2 className='text-center mt-20 mb-16 font-bold text-4xl'><span className='text-green-400 font-thin'>Contact</span> Me</h2>
                <div id="" className="carousel-item relative w-full">
                    <img style={{height:'40rem'}} src='https://i.ibb.co/d7pxw92/vlad-hilitanu-e-W4ct-VJqc-IM-unsplash.jpg' className="w-full" />
                    <div className="absolute flex mx-auto ">
                        {/* <h2 className='text-xl flex  lg:text-5xl text-left  font-semibold'>Where Curiosity Thrives, Learning Flourishes - LearnPlay Haven</h2> */}

                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5">
                    <div className='photo lg:flex bg-green-700 p-6 px-28 text-white mb-80 bg-opacity-40'>
                        <div className='news'>
                            <h2 className='text-4xl font-bold'>Newsletter sign up</h2>
                            <p>Get latest news & update</p>
                        </div>
                        <div className='input-type lg:ml-6 flex'>
                            <input className='w-36' style={{width:'20rem',}} type="text" placeholder='Your Email' />
                            <button className='absolute' >Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Photo;