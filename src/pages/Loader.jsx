import React from 'react';
import { Discuss } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex items-center justify-center mt-44'>
            <Discuss
                visible={true}
                height="80"
                width="80"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color="#fff"
                backgroundColor="#F4442E"
            />
        </div>
    );
};

export default Loader;