import React from 'react';

const SmallSpinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="h-8 w-8 border-4 border-dashed rounded-full border-cyan-300 animate-spin"></div>
        </div>
    );
};

export default SmallSpinner;