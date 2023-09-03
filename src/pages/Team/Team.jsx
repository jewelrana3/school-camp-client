import React from 'react';

const Team = () => {
    return (
        <>
            <div className='text-center'>
                <h2 calassName="text-4xl font-bold ">OUR TEAM</h2>
                <h3 className='text-2xl '>MEET OUR TEAM MATES</h3>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ml-20 mb-8 px-10'>
                <div className='border border-black h-64 mx-auto px-12 py-8 team'>
                    <img className='w-24 p- h-24 rounded-full' src="https://i.ibb.co/6ZChdq2/t2.jpg" alt="" />
                    <p className='mt-4'>Ronald Weisy</p>
                    <p className='text-slate-300'>Goft Trainer</p>
                </div>
               
                <div className='border border-black h-64 mx-auto px-12 py-8 team'>
                    <img className='w-24 p- h-24 rounded-full' src="https://i.ibb.co/Y3t3rLS/t1.jpg" alt="" />
                    <p className='mt-4'>Ronald Weisy</p>
                    <p className='text-slate-300'>Goft Trainer</p>
                </div>
               
                <div className='border border-black h-64 mx-auto px-12 py-8 team'>
                    <img className='w-24 p- h-24 rounded-full' src="https://i.ibb.co/VMvm8Rr/t4.jpg" alt="" />
                    <p className='mt-4'>Ronald Weisy</p>
                    <p className='text-slate-300'>Goft Trainer</p>
                </div>
               
                <div className='border border-black h-64 mx-auto px-12 py-8 team'>
                    <img className='w-24 p- h-24 rounded-full' src="https://i.ibb.co/ZBsFPjc/t3.jpg" alt="" />
                    <p className='mt-4'>Ronald Weisy</p>
                    <p className='text-slate-300'>Goft Trainer</p>
                </div>
               
            </div>
        </>
    );
};

export default Team;