import React from 'react';

const About = () => {
    return (
        <div className='pt-4 pb-8 px-1'>
            <h2 className='text-4xl font-thin text-center'>About <span className='text-sky-400'>Me</span></h2>
            <div className='about-image mt-12 gap-7 grid grid-cols-1 lg:grid-cols-2 mb-12'>
                <div className='about-image'>
                    <h2 className='text-4xl min-w-max:text-center'>Helping people get active in the outdoors</h2>
                    <p className='mt-5 text-justify'>As a National Outdoor Centre, Plas y Brenin develops the people that develop the outdoor sector – from instructors to centre managers to expedition leaders to NGB officers to policymakers. This includes developing inspiring coaches, instructors and leaders in adventure sport, be they volunteers or working professionally in the sector, to better support people, from all backgrounds, to get active in the outdoors.
                        By hosting conferences, symposiums and meetings, we bring together practitioners from across the UK (and beyond) to share learning, transfer good practice and raise standards. This inspirational venue, with a world-class reputation, is also committed to helping individuals nurture their skills and confidence for independent adventures.</p>
                </div>
                <img className='w-full ' src="https://i.ibb.co/C08gdRG/about-6.jpg" alt="" />
            </div>

            <hr className='border border-blue-500'/>
            <div className='about-image mt-12 gap-6 lg:flex'>
                <img className='w-full' src="https://i.ibb.co/2S2vWFj/about-8.jpg" alt="" />
                <div className='mt-28'>
                    <h2 className='text-4xl min-w-max:text-center'>Learning Outcomes</h2>
                    <p className='mt-5 text-justify'>By participating a in trip to Essex Outdoors you will be contributing to the development and well-being of your group.Although young people often appear outwardly confident, constantly taking and publishing photos of themselves, this confidence is often missing from their academic work.</p>
                </div>
            </div>
        </div>


    );
};

export default About;