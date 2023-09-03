import React from 'react';

const Blog = () => {
    return (
        <>
        <h2 className='text-center text-4xl'><span className='text-emerald-800'>Blog</span> Page</h2>
        <p className='text-center mt-3 text-slate-500'>A typical blog combines text, digital images, and links to other blogs, web pages, and other media related to its topic.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-16'>
                <div className='blog-tag'>
                    <img src="https://i.ibb.co/j3wvz23/jeffrey-f-lin-SNLk23d403-A-unsplash.jpg" alt="" />
                    <h1 className='font-thin mt-4'>11 Feb 2015</h1>
                    <h2 className='text-sky-600 font-bold'>TEE SHOT ZONE</h2>
                    <p className=' mt-10'>Maecenas dapibus quis nisl vitae faucibus. Curabitur ac iaculis elit. Aenean fringilla nec justo id vulputate. Maecenas ut imperdiet felis. Nam sodales, lorem sit.</p>
                    <hr className='mt-4 w-24 font-semibold border-b-2 border-indigo-500' />
                </div>
                <div className='blog-tag'>
                    <img src="https://i.ibb.co/ZhVTscT/istockphoto-993744768-170667a.webp" alt="" />
                    <h1 className='font-thin mt-4'>21 April 2015</h1>
                    <h2 className='text-sky-600 font-bold'>RUN FOR SOCIAL AWARENESS</h2>
                    <p className=' mt-10'>Maecenas dapibus quis nisl vitae faucibus. Curabitur ac iaculis elit. Aenean fringilla nec justo id vulputate. Maecenas ut imperdiet felis. Nam sodales, lorem sit.</p>
                    <hr className='mt-4 w-24 font-semibold border-b-2 border-black' />
                </div>
                <div className='blog-tag'>
                    <img src="https://i.ibb.co/j3wvz23/jeffrey-f-lin-SNLk23d403-A-unsplash.jpg" alt="" />
                    <h1 className='font-thin mt-4'>11 Feb 2015</h1>
                    <h2 className='text-sky-600 font-bold'>TEE SHOT ZONE</h2>
                    <p className=' mt-10'>Maecenas dapibus quis nisl vitae faucibus. Curabitur ac iaculis elit. Aenean fringilla nec justo id vulputate. Maecenas ut imperdiet felis. Nam sodales, lorem sit.</p>
                    <hr className='mt-4 w-24 font-semibold border-b-2 border-green-600' />
                </div>
                <div className='blog-tag'>
                    <img src="https://i.ibb.co/R4Tx8Bj/stefan-lehner-7-Tw9w-Ln-L74w-unsplash.jpg" alt="" />
                    <h1 className='font-thin mt-4'>19 Feb 2023</h1>
                    <h2 className='text-sky-600 font-bold'>TEE SHOT ZONE</h2>
                    <p className=' mt-10'>Maecenas dapibus quis nisl vitae faucibus. Curabitur ac iaculis elit. Aenean fringilla nec justo id vulputate. Maecenas ut imperdiet felis. Nam sodales, lorem sit.</p>
                    <hr className='mt-4 w-24 font-semibold border-b-2 border-fuchsia-800' />
                </div>
                <div className='blog-tag'>
                    <img className='h-64' src="https://i.ibb.co/pKyW1cw/istockphoto-465383082-170667a.webp" alt="" />
                    <h1 className='font-thin mt-4'>11 Mar 2022</h1>
                    <h2 className='text-sky-600 font-bold'>SWIM LESSON</h2>
                    <p className=' mt-10'>Maecenas dapibus quis nisl vitae faucibus. Curabitur ac iaculis elit. Aenean fringilla nec justo id vulputate. Maecenas ut imperdiet felis. Nam sodales, lorem sit.</p>
                    <hr className='mt-4 w-24 font-semibold border-b-2 border-red-500' />
                </div>
                <div className='blog-tag'>
                    <img className='' src="https://i.ibb.co/Q9dgZzt/melissa-mcgovern-Ngq-B1-EFKXMw-unsplash.jpg" alt="" />
                    <h1 className='font-thin mt-4'>11 Feb 2015</h1>
                    <h2 className='text-sky-600 font-bold'>TEE SHOT ZONE</h2>
                    <p className=' mt-10'>Maecenas dapibus quis nisl vitae faucibus. Curabitur ac iaculis elit. Aenean fringilla nec justo id vulputate. Maecenas ut imperdiet felis. Nam sodales, lorem sit.</p>
                    <hr className='mt-4 w-24 font-semibold border-b-2 border-sky-800' />
                </div>
            </div>

        </>
    );
};

export default Blog;